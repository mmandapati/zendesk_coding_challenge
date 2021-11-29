import React from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import {Row,Col,Card} from "react-bootstrap";

class singleticket extends React.Component {
    constructor(props){
        super(props)
        console.log("props"+JSON.stringify(this.props.location.state));
    }
    componentWillMount(){
        axios.get(`http://localhost:3300/zendesk/tickets/${this.props.location.state}`).then(response=>{
            console.log("res"+JSON.stringify(response));
            this.setState({
                ticketdata : response.data.ticket
            })
        }).catch(err=>{
            console.log("err"+err);
        })
    }
    render() { 
        var ticket =[];
        var desc = null;
        var sub = null;
        if(this.state && this.state.ticketdata){
            ticket = this.state.ticketdata
            desc = ticket.description;
            sub = ticket.subject;
            console.log("ticket"+JSON.stringify(ticket));
        }
        return( 
            <Card bg = "white" style={{ width: "40rem", margin: "2%" }}>
                               <Card.Body>
                                   <h1>Ticket</h1>
                                   <Row>
                                    <Card.Title>
                                    <b>Subject: </b>
                                        {sub}
                                    <br/>
                                    <br/>
                                    <b>Description: </b>
                                    {desc}
                                    </Card.Title>
                                     
                                   </Row>
                               </Card.Body>
                           </Card>
           
           )
    }
}
 
export default singleticket;