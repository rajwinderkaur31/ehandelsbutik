import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import loadingGif from '../shared/images/pokeball.gif'
import Axios from 'axios'


export const ItemDetail = () => {
    const [APIData, setAPIData] = useState()
    const [loading, setLoading] = useState (true)
    const location = useLocation()

    const fetchData = async () => {
        try {
    const { data } = await Axios.get(location.state.url)
          setAPIData( data )
          setLoading(false)
        } catch (error) {
          console.log(error)
        }
    }

    const displayData = () => {
        if (!loading) {
            return (
                <>
                <img src={APIData?.sprites?.front_default} alt={'error'} />
                <h1>name: {APIData?.name}</h1> 
                <h1>hair_color: {APIData?.hair_color}</h1>
                <h1>gender: {APIData?.gender}</h1>
                <h1>height: {APIData?.height} cm</h1>
                </>  
            )
        }
    }
    useEffect(() => {
        fetchData()
    })

    return (
        loading ? <img src={loadingGif} alt={'error'} /> :
        <div>
    {/*<button onClick={() => console.log(APIData)}>show location</button>*/}
         {displayData()}
        </div>
    )
}
