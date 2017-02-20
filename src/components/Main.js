import React, { Component } from 'react';
import '../css/App.css';
import Row from '../components/Row.js';
import CountryStore from '../stores/CountryStore';
import * as Actions from "../actions/Actions";
import { Flex, Item } from 'react-flex';
import 'react-flex/index.css';
import '../css/bootstrap/css/bootstrap.css';


class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value : "",
            countries : []
        };
        Actions.fetchData();

    }

    componentWillMount() {
        CountryStore.on("fetched", () => {
            this.setState({countries : CountryStore.getAll()});

        });

        CountryStore.on("filtered", () => {
            this.setState({countries : CountryStore.getAll()});
        })
    }

    componentWillUnmount() {
        CountryStore.removeListener();
    }

    handleInputChange(e) {
        this.setState({value : e.target.value});
        Actions.search(e.target.value);

    }


    fetchData() {
        Actions.fetchData();
    }


    render() {
        this.RowComponents = null;

        if (this.state.countries.length > 0) {

            this.RowComponents =
                <Flex row justifyContent="space-around" alignItems="center">
                    {this.state.countries.map((data, i) =>
                        <Row key={i} data={data} index={i}/>)}</Flex>;

        } else {
            this.RowComponents = null;
        }
        return (
            <div className="App">
                <p className="App-intro">
                    <div className="col-lg-6">
                        <div className="input-group">
                            <input value={this.state.value} onChange={this.handleInputChange.bind(this)} type="text" className="form-control" placeholder="Search for..."/>
                              <span className="input-group-btn">
                                <button className="btn btn-default">search</button>
                              </span>
                        </div>
                    </div>
                    <button className="btn btn-default" onClick={this.fetchData.bind(this)}>Fetch countries</button>
                </p>
                {this.RowComponents}
            </div>
        );
    }
}


export default Main;