import { useEffect, useState } from 'react'
import api from '../../services/api'

function Home() {
  const [filmes, setFilmes] = useState([]);
  useEffect(() => {
    
    async function loadFilmes(){
      const { data } = await api.get('r-api/?api=filmes')
    }
    loadFilmes()

  }, [])
  console.log(filmes);

  return (
    <div className="app">
      <h1>Pagina Home</h1>
    </div>
  );
}

export default Home;
