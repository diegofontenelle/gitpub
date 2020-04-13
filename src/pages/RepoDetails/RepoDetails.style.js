import styled from 'styled-components'

const Avatar = styled.img`
  height: ${props => props.size || '36'}px;
  margin-right: ${props => props.theme.spacing(1)};
  width: ${props => props.size || '36'}px;
`

const Background = styled.div`
  display: none;

  @media (min-width: 1024px) {
    display: block;
    background: linear-gradient(135deg, #330867, #31a7bb);
    position: fixed;
    bottom: -45vh;
    left: 0;
    width: 100%;
    height: 60vh;
    transform: skewY(-15deg);
    box-shadow: 0 0 50px rgba(60, 117, 162, 0.4);
    z-index: -1;
  }
`

const BackgroundLeft = styled(Background)`
  @media (min-width: 1024px) {
    background: linear-gradient(37.5deg, #31a7bb, #330867);
    transform: skewY(22deg);
    z-index: -2;
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: 1024px) {
    flex-direction: row;
    margin: ${props => props.theme.spacing(2)} 0;
  }
`

const Row = styled.div`
  align-items: ${props => props.align || 'flex-start'};
  display: flex;
  flex-direction: row;
  justify-content: ${props => props.justify || 'space-between'};
  margin: ${props => props.theme.spacing(props.spacing || 1)} 0;

  a {
    background: transparent;
    border: none;
    color: ${props => props.theme.colors.text.link};
    cursor: pointer;
    font-size: ${props => props.theme.fontSizes.small};
    margin: 0;
    outline: none;
    padding: 0;
    text-decoration: none;
  }

  p,
  span {
    color: ${props => props.theme.colors.text.main};
    font-size: ${props => props.theme.fontSizes.small};
  }
`

const Navigation = styled(Row)`
  @media (min-width: 1024px) {
    position: absolute;
    top: 5px;
    width: calc(100% - 5rem);
  }
`

const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  margin-bottom: ${props => props.theme.spacing(2)};

  h6,
  p,
  span {
    color: ${props => props.theme.colors.text.main};
    margin: ${props => props.theme.spacing(0.5)} 0;

    @media (min-width: 1024px) {
      margin: 0;
    }
  }

  @media (min-width: 1024px) {
    justify-content: flex-start;
  }
`

const Divider = styled.div`
  border-bottom: 1px solid #f0f0f0;

  @media (min-width: 1024px) {
    display: none;
  }
`

const RepoData = styled(DataContainer)``

const OwnerData = styled(DataContainer)`
  margin-top: ${props => props.theme.spacing(2)};

  @media (min-width: 1024px) {
    margin-top: 0;
    padding-left: ${props => props.theme.spacing(2)};
  }
`

export {
  Avatar,
  Background,
  BackgroundLeft,
  Container,
  Divider,
  Navigation,
  OwnerData,
  RepoData,
  Row,
}
