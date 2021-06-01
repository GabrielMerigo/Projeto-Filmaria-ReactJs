import { useEffect, useState } from 'react'
import api from '../../services/api'
import { Link } from 'react-router-dom'
import '../Home/Home.css';

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
          <article className="container" key={id}>
            <h1 className="titulo">{nome}</h1>
            <img className="img" src={foto} alt="foto" />
            <Link to={`/filme/${id}`} className="acessar">Acessar</Link>
          </article>
        )
      })}
    </div>
  );
}

export default Home;
