import gql from 'graphql-tag';

const COUNTRIES_QUERY = gql`
query {
  countries {
    code
    name
    native
    currency
    emoji
    capital
    languages {
      code
      name
      native
    }
    continent {
      code
      name
    }
  }
}
`;

export default COUNTRIES_QUERY;