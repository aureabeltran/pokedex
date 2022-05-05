import React from 'react';
import {Router as MyRouter} from '@reach/router';
import PokemonDetail from '../app/pokemonDetail';
import IndexPage from '.';

const Router = () =>{
    return(
        <MyRouter>
            <IndexPage path="/"/>
            <PokemonDetail path="/app/:id"/>
        </MyRouter>
    )
}
export default Router