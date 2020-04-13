import styled from 'styled-components'

const BackButton = styled.button`
  background: transparent;
  border: none;
  color: ${props => props.theme.colors.text.link};
  cursor: pointer;
  font-size: ${props => props.theme.fontSizes.small};
  margin: 0;
  outline: none;
  padding: 0;
`

export { BackButton }
