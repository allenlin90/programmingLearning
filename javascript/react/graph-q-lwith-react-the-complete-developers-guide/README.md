- [1. On To GraphQL](#1-on-to-graphql)
  - [1.1. Registering GraphQL with Express](#11-registering-graphql-with-express)
  - [1.2. GraphQL Schema](#12-graphql-schema)
  - [1.3. Writing a GraphQL Schema](#13-writing-a-graphql-schema)
  - [1.4. Root Queries](#14-root-queries)
  - [1.5. Resolving with data](#15-resolving-with-data)
  - [1.6. The GraphiQL tool](#16-the-graphiql-tool)
  - [1.7. A Realistic Data Source](#17-a-realistic-data-source)
  - [1.8. Async Resolve Functions](#18-async-resolve-functions)
  - [1.9. Nodemon Hookup](#19-nodemon-hookup)
  - [1.10. Company definitions](#110-company-definitions)
  - [1.11. Nested Queries](#111-nested-queries)
  - [1.12. More on Nested Queries](#112-more-on-nested-queries)
  - [1.13. A Quick Breather](#113-a-quick-breather)
  - [1.14. Multiple RootQuery Entry Point](#114-multiple-rootquery-entry-point)
  - [1.15. Bidirectional Relation](#115-bidirectional-relation)
  - [1.16. Resolving Circular References](#116-resolving-circular-references)
  - [1.17. Query Fragments](#117-query-fragments)
  - [1.18. Introduction to Mutation](#118-introduction-to-mutation)
  - [1.19. NonNull Fields and Mutations](#119-nonnull-fields-and-mutations)
  - [1.20. Do It Yourself - Delete Mutation](#120-do-it-yourself---delete-mutation)
  - [1.21. Do It Yourself - Edit Mutation](#121-do-it-yourself---edit-mutation)
- [2. The GraphQL Ecosystem](#2-the-graphql-ecosystem)
  - [2.1. GraphQL Clients - Apollo vs Relay](#21-graphql-clients---apollo-vs-relay)
  - [2.2. Sidenote - Apollo Server vs GraphQL Server](#22-sidenote---apollo-server-vs-graphql-server)
- [3. Clientside GraphQL](#3-clientside-graphql)
  - [3.1. The Next App](#31-the-next-app)
  - [3.2. Starter Pack Walkthrough](#32-starter-pack-walkthrough)
  - [3.3. Working Through the Schema](#33-working-through-the-schema)
  - [3.4. Apollo client setup](#34-apollo-client-setup)
  - [3.5. React Component Design](#35-react-component-design)
  - [3.6. GQL queries in React](#36-gql-queries-in-react)
  - [3.7. Bonding Queries with Components](#37-bonding-queries-with-components)
- [4. Gotachs with Queries in React](#4-gotachs-with-queries-in-react)
  - [4.1. Handling Pending Queries](#41-handling-pending-queries)
  - [4.2. Fixing Key Warnings](#42-fixing-key-warnings)
  - [4.3. Architecture Review](#43-architecture-review)
  - [4.4. Adding React Router](#44-adding-react-router)
  - [4.5. Creating a Song](#45-creating-a-song)
- [5. Frontend Mutations](#5-frontend-mutations)
  - [5.1. Mutations in React](#51-mutations-in-react)
  - [5.2. Query Params](#52-query-params)
  - [5.3. Defining Query Variables in React](#53-defining-query-variables-in-react)
  - [5.4. Navigating on Successful Mutation](#54-navigating-on-successful-mutation)
  - [5.5. Troubleshooting List Fetching](#55-troubleshooting-list-fetching)
  - [5.6. Refetching Queries](#56-refetching-queries)
  - [5.7. Deletion by Mutation](#57-deletion-by-mutation)
  - [5.8. Associating Mutations with a Component](#58-associating-mutations-with-a-component)
  - [5.9. Invoking Delete Mutations](#59-invoking-delete-mutations)

# 1. On To GraphQL
## 1.1. Registering GraphQL with Express
```js
const express = require('express');
const { graphqlHTTP } = require('express-graphql');

const app = express();

app.use(
  '/graphql',
  graphqlHTTP({
    graphiql: true,
  })
);

const PORT = 3000;
app.listen(PORT, (error) => {
  if (error) return console.log(error);
  console.log(`Listening on port ${PORT}`);
});
```

## 1.2. GraphQL Schema
## 1.3. Writing a GraphQL Schema
1. To use GraphQL, we need to define schema to build the relationship for different objects and entities.
    ```js
    // /schema/schema.js
    const graphql = require('graphql');
    const { GraphQLObjectType, GraphQLString, GraphQLInt } = graphql;

    const UserType = new GraphQLObjectType({
      name: 'User',
      fields: {
        id: { type: GraphQLString },
        firstName: { type: GraphQLString },
        age: { type: GraphQLInt },
      },
    });
    ```

## 1.4. Root Queries
1. Root query is the entry point for GraphQL to start with the graph data structure.
2. We default the object we are going to query and set a `resolve` function which go to database to do the actual search.

## 1.5. Resolving with data
1. In this case, we `resolve` function gets an `id` argument that we can use it to search for the `user` entity.
2. After declaring the schema, we can use `GraphQLSchema` and create a new instance and export to use in the main `index.js`.
    ```js
    // schema/schema.js
    const graphql = require('graphql');
    const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLSchema } = graphql;

    const users = [
      {
        id: '23',
        firstName: 'Bill',
        age: 20,
      },
      {
        id: '47',
        firstName: 'Samantha',
        age: 21,
      },
    ];

    const UserType = new GraphQLObjectType({
      name: 'User',
      fields: {
        id: { type: GraphQLString },
        firstName: { type: GraphQLString },
        age: { type: GraphQLInt },
      },
    });

    const RootQuery = new GraphQLObjectType({
      name: 'RootQueryType',
      fields: {
        user: {
          type: UserType,
          args: { id: { type: GraphQLString } },
          resolve(parentValue, args) {
            // return _.find(users, {id: args.id});
            return users.find((user) => user.id === args.id);
          },
        },
      },
    });

    module.exports = new GraphQLSchema({
      query: RootQuery,
    });
    ```
3. We import the `GraphQLSchema` instance and pass it as a middleware.
    ```js
    // index.js
    const express = require('express');
    const { graphqlHTTP } = require('express-graphql');
    const schema = require('./schema/schema');

    const app = express();

    app.use(
      '/graphql',
      graphqlHTTP({
        schema,
        graphiql: true,
      })
    );

    const PORT = 3000;
    app.listen(PORT, (error) => {
      if (error) return console.log(error);
      console.log(`Listening on port ${PORT}`);
    });
    ```
4. After initiating the server, we can visit `http://localhost:3000/graphql` in this case. 

## 1.6. The GraphiQL tool
1. In the graphical UI, we can give the query to search from the dataset. 
2. The query is defined from the `rootQuery` defined in the previous section.
3. The argument is given in the parenthesis as using functions. 
    ```js
    // query in GraphiQL
    {
      user(id: "23") {
        id,
        firstName,
        age
      }
    }
    ```

## 1.7. A Realistic Data Source
1. GraphQL Server can stand as a proxy server that extract data from the other service, external database, or 3rd party API. 
2. In this case, we use `npm i json-server` which uses `json` file to store data and create a RESTful API.
3. Besides, we use a helper script `{ scripts: { "json:server": "json-server --watch db.json" } }` in `package.json`.
4. Note that the default port of `json-server` is `3000`.
    ```json
    // db.json
    {
      "users": [
        { "id": "23", "firstName": "Bill", "age": 20 },
        { "id": "40", "firstName": "Alex", "age": 40 }
      ]
    }
    ```

## 1.8. Async Resolve Functions 
1. To fetch data from external service, we can use `axios` package. 
2. `resolve` function can take either a returned value or a "Promise" and handle it to return a value. 
3. Therefore, we can use `axios` to take the endpoint and return the `data` property of an `axios` response.

## 1.9. Nodemon Hookup
1. This simple use `nodemon` and add `dev: nodemon index.js` to hot reload the server when something changes.

## 1.10. Company definitions
1. We update the dataset to use in json server
    ```json
    // db.json
    {
      "users": [
        { "id": "23", "firstName": "Bill", "age": 20, "companyId": "1" },
        { "id": "40", "firstName": "Alex", "age": 40, "companyId": "2" },
        { "id": "41", "firstName": "Nick", "age": 40, "companyId": "2" }
      ],
      "companies": [
        { "id": "1", "name": "Apple", "description": "iphone" },
        { "id": "2", "name": "Google", "description": "search" }
      ]
    }
    ```
2. To query the users who work at a certain company in RESTful API manner, we can search as `/companies/1/users` to get all users who work at company `1`.

## 1.11. Nested Queries
## 1.12. More on Nested Queries
1. We add a new type `Company` in schema.
2. By connecting 2 schemas, `User` and `Company`, we can give a `resolve` function to handle the query.
3. If we print out the value of `parentValue`, we can notice that it is the `User` object that carries `companyId` that we set up in the JSON server. 
    ```js
    // schema/schema.js
    const axios = require('axios');
    const graphql = require('graphql');
    const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLSchema } = graphql;

    const CompanyType = new GraphQLObjectType({
      name: 'company',
      fields: {
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
      },
    });

    const UserType = new GraphQLObjectType({
      name: 'User',
      fields: {
        id: { type: GraphQLString },
        firstName: { type: GraphQLString },
        age: { type: GraphQLInt },
        company: {
          type: CompanyType,
          resolve(parentValue, args) {
            return axios(
              `http://localhost:3000/companies/${parentValue.companyId}`
            ).then((res) => res.data);
          },
        },
      },
    });

    const RootQuery = new GraphQLObjectType({
      name: 'RootQueryType',
      fields: {
        user: {
          type: UserType,
          args: { id: { type: GraphQLString } },
          resolve(parentValue, args) {
            const endpoint = `http://localhost:3000/users/${args.id}`;
            return axios(endpoint).then(({ data }) => data);
          },
        },
      },
    });

    module.exports = new GraphQLSchema({
      query: RootQuery,
    });
    ```

## 1.13. A Quick Breather
1. In the current setup, we can only query data by an user ID, while we can't query and get all users by giving a sepcific company ID.
2. During a query, the data firstly passes through the first `resolve` function in the root query and then goes further to the User scheam to the 2nd `resolve`. 
3. In this case, we can get the `parentValue` as the user object that we get from the root query. 
4. Note that the `parentValue` in the root query is simply `null` as it's the very first `resolve` function to handle the query.

## 1.14. Multiple RootQuery Entry Point
1. In this case, we'd like to extend the query and allow to search from company to the other related entities.
2. In this case, we add `company` as the sibling to `user` in `RootQuery`.
    ```js
    // /schema/schema.js
    const axios = require('axios');
    const graphql = require('graphql');
    const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLSchema } = graphql;

    const CompanyType = new GraphQLObjectType({
      name: 'company',
      fields: {
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
      },
    });

    const UserType = new GraphQLObjectType({
      name: 'User',
      fields: {
        id: { type: GraphQLString },
        firstName: { type: GraphQLString },
        age: { type: GraphQLInt },
        company: {
          type: CompanyType,
          resolve(parentValue, args) {
            return axios(
              `http://localhost:3000/companies/${parentValue.companyId}`
            ).then((res) => res.data);
          },
        },
      },
    });

    const RootQuery = new GraphQLObjectType({
      name: 'RootQueryType',
      fields: {
        user: {
          type: UserType,
          args: { id: { type: GraphQLString } },
          resolve(parentValue, args) {
            const endpoint = `http://localhost:3000/users/${args.id}`;
            return axios(endpoint).then(({ data }) => data);
          },
        },
        company: {
          type: CompanyType,
          args: { id: { type: GraphQLString } },
          resolve(parentValue, args) {
            const endpoint = `http://localhost:3000/companies/${args.id}`;
            return axios(endpoint).then(({ data }) => data);
          },
        },
      },
    });

    module.exports = new GraphQLSchema({
      query: RootQuery,
    });
    ```

## 1.15. Bidirectional Relation
1. We can add `users` property in `fields` in `CompanyType`.
2. This helps graphQL to understand and associate from the `RootQuery` that users can query all users in a given company.
3. However, the current setup prompts an error that `UserType` is undefined, as by following the code context and order, `UserType` is declared under `CompanyType`. 
    ```js
    // schema/schema.js
    const axios = require('axios');
    const graphql = require('graphql');
    const {
      GraphQLObjectType,
      GraphQLString,
      GraphQLInt,
      GraphQLSchema,
      GraphQLList,
    } = graphql;

    const CompanyType = new GraphQLObjectType({
      name: 'company',
      fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        users: {
          type: new GraphQLList(UserType),
          resolve(parentValue, args) {
            const endpoint = `http://localhost:3000/companies/${parentValue.id}/users`;
            return axios(endpoint).then(({ data }) => data);
          },
        },
      }),
    });

    const UserType = new GraphQLObjectType({
      name: 'User',
      fields: {
        id: { type: GraphQLString },
        firstName: { type: GraphQLString },
        age: { type: GraphQLInt },
        company: {
          type: CompanyType,
          resolve(parentValue, args) {
            return axios(
              `http://localhost:3000/companies/${parentValue.companyId}`
            ).then((res) => res.data);
          },
        },
      },
    });

    const RootQuery = new GraphQLObjectType({
      name: 'RootQueryType',
      fields: {
        user: {
          type: UserType,
          args: { id: { type: GraphQLString } },
          resolve(parentValue, args) {
            const endpoint = `http://localhost:3000/users/${args.id}`;
            return axios(endpoint).then(({ data }) => data);
          },
        },
        company: {
          type: CompanyType,
          args: { id: { type: GraphQLString } },
          resolve(parentValue, args) {
            const endpoint = `http://localhost:3000/companies/${args.id}`;
            return axios(endpoint).then(({ data }) => data);
          },
        },
      },
    });

    module.exports = new GraphQLSchema({
      query: RootQuery,
    });
    ```

## 1.16. Resolving Circular References
1. To resolve the reference issue, we can turn `fields` property to a function expression rather than a regular object.
    ```js
    // schema/schema.js
    const axios = require('axios');
    const graphql = require('graphql');
    const {
      GraphQLObjectType,
      GraphQLString,
      GraphQLInt,
      GraphQLSchema,
      GraphQLList,
    } = graphql;

    const CompanyType = new GraphQLObjectType({
      name: 'company',
      fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        users: {
          type: new GraphQLList(UserType),
          resolve(parentValue, args) {
            const endpoint = `http://localhost:3000/companies/${parentValue.id}/users`;
            return axios(endpoint).then(({ data }) => data);
          },
        },
      }),
    });

    const UserType = new GraphQLObjectType({
      name: 'User',
      fields: () => ({
        id: { type: GraphQLString },
        firstName: { type: GraphQLString },
        age: { type: GraphQLInt },
        company: {
          type: CompanyType,
          resolve(parentValue, args) {
            return axios(
              `http://localhost:3000/companies/${parentValue.companyId}`
            ).then((res) => res.data);
          },
        },
      }),
    });

    const RootQuery = new GraphQLObjectType({
      name: 'RootQueryType',
      fields: {
        user: {
          type: UserType,
          args: { id: { type: GraphQLString } },
          resolve(parentValue, args) {
            const endpoint = `http://localhost:3000/users/${args.id}`;
            return axios(endpoint).then(({ data }) => data);
          },
        },
        company: {
          type: CompanyType,
          args: { id: { type: GraphQLString } },
          resolve(parentValue, args) {
            const endpoint = `http://localhost:3000/companies/${args.id}`;
            return axios(endpoint).then(({ data }) => data);
          },
        },
      },
    });

    module.exports = new GraphQLSchema({
      query: RootQuery,
    });
    ```

## 1.17. Query Fragments
1. We can name different GraphQL query with `query [query_name] { query fields... }`.
2. Besides, we cannot call the same field twice in the same query.
3. However, in some cases, we may need to query over different instances of a type. 
4. In the previous example, we'd like to find the users of different companies in the same query. 
5. Besides naming the whole query, we can name the response as well.
6. In addition, we can use `fragment` keyword to bundel multiple properties of a type, so we can skip repeating the properties allover the quries. 
7. To use the fragments, we can use triple dots `...` as spread syntax to assign the properties.
    ```
    query companies {
      apple: company(id: "1") {
        ...company_details
        users {
          id
          firstName
          age
          company {
            name
          }
        }
      }
      google: company(id: "2") {
        ...company_details
        users {
          id
          firstName
          age
          company {
            name
          }
        }
      }
    }

    fragment company_details on company {
      id
      name
      description
    }
    ```

## 1.18. Introduction to Mutation
1. To mutation and modify the data using GraphQL, we add the other instance of `GraphQLObjectType` as we did for `RootQuery`. 
2. We add and the define the methods that we want to allow users to work on the data in `fields`.
3. Note that the mutation method doesn't return the same type of data as the input.
4. For example, we may pass a user ID to work on the other related data rather than the user entity itself.
    ```js
    // schema/schema.js
    const axios = require('axios');
    const graphql = require('graphql');
    const {
      GraphQLObjectType,
      GraphQLString,
      GraphQLInt,
      GraphQLSchema,
      GraphQLList,
    } = graphql;

    const CompanyType = new GraphQLObjectType({
      name: 'company',
      fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        users: {
          type: new GraphQLList(UserType),
          resolve(parentValue, args) {
            const endpoint = `http://localhost:3000/companies/${parentValue.id}/users`;
            return axios(endpoint).then(({ data }) => data);
          },
        },
      }),
    });

    const UserType = new GraphQLObjectType({
      name: 'User',
      fields: () => ({
        id: { type: GraphQLString },
        firstName: { type: GraphQLString },
        age: { type: GraphQLInt },
        company: {
          type: CompanyType,
          resolve(parentValue, args) {
            return axios(
              `http://localhost:3000/companies/${parentValue.companyId}`
            ).then((res) => res.data);
          },
        },
      }),
    });

    const RootQuery = new GraphQLObjectType({
      name: 'RootQueryType',
      fields: {
        user: {
          type: UserType,
          args: { id: { type: GraphQLString } },
          resolve(parentValue, args) {
            const endpoint = `http://localhost:3000/users/${args.id}`;
            return axios(endpoint).then(({ data }) => data);
          },
        },
        company: {
          type: CompanyType,
          args: { id: { type: GraphQLString } },
          resolve(parentValue, args) {
            const endpoint = `http://localhost:3000/companies/${args.id}`;
            return axios(endpoint).then(({ data }) => data);
          },
        },
      },
    });

    const mutation = new GraphQLObjectType({
      name: 'Mutation',
      fiedls: {
        addUser: {
          type: UserType,
          args: {
            firstName: { type: GraphQLString },
            age: { type: GraphQLInt },
            companyId: { type: GraphQLString },
          },
          resolve() {},
        },
      },
    });

    module.exports = new GraphQLSchema({
      query: RootQuery,
    });
    ```

## 1.19. NonNull Fields and Mutations
1. Some fields in entities are critical to the object. For example, an user should always have a `firstName` and `age` (in this case).
2. However, some of the fields aren't always required, such as `companyId`.
3. We can use `new GraphQLNonNull([graphql_datatype])` to wrap the property in th field. 
4. Note that this class only checks if the value is passed in, and it doesn't have conditional check such as checking if the age is more than 20. 
    ```js
    // schema/schema.js
    const axios = require('axios');
    const graphql = require('graphql');
    const {
      GraphQLObjectType,
      GraphQLString,
      GraphQLInt,
      GraphQLSchema,
      GraphQLList,
      GraphQLNonNull,
    } = graphql;

    const CompanyType = new GraphQLObjectType({
      name: 'company',
      fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        users: {
          type: new GraphQLList(UserType),
          resolve(parentValue, args) {
            const endpoint = `http://localhost:3000/companies/${parentValue.id}/users`;
            return axios(endpoint).then(({ data }) => data);
          },
        },
      }),
    });

    const UserType = new GraphQLObjectType({
      name: 'User',
      fields: () => ({
        id: { type: GraphQLString },
        firstName: { type: GraphQLString },
        age: { type: GraphQLInt },
        company: {
          type: CompanyType,
          resolve(parentValue, args) {
            return axios(
              `http://localhost:3000/companies/${parentValue.companyId}`
            ).then((res) => res.data);
          },
        },
      }),
    });

    const RootQuery = new GraphQLObjectType({
      name: 'RootQueryType',
      fields: {
        user: {
          type: UserType,
          args: { id: { type: GraphQLString } },
          resolve(parentValue, args) {
            const endpoint = `http://localhost:3000/users/${args.id}`;
            return axios(endpoint).then(({ data }) => data);
          },
        },
        company: {
          type: CompanyType,
          args: { id: { type: GraphQLString } },
          resolve(parentValue, args) {
            const endpoint = `http://localhost:3000/companies/${args.id}`;
            return axios(endpoint).then(({ data }) => data);
          },
        },
      },
    });

    const mutation = new GraphQLObjectType({
      name: 'Mutation',
      fields: {
        addUser: {
          type: UserType,
          args: {
            firstName: { type: new GraphQLNonNull(GraphQLString) },
            age: { type: new GraphQLNonNull(GraphQLInt) },
            companyId: { type: GraphQLString },
          },
          resolve(parentValue, { firstName, age }) {
            return axios
              .post('http://localhost:3000/users', { firstName, age })
              .then((res) => res.data);
          },
        },
      },
    });

    module.exports = new GraphQLSchema({
      query: RootQuery,
      mutation,
    });
    ```
5. We then can use `mutation` keyword in GraphiQL and create a new user in the json database. 
```
mutation {
  addUser(firstName: "Stephen", age: 26) {
    id
    firstName
    age
  }
}
```

## 1.20. Do It Yourself - Delete Mutation
1. The JSON web server doesn't return the entity that is removed when successfully deleting an entity with `DELETE` request.
2. Therefore, though we set the returned type of data as `UserType`, all the properties and fields will be `null` as the entity has been removed.
    ```js
    // schema/schema.js
    const axios = require('axios');
    const graphql = require('graphql');
    const {
      GraphQLObjectType,
      GraphQLString,
      GraphQLInt,
      GraphQLSchema,
      GraphQLList,
      GraphQLNonNull,
    } = graphql;

    const CompanyType = new GraphQLObjectType({
      name: 'company',
      fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        users: {
          type: new GraphQLList(UserType),
          resolve(parentValue, args) {
            const endpoint = `http://localhost:3000/companies/${parentValue.id}/users`;
            return axios(endpoint).then(({ data }) => data);
          },
        },
      }),
    });

    const UserType = new GraphQLObjectType({
      name: 'User',
      fields: () => ({
        id: { type: GraphQLString },
        firstName: { type: GraphQLString },
        age: { type: GraphQLInt },
        company: {
          type: CompanyType,
          resolve(parentValue, args) {
            return axios(
              `http://localhost:3000/companies/${parentValue.companyId}`
            ).then((res) => res.data);
          },
        },
      }),
    });

    const RootQuery = new GraphQLObjectType({
      name: 'RootQueryType',
      fields: {
        user: {
          type: UserType,
          args: { id: { type: GraphQLString } },
          resolve(parentValue, args) {
            const endpoint = `http://localhost:3000/users/${args.id}`;
            return axios(endpoint).then(({ data }) => data);
          },
        },
        company: {
          type: CompanyType,
          args: { id: { type: GraphQLString } },
          resolve(parentValue, args) {
            const endpoint = `http://localhost:3000/companies/${args.id}`;
            return axios(endpoint).then(({ data }) => data);
          },
        },
      },
    });

    const mutation = new GraphQLObjectType({
      name: 'Mutation',
      fields: {
        addUser: {
          type: UserType,
          args: {
            firstName: { type: new GraphQLNonNull(GraphQLString) },
            age: { type: new GraphQLNonNull(GraphQLInt) },
            companyId: { type: GraphQLString },
          },
          resolve(parentValue, { firstName, age }) {
            return axios
              .post('http://localhost:3000/users', { firstName, age })
              .then((res) => res.data);
          },
        },
        deleteUser: {
          type: UserType,
          args: { id: { type: new GraphQLNonNull(GraphQLString) } },
          resolve(parentValue, { id }) {
            return axios
              .delete(`http://localhost:3000/users/${id}`)
              .then((res) => res.data);
          },
        },
      },
    });

    module.exports = new GraphQLSchema({
      query: RootQuery,
      mutation,
    });
    ```

## 1.21. Do It Yourself - Edit Mutation
1. To modify data, we can use either `PATCH` or `PUT` request. 
2. The main difference is that `PUT` request will replace the whole entity. Therefore, if some of the values aren't given, the property may be `null`.
3. On the other hand, `PATCH` request only modifies the data that we pass in. Therefore, only the given property with data will be modified with the request.
    ```js
    // schema/schema.js
    const axios = require('axios');
    const graphql = require('graphql');
    const {
      GraphQLObjectType,
      GraphQLString,
      GraphQLInt,
      GraphQLSchema,
      GraphQLList,
      GraphQLNonNull,
    } = graphql;

    const CompanyType = new GraphQLObjectType({
      name: 'company',
      fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        users: {
          type: new GraphQLList(UserType),
          resolve(parentValue, args) {
            return axios(
              `http://localhost:3000/companies/${parentValue.id}/users`
            ).then(({ data }) => data);
          },
        },
      }),
    });

    const UserType = new GraphQLObjectType({
      name: 'User',
      fields: () => ({
        id: { type: GraphQLString },
        firstName: { type: GraphQLString },
        age: { type: GraphQLInt },
        company: {
          type: CompanyType,
          resolve(parentValue, args) {
            return axios(
              `http://localhost:3000/companies/${parentValue.companyId}`
            ).then((res) => res.data);
          },
        },
      }),
    });

    const RootQuery = new GraphQLObjectType({
      name: 'RootQueryType',
      fields: {
        user: {
          type: UserType,
          args: { id: { type: GraphQLString } },
          resolve(parentValue, args) {
            return axios(`http://localhost:3000/users/${args.id}`).then(
              ({ data }) => data
            );
          },
        },
        company: {
          type: CompanyType,
          args: { id: { type: GraphQLString } },
          resolve(parentValue, args) {
            return axios(`http://localhost:3000/companies/${args.id}`).then(
              ({ data }) => data
            );
          },
        },
      },
    });

    const mutation = new GraphQLObjectType({
      name: 'Mutation',
      fields: {
        addUser: {
          type: UserType,
          args: {
            firstName: { type: new GraphQLNonNull(GraphQLString) },
            age: { type: new GraphQLNonNull(GraphQLInt) },
            companyId: { type: GraphQLString },
          },
          resolve(parentValue, { firstName, age }) {
            return axios
              .post('http://localhost:3000/users', { firstName, age })
              .then(({ data }) => data);
          },
        },
        deleteUser: {
          type: UserType,
          args: { id: { type: new GraphQLNonNull(GraphQLString) } },
          resolve(parentValue, { id }) {
            return axios
              .delete(`http://localhost:3000/users/${id}`)
              .then(({ data }) => data);
          },
        },
        editUser: {
          type: UserType,
          args: {
            id: { type: new GraphQLNonNull(GraphQLString) },
            firstName: { type: GraphQLString },
            age: { type: GraphQLInt },
            companyId: { type: GraphQLString },
          },
          resolve(parentValue, args) {
            return axios
              .patch(`http://localhost:3000/users/${args.id}`, args)
              .then(({ data }) => data);
          },
        },
      },
    });

    module.exports = new GraphQLSchema({
      query: RootQuery,
      mutation,
    });
    ```

# 2. The GraphQL Ecosystem
## 2.1. GraphQL Clients - Apollo vs Relay
1. The GraphQL query under the hood is to send the object-like query to the query server as a plain string.
2. There are 3 packages we can use as GraphQL clients
   1. [`Lokka`](https://github.com/kadirahq/lokka) - As simple as possible. Basic queries, mutations. Some simple caching.
   2. [`Apollo Client`](https://github.com/apollographql/apollo-client) - Produced by the same guys as Meteor JS. Good balance between features and complexity.
   3. [`Relay`](https://github.com/facebook/relay) - Amazingly performance for mobile. By for the most insanely complex.

## 2.2. Sidenote - Apollo Server vs GraphQL Server
1. In the previous sections, we use `epxress-graphql` rather than `apollo-server`.

# 3. Clientside GraphQL
## 3.1. The Next App
1. We clone and work on the project from [https://github.com/StephenGrider/Lyrical-GraphQL](https://github.com/StephenGrider/Lyrical-GraphQL)

## 3.2. Starter Pack Walkthrough
1. This "Lyrical-GraphQL" project has `server` and `client` folder.

## 3.3. Working Through the Schema
1. After setting up the server, we can use mutations such as `addSong` and `addLyricToSong` to modify data.

## 3.4. Apollo client setup
1. We use `ApolloClient` from `apollo-client` and `ApolloProvider` from `react-apollo` which is similar to `redux` syntax.
2. In this case, we pass an empty object to create the Apollo client.
    ```js
    // client/index.js
    import React from 'react';
    import ReactDOM from 'react-dom';
    import ApolloClient from 'apollo-client';
    import { ApolloProvider } from 'react-apollo';

    const client = new ApolloClient({});

    const Root = () => {
      return (
        <ApolloProvider client={client}>
          <div>Lyrical</div>
        </ApolloProvider>
      );
    };

    ReactDOM.render(<Root />, document.querySelector('#root'));
    ```

## 3.5. React Component Design
1. We have 2 main components 
   1. "Song Index Page" - List all the songs stored in the database.
   2. "Song Detail Page" - Show the details of a song, allow users to like, and add lyrics to the song. 
    ```jsx
    // client/components/SongList.js
    import React, { Component } from 'react';

    export class SongList extends Component {
      render() {
        return <div>SongList</div>;
      }
    }

    export default SongList;
    ```

## 3.6. GQL queries in React
1. GraphQL + React Strategy
   1. Identify data required
   2. Write query in Graphql (for practice) and in component file
   3. Bond query + component
   4. Access data
2. To query data from GraphQL we can use `graphql-tag` and import it as `gql`. 
3. We then can add the query as multi-line strings after `gql` instance.
    ```js
    // client/components/SongList.js
    import React, { Component } from 'react';
    import gql from 'graphql-tag';

    export class SongList extends Component {
      render() {
        return <div>SongList</div>;
      }
    }

    const query = gql`
      {
        songs {
          title
        }
      }
    `;

    export default SongList;
    ```

## 3.7. Bonding Queries with Components
1. We use `graphql` from `react-apollo` and wrap the component with the query.

# 4. Gotachs with Queries in React
## 4.1. Handling Pending Queries
1. When the app initiates, the client is querying to the graphQL server and in "loading" state. 
2. We can check from `this.props.data.loading` which provies a `boolean` value to indicate whether the query is ongoing.
3. Therefore, we can simply return a "loading..." hint when the query hasn't finished.
    ```js
    // client/components/SongList.js
    import React, { Component } from 'react';
    import gql from 'graphql-tag';
    import { graphql } from 'react-apollo';

    export class SongList extends Component {
      renderSongs() {
        if (this.props.data.loading) return <div>Loading...</div>;

        return this.props.data.songs.map((song) => {
          return <li key={song.title}>{song.title}</li>;
        });
      }

      render() {
        return <div>{this.renderSongs()}</div>;
      }
    }

    const query = gql`
      {
        songs {
          title
        }
      }
    `;

    export default graphql(query)(SongList);
    ```

## 4.2. Fixing Key Warnings
1. When rendering values in array with `map` method, we need to ensure each element in the list has an unique `key` value.

## 4.3. Architecture Review
1. We have apollo client sits between the graphQL server and react app.
2. When React app initiates, the apollo client intiates and provide a global context to the react app. 

## 4.4. Adding React Router
1. We configure `index.js` and use react router for the project.
    ```js
    // index.js
    import React from 'react';
    import ReactDOM from 'react-dom';
    import { Router, Route, hashHistory, IndexRoute } from 'react-router';
    import ApolloClient from 'apollo-client';
    import { ApolloProvider } from 'react-apollo';
    import SongList from './components/SongList';
    import App from './components/App';

    const client = new ApolloClient({});

    const Root = () => {
      return (
        <ApolloProvider client={client}>
          <Router history={hashHistory}>
            <Route path='/' component={App}>
              <IndexRoute component={SongList} />
            </Route>
          </Router>
        </ApolloProvider>
      );
    };

    ReactDOM.render(<Root />, document.querySelector('#root'));
    ```

## 4.5. Creating a Song
1. We create a new component `SongCreate.js` with a form to allow users to create new songs.
2. We then set up and wire the new component to render with react router.
    ```js
    // index.js
    import React from 'react';
    import ReactDOM from 'react-dom';
    import { Router, Route, hashHistory, IndexRoute } from 'react-router';
    import ApolloClient from 'apollo-client';
    import { ApolloProvider } from 'react-apollo';
    import SongList from './components/SongList';
    import SongCreate from './components/SongCreate';
    import App from './components/App';

    const client = new ApolloClient({});

    const Root = () => {
      return (
        <ApolloProvider client={client}>
          <Router history={hashHistory}>
            <Route path='/' component={App}>
              <IndexRoute component={SongList} />
              <Route path='song/new' component={SongCreate} />
            </Route>
          </Router>
        </ApolloProvider>
      );
    };

    ReactDOM.render(<Root />, document.querySelector('#root'));
    ```
    ```js
    // components/SongCreate.js
    import React, { Component } from 'react';

    export class SongCreate extends Component {
      constructor(props) {
        super(props);

        this.state = { title: '' };
      }

      render() {
        return (
          <div>
            <h3>Create a New Song</h3>
            <form>
              <label for=''>Song Title: </label>
              <input
                type=''
                name=''
                value={this.state.title}
                onChange={(event) => this.setState({ title: event.target.value })}
              />
            </form>
          </div>
        );
      }
    }

    export default SongCreate;
    ```



# 5. Frontend Mutations
## 5.1. Mutations in React  

## 5.2. Query Params

## 5.3. Defining Query Variables in React

## 5.4. Navigating on Successful Mutation

## 5.5. Troubleshooting List Fetching

## 5.6. Refetching Queries

## 5.7. Deletion by Mutation

## 5.8. Associating Mutations with a Component

## 5.9. Invoking Delete Mutations

