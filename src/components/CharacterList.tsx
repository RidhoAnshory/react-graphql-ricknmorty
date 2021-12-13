import React from "react";
import { useQuery, gql } from "@apollo/client";

const GET_CHARACTERS = gql`
  query {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`;

interface Character {
  image: string;
  name: string;
  id: number;
}

function CharacterList() {
  const { error, data, loading } = useQuery(GET_CHARACTERS);

  if (loading) return <div>spinner...</div>;

  if (error) return <div>Something went wrong...</div>;

  return (
    <div className="characterList">
      {data.characters.results.map((data: Character) => {
        return (
          <div>
            <img src={data.image} alt="" />
            <h2>{data.name}</h2>
            <p>{data.id}</p>
          </div>
        );
      })}
    </div>
  );
}

export default CharacterList;
