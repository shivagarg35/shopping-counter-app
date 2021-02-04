import React, { Component } from 'react';


class NavBar extends Component {
 
    render() { 

        const { totalCounters } = this.props;

        return ( 
            <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
            <a className="navbar-brand" href="#">
                <span className='badge badge-pill badge-secondary'>
                    Total items selected: {totalCounters}
                </span>
            </a>
            </div>
            </nav>
         );
    }
}
 

export default NavBar;













