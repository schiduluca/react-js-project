import React from 'react';
import '../css/bootstrap/css/bootstrap.css';


class Header extends React.Component {
    constructor() {
        super();
    }

    render() {
        return(
            <div className="jumbotron">
                <h1>Explore the world!</h1>
            </div>
        );
    }
}



export default Header;