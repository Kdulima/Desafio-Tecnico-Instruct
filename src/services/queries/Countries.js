import gql from 'graphql-tag';

const COUNTRIES_QUERY = gql`
query {
  countries(filter: {continent: {eq: "AF"}}) {
    code,
    name
  }
}
`;

export default COUNTRIES_QUERY;
