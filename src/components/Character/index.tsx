import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { Card } from "./style"
import { yellow } from "@mui/material/colors";

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
            {!favorite && <div className="block-favorite block-want-favorite" onClick={() => addNewFavorite(characterId !== undefined ? characterId : 0)}><StarBorderIcon sx={{ fontSize: 18 }}/></div>}
            {favorite && <div className="block-favorite block-already-favorite" onClick={() => removeFavorite(characterId !== undefined ? characterId : 0)}><StarIcon sx={{ fontSize: 16, color: yellow[500] }}/></div>}
            <img src={character} alt="imagem do personagem" />
            <p>{characterName?.split(" ")[0]}</p>
        </Card>
    )
}