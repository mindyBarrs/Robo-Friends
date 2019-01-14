import React from 'react';

// COMPONENTS
import CardList from '../components/CardList';
import ErrorBoundry from '../components/ErrorBoundry';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';

// DATA
//import {robots} from '../robots'

// STYLESHEETS
import './App.css';


class App extends React.Component { //<--- Smart Component
    constructor() {
        super()
        this.state = {
            robots: [], //<--- Changed to an empty array
            searchFeild: ''
        }
    }

    componentDidMount(){
        fetch('http://jsonplaceholder.typicode.com/users').then(response => {
            return response.json();
        }).then(users => this.setState({robots: users}));
    }

    onSearchChange = (event) => {
        this.setState({searchFeild: event.target.value});
    }

    render(){
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchFeild.toLowerCase());
        });

        if(this.state.robots.length === 0){
            return <h1 className="f2 tc">Loading....</h1>
        }else{
            return(
                <div className="tc">
                    <h1 className="f2">RoboFriends</h1>

                    <SearchBox searchChange={this.onSearchChange}/>

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

export default App