import { gql } from '@apollo/client';

export const QUERY_MATCH = gql`
  query match($id: ID!) {
  match(_id: $id) {
    _id
    tech1
    tech2
    tech1_votes
    tech2_votes
  }
}
`;

export const QUERY_MATCHES = gql`
  query matches {
    matches {
      _id
      tech1
      tech2
      tech1_votes
      tech2_votes
    }
  }
`;

export const QUERY_ALLTECH = gql`
  query allTech {
    allTech {
      _id
      name
    }
  }
`;