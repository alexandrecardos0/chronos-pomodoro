import { Fragment } from "react/jsx-runtime";
import { Container } from "./components/Container/index.tsx";
/*import { Heading } from "./components/Heading/index.tsx";*/
import { Logo } from "./components/Logo/index.tsx";
import { Menu } from "./components/Menu/index.tsx"
import { CountDown } from "./components/CountDown/index.tsx";

import "./styles/theme.css";
import "./styles/global.css";



export function App() {
    return (
        <Fragment>
            <Container> 
                <Logo/>
            </Container>

                <Container> 
                    <Menu/>
                </Container>

                    <Container> 
                        <CountDown/>
                    </Container>

                <Container>
                    <form className="form" action="">
                        <div className="formrow">
                            <label htmlFor="meuInput">task</label>
                            <input id="meuInput" type="text" />
                        </div>

                        <div className="formrow">
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>

                        <div className="formrow">
                            <p>Ciclos</p>
                            <p>0000</p>
                        </div>

                        <div className="formrow">
                            <button>Enviar</button>
                        </div>


                    </form>
                </Container>    

        </Fragment>
    )
}

