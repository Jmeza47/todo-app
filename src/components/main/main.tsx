import styled from "styled-components"
import { Outlet } from "react-router-dom";

const Wrapper = styled.main`
    padding: 1rem;
    background-color: #212121;
`

export default function Main(): React.ReactElement {
    return (
        <Wrapper>
            <Outlet />
        </Wrapper>
    )
}