import React , {useState , useEffect, useCallback} from 'react'
import {useRouter} from 'next/router'
import style from  '../../styles/id.module.scss'
import Image from 'next/image'


const CharcterDetails = () => {
    const [character, setCharacter] = useState({})
    const router = useRouter()
    const charId = router.query.characterId

    const API_ENDPOINT = `https://www.breakingbadapi.com/api/characters/${charId}`
    
    const loadUser = useCallback ( async () => {
        const response = await fetch(API_ENDPOINT)
        const data = await response.json()
        setCharacter(data)
    },[API_ENDPOINT])

    useEffect(() => {
        loadUser()
    },[loadUser])




  return (
    <div className={style.container}>
       
    
     <div className={style.card_container}>

            <Image alt={character[0]?.name} height={350} width={300} src={character[0]?.img} />
       
        <div className={style.char_info}>
            <p>Name : {character[0]?.name}</p>
            <p>Nickname : {character[0]?.nickname}</p>
            <p>Status : {character[0]?.status}</p>
            <p>Birthday : {character[0]?.birthday}</p>
            <p>Portrayed : {character[0]?.portrayed}</p>
            <p>Appearance(seasons) : {character[0]?.appearance.toString()}</p>
            <p>Occupation : {character[0]?.occupation.map((occu, idx) =>{
                return <span key={idx}>{occu}{idx === occu.length -1 ? <span>.</span>: <span>,</span>}</span>
            } )}</p>
        </div>
     </div>
    </div>
  )
}

export default CharcterDetails