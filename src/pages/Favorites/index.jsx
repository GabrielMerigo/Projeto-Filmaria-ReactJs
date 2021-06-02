import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../Favorites/Favoritos.css'

function Favoritos() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    setFilmes(JSON.parse(localStorage.getItem('filmes')) || [])
  }, [])

  function ExcluirFilme(e){
    console.dir(e.target)
  }

  return (
    <div>
      <h1 className="tituloFavorito">Meus Filmes</h1>
      <div className="filmesDetails">
        <ul>
          {filmes.map(filme => {
            return (
              <div key={filme.id} className="filme">
                <h4>{filme.nome}</h4>
                <div className="complements">
                  <Link to={`/filme/${filme.id}`}>Ver Detalhes</Link>
                  <button onClick={ ExcluirFilme }>Excluir</button>
                </div>
              </div>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Favoritos