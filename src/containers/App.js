import React from 'react';

// COMPONENTS
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';

// DATA
import {robots} from '../robots'

// STYLESHEETS
import './App.css';


class App extends React.Component {
    constructor() {
        super()
        this.state = {
            robots: robots,
            searchFeild: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({searchFeild: event.target.value});
    }

    render(){
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchFeild.toLowerCase());
        });

        return(
            <div className="tc">
                <h1 className="f2">RoboFriends</h1>

                <SearchBox searchChange={this.onSearchChange}/>

                <CardList robots={filteredRobots} />
            </div>
        );
    }
}

export default App