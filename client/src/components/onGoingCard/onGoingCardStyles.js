import styled from "styled-components";


export const OngoingCardContainer = styled.div`
  margin: 5rem 0;
  display: flex;
  @media screen and (max-width: 500px) {
    flex-direction: column;
  }

  img {
    border: 2.5px solid #70AD47;
    border-radius: 4px;
    width: 300px;
    height: 300px;
    @media screen and (max-width: 500px) {
      width: 300px;
      height: 300px;
      margin: 0 auto;
    }
  }
`

export const OngoingDescContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5rem;
  font-family: "Exo", sans-serif;

  @media screen and (max-width: 500px) {
    margin: 0 auto;
  }

  span {
    font-size: 1.5rem;
    font-weight: 800;
    margin: 1rem 0;
    @media screen and (max-width: 500px) {
      text-align: center;
    }
  }

  span:first-of-type {
    margin: 0 0;
  }

  p {
    margin-top: 30px;
    font-size: 1.3rem;
    font-weight: 500;
    @media screen and (max-width: 500px) {
      text-align: center;
    }
  }
`