import React from "react";
import { useParams } from "react-router-dom";
import { useCharacter } from "../hooks/Character";
import "./characterdetail.css";

function CharacterDetail() {
  const { id } = useParams();

  const { loading, data, error } = useCharacter(String(id));
  console.log(data);
  if (loading) return <div>spinner...</div>;
  if (error) return <div>Something went wrong...</div>;

  return (
    <div className="Character">
      <img src={data.character.image} alt="" width={750} height={750} />
      <div className="Character-content">
        <h1>{data.character.name}</h1>
        <p>{data.character.gender}</p>

        <div className="Character-episode">
          {data.character.episode.map((episode: any, index: number) => {
            return (
              <div key={index}>
                {episode.name} - <b>{episode.episode}</b>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CharacterDetail;
