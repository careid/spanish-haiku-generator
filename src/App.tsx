import { useState } from 'react'
import './App.css'

const haikus = [
  {
    lines: [
      'Brisa de verano',
      'susurra entre las hojas',
      'paz del jardín'
    ]
  },
  {
    lines: [
      'Luna plateada',
      'refleja en el estanque',
      'noche serena'
    ]
  },
  {
    lines: [
      'Flores de cerezo',
      'danzan con el viento suave',
      'lluvia rosada'
    ]
  }
]

function App() {
  const [currentHaiku, setCurrentHaiku] = useState(0)

  const nextHaiku = () => {
    setCurrentHaiku((current) => (current + 1) % haikus.length)
  }

  return (
    <div className="haiku-container">
      <h1>Haikus en Español</h1>
      <div className="haiku">
        {haikus[currentHaiku].lines.map((line, index) => (
          <p key={index} className="haiku-line">{line}</p>
        ))}
      </div>
      <button onClick={nextHaiku} className="next-button">
        Siguiente Haiku
      </button>
    </div>
  )
}

export default App