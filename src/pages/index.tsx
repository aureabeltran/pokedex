import React, {useEffect, useState} from "react";
import PokemonCard from "../card";
import Loader from "../loader";
import styled from "styled-components";
import {getRequest} from '../services/request.services.js'


// styles
const PageStyles = styled.div`
  font-family: -apple-system, Roboto, sans-serif, serif;
  background-color: #fff;
  width: 75.49%;
  padding-top: 60px;
  padding-bottom: 60px;
`;

const IndexPage = () => {
  const [count, setCount] = useState(12)
  const [pokemons, setPokemons] = useState([])
  const [isLoading, setLoading] = useState(true)
  
  const getData = async () => {
    const arrPokemons: any[] | ((prevState: never[]) => never[]) = [];
    for (let i = 1; i <= count; i++) {
      await getRequest(`pokemon/${i}`)
      .then((response: { data: any; }) => {
        arrPokemons.push(response.data), setLoading(false)
      })
      .catch((error: any)=>setLoading(false))
      
    }
    setPokemons(arrPokemons)
  }
  
  useEffect( () => {
    let num =  count + 12
    setCount(num)
    getData()
  }, [])

  const pressButton = async() =>{
    let num =  count + 12
    setCount(num)
    setLoading(true)
    getData()
  }

  return (
    <PageStyles className="sm:mx-auto px-4">
      <div className="grid grid-cols-4 gap-4 ">
        
        {pokemons.length > 1 && pokemons.map((item,index) =>
          <PokemonCard data={item} key={index}/>
        ) }
      </div>
      <div className="text-center">
        <button onClick={() => pressButton()}  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" style={isLoading ? {marginTop: "30pt", pointerEvents: 'none', opacity: .5 } : {marginTop: "30pt"}}>
          Cargar más pokemon
        </button>
      </div>
      {isLoading && <Loader />}
    </PageStyles>
  )
}

export default IndexPage
