import styled from 'styled-components'
import EmptyState from '../../components/EmptyState'

const Container = styled.div`
  background-image: Bg;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  position: absolute;
  width: 100%;
`
const EmptyStateNotFound = styled(EmptyState)`
  margin-top: 0;
`

const Message = styled.p`
  color: ${props => props.theme.colors.text.main};
  font-size: ${props => props.theme.fontSizes.small};
`

const Title = styled.h1`
  color: ${props => props.theme.colors.text.main};
  font-size: ${props => props.theme.fontSizes.large};
`

export { Container, EmptyStateNotFound, Message, Title }
