import styled from 'styled-components'

const Button = styled.button`
  background-color: ${props => props.theme.colors.primary.main};
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
  border-radius: ${({ theme }) => theme.spacing(0.25)};
  color: #fff;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSizes.small};
  outline: none;
  padding: ${({ theme }) => theme.spacing(1)};
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);
  :hover {
    background-color: ${({ theme }) => theme.colors.primary.light};
  }
`

const Container = styled.main`
  display: flex;
  max-width: 100%;
  padding: ${({ theme }) => theme.spacing(1)};

  @media(min-width: 1024px) {
    padding: ${({ theme }) => theme.spacing(2)} ${({ theme }) => theme.spacing(4)};
  }
`

const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.large};
  margin: 0;
  margin-bottom: ${({ theme }) => theme.spacing(2)};
  padding: 0;
`

export { Button, Container, Title }
