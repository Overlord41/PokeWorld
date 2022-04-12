import Pokemon from '../models/Pokemons'
import axios from 'axios'

interface typesPoke {
  slot: number
  type: {
    name: string
    url: string
  }
}

interface baseStatsPoke {
  ['base_stat']: number
  effort: number
  stat: {
    name: string
    url: string
  }
}

interface interStats {
  name: string
  baseStat: number
}

interface interDatos {
  order: number
  name: string
  types: string[]
  imgPoke: string
  stats: interStats[]
}

const updatePokemons = async () => {
  const PROMESAS: any[] = []
  // const pokemonsIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const pokemonsIds: number = 12 // 1 to pokemonsIds

  for (let i = 1; i <= pokemonsIds; i++) {
    const PROMESA = new Promise((resolve, reject) => {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${i}`)
        .then((respuesta) => {
          const datos: interDatos = {
            order: respuesta.data.id,
            name: respuesta.data.name,
            types: respuesta.data.types.map((el: typesPoke) => el.type.name),
            imgPoke:
              respuesta.data.sprites.other['official-artwork'].front_default,
            stats: respuesta.data.stats.map((elem: baseStatsPoke) => {
              return {
                name: elem.stat.name,
                baseStat: elem.base_stat,
              }
            }),
          }
          return resolve(datos)
        })
        .catch((e) => reject(e))
    })
    PROMESAS.push(PROMESA)
  }

  Promise.all(PROMESAS).then((data) => {
    data.map(async (elem: any) => {
      await Pokemon.create(elem)
    })
    console.log('data update successfull')
  })
}

export { updatePokemons }
