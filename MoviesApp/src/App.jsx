import "./app.css"
import { useRef } from "react"
import { Movies } from "./components/Movies"
import { useMovies } from "./hooks/useMovies"
function App() {
  const { movies: mappedMovies } = useMovies()
  const inputRef = useRef()

  const handleSubmit = (event) => {
    event.preventDefault()
    const fields = new FormData(event.target)
    const query = fields.get("query")
    console.log(query)
  }

  return (
    <div className="page">
      <header>
        <h1>Buscador de Peliculas</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input
            name="query"
            ref={inputRef}
            type="text"
            placeholder="avengers, stars wars, ........"
          />
          <button type="submit">Buscar</button>
        </form>
      </header>

      <main>
        <Movies movies={mappedMovies} />
      </main>
    </div>
  )
}

export default App
