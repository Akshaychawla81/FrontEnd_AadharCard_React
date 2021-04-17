import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';

import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import {Component } from "react";    
import moment from 'moment'


import Alert from '@material-ui/lab/Alert';
import axios from 'axios';
const useStyles = (theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(2),
    backgroundColor: theme.palette.secondary.main,
  
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});

class AddUser extends Component {
  constructor(props)
{
    super(props)

    this.state={

      
        name : '' ,
        address : '' ,
        aadharNumber : '' ,
        frontImage : '' ,
        // backImage : '' ,
        
        date :moment(new Date()).format("DD-MM-YYYY"),
        Successsfull:false  ,
        messagetype: "success"
    }
    
    this.onsubmit=this.onsubmit.bind(this)
}
onsubmit(values){
    

 // let user ={"name":this.state.name,"date":this.state.date,"address":this.state.address,"aadharNumber":this.state.aadharNumber , "frontImage": this.state.frontImage}

   const formData = new FormData();
    
  // Update the formData object
 formData.append(   "frontImage", this.state.frontImage);
   formData.append(    "name", this.state.name);
   formData.append("address", this.state.address);
    formData.append(  "aadharNumber", this.state.aadharNumber);
    formData.append("date",this.state.date);
    formData.append(   "backImage", this.state.backImage);
 
    axios.post("http://localhost:8080/User/Detail",formData)
    .then(() =>this.setState({ Successsfull:true }))
 


}





render(){
  const classes = this.props;
  return (
          
    <Container component="main" maxWidth="xs">
    {this.state.Successsfull && <Alert variant="outlined" severity="success">
 User details has been added 
</Alert>}
 
      <div className={classes.paper}>
  
     
        <NoteAddIcon  color='primary' fontSize="large" />
           <Typography  display=	'initial' component="h1" variant="h5">
         
         
          Add User 
        </Typography>
  
        <form className={classes.form} onSubmit={this.onsubmit} noValidate>
         
         <TextField
          id="outlined-multiline-static"
          label="Name"
          
          fullWidth
          rows={4}
          margin='dense'
          size="medium"
            
            onChange = {(event) => this.setState({name: event.target.value })}
          variant="outlined"
        />

    <TextField
          id="outlined-multiline-static"
          label="Addhar Number"
          required
          inputProps={{ pattern: "/^[-+]?\d+$/;" }}
          fullWidth
          rows={4}
          margin='dense'
          size="medium"
            defaultValue={this.state.aadharNumber} 
            onChange = {(event) => this.setState({aadharNumber: event.target.value })}
          variant="outlined"
        />
        <TextField
          id="outlined-multiline-static"
          label="Address"
          multiline
          fullWidth
          rows={4}
          margin='dense'
          size="medium"
            defaultValue={this.state.address} 
            onChange = {(event) => this.setState({address: event.target.value })}
          variant="outlined"
        />

          <TextField
    id="outlined-multiline-static"
    label="Date"
    type="date"
    fullWidth
    margin='dense'
    value={this.state.date}
    onChange = {(event) => this.setState({date: event.target.value })}
     rows={5}
    InputLabelProps={{
      shrink: true,
    }}
  />

<TextField
    id="FrontImage"
    label="Front Image"
    type="file"
    fullWidth
    margin='dense'
    
    onChange = {(event) => this.setState({frontImage: event.target.files[0] })}
     rows={5}
    InputLabelProps={{
      shrink: true,
    }}
  /> 
<TextField
    id="BackImage"
    label="Back Image"
    type="file"
    fullWidth
    margin='dense'
    
    onChange = {(event) => this.setState({backImage: event.target.files[0] })}
     rows={7}
    InputLabelProps={{
      shrink: true,
    }}
  /> 


          <Button
            type="submit"
            rows={6}
            variant="contained"
            color="primary"
            variant="contained"
            fullWidth
            
          >
            Add User
          </Button>
          
        </form>
      </div>
      
     
    </Container>
  );
}
}

export default withStyles(useStyles)(AddUser);