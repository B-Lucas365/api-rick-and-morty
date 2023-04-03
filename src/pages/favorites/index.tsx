import { Header } from "@/components/Header";

import { CardDetails } from "@/components/CardDetails";
import { Container, FavoritesCharacters } from "./styled";

import { useState, useEffect} from 'react'
import { Character } from "@/components/Character";
import axios from "axios";

import { Character as CharacterTypes } from '@/types/Character'


export default function Favorites() {

    const [listFavorites, setListFavorites] = useState<number[]>([])
    const [characters, setCharacters] = useState<CharacterTypes[]>([])
    const [idChosenCharacter, setIdChosenCharacter] = useState(0)
    const [noFavorites, setNoFavorites] = useState(true)


    useEffect(() => {
        const storedFavorites = localStorage.getItem("listFavorites");

        if (storedFavorites !== null && JSON.parse(storedFavorites).length > 0) {
          setListFavorites(JSON.parse(storedFavorites));
          setNoFavorites(false);
        }
      }, []);
    
    useEffect(() => {
        setIdChosenCharacter(listFavorites[0]);
        localStorage.setItem("listFavorites", JSON.stringify(listFavorites))
        
        if(listFavorites.length !== 0){
            fetchCharacters()
        }
    }, [listFavorites])

    const fetchCharacters = async () => {
        const responses = await Promise.all(listFavorites.map((item) => {
            return axios({
                method: "get",
                url: `https://rickandmortyapi.com/api/character/${item}`
            })
        }))

        const newCharacters = responses.map((response) => response.data)
        setCharacters(newCharacters)
    }
  
    const removeFavorite = (id: number) => {
        const newArray = listFavorites.filter((i) => i !== id);
        setListFavorites(newArray);
    }

    const selectCharacter = (id: number) => {
        setIdChosenCharacter(id);
    }

    return(
        <>
            <Header />

            {noFavorites && 
                <Container>
                    <div>
                        <h1>Favorites Characters</h1>
                    </div>

                    <div className="no-favorites">
                        <p>
                            You don't have favorite characters yet...
                        </p>
                    </div>
                </Container>
            }

            {!noFavorites && <Container>
                <div>
                    <h1>Favorites Characters</h1>
                </div>

                {(!noFavorites && typeof idChosenCharacter != "undefined") && <CardDetails characterId={idChosenCharacter}/>}

                <FavoritesCharacters>
                    {characters.map((character) => {
                        let favorite = false;

                        if(listFavorites.find(element => element == character.id)){
                        favorite = true;
                        }
                        return(
                            <Character key={character.id} characterId={character.id} character={character.image} characterName={character.name} selectCharacter={selectCharacter} cardSmall={true} favorite={favorite} removeFavorite={removeFavorite}/>
                        )
                    })}
                </FavoritesCharacters>
            </Container>}
        </>
    )
}