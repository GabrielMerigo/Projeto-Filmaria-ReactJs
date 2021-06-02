import '../Filme/FilmeInfo.css'
import { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom';
import api from '../../services/api'
import { toast } from 'react-toastify';

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

  function salvarFilme(){
    const minhaLista = localStorage.getItem('filmes');
    let filmesSalvos = JSON.parse(minhaLista) || [];

    const hasFilme = filmesSalvos.some(filmeAtual => filmeAtual.id === filme.id)

    if(hasFilme){
      toast.error('Você já possui esse filme na sua lista.')
      return
    }
    
    filmesSalvos.push(filme)
    localStorage.setItem('filmes', JSON.stringify(filmesSalvos))
    toast.success('Filme salvo com sucesso.')
  }
  
  return (
    <div key={filme.id} className="container-info">
      <h1 className="titulo-info">{filme.nome}</h1>
      <img className="img-info" src={filme.foto} alt={filme.nome} />
      <strong>Sinopse</strong>
      <p className="paragraph">{filme.sinopse}</p>
      <div className="btns">
        <button onClick={salvarFilme}>Salvar</button>
        <a className="trailer"
          href={`https://youtube.com/results?search_query=${filme.nome} Trailer`}
          target="blank"
        >Trailer</a>
      </div>
    </div>
  )
}


export default Filme