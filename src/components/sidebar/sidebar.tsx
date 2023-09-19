import styled from "styled-components"

import NavButton from "./navButton"

import sunny from "../../assets/sun-svgrepo-com.svg"
import star from "../../assets/stars-svgrepo-com.svg"
import calendar from "../../assets/calendar-svgrepo-com.svg"
import house from "../../assets/house-medical-svgrepo-com.svg"

const Aside = styled.aside`
    background: #2c2c2c;
    display: grid;
    grid-template-rows: 1fr 2fr 1fr;
    padding: 0.5rem;
`


export default function Sidebar(): React.ReactElement {
    return (
        <Aside>
            <div></div>
            <div>
                <NavButton title="My day" icon={sunny} linkAdress={"/"} />
                <NavButton title="Important" icon={star} linkAdress={"/important"} />
                <NavButton title="Planned" icon={calendar} linkAdress={"/planned"} />
                <NavButton title="Tasks" icon={house} linkAdress={"/tasks"} />
            </div>
            <div></div>

        </Aside>
    )
}