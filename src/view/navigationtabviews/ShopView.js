
import PokemoneAPIService from '../../shared/api/service/PokemonAPIService'
import { useState, useEffect } from 'react'
import { useDebounce } from '../../hooks/useDebounce'

export const ShopView = () => {
  const [data, setData] = useState()
  const [search, setSearch] = useState()
  const debounceSearchTerm = useDebounce(search,2000)


  const fetchData = async (x) => {
    if (debounceSearchTerm){
  const { data } = await PokemoneAPIService.searchCharacter(x)
  setData(data)
}
  }
useEffect(() => {
  fetchData(search)
}, [debounceSearchTerm])

  return (
    <div>
    <input placeholder='search for pokemon' onChange={event => setSearch(event.target.value)} />
      <h1>name:{data?.name}</h1>
      <h1>id: {data?.id}</h1>
      <h1>height: {data?.height}</h1>
        <h1>weight: {data?.weight}</h1>
      <h1>type: {data?.types?.[0]?.type?.name}</h1>
    </div>
  )
}
