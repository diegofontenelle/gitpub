import styled from 'styled-components'
import { ErrorCircle } from '@styled-icons/boxicons-regular/ErrorCircle'
import { Warning } from '@styled-icons/entypo/Warning'

const Container = styled.div`
  bottom: 40px;
  display: flex;
  justify-content: center;
  position: fixed;
  width: 100%;
`

const ErrorIcon = styled(ErrorCircle)`
  color: #fff;
  font-size: ${props => props.theme.fontSizes.small};
  margin-right: ${props => props.theme.spacing(1)};
  width: 24px;
`

const WarningIcon = styled(Warning)`
  color: #fff;
  font-size: ${props => props.theme.fontSizes.small};
  margin-right: ${props => props.theme.spacing(1)};
  width: 24px;
`

const SnackbarContainer = styled.div`
  align-items: center;
  background-color: ${props =>
    props.variant === 'warning'
      ? props.theme.colors.warning
      : props.theme.colors.error};
  border-radius: 4px;
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),
    0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
  display: flex;
  padding: ${props => props.theme.spacing(1)};

  span {
    color: #fff;
    font-size: ${props => props.theme.fontSizes.small};
    line-height: 1.43;
    letter-spacing: 0.01071em;
  }
`

export {
  Container, ErrorIcon, SnackbarContainer, WarningIcon,
}
