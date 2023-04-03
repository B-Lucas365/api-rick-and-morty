import { AiOutlineStar, AiFillStar } from "react-icons/Ai"
import { Card } from "./style"

interface CharacterProps {
    characterId?: number,
    character: string,
    characterName?: string,
    selectCharacter?: any,
    cardSmall: boolean,
    favorite: boolean
    addNewFavorite?: any,
    removeFavorite?: any
}

export const Character = ({characterId, character, characterName, selectCharacter, cardSmall, favorite, addNewFavorite, removeFavorite}: CharacterProps) => {
        return (
        <Card id="card-character" small={cardSmall} onClick={selectCharacter ? () => selectCharacter(characterId) : undefined}>
            {!favorite && <div className="block-favorite block-want-favorite" onClick={() => addNewFavorite(characterId !== undefined ? characterId : 0)}><AiOutlineStar color={"#FFF"} /></div>}
            {favorite && <div className="block-favorite block-already-favorite" onClick={() => removeFavorite(characterId !== undefined ? characterId : 0)}><AiFillStar size={12} color={"#FFD600"} /></div>}
            <img src={character} alt="imagem do personagem" />
            <p>{characterName?.split(" ")[0]}</p>
        </Card>
    )
}