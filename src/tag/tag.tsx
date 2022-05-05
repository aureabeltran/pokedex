import React, {useEffect, useState} from "react";
import styled from "styled-components";


const TypeName =  styled.div`
    text-transform: capitalize;
    font-size: 11px;
    text-align: center;
`;

const TypePokemonTag = (data) => {
    const [isLoading, setLoading] = useState(true)
    useEffect( () => {
        if(data.data){
            setLoading(false)
        }
      })
    
    const definedType = () =>{
        for (let index = 0; index < data.data.length; index++) {

            let type = data.data[index].type ? data.data[index].type.name : data.data[index].name
            switch (type) {
                case 'normal':
                    data.data[index].color = '#a4acaf'
                    break
                case 'fighting':
                    data.data[index].color = '#d56723'
                    break
                case 'flying':
                    data.data[index].color = 'linear-gradient(180deg, #3dc7ef 50%, #bdb9b8 50%)'
                    break
                case 'poison':
                    data.data[index].color = '#b97fc9'
                    break
                case 'ground':
                    data.data[index].color = 'linear-gradient(180deg, #f7de3f 50%, #ab9842 50%)'
                    break
                case 'rock':
                    data.data[index].color = '#a38c21'
                    break
                case 'bug':
                    data.data[index].color = '#729f3f'
                    break
                case 'ghost':
                    data.data[index].color = '#7b62a3'
                    break
                case 'steel':
                    data.data[index].color = '#9eb7b8'
                    break
                case 'fire':
                    data.data[index].color = '#fd7d24'
                    break
                case 'water':
                    data.data[index].color = '#4592c4'
                    break
                case 'grass':
                    data.data[index].color = '#9bcc50'
                    break
                case 'electric':
                    data.data[index].color = '#eed535'
                    break
                case 'psychic':
                    data.data[index].color = '#f366b9'
                    break
                case 'ice':
                    data.data[index].color = '#51c4e7'
                    break
                case 'dragon':
                    data.data[index].color = 'linear-gradient(180deg, #53a4cf 50%, #f16e57 50%)'
                    break
                case 'dark':
                    data.data[index].color = '#707070'
                    break
                case 'fairy':
                    data.data[index].color = '#fdb9e9'
                    break
                default:
                    data.data[index].color = 'black'
                    break
            }
            
        }
        return data.data.map((item, index) =>(
                <div style={{background: item.color,
                borderRadius: '3px',
                lineHeight: '18px',
                height: 'auto',
                maxHeight: "32px",
                width: '40%',
                maxWidth: "140px",
                margin: '0 1.5625% 0 0',
                fontSize: '11px'}} key={index} className="flex-initial">
                    <TypeName>{item.type ? item.type.name : item.name}</TypeName>
                </div>
            )
        )
    }
    
  return (
      <div className="flex">
           { !isLoading ? definedType() : null} 
      </div> 
  )
}

export default TypePokemonTag
