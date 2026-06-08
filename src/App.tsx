import { Fragment } from "react/jsx-runtime";
import { Container } from "./components/Container/index.tsx";
import { Heading } from "./components/Heading/index.tsx";

import "./styles/theme.css";
import "./styles/global.css";

export function App() {
    return (
        <Fragment>
            <Container> 
                <Heading>Logo</Heading>
            </Container>

            <Container> 
                <Heading>Menu</Heading>
            </Container>

        </Fragment>
    )
}

