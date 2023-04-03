import logo from "../../../public/logo.svg"
import { Container } from "./style"

import Link from "next/link"

export const Header = () => {
    return(
        <Container>
            <Link className="link" href="../">
                <img src={logo.src} alt="Logo rick and morty" />
            </Link>

            <nav>
                <ul>
                    <li>
                        <Link className="link" href="../characters">
                            Characters
                        </Link>
                    </li>
                    <li>
                        <Link className="link" href="../episodes">
                            Episodes
                        </Link>
                    </li>
                    <li>
                        <Link className="link" href="../favorites">
                            Favorites
                        </Link>
                    </li>
                </ul>
            </nav>
        </Container>
    )
}