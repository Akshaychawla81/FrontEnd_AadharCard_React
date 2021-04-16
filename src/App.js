
import './App.css';
import UserDetails from './Components/UserDetails';
import {withRouter, BrowserRouter, Route } from 'react-router-dom';
import React, {Component}  from 'react'
import AddUser from './Components/AddUser'
import { Button ,Nav} from 'react-bootstrap';



class App extends Component {
 
  constructor(props)
  { super(props);
        
      this.getalluserdata=  this.getalluserdata.bind(this);
  }
 
  getalluserdata()
  {
  // this.props.history.push("/UserDetails")
   this.props.history.push("/UserDetails")
    
  }

  render(){
  return (
    <div className="App">
     {/* <h1>Aadhar data for all User Click on below Button</h1>
     <Button variant="primary" vertical="true" onClick={this.getalluserdata}>All Users Aadhar Data </Button>
  */}

     <Nav variant="tabs" defaultActiveKey="/home">
  <Nav.Item>
    <Nav.Link href="/UserDetails">All User Data </Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="/Adduser">Add User </Nav.Link>
  </Nav.Item>

</Nav>
        <BrowserRouter>
  <Route path="/Adduser" component={AddUser}></Route>
  <Route path="/UserDetails" component={UserDetails}></Route>
  
  </BrowserRouter>

    </div>
  );
}
}

export default App;
