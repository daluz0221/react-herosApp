import React, { useMemo } from 'react';
import queryString from 'query-string'
import { useLocation } from 'react-router';
// import { heroes } from '../../data/heroes'
import { useForm } from '../../hooks/useForm';
import HeroCard from '../heroes/HeroCard';
import { getHeroByName } from '../../selectors/getHeroByName';

const SeachScreen = ({history}) => {

    
    const locatgion = useLocation();

  
    const {q = ''} =  queryString.parse( locatgion.search ) 

    const [value, handleInputChange] = useForm({
        searchtext: q,
    });

    const { searchtext } = value;

    
    const handleSubmit = (e) => {
        e.preventDefault();
        history.push(`?q=${searchtext}`)
        
        
    }
    
    const heroesFiltered = useMemo(() => getHeroByName(q), [q]);

    return (
        <div>
            <h1>Search Screen</h1>
            <hr />


            <div className="row">
                <div className="col-5">
                    <h4>Search Form</h4>
                    <hr />

                    <form onSubmit={handleSubmit}>
                        <input 
                            type="text"
                            placeholder="Find you hero"
                            className="form-control"
                            name="searchtext"
                            value={searchtext}
                            onChange={handleInputChange}
                        />
                        <button
                            type="submit"
                            className="btn m1 btn-block btn-outline-primary"
                        >
                            Search...
                        </button>
                    </form>
                </div>
                <div className="col-7">

                    <h4>Results</h4>
                    <hr />

                    {
                        (q==='') && <div className="alert alert-info">
                            Search a hero
                        </div>
                    }

                    {
                        (q!=='' && heroesFiltered.length === 0) && <div className="alert alert-danger">
                            There is no a hero with {q}
                        </div>
                    }


                    {
                        heroesFiltered.map(hero => (
                            <HeroCard key={hero.id} {...hero} />
                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default SeachScreen
