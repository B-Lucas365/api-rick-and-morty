import { Container } from "./style";
import { TbGenderMale, TbGenderFemale, TbGenderNeutrois } from 'react-icons/Tb';
import { useEffect, useState } from "react";
import axios from "axios";
import { Character } from "@/types/Character";

interface CharacterProps {
  characterId?: number
}

export const CardDetails = ({ characterId }: CharacterProps) => {
  const [characterDetails, setCharacterDetails] = useState<Character>({} as Character);
  const [backgroundClass, setBackgroundClass] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      axios({
        method: "get",
        url: `https://rickandmortyapi.com/api/character/${characterId}`,
      }).then((response) => {
        setCharacterDetails(response.data);
        setBackgroundClass(getBackgroundClass(response.data.status));
      }).catch((error) => {
        console.log("errorAPI", error)
      })
    };
    fetchData();
  }, [characterId]);

  const getBackgroundClass = (status: string) => {
    switch (status) {
      case "Alive":
        return "alive-background";
      case "Dead":
        return "dead-background";
      default:
        return "unknown-background";
    }
  }

  return (
    <Container >
      <div className="face-character">
        <img src={characterDetails.image} alt="" />
      </div>

      <div className="details">
        <h3 className="title">{characterDetails.name}</h3>
        <div className="generous-details">
          <div className="generous">
            {characterDetails.gender === 'Male' ? <TbGenderMale /> : characterDetails.gender === 'Female' ? <TbGenderFemale /> : <TbGenderNeutrois />} {characterDetails.gender}
          </div>
          <span>-</span>
          <p>{characterDetails.species}</p>
        </div>

        <div className={`${backgroundClass} ${"status"}`}>
          <p>{characterDetails.status}</p>
        </div>

        <div className="location">
          <p>Last Location</p>
          <h3>{characterDetails.location?.name}</h3>
        </div>
      </div>
    </Container>
  )
}