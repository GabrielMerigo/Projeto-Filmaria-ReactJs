import '../Filme/FilmeInfo.css'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import api from '../../services/api'

function Filme() {
  const { id } = useParams()
  const [filme, setFilme] = useState([])

  useEffect(() => {
    async function getFilme() {
      const { data } = await api.get(`r-api/?api=filmes/${id}`)
      setFilme(data);
    }
    getFilme()
  }, [])

  return (
    <div key={filme.id}>
      <h1>{filme.nome}</h1>
      <img src={filme.foto} alt={filme.nome} />
      <p>{filme.sinopse}</p>
    </div>
  )
}

export default Filme