import { Header } from "@/components/Header"
import {CharactersThisEpisode, Container} from "../../stylesPage/styleEpisodes"
import { CardDetailsEpisode } from "@/components/CardDetailsEpisode"
import {useState, useEffect} from "react"
import { getEpisodes } from "@/api/api"
import axios from "axios"

import { Character as CharacterTypes, Episode as EpisodeTypes} from "@/types/Character"
import { Character } from "@/components/Character"

export default function Episodes() {
    const [currentEpisode, setCurrentEpisode] = useState(1)
    const [episode, setEpisode] = useState<EpisodeTypes>({} as EpisodeTypes)
    const [characterData, setCharacterData] = useState<CharacterTypes[]>([]);
    const [listFavorites, setListFavorites] = useState<number[]>([])

    useEffect(() => {
        setCharacterData([])
      
        const fetchCharacters = async () => {
          const result = await getEpisodes(currentEpisode);
      
          setEpisode(result);
      
          if (result.characters && result.characters.length > 0) {
            fetchData(result.characters);
          }
      
          console.log(result)
        };
      
        const fetchData = async (characters: any[]) => {
          characters.map((character: any) => 
            axios({
              method: "get",
              url: character
            }).then((response) => {
              setCharacterData(prevData => [...prevData, response.data])
            })
          );
        };
      
        fetchCharacters();
      
      }, [currentEpisode]);
      
      useEffect(() => {
        const storedFavorites = localStorage.getItem("listFavorites");
        if (storedFavorites !== null) {
          setListFavorites(JSON.parse(storedFavorites));
        }
      }, [])
  
      useEffect(() => {
        localStorage.setItem("listFavorites", JSON.stringify(listFavorites))
      }, [listFavorites])
  
      const addNewFavorite = (id: number) => {
        setListFavorites([...listFavorites, id])
      }
  
      const removeFavorite = (id: number) => {
        const newArray = listFavorites.filter((i) => i !== id);
        setListFavorites(newArray);
      }

    return(
        <>
            <Header />

            <Container>
                <div className="title">
                    <h1>Episodes</h1>
                </div>

                <div className="search">
                    <p>Choose episode:</p>
                    <input type="number" placeholder="1" onChange={(e) => setCurrentEpisode(isNaN(parseInt(e.target.value)) ? 1 : parseInt(e.target.value))}/>
                </div>

                <CardDetailsEpisode name={episode.name} episode={episode.episode} airDate={episode.air_date}/> 
                
                <p className="observation">Characters from this episode</p>
                <CharactersThisEpisode>
                    {characterData.map((character) => {
                      let favorite = false;

                      if(listFavorites.find(element => element == character.id)){
                        favorite = true;
                      }

                      return (
                        <Character key={character.id} characterId={character.id} character={character.image} characterName={character.name} cardSmall={true} favorite={favorite} addNewFavorite={addNewFavorite} removeFavorite={removeFavorite}/>
                      )
                    })}
                </CharactersThisEpisode>
                
            </Container>
        </>
    )
}