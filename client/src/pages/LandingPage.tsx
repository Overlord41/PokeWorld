import styled, { StyledComponent } from 'styled-components'
import { ButtonLink } from '../components/utilities/ButtonLink'

const LandPage: StyledComponent<'div', any, {}, never> = styled.div`
  background-color: #464646;
  background-image: url('../../resources/images/1074780.jpg');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
`

export const LandingPage = () => {
  return (
    <LandPage>
      <div
        style={{
          padding: '50px',
        }}
      >
        <img
          src="../../resources/images/PokePapper.png"
          style={{ width: '340px', height: '120px', marginBottom: '50px' }}
        />
      </div>
      <ButtonLink LinkTo="/home" ColorBase="#57CD4C" Text="Start" />
    </LandPage>
  )
}
