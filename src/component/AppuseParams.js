import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    useParams,
    Switch
} from 'react-router-dom'

function BlogPost() {
    const { slug } = useParams()
    console.log('useParams', slug)
    return (
        <div>Now showing post {slug}</div>
    )
}

function HomePage() {
    return (
        <div>This is HomePage</div>
    )
}

function AppuseParams() {
    return (
        <Router>
            <Switch>
                <Route exact path='/'>
                    <HomePage />
                </Route>
                <Route path='/blog/:slug'>
                    <BlogPost />
                </Route>
            </Switch>
        </Router>
    )
}


export default AppuseParams