import styled from "styled-components"
import { Link, To } from "react-router-dom"

const MainButton = styled.button`
display: flex;
align-items: center;
justify-content: start;
color: white;
width: 100%;
height: 2rem;
padding-left: 2rem;
border-radius: 8px;
border: 0;
background-color: rgb(0,0,0,0);
&:hover{
    background-color: #424242;
}
`

const Icon = styled.img`
margin-right: 10px;
width: 20px;
`

export default function Button({ title, icon, linkAdress }: { title: string, icon?: string, linkAdress: To }): React.ReactElement {

    return (
        <Link to={linkAdress} style={{ textDecoration: "none", textAlign: "center" }}>
            <MainButton>
                <Icon src={icon} />
                {title}
            </MainButton>
        </Link>
    )
}