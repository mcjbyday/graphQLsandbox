const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Matchup {
    tech1: String!,
    tech2: String!,
    tech1_votes: Number,
    tech2_votes: Number
  }

  type Tech {
    name: String!
  }
`;

module.exports = typeDefs;



// type Thought {
//   _id: ID
//   thoughtText: String
//   thoughtAuthor: String
//   createdAt: String
//   comments: [Comment]!
// }

// type Comment {
//   _id: ID
//   commentText: String
//   commentAuthor: String
//   createdAt: String
// }

// type Auth {
//   token: ID!
//   user: User
// }

// type Query {
//   users: [User]
//   user(username: String!): User
//   thoughts(username: String): [Thought]
//   thought(thoughtId: ID!): Thought
//   me: User
// }

// type Mutation {
//   addUser(username: String!, email: String!, password: String!): Auth
//   login(email: String!, password: String!): Auth
//   addThought(thoughtText: String!): Thought
//   addComment(thoughtId: ID!, commentText: String!): Thought
//   removeThought(thoughtId: ID!): Thought
//   removeComment(thoughtId: ID!, commentId: ID!): Thought
// }
// `;