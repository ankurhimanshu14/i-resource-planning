require('dotenv').config();
const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const UserSchema = require('./graphQL-API/Admin/UserSchema')

const PORT = process.env.PORT || 4000;
const app = express();

app.use('/', graphqlHTTP({
    schema: UserSchema,
    rootValue: global,
    graphiql: true
}));

app.listen(PORT, () => {
    console.info(`Running a GraphQL API at http://localhost:${PORT}/`);
});