const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Matchup {
    _id: ID
    tech1: String!
    tech2: String!
    tech1_votes: Int
    tech2_votes: Int
  }

  type Tech {
    _id: ID
    name: String!
  }

  type Query {
    matches: [Matchup]
    match(_id: ID!): Matchup
    allTech: [Tech]
  }


  type Mutation {
    addMatchup(tech1: String!, tech2: String!): Matchup 
    updateMatchupVote(_id: ID!, whichTech: String!): Matchup
  }
`;

module.exports = typeDefs;

