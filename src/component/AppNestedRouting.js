import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    useRouteMatch,
    useParams
} from 'react-router-dom'

function Topic() {
    const { topicId } = useParams()
    console.log('topicId', topicId)
    return <h3>Requested topic ID: {topicId}</h3>
}

function Home() {
    return <h2>Home</h2>
}
function About() {
    return <h2>About</h2>
}
function Topics() {
    const match = useRouteMatch()

    return (
        <div>
            <h2>Topics</h2>
            <ul>
                <li>
                    <Link to={`${match.url}/components`}>
                        Components
                    </Link>
                </li>
                <li>
                    <Link to={`${match.url}/props-v-state`}>
                        Props v. State
                    </Link>
                </li>
            </ul>
            {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
            <Switch>
                <Route exact path={match.path}>
                    <h3>Please select a topic.</h3>
                </Route>
                <Route path={`${match.path}/:topicId`}>
                    <Topic />
                </Route>


            </Switch>
        </div>
    )
}

function AppNestedRouting() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/about'>About</Link>
                        </li>
                        <li>
                            <Link to='/topics'>Topics</Link>
                        </li>
                    </ul>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
                    renders the first one that matches the current URL. */}
                <Switch>
                    <Route path='/about'>
                        <About />
                    </Route>
                    <Route path='/topics'>
                        <Topics />
                    </Route>
                    <Route path='/'>
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}






export default AppNestedRouting