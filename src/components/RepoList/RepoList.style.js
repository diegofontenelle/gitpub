import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0;
  margin-top: ${props => props.theme.spacing(4)};
  padding: 0;
  width: 100%;
`

const Col = styled.div`
  width: 100%;

  @media(min-width: 1024px) {
    width: calc(33% - ${({ theme }) => theme.spacing(2)});
  }
`

export {
  Container,
  Col,
}
