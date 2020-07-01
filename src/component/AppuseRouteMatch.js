import { Route, useRouteMatch, Router, Switch } from 'react-router-dom'
import React from 'react'

function Home() {
    return (
        <div>Home</div>
    )
}

function Header() {
    const {match} = useRouteMatch('/detail/:id')
    console.log('match',match)
    return (
        match && <div>Header</div>
    )
}

function Detail() {
    return (
        <div>Detail</div>
    )
}

function AppuseRouteMatch() {
    return (
        <div>
            <Router>
                <Header />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/detail/:id' component={Detail} />
                </Switch>
            </Router>
        </div>
    )
}

export default AppuseRouteMatch