import { GraphQLServer } from 'graphql-yoga';
import Mutation  from './resolvers/Mutation';
import Query  from './resolvers/Query';
import db from './db'

// Create the GraphQL Yoga Server
// console.log("Mutation==", Mutation)
// console.log("Query==", Query)
// console.log("db==", db)

export const createServer = () => {
  return new GraphQLServer({
    typeDefs: 'src/schema.graphql',
    resolvers: {Mutation,Query},
    resolverValidationOptions: {
      requireResolversForResolveType: false,
    },
    context: req => ({ ...req, db }),
  });
}

module.exports = createServer;
// export default createServer;
