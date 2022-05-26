import gql from 'graphql-tag';

const LANGUAGES_QUERY = gql`
  query {
    languages {
      code
      name
    }
  }
`;

export default LANGUAGES_QUERY;