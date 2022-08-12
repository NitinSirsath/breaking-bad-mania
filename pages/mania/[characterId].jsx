import React , {useState , useEffect} from 'react'
import {useRouter} from 'next/router'

const CharcterDetails = () => {
    const [character, setCharacter] = useState([{}])
    const router = useRouter()
    const charId = router.query.characterId

    const API_ENDPOINT = `https://www.breakingbadapi.com/api/characters/${charId}`

    useEffect(() => {
        loadUser()
    },[])

    
    const loadUser = async () => {
        const response = await fetch(API_ENDPOINT)
        const data = await response.json()
        setCharacter(data)
    }
    console.log(character,`${charId} id`);
  return (
    <div>CharcterDetails{charId}
    <h1>{character[0].nickname}</h1>    
    </div>
  )
}

export default CharcterDetails