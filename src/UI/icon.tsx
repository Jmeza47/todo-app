import styled from "styled-components"

const IconImg = styled.img`
    width: 20px;
    margin: 0 1rem
`

export default function Icon({ src, rel }: { src?: string, rel?: string }) {
    return <IconImg src={src} alt={rel ? rel : "Icon"} />
}