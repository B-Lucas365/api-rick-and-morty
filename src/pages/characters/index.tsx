import { Header } from "@/components/Header";
import { Container } from "../../stylesPage/styleCharacter";
import { AllCharacters, Content } from "../../stylesPage/styleCharacter";
import { use, useEffect, useState } from "react";
import { getCharacters } from "@/api/api";
import { Character as CharacterTipes, Info as InfoTipes } from "@/types/Character";

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { CardDetails } from "@/components/CardDetails";
import { Character } from "@/components/Character";
import { Filter } from "@/components/Filter";


export default function Characters(){
    const [characters, setCharacters] = useState<CharacterTipes[]>([])
    const [infoAPI, setInfoAPI] = useState<InfoTipes>({} as InfoTipes);
    const [currentPage, setCurrentPage] = useState(1);
    const [idChosenCharacter, setIdChosenCharacter] = useState(1);
    const [filterStatus, setFilterStatus] = useState("")
    const [filterSpecie, setFilterSpecie] = useState("")
    const [filterGender, setFilterGender] = useState("")

    const [listFavorites, setListFavorites] = useState<number[]>([])

    useEffect(() => {
      const fetchCharacters = async () => {
        const result = await getCharacters(currentPage, filterStatus, filterSpecie, filterGender);
        setInfoAPI(result.info)
        setCharacters(result.results);
      };
    
      fetchCharacters();
    }, [currentPage, filterStatus, filterSpecie, filterGender]);

    useEffect(() => {
      const storedFavorites = localStorage.getItem("listFavorites");
      if (storedFavorites !== null) {
        setListFavorites(JSON.parse(storedFavorites));
      }
    }, [])

    useEffect(() => {
      localStorage.setItem("listFavorites", JSON.stringify(listFavorites))
    }, [listFavorites])


    const selectCharacter = (id: number) => {
      setIdChosenCharacter(id);
    }


    const addNewFavorite = (id: number) => {
      setListFavorites([...listFavorites, id])
    }

    const removeFavorite = (id: number) => {
      const newArray = listFavorites.filter((i) => i !== id);
      setListFavorites(newArray);
    }

    return (
        <>
          <Header />
      
          <Container>
            <Content>
              <h2>Characters</h2>

              <CardDetails characterId={idChosenCharacter}/>
      
              <AllCharacters>
                <Filter setFilterStatus={setFilterStatus} setFilterSpecie={setFilterSpecie} setFilterGender={setFilterGender}/>
    
                <div className="listCharacters">
                  <div className="allCharacters">
                    {characters.map((character) => {
                      let favorite = false;

                      if(listFavorites.find(element => element == character.id)){
                        favorite = true;
                      }
                      
                      return (
                        <Character key={character.id} characterId={character.id} character={character.image} characterName={character.name} selectCharacter={selectCharacter} cardSmall={true} favorite={favorite} addNewFavorite={addNewFavorite} removeFavorite={removeFavorite}/>
                      )
                    })}
                  </div>
        
                  <div className="pagination">
                    <button
                      onClick={() => setCurrentPage((prev) => prev - 1)}
                      disabled={currentPage === 1}
                    >
                      <ArrowBackIosIcon sx={{ fontSize: 18 }} />
                    </button>
        
                    <button
                      onClick={() => setCurrentPage((prev) => prev + 1)}
                      disabled={currentPage === infoAPI.pages}
                    >
                      <ArrowForwardIosIcon sx={{ fontSize: 18 }} />
                    </button>
                  </div>
                </div>
              </AllCharacters>
            </Content>
          </Container>
        </>
      );
} 