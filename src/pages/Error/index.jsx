import { Link } from 'react-router-dom'
import '../Error/Error.css'

function Error(){
  return(
    <>
      <h1 className="titulo-erro">Página não encontrada...</h1>
      <Link to="/">Veja todos os filmes.</Link>
    </>
  )
}

export default Error