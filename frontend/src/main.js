import React, { Component } from 'react';
import { Route,Routes } from 'react-router-dom';
import Singleticket from './component/singleticket';
import TicketDisplay from './component/ticketDisplay';

class Main extends Component {
    render() {
        return (   
            <div>
                <Route exact path="/" component={TicketDisplay} />
                <Route path="/singleticket" component={Singleticket} />
            </div>
        )
    }
}
export default Main;