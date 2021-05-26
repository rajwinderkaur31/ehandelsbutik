
import React,{ useState } from 'react'
import  StarWarsAPIService  from '../../shared/api/service/StarWarsAPIService'

export const GalleryView = () => {
const [data, setData] = useState()
const [characterID,  setCharacterID] = useState()
    
    const fetchData = async () => {
        try {
             const response = await StarWarsAPIService.getStarWarsCharacter(characterID)
             setData(response.data)
        } catch (error) {
            console.log('error occured', error)
        }
    }

    return (
        <div>
            <button onClick={() => fetchData()}>make api call</button>
            <button onClick={() => console.log(data)}>check my state</button>
            <input placeholder='search for character ID' 
               onChange={event => setCharacterID(event.target.value)} />
            <h1>name: {data?.name}</h1> 
            <h1>hair_color: {data?.hair_color}</h1>
            <h1>gender: {data?.gender}</h1>
            <h1>height: {data?.height} cm</h1>
        </div>
    )
}
