import React from 'react';
import Container from '@material-ui/core/Container';
import './Message.css'

const message = (props) =>  {

  return (
    <Container fixed>
        <div className="Message">
            <label>First Name</label>
            <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
            <label>Last Name</label>
            <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
            <label>Country</label>
            <select id="country" name="country">
                <option value="australia">Nigeria</option>
                <option value="canada">Canada</option>
                <option value="usa">USA</option>
            </select>
    
            <input type="submit" value="Submit Request"/>
            <input type="submit" value="View Request" onClick={props.request}/>
        </div>
        
    </Container>
  );
}
export default message
