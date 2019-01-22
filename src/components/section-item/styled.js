import styled from 'styled-components'

export const Item = styled.div`
  margin: 0px 0px 25px 50px;
  font-family: monospace;

  @media (max-width: 640px) {
    margin: 0px 0px 25px 0px;
  }
`

export const Heading = styled.div`
  font-family: montserrat;
`

export const Title = styled.h3`
  border-bottom: 3px solid black;
  display: inline;
  font-weight: bold;
  font-size: 25px;
  padding: 0px 25px 10px 0px;
  margin: 0px 15px 0px 0px;

  @media (max-width: 768px) {
    display: block;
  }

  @media (max-width: 640px) {
    font-size: 18px;
  }
`

export const SubTitle = styled.b`
  display: block;
  margin: 20px 0px 2px;
  font-size: 14px;
  text-transform: uppercase;

  @media (max-width: 640px) {
    font-size: 12px;
    margin: 5px 0px 2px;
  }
`

export const Duration = styled.span`
  @media (max-width: 640px) {
    font-size: 11px;
  }
`

export const Bullets = styled.ul`
  font-family: monospace;

  @media (max-width: 640px) {
    padding-left: 20px;
  }
`

export const Bullet = styled.li`
  margin-bottom: 7px;

  @media (max-width: 640px) {
    margin-bottom: 12px;
  }
`

export const Links = styled.div`
  margin-left: 38px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
`

export const Link = styled.a`
  color: black;
  font-size: 14px;
  margin-right: 10px;
  font-weight: bold;
  margin-top: 5px;
`
