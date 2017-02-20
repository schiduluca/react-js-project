import React from 'react';
import 'react-flex/index.css';
import '../css/bootstrap/css/bootstrap.css';
import Country from "../models/Country";



class Row extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            styles : {
                padding : 10,
                margin : 20
            }
        };
    }

    componentWillMount() {
    }

    componentWillUnmount() {
    }


    onClickHandle() {
        if(this.props.data.region == "Asia") {
            alert("Can't go further than that");
        } else {
            window.location.assign(this.props.data.url);
        }
    }

    render() {

        return(
                <div className="card" style={this.state.styles}>
                    <div>
                        <img className="card-img-top"
                             src={Row.defaultProps.imageUrl}
                             alt="Card image cap"/>
                        <h2><span>{this.props.index + 1}</span></h2>
                    </div>
                        <div className="card-block">
                            <h4 className="card-title">{this.props.data.name}</h4>
                            <p className="card-text">{this.props.data.capital}</p>
                            <p className="card-text">Population : {this.props.data.population}</p>
                            <p className="card-text">Area : {this.props.data.area}</p>
                            <button onClick={this.onClickHandle.bind(this)} className="btn btn-primary">View info !</button>
                        </div>
                </div>
        );
    }
}

Row.propTypes = {
    data: React.PropTypes.instanceOf(Country),
    index : React.PropTypes.number
};

Row.defaultProps = {
    data: null,
    imageUrl : "http://sarapiquieco-observatory.com/yahoo_site_admin/assets/images/Toucan_Basco_Sized_Small_Web_size.6491849_std.jpg",

};

export default Row;