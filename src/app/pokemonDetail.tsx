import React, {useEffect, useState} from "react";
import Loader from "../loader";
import styled from "styled-components";
import {getRequest} from '../services/request.services.js';
import TypePokemonTag from "../tag/tag";

// styles
const PageStyles = styled.div`
  font-family: -apple-system, Roboto, sans-serif, serif;
  background-color: #fff;
  width: 75.49%;
  padding-top: 60px;
  padding-bottom: 60px;
`;

const NamePokemon =  styled.div`
  font-family: "Flexo-Medium",arial,sans-serif;
  color: #212121;
  font-size: 225%;
  margin-top: 0.5em;
  margin-bottom: 20pt;
  text-align: center;
  width: 100%;
  word-break: break-word;
  text-transform: capitalize;
`;

const DescriptionText =  styled.div`
  font-family: "Flexo-Medium",arial,sans-serif;
  color: #212121;
  font-size: 112.5%;
  line-height: 150%;
  font-weight: 500;
  margin: 0.5em 0;
  text-align:left;
`;
const BoxStats =  styled.div`
  background-color: #30a7d7;
  color: #fff;
  border-radius: 10px;
  min-height: 245px;
`;
const Attributes =  styled.div`
  font-family: "Flexo-Medium",arial,sans-serif;
  clear: both;
  color: #212121;
  margin-top: 1.25em;
  text-transform: none;
  width: 100%;
  font-size: 125%;
  line-height: 125%;
  margin-bottom: 10pt;
`;
const InfoResponse = styled.div`
  font-family: "Flexo-Medium",arial,sans-serif;
  clear: both;
  color: #212121;
  font-size: 125%;
  margin-top: 10pt;
  white-space: normal;
  word-break: break-word;
  font-weight: 800;
`;

export const  PokemonDetail = props =>  {
  const [isLoading, setLoading] = useState(true)
  const [pokemon, setPokemon] = useState({})
  const [weakness, setWeakness] = useState([])

  useEffect( () => {
    getData()
    
  }, [])

  const getData = async () => {
      await getRequest(`pokemon-species/${props.id}`)
      .then(response =>  {
        console.log(response.data, 'response')
        response.data.detail = props.location.state
        setPokemon(response) 
        
      })
      .catch(error=>setLoading(false))
      await getRequest(`type/${props.id}`)
      .then(response =>  {
        setWeakness(response.data.damage_relations) 
        console.log(response.data, 'asd')
        setLoading(false)
      })
      .catch(error=>console.log(error), setLoading(false))
    }

  return <PageStyles className="sm:mx-auto px-5 ">
          {isLoading ? <Loader /> :
          <div >
            <NamePokemon>{pokemon.data.detail.name} N.°{pokemon.data.detail.order < 100 ? `0${pokemon.data.detail.order}`: pokemon.data.detail.order}</NamePokemon>
            <div className="flex ">
                <div className="flex-1 w-50">
                  <img className="object-contain w-100 bg-slate-100" src={pokemon.data.detail.sprites.other["official-artwork"].front_default} />
                </div>
                <div className="flex-1 w-50">
                    <DescriptionText>{pokemon.data.flavor_text_entries[5].flavor_text}</DescriptionText>
                    <BoxStats className="grid grid-cols-2 px-5 py-5">
                      <h5>Altura: <InfoResponse>{pokemon.data.detail.height}</InfoResponse></h5>
                      <h5>Categoría<InfoResponse>{pokemon.data.shape.name}</InfoResponse></h5>
                      <h5>Peso: <InfoResponse>{pokemon.data.detail.weight}</InfoResponse></h5>
                      <h5>Habilidad<InfoResponse></InfoResponse></h5>
                      <h5>Sexo<InfoResponse  style={{fontSize: "30pt"}}>♂  ♀</InfoResponse></h5>
                    </BoxStats>
                    <Attributes>Type</Attributes>
                    <TypePokemonTag data={pokemon.data.detail.types}/>
                    <Attributes>Weakness</Attributes>
                    <TypePokemonTag data={weakness.double_damage_to}/>
                </div>
            </div>
          </div>
          }
        </PageStyles>
}

export default PokemonDetail