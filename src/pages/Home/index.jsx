import { useEffect, useState } from 'react'
import api from '../../services/api'
import { Link } from 'react-router-dom'
import { Container, Titulo, Img } from '../../styles'

function Home() {
  const [filmes, setFilmes] = useState([]);
  useEffect(() => {
    async function loadFilmes() {
      const { data } = await api.get('r-api/?api=filmes')
      setFilmes(data)
    }
    loadFilmes()

  }, [])

  return (
    <div>
      {filmes.map(filme => {
        const { foto, nome, id } = filme
        return (
          <Container key={id}>
            <Titulo cor="ccc">{nome}</Titulo>
            <Img className="img" src={foto} alt="foto" />
            <Link to={`/filme/${id}`} className="acessar">Acessar</Link>
          </Container>
        )
      })}
    </div>
  );
}

export default Home;
