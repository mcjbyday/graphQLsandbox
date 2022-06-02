import { gql } from '@apollo/client';

export const UPDATE_MATCH = gql`
  mutation updateMatchupVote($id: ID!, $whichTech: String!) {
  updateMatchupVote(_id: $id, whichTech: $whichTech) {
    _id
    tech1
    tech2
    tech1_votes
    tech2_votes
  }
}
`;

export const ADD_MATCHUP = gql`
  mutation addMatchup($tech1: String!, $tech2: String!) {
    addMatchup(tech1: $tech1, tech2: $tech2) {
      _id
      tech2
      tech1
      tech1_votes
      tech2_votes
    }
  }
`;
