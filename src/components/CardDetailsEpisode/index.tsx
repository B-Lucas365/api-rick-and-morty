import { Container } from "./style"

interface EpisodeProps {
    name: string,
    episode: string,
    airDate: string
}
export const CardDetailsEpisode = ({name, episode, airDate}: EpisodeProps) => {
    return(
        <Container>
            <h1>{name}</h1>
            <div className="details">
                <p>{episode}</p>
                <p>{airDate}</p>
            </div>
        </Container>
    )
}