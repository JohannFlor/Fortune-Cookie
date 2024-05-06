import { useState } from 'react'
import './App.css'
import quotes from './data/phrases.json'
import photos from './data/photos.json'
import getRandomNumber from './utils/getRandomNumber'
import Phrase from './components/Phrase'
import BtnPhrase from './components/BtnPhrase'

function App() {

  const indexRandom = getRandomNumber(quotes.length)

  const [phraseSelected, setPhraseSelected] = useState(quotes[indexRandom])
  const [bgSelected, setBgSelected] = useState(photos[getRandomNumber(photos.length)])

  const objStyle = {
    backgroundImage: `url(/images/fondo${bgSelected}.png)`
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-cover bg-center" style={objStyle}>
      <h1 className='absolute top-20 text-2xl uppercase font-bold'>Motivational Phrase</h1>
      <article className="max-w-[400px] p-6 bg-blue-400 rounded-xl shadow-2xl">
        <Phrase
          phraseSelected={phraseSelected}
        />
        <BtnPhrase
          setPhraseSelected={setPhraseSelected}
          setBgSelected={setBgSelected}
        />
      </article>
    </div >
  )
}

export default App