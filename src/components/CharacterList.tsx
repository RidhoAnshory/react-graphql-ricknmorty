import React from "react";
import { useQuery, gql } from "@apollo/client";
import "./characterlist.css";
import { useCharacters } from "../hooks/CharacterList";
import { Link } from "react-router-dom";

interface Character {
  image: string;
  name: string;
  id: number;
}

function CharacterList() {
  const { error, data, loading } = useCharacters();
  if (loading) return <div>spinner...</div>;
  if (error) return <div>Something went wrong...</div>;

  return (
    <div className="characterList">
      {data.characters.results.map((data: Character) => {
        return (
          <Link to={`/${data.id}`} key={data.id}>
            <img src={data.image} alt="" />
            <h2>{data.name}</h2>
            <p>{data.id}</p>
          </Link>
        );
      })}
    </div>
  );
}

export default CharacterList;
