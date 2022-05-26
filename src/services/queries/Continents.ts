import gql from 'graphql-tag';

const CONTINENTS_QUERY = gql`
  query {
    continents {
      code
      name
    }
  }
`;

export default CONTINENTS_QUERY;