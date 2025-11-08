import { useEffect,useState } from 'react'
import './App.css'
import PokeInfoCard from './Components/PokeInfoCard/PokeInfoCard';

function App() {
  const [count, setCount] = useState(0)

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');


  useEffect(() => {
    setLoading(true);
    setError('');

    // Listado principal
    fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
      .then((res) => {
        if (!res.ok) throw new Error('Error HTTP ' + res.status);
        return res.json();
      })
      .then((data) => {
        // Para cada Pokémon, hacemos otra llamada para obtener detalles
        return Promise.all( // Te permite realizar múltiples fetch en paralelo (más rápido).
          data.results.map((pokemon) =>
            fetch(pokemon.url)
              .then((res) => res.json())
              .then((details) => ({
                name: details.name,
                img: details.sprites.front_default,
                types: details.types.map((t) => t.type.name),
              }))
          )
        );
      })
      .then((items) => {
        setArticles(items);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []); // [] = solo una vez al ejecutar

  return (
    <>
      <header>
        
      </header>
      <main>
          <div className="container">
            <div className="row">
              {articles.map((a) => (
                <PokeInfoCard
                  key={a.name}
                  name={a.name}
                  img={a.img}
                  types={a.types}
                />
              ))}
            </div>
           

        </div>

      </main>
      <footer></footer>
    </>
  )
}

export default App
