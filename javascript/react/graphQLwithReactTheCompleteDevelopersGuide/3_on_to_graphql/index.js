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
