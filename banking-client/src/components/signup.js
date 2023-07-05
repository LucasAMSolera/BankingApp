import { myUser } from "../managers/dataManager"; 
import {useRef} from "react";
export function SignUp() {

    var fname = useRef();
    var lname = useRef();
    var username = useRef();
    var fpass = useRef();
    var lpass = useRef();

    function ValidateUser(){
        return(
            myUser.fname !== "" &&
            myUser.lname !== "" &&
            myUser.username !== "" &&
            myUser.fpass !== "" &&
            myUser.lpass !== ""
        )
    }
    
    function ValidatePassword(){
        return(
            myUser.fpass == myUser.lpass
        )
    }

    const sayHi = function(event){
        event.preventDefault();

        myUser.fname = fname.current.value
        myUser.lname = lname.current.value
        myUser.username = username.current.value
        myUser.fpass = fpass.current.value
        myUser.lpass = lpass.current.value
        
        if(ValidateUser() && ValidatePassword()){
            console.log(myUser);
        }
        else if(ValidateUser() && !ValidatePassword()){
            alert("The passwords do not match!")
        }
        else{
            alert("The fields are not properly filled!")
        }
    }

    return (<div alt="Sign up form">
                <form id="form">
                    <label htmlFor="fname">First Name:</label><br/>
                    <input type="text" id="fname" name="fname" ref={fname}></input><br/>
                    <label htmlFor="lname">Last Name:</label><br/>
                    <input type="text" id="lname" name="lname" ref={lname}></input><br/>
                    <label htmlFor="username">Username:</label><br/>
                    <input type="text" id="username" name="username" ref={username}></input><br/>
                    <label htmlFor="fpass">Password:</label><br/>
                    <input type="password" id="fpass" name="fpass" ref={fpass}></input><br/>
                    <label htmlFor="lpass">Confirm Password:</label><br/>
                    <input type="password" id="lpass" name="lpass" ref={lpass}></input><br/>

                    <button type="submit" onClick={sayHi}>SIGN UP</button>
                </form>
            </div>)
}