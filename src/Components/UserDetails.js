import axios from 'axios';
import React, {Component}  from 'react'
import moment from "moment"
import Zoom from 'react-img-zoom'
class UserDetails extends Component
{

 
constructor(props)
{ super(props);
      this.state={
        user : []
    }
    this.adduser=  this.adduser.bind(this);
}
componentDidMount(){

  
    
    axios.get("http://localhost:8080/Users")
    .then(response => {

    
      this.setState({user : response.data});
      
    })

  }

  adduser()
  {

    this.props.history.push("/Adduser");
  }

    render() {
        return (

          
            <div  className='userlist'>

                  <table className="table">
      <thead>
        <tr>
          
        <th scope="col">ID</th>
        <th scope="col"> Full Name</th>
          
          <th scope="col">Aadhar Number</th>
          <th scope="col">Address</th>
          
          
          <th scope="col">Front image </th>
          <th scope="col">Back Image </th>
          <th scope="col">Date</th>
           </tr>
      </thead>
      <tbody>
      {  this.state.user.map(
          user =>
          <tr  key={user.id}>
      
      <td>{user.id}</td>
          
          <td>{user.name}</td>
          <td>{user.address}</td>
          <td>{user.aadharNumber}</td>
          {/* Display Image from Data Base  */}
       <td> <Zoom  img={`data:image/jpeg;base64,${user.frontImage}`}   zoomScale={2} 
  width={200 }
  height={250}
       ></Zoom>
       </td>
      {/* Display Image from Data Base  */}
       <td> <Zoom  img={`data:image/jpeg;base64,${user.backImage}`}   zoomScale={3}
  width={300 }
  height={150}
       ></Zoom>
       </td>
       
          <td>{moment(user.date).format('YYYY-MM-DD')}</td>
              </tr>
      )
       } 
      
      </tbody>
    </table>

          </div>
          );
      }


      }
      export default UserDetails;