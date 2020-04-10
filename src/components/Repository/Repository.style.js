import styled from 'styled-components'

const Container = styled.div`
  align-items: center;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);
  display: grid;
  grid-template-rows: 50%;
  grid-template-columns: 100%;
  height: 120px;
  margin: ${({ theme }) => theme.spacing(1)} 0;
  padding: 0 ${({ theme }) => theme.spacing(1)};
`
const Content = styled.div`
  padding: ${({ theme }) => theme.spacing(1)};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  & > p {
    color: ${({ theme }) => theme.colors.text.main};
    font-size: ${({ theme }) => theme.fontSizes.small};
    max-height: 30px;
    margin: 0;
    overflow: hidden;
    padding: 0;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`

const Footer = styled.div`
  color: ${props => props.theme.colors.text.light};
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 0;

  & > button {
    background: transparent;
    border: none;
    color: ${props => props.theme.colors.text.link};
    cursor: pointer;
    font-size: ${props => props.theme.fontSizes.small};
    outline: none;
  }
`

const Title = styled.p`
  align-items: center;
  background: transparent;
  color: ${({ theme }) => theme.colors.text.main};
  display: flex;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  margin: 0;
  min-height: 48px;
  height: 100%;
  padding: 0;
  word-break: break-all;
`

export {
  Container,
  Content,
  Footer,
  Title,
}
