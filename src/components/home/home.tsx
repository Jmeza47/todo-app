import styled from 'styled-components'
import Events from '../../assets/Events.svg'
import dots from '../../assets/dots.svg'

const Wrapper = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 10% 80% 10%;
  height: 100%;
`

const MainImage = styled.img`
  width: 40%;
`

const MainHeader = styled.h1`
  margin: 0;
`

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  height: 2rem;
  border-radius: 8px;
  border: 0;
  background-color: #efe332;
  &:hover {
    background-color: #efe332;
  }
`

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Section = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
`

const date = new Date()
const today = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`

export default function Home() {
  return (
    <Wrapper>
      <Header>
        <div>
          <MainHeader>My day</MainHeader>
          <p style={{ margin: 0 }}>{today}</p>
        </div>
        <Button>
          <img src={dots} style={{ width: '20px' }} />
        </Button>
      </Header>
      <Section>
        <MainImage src={Events} alt='' />
      </Section>
      <Footer></Footer>
    </Wrapper>
  )
}
