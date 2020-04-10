import styled from 'styled-components'

const FixedContainer = styled.div`
  bottom: 2.5%;
  left: calc(50% - 75px);
  position: fixed;
`

const List = styled.ul`
  background-color: #fff;
  border-radius: ${props => props.theme.spacing(0.5)};
  box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);
  display: flex;
  justify-content: center;
  list-style: none;
  padding: ${props => props.theme.spacing(1)} 0;
  width: 150px;
`

const Page = styled.li`
  margin-right: 8px;
`

const TextButton = styled.button`
  background-color: transparent;
  border: 0;
  color: ${props => props.theme.colors.primary.main};
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSizes.small};
  outline: none;
`

export {
  FixedContainer,
  List,
  Page,
  TextButton,
}
