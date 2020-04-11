import styled from 'styled-components'
import { ErrorCircle } from '@styled-icons/boxicons-regular/ErrorCircle'
import { Warning } from '@styled-icons/entypo/Warning'

const ErrorIcon = styled(ErrorCircle)`
  color: #fff;
  font-size: ${props => props.theme.fontSizes.small};
  margin-right: ${props => props.theme.spacing(1)};
`

const WarningIcon = styled(Warning)`
  color: #fff;
  font-size: ${props => props.theme.fontSizes.small};
  margin-right: ${props => props.theme.spacing(1)};
`

const SnackbarContainer = styled.div`
  background-color: ${props =>
    props.variant === 'warning' ? '#ff9800' : '#f44336'};
  padding: ${props => props.theme.spacing(1)};

  p {
    color: '#fff';
    font-size: ${props => props.theme.fontSizes.small};
  }
`

export { ErrorIcon, SnackbarContainer, WarningIcon }
