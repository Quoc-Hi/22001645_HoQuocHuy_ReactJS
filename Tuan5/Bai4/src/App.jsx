import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState([])
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState([])

  const url = "https://jsonplaceholder.typicode.com/posts";

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url)
      const data = await res.json()

      setData(data)
      setFilter(data)
    }

    fetchData()
  }, [])

  function handleSearch(e) {
    const value = e.target.value
    setSearch(value)

    const result = data.filter((item) => {
      return item.title.toLowerCase().includes(value.toLowerCase())
    })

    setFilter(result)
  }

  return (
    <>
      <input
        type="text"
        value={search}
        placeholder="Search key..."
        onChange={handleSearch}
      />

      {
        filter.map((item) => {
          return (
            <div key={item.id}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </div>
          )
        })
      }
    </>
  )
}

export default App