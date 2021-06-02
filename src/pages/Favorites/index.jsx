import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import '../Favorites/Favoritos.css';

function Favoritos() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    setFilmes(JSON.parse(localStorage.getItem('filmes')) || [])
  }, [])

  function ExcluirFilme(id){
    const filmesFiltrados = filmes.filter(item => {
      return(item.id !== id)
    })
    localStorage.setItem('filmes', JSON.stringify(filmesFiltrados))
    setFilmes(filmesFiltrados)
    toast.success('Filme Excluído com sucesso.')
  }

  return (
    <div>
      <h1 className="tituloFavorito">Meus Filmes</h1>
      <span>{filmes.length === 0 ? 'Você ainda não possui filme salvo :(' : ''}</span>
      <div className="filmesDetails">
        <ul>
          {filmes.map(filme => {
            return (
              <div key={filme.id} className="filme">
                <h4>{filme.nome}</h4>
                <div className="complements">
                  <Link to={`/filme/${filme.id}`}>Ver Detalhes</Link>
                  <button onClick={() => ExcluirFilme(filme.id)}>Excluir</button>
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