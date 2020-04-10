import styled from 'styled-components'

const RequestTime = styled.p`
  color: ${props => props.theme.colors.text.light};
  font-size: ${props => props.theme.fontSizes.small};
  margin: ${props => props.theme.spacing(1)}
`

export {
  RequestTime,
}
