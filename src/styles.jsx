import styled from 'styled-components';

export const Container = styled.div`
  margin: 3rem 5rem;
  text-align:center;
  display: flex;
  flex-direction: column;

  a{
    background: black;
    padding: 0.6rem;
    color: white;
    font-size: medium;
    text-decoration: none;
    font-size: 2rem;
    font-family: Arial, Helvetica, sans-serif;
    border-bottom-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
  }
`

export const Titulo = styled.h1`
  font-size: ${props => `${props.tamanho}rem`};
  color: ${props => `#${props.cor}`};
  padding-bottom: 0.5rem;
  font-family: Arial, Helvetica, sans-serif;
`

export const Img = styled.img`
  width: 75.4rem;
  justify-content: center;
  max-height: 30rem;
  margin: 0 auto;
`

/*
*{
  overflow-x: hidden;
}

.titulo{
  font-size: 3rem;
  padding-bottom: 0.5rem;
  font-family: Arial, Helvetica, sans-serif;
}

.img{
  width: 85rem;
  max-height: 30rem;
}

.acessar{
  background: black;
  padding: 0.6rem;
  color: white;
  font-size: medium;
  text-decoration: none;
  font-size: 2rem;
  font-family: Arial, Helvetica, sans-serif;
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
}
*/