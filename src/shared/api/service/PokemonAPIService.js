/* eslint-disable import/no-anonymous-default-export*/
import http from '../PokemonAPI'

const getCharacterDitto = () => {
    return http.get('pokemon/ditto')
}
   const searchCharacter = (pokemonName) => {
    return http.get(`pokemon/${pokemonName}`)
   }

   const get100Pokemons = () => {
       return http.get('pokemon?limit=100')
   }

export default {
        getCharacterDitto ,
        searchCharacter ,
        get100Pokemons
    } 