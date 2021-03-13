require('dotenv').config();
const express = require('express');
const {graphqlHTTP} = require('express-graphql');

const routes = require('./graphQL-API');

const PORT = process.env.PORT || 4000;
const app = express();

Object.values(routes).map(value => {
    app.use(value.path, graphqlHTTP({
        schema: value.schema,
        rootValue: global,
        graphiql: true
    }));
})

app.listen(PORT, () => {
    console.info(`Running a GraphQL API at http://localhost:${PORT}/`);
});