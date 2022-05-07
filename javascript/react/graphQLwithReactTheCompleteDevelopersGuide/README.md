- [1. On To GraphQL](#1-on-to-graphql)
  - [1.1. Registering GraphQL with Express](#11-registering-graphql-with-express)
  - [1.2. GraphQL Schema](#12-graphql-schema)
  - [1.3. Writing a GraphQL Schema](#13-writing-a-graphql-schema)
  - [1.4. Root Queries](#14-root-queries)
  - [1.5. Resolving with data](#15-resolving-with-data)

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
