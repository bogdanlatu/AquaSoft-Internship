import React,{ useState } from "react";
import './RegisterPage.css';
import AuthService from "../../Services/AuthService";

const RegisterPage = props => {
    const [user,setUser] = useState({Username : "", Password : ""});
    
    const onChange = e => {
        setUser({...user,[e.target.name] : e.target.value});
    }
    
    
    const onSubmit = e => {
        e.preventDefault();
        AuthService.registerUser(user).then(data=>{
            console.log(data);
            
                
        });
    }
    
    return(
        <div className="RegisterPage">
            <form onSubmit={onSubmit}>
                <h3>Please Register</h3>
                
                
                <input type="text" 
                        name="Username"
                        value={user.Username}
                        onChange={onChange} 
                        className="form-control" 
                        placeholder="Enter Username"/>
                
                
                <input type="password" 
                        name="Password"
                        value={user.Password}
                        onChange={onChange} 
                        className="form-control" 
                        placeholder="Enter Password"/>
                

                
                <button className="btn btn-lg btn-primary" 
                        type="submit">Register</button>
                
            </form>     
            
            
        </div>
    );
}

export default RegisterPage;
