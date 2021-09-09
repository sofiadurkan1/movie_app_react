import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from '../pages/Main'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Navbar from '../components/Navbar'

const AppRouter = () => {
    return(
        <Router>
            <Navbar />
            <Switch>
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} />
                <Route path="/" component={Main} />
            </Switch>
        </Router>
    )
}

export default AppRouter;