import { useQuery, gql } from "@apollo/client";

const GET_CHARACTERS = gql`
  query GetCharacter($id: ID!) {
    character(id: $id) {
      id
      name
      image
      episode {
        name
        episode
      }
    }
  }
`;

export const useCharacter = (id: string) => {
  const { error, data, loading } = useQuery(GET_CHARACTERS, {
    variables: {
      id,
    },
  });

  return {
    error,
    data,
    loading,
  };
};
