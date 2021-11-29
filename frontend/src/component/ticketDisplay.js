import React from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import {Row,Col,Container} from "react-bootstrap";
class ticketDisplay extends React.Component {
    componentWillMount(){
        axios.get("http://localhost:3300/zendesk/tickets/list").then(response=>{
            console.log("res"+JSON.stringify(response));
            this.setState({
                ticketlist : response.data.tickets
            })
        }).catch(err=>{
            console.log("err"+err);
        })
        
    }
    render() { 
        var tickets =[];
        var displaytable=null;
       if(this.state && this.state.ticketlist){
            tickets = this.state.ticketlist
            
            displaytable = tickets.map(ticket=>{
                return(
                    <div>
                        
                    <Row>
                        <Col>
                        {ticket.id}&nbsp;
                        <Link  to={{pathname: '/singleticket',state:ticket.id} }>
                        {ticket.subject}
                        </Link>
                        </Col>
                    </Row>
                    </div>
                )
            })
                
            } 
            
        //}
        return(
            <div>
                <h1>List of tickets</h1>
 {displaytable}
            </div>
        )
       
      
    }
}
 
export default ticketDisplay;