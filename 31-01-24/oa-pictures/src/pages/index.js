import OpenAI from "openai";
import { useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  const openai = new OpenAI({ apiKey: process.env.NEXT_PUBLIC_OPENAI_KEY, dangerouslyAllowBrowser: true })
  const [userImageReq, setUserImageReq] = useState("")
  const [inputValue, setInputValue] = useState("")

const onHandleDalle2 = async (e) => {
  e.preventDefault();

const image = await openai.images.generate({ model: 'dall-e-2', prompt: inputValue, size: '1024x1024' })

  setUserImageReq(image.data[0].url)
}

  const onHandleInputValue = (e) => setInputValue(e.target.value)


  return (
    <div>
      <form onSubmit={onHandleDalle2}>
        <input type="text" value={inputValue} onChange={onHandleInputValue} />
        <input type="submit" value="Cerca" />
      </form>
      {
        userImageReq ? <img className={styles.image} src={userImageReq} alt={inputValue} /> : <p>Sto caricando l'immagine</p>
      }
    </div>
  );
}
