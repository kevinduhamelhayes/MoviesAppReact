import "./app.css"
import { useEffect, useState } from "react"
import { Movies } from "./components/Movies"
import { useMovies } from "./hooks/useMovies"

function App() {
  const { movies } = useMovies()
  const [query, setQuery] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log({ query })
  }
  const handleChange = (event) => {
    setQuery(event.target.value)
  }
  useEffect(() => {
    if (query.length === 0) {
      setError("No se ha ingresado un valor")
      return
    }
    if (query.length < 3) {
      setError("Ingrese mas de 3 caracteres")
      return
    }
    if (query.match(/^[0-9]+$/)) {
      setError("No se permiten numeros")
      return
    }
    setError(null)
  }, [query])

  return (
    <div className="page">
      <header>
        <h1>Buscador de Peliculas</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            value={query}
            name="query"
            type="text"
            placeholder="avengers, stars wars, ........"
          />
          <button type="submit">Buscar</button>
        </form>
        {error && <p style={{ color:"red" }}>{error}</p>}
      </header>

      <main>
        <Movies movies={movies} />
      </main>
    </div>
  )
}

export default App
