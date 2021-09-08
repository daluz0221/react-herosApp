import React from 'react'
import { Navbar } from '../components/ui/NavBar';
import {
   
    Switch,
    Route
} from 'react-router-dom'
import Marvel from '../components/marvel/Marvel';
import HeroScreen from '../components/heroes/HeroScreen';
import DcScreen from '../components/dc/DcScreen';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import SeachScreen from '../components/search/SeachScreen';

const DasboardRoutes = () => {
    return (
        <>
            <Navbar  />
            <div className="container mt-2">
            <Switch>
                <Route exact path="/marvel" component={Marvel} />
                <Route exact path="/hero/:heroeId" component={HeroScreen} />
                <Route exact path="/dc/" component={DcScreen} />
                <Route exact path="/search/" component={SeachScreen} />

                <Redirect to="/marvel" />
            </Switch>

            </div>
        </>
    )
}

export default DasboardRoutes
