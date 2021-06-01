import '../Filme/FilmeInfo.css'
import { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom';
import api from '../../services/api'

function Filme() {
  const { id } = useParams()
  const [filme, setFilme] = useState([])
  const [loading, setLoading] = useState(true)
  const history = useHistory()

  useEffect(() => {
    async function getFilme() {
      const { data } = await api.get(`r-api/?api=filmes/${id}`)

      if (data.length === 0) {
        //Tentou acessar uma página que não existe, retornei para a home.
        history.replace('/')
        return;
      }

      setFilme(data)
      setLoading(false)
    }

    getFilme()
    return () => {
      console.log('Componente Desmontado');
    }
  }, [history, id])


  if (loading) {
    return (
      <div>
        <h1>Carregando...</h1>
      </div>
    )
  }
  return (
    <div key={filme.id}>
      <h1>{filme.nome}</h1>
      <img src={filme.foto} alt={filme.nome} />
      <strong>Sinopse</strong>
      <p>{filme.sinopse}</p>
      <button>Salvar</button>
      <button>Trailer</button>
    </div>
  )
}

export default Filme