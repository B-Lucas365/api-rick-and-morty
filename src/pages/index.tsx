import { Header } from '@/components/Header'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { Character } from '@/components/Character'
import { getManyCharacters, getEpsodes} from '@/api/api'

import { Character as CharacterTypes, Episode as EpisodeTypes} from '@/types/Character'

import {Container, ContentCharacters, ContentEpsodes} from "../stylesPage/styleIndex" 
import { Episodes } from '@/components/Episodes'


export default function Home() {
  const [characters, setCharacters] = useState<CharacterTypes[]>([])
  const [episodes, setEpisodes] = useState<EpisodeTypes[]>([])

  const [listFavorites, setListFavorites] = useState<number[]>([])


  useEffect(() => {

    const storedFavorites = localStorage.getItem("listFavorites");
    if (storedFavorites !== null) {
      setListFavorites(JSON.parse(storedFavorites));
    }


    const fetchCharacter = async () => {
      const characters = await getManyCharacters();
      setCharacters(characters);
    };

    fetchCharacter();

    const fetchEpisode = async () => {
      const episodes = await getEpsodes();
      setEpisodes(episodes);
    };

    fetchEpisode();
  }, []);

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

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Container> 
            <ContentCharacters>
                <div className="title">
                    <h1>Characters</h1>
                </div>
                <div className="characters-cards">
                  {characters.slice(0, 8).map((character) => {
                    let favorite = false;

                    if(listFavorites.find(element => element == character.id)){
                      favorite = true;
                    }
                    return(
                      <Character key={character.id} characterId={character.id} character={character.image} characterName={character.name} cardSmall={false} favorite={favorite} addNewFavorite={addNewFavorite} removeFavorite={removeFavorite}/>
                    )
                  })}
                </div>
            </ContentCharacters>

            <ContentEpsodes>
                <div className="title">
                    <h1>Episodes</h1>
                </div>

                <div className="episodes-cards">
                  {episodes.slice(0, 5).map((episode) => (
                    <Episodes key={episode.id} episodeName={episode.name} episode={episode.episode} airDate={episode.air_date} characters={episode.characters}/>
                  ))}
                </div>
            </ContentEpsodes>
        </Container>
    </>
  )
}
