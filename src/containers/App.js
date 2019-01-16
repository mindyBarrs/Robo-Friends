import React from 'react';
import { connect } from 'react-redux'

// COMPONENTS
import CardList from '../components/CardList';
import ErrorBoundry from '../components/ErrorBoundry';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';

// DATA
//import {robots} from '../robots'

// ACTIONS
import {setSearchFeild, requestRobots} from '../actions'

// STYLESHEETS
import './App.css';

const mapStateToProps = state => {
    return {
        searchFeild: state.searchRobots.searchFeild,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        onSearchChange: (event) => dispatch(setSearchFeild(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
}

class App extends React.Component { //<--- Smart Component
    /* 
    constructor() {
        super()
        this.state = {
            robots: [] //<--- Changed to an empty array
        }
    }
    */

    componentDidMount(){  //<---- Asyncronous  FETCH()
        this.props.onRequestRobots();
        /* fetch('http://jsonplaceholder.typicode.com/users').then(response => { <--- NO Longer Needed
            return response.json();
        }).then(users => this.setState({robots: users})); */
    }

    /* 
    onSearchChange = (event) => {  <---- NO longer need
        this.setState({searchFeild: event.target.value});
    } 
    */

    render(){
        const {searchFeild , onSearchChange, robots, isPending} = this.props;
        const filteredRobots = robots.filter(robots => {
            return robots.name.toLowerCase().includes(searchFeild.toLowerCase());
        });

        return isPending ?
         <h1 className="f2 tc">Loading....</h1> :
        (
            <div className="tc">
                <h1 className="f2">RoboFriends</h1>

                <SearchBox searchChange={onSearchChange}/>

                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filteredRobots} />
                    </ErrorBoundry>
                </Scroll>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);