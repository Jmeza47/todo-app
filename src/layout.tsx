import Styled from "styled-components"
import Sidebar from "./components/sidebar/sidebar";
import Main from "./components/main/main";



const Wrapper = Styled.main`
display: grid;
grid-template-columns: 20% 80%;
height: 100dvh
`

export default function Layout(): React.ReactElement {
    return (
        <Wrapper>
            <Sidebar />
            <Main />
        </Wrapper>
    )
}