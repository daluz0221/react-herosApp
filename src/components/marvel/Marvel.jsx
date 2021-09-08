import React from 'react'
// import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'
import HeroesList from '../heroes/HeroesList'

const Marvel = () => {

    

    return (
        <div>
            <h1>Marvel Screen</h1>
            <hr />
            <HeroesList publisher="Marvel Comics" />
        </div>
    )
}

export default Marvel
