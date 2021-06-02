import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../Favorites/Favoritos.css'

function Favoritos() {
  const filmes = JSON.parse(localStorage.getItem('filmes'))

  return (
    <div>
      <h1 className="tituloFavorito">Meus Filmes</h1>
      <div className="filmesDetails">
        <ul>
          {filmes.map(item => {
            return (
              <div key={item.id} className="filme">
                <h4>{item.nome}</h4>
                <div className="complements">
                  <Link href="">Ver Detalhes</Link>
                  <button>Excluir</button>
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