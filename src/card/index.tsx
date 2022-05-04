import * as React from "react";
import styled from "styled-components";
import TypePokemonTag from "../tag/tag";
import { keyframes } from 'styled-components';
import { Link } from "gatsby";

const BounceAnimation = keyframes`
    0% { transform:translate(0px, 0px)}
    50% { transform:translate(0px, -10px) }
    100% { transform:translate(0px, 0px) }
`
const CardDetail = styled.div` 
    border-radius: 6px;
    &:hover{
      animation: ${BounceAnimation} ease .5s;
    }
`;
const PokemonName =  styled.div`
  font-family: "Flexo-Demi",arial,sans-serif;
  color: #313131;
  text-transform: capitalize;
  font-size: 145%;
  margin-bottom: 5px;
  font-weight: 600;
`;
const PokemonNumber =  styled.div`
  font-family: "Flexo-Bold",arial,sans-serif;
  color: #919191;
  font-size: 80%;
  padding-top: 2px;
  font-weight: 600;
  line-height: 125%;
  margin: 0.5em 0;
`;

const PokemonCard = (data: {data:{id: number,order:{}, name:string, types: [], sprites: {front_default: ''}}}) => {
  return (
    // <Link to={`/app/${data.data.id}`}  state={data.data}>
      <CardDetail className="bg-white">
          <img className="object-contain h-50 w-100 bg-slate-100" src={data.data.sprites.other["official-artwork"].front_default} />
          <div className="pb-4 pt-1 px-4">
            <PokemonNumber>N.°{data.data.order < 100 ? `0${data.data.order}`: data.data.order}</PokemonNumber>
            <PokemonName>{data.data.name}</PokemonName>
            <TypePokemonTag data={data.data.types}/>
          </div>
      </CardDetail>
    // </Link>
  )
}

export default PokemonCard
