import { useState, useEffect } from "react";
import { Card } from "./style";
import axios from "axios";

interface EpisodeProps {
  episodeName: string;
  episode: string;
  airDate: string;
  characters?: string[] | any;
}

interface Character {
  id: number,
  image: string;
}

export const Episodes = ({ episodeName, episode, airDate, characters }: EpisodeProps) => {
  const [characterData, setCharacterData] = useState<Character[]>([]);

  useEffect(() => {
    setCharacterData([])

    const fetchData = async () => {
        characters.slice(0, 4).map((character: string) =>
            axios({
                method: "get",
                url: character
            }).then((response) => {
                setCharacterData(prevData => [...prevData, response.data])
            })
        );
    };
    fetchData();
  }, [characters]);

  return (
    <Card>
      <div className="descriptions">
        <h3>{episodeName}</h3>
        <div className="episode-info">
          <p className="number-episode">{episode}</p>
          <p className="air-date">{airDate}</p>
        </div>
      </div>

      <div className="box">
        {characterData.map((character) => (
          <div key={character.id} className="box-img">
            <img src={character.image} alt="" />
          </div>
        ))}
      </div>
    </Card>
  );
};