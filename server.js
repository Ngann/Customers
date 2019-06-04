const express = require('express');
const expressGraphQL = require('express-graphql');
const schema = require('./schema.js')

app.use('/graphql', expressGraphQL({
    schema: schema,
    graphiql: true
}))

const app = express();

app.listen( 4000, ()=> {
    console.log('Server is running on port 4000..');
});

