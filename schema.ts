// 1. Creamos nuestro archivo schema.ts
import { createSchema } from 'graphql-yoga'

export const schema = createSchema({
  typeDefs: /* GraphQL */ `
    type Query {
      hello: String!
    }
  `,
  resolvers: {
    Query: {
      hello: () => 'World',
    },
  },
})
