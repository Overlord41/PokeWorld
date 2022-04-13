import axios from 'axios'
import { Request, Response } from 'express'
import Pokemon, { InterfacePokemons } from '../models/Pokemons'

export const GetPokeEvolution = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { namePoke } = req.body
  try {
    const findEvos = await axios
      .get(`https://pokeapi.co/api/v2/pokemon-species/${namePoke}`)
      .then(async (data: any) => {
        const evoludtionTree = await axios.get(data.data.evolution_chain.url)
        const ArraysEvo = {
          firstEvo: evoludtionTree.data.chain.species.name,
          secondEvo:
            evoludtionTree.data.chain.evolves_to.length > 0
              ? evoludtionTree.data.chain.evolves_to.map(
                  (el: any) => el.species.name
                )
              : null,
          treeEvo:
            evoludtionTree.data.chain.evolves_to.length > 0 &&
            evoludtionTree.data.chain.evolves_to[0].evolves_to.length > 0
              ? evoludtionTree.data.chain.evolves_to[0].evolves_to[0].species
                  .name
              : null,
        }

        let Evolutions: String[] = [evoludtionTree.data.chain.species.name]

        if (ArraysEvo.secondEvo !== null) {
          Evolutions = Evolutions.concat(ArraysEvo.secondEvo)
        }

        if (ArraysEvo.treeEvo !== null) {
          Evolutions = Evolutions.concat(ArraysEvo.treeEvo)
        }

        return Evolutions
      })
    res.json(findEvos)
  } catch (error) {
    console.log(error)
  }
}

export const getAllPokemons = async (
  _req: Request,
  res: Response
): Promise<void> => {
  const PokemonsXpage: number = 10

  // number of page
  const page: number = 1
  // page = page ? page : 1
  try {
    const findAllPokemons: InterfacePokemons[] = await Pokemon.find().select(
      '-__v'
    )

    // pagination
    const result: InterfacePokemons[] = findAllPokemons.slice(
      PokemonsXpage * (page - 1),
      PokemonsXpage * (page - 1) + PokemonsXpage
    )

    res.json(result)
  } catch (error) {
    console.log(error)
  }
}

export const filterPokemons = async (
  _req: Request,
  res: Response
): Promise<void> => {
  // const GetFilter = await Pokemon.find().all('types', ['grass'])
  const GetFilter = await Pokemon.find()
    .where('types')
    .all(['flying'])
    .and([{ color: 'green' }, { status: 'ok' }])
  res.send(GetFilter)
}
