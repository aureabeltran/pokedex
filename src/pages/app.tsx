import React from 'react';
import {Router as MyRouter} from '@reach/router';
import PokemonDetail from '../app/pokemonDetail';

const Router = () =>{
    return(
        <MyRouter>
            <PokemonDetail path="/app/:id"/>
        </MyRouter>
    )
}
export default Router