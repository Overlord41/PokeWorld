import { FC } from 'react'
import styled from 'styled-components'

export const HomePage: FC = () => {
  // const [pokeState, setPokeState] = useState<boolean>(false)

  // const PokeBackground = styled.div`
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;
  //   background-color: ${pokeState ? '#DF3207' : '#55A2EA'};
  //   height: 100vh;
  // `

  const ElemHeader = styled.header`
    color: #fff;
    grid-area: header;
  `
  const ElemNav = styled.nav`
    color: #fff;
    grid-area: navbar;
  `
  const ElemAside = styled.aside`
    color: #fff;
    grid-area: content;
  `
  const ElemArticle = styled.article`
    color: #fff;
    grid-area: sidebar;
  `
  const ElemFooter = styled.footer`
    color: #fff;
    grid-area: footer;
  `
  const GridContainer = styled.div`
    display: grid;
    background-color: black;
    min-height: 100vh;
    grid-gap: 10px;
    grid-template-areas:
      'header'
      'navbar'
      'content'
      'sidebar'
      'footer';
    & > * {
      border: 2px solid #fff;
      // background-color: red;
      padding: 20px;
    }

    @media (min-width: 600px) {
      // background-color: blue;
      // & > * {
      //   background-color: red;
      // }
      grid-template-rows: 100px 50px 1fr 100px;
      grid-template-columns: 150px auto;
      grid-template-areas:
        'header header'
        'navbar navbar'
        'sidebar content'
        'footer footer';
    }
  `

  return (
    <GridContainer>
      <ElemHeader>Header</ElemHeader>
      <ElemNav>Navegation</ElemNav>
      <ElemAside>Aside</ElemAside>
      <ElemArticle>Atricle</ElemArticle>
      <ElemFooter>Footer</ElemFooter>
    </GridContainer>
    // <PokeBackground>
    //   <div
    //     style={{
    //       background:
    //         'url(https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png)',
    //       // background:
    //       //   'url(https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png)',
    //       width: '90px',
    //       height: '90px',
    //       padding: '0px',
    //       backgroundSize: 'cover',
    //       position: 'absolute',
    //     }}
    //   >
    //     <div
    //       style={{
    //         background: 'url(../../resources/images/Pokeball.png)',
    //         width: '150px',
    //         height: '150px',
    //         padding: '0px',
    //         backgroundSize: 'cover',
    //         opacity: '0.6',
    //         position: 'relative',
    //         right: '40px',
    //         bottom: '30px',
    //       }}
    //     ></div>
    //   </div>
    // </PokeBackground>
  )
}
