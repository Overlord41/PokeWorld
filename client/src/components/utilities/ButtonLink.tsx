import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

interface Props {
  LinkTo: string
  ColorBase?: string
  ColorHover?: string
}

interface PropsBtn {
  ColorBase?: string
  ColorHover?: string
}

const BtnLink = styled.div<PropsBtn>`
  display: block;
  justifycontent: 'center';
  padding: 10px;
  border-radius: 8px;
  text-align: center;
  background: ${(props) => (props.ColorBase ? props.ColorBase : '#3B9AF3')};
  transition: 1.5s;
  a {
    text-decoration: none;
    color: #fff;
    font-size: 1.5rem;
  }

  &:hover {
    background: ${(props) => (props.ColorHover ? props.ColorHover : '#1164B1')};
  }
`

export const ButtonLink: FC<Props> = ({ LinkTo, ColorBase, ColorHover }) => {
  return (
    <BtnLink ColorBase={ColorBase} ColorHover={ColorHover}>
      <NavLink to={LinkTo}>Start</NavLink>
    </BtnLink>
  )
}
