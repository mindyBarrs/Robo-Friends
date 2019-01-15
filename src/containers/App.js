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
import {setSearchFeild} from '../actions'

// STYLESHEETS
import './App.css';

const mapStateToProps = state => {
    return {
        searchFeild: state.searchFeild
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        onSearchChange: (event) => dispatch(setSearchFeild(event.target.value))
    }
}

class App extends React.Component { //<--- Smart Component
    constructor() {
        super()
        this.state = {
            robots: [] //<--- Changed to an empty array
        }
    }

    componentDidMount(){
        fetch('http://jsonplaceholder.typicode.com/users').then(response => {
            return response.json();
        }).then(users => this.setState({robots: users}));
    }

    /* onSearchChange = (event) => {  <---- NO longer need
        this.setState({searchFeild: event.target.value});
    } */

    render(){
        const {robots} = this.state;
        const {searchFeild , onSearchChange} = this.props;
        const filteredRobots = robots.filter(robots => {
            return robots.name.toLowerCase().includes(searchFeild.toLowerCase());
        });

        if(robots.length === 0){
            return <h1 className="f2 tc">Loading....</h1>
        }else{
            return(
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
}

export default connect(mapStateToProps, mapDispatchToProps)(App);