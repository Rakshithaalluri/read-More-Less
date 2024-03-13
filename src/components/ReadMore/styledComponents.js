// Style your elements here
// Style your elements here
import styled from 'styled-components'

export const ReactHooksContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`

export const ReactHooksDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40%;
  @media screen and (max-width: 576px) {
    width: 80%;
  }
`

export const ReactHooksHeading = styled.h1`
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 0px;
  margin-top: 20px;
`

export const ReactText = styled.p`
  color: #334155;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 0px;
  @media screen and (max-width: 576px) {
    font-size: 12px;
  }
`

export const ReactDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin-top: 0px;
`

export const ReactImage = styled.img`
  width: 100%;
  height: 55%;
  margin-top: 30px;
  @media (max-width: 576px) {
    height: 80%;
  }
`

export const ReactDescription = styled.p`
  color: #334155;
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 400;
`

export const ReactReadMoreButton = styled.button`
  background-color: #1f81ff;
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 10px;
  border: none;
  outline: none;
  border-radius: 4px;
  height: 30px;
  width: 80px;
`
