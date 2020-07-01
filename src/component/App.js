import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    NavLink
} from 'react-router-dom'
import About from '../pages/About'
import Home from '../pages/Home'
import User from '../pages/User'

function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to={
                                {
                                    pathname: '/about',
                                    state: {
                                        from: 'root'
                                    }
                                }
                            }>About</Link>
                        </li>
                        <li>
                            <NavLink to='/user/john/johnson' activeClassName='selected'>User</NavLink>
                        </li>
                    </ul>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
                    renders the first one that matches the current URL. */}
                <Switch>
                    <Route exact path='/about' component={About} />
                    <Route exact path='/user/:firstname/:lastname' component={User} />
                    <Route exact path='/' component={Home} />
                </Switch>
            </div>
        </Router>
    )
}


export default App