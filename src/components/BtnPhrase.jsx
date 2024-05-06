import getRandomNumber from "../utils/getRandomNumber"
import quotes from '../data/phrases.json'
import photos from '../data/photos.json'

const BtnPhrase = ({ setPhraseSelected, setBgSelected }) => {

  const changePhrase = () => {
    const indexRandom = getRandomNumber(quotes.length)
    const phaseRandom = quotes[indexRandom]
    setPhraseSelected(phaseRandom)
    setBgSelected(photos[getRandomNumber(photos.length)])
  }

  return (
    <button className="ml-auto block cursor-pointer bg-blue-800 py-2 px-4 rounded-xl text-white hover:brightness-150" onClick={changePhrase}>See other</button>
  )
}

export default BtnPhrase