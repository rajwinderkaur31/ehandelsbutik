import { useState, useEffect } from 'react'
import { useHistory }from 'react-router-dom'
import RoutingPath from '../../routes/RoutingPath'
import PokemonAPIService from '../../shared/api/service/PokemonAPIService'

export const NewsView = () => {
    const history =useHistory()
    const  [APIData, setAPIData ] = useState()
    const [loading, setLoading] = useState(true)
    const fetchData = async () => {
        try {
            const { data } = await PokemonAPIService.get100Pokemons()
            setAPIData(data)  
            setLoading(false) 
        } catch (error) {
            console.error(error)
    }
}
useEffect(() =>{
    fetchData()
})
const displayData = () => {
    if (!loading) {
    return APIData.results?.map((x) =>
    <div key={x.name}>
    <h1 onClick={() => history.push(RoutingPath.itemDetailView, x)}>{x.name}</h1>
    </div>
    )
}
}

    return (
        <div>
           <h1 onClick={() => console.log(APIData)}>This is the newsview</h1>
           {displayData()}
        </div>
    )
}
