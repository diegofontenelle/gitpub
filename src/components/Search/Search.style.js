import styled from 'styled-components'
import { MagnifyingGlass } from '@styled-icons/entypo/MagnifyingGlass'

const SearchContainer = styled.div`
  background-color: #fff;
  border: 1px solid ${({ theme }) => theme.colors.primary.light};
  border-radius: ${({ theme }) => theme.spacing(3)};
  color: ${({ theme }) => theme.colors.primary.light};
  display: flex;
  align-items: center;
  margin: 0;
  width: 100%;
  padding: ${({ theme }) => theme.spacing(0.75)}
    ${({ theme }) => theme.spacing(2)};

  :hover {
    box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);
    border-color: rgba(223, 225, 229, 0);
  }
`

const SearchIcon = styled(MagnifyingGlass)`
  width: ${({ theme }) => theme.spacing(2)};
`

const SearchInput = styled.input`
  border: 0;
  color: ${({ theme }) => theme.colors.primary.main};
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  font-size: ${({ theme }) => theme.fontSizes.small};
  height: ${({ theme }) => theme.spacing(2)};
  margin-left: 1rem;
  outline: none;

  ::placeholder {
    color: ${({ theme }) => theme.colors.primary.light};
  }
`

export { SearchContainer, SearchIcon, SearchInput }
