import { myUser } from "../managers/dataManager"; 
import {useRef} from "react";
import {Post} from "../managers/serverManager"; 

export function SignUp() {

    var fname = useRef();
    var lname = useRef();
    var username = useRef();
    var fpass = useRef();
    var lpass = useRef();

    function ValidateUser(){
        return(
            fname.current.value !== "" &&
            lname.current.value !== "" &&
            username.current.value !== "" &&
            fpass.current.value !== "" &&
            lpass.current.value !== ""
        )
    }
    
    function ValidatePassword(){
        return(
            fpass.current.value === lpass.current.value
        )
    }

    function AssignValues(){
        myUser.firstName = fname.current.value
        myUser.lastName = lname.current.value
        myUser.username = username.current.value
        myUser.password = fpass.current.value
    }

    const SubmitUser = async function(event){
        event.preventDefault();

        if(ValidateUser() && ValidatePassword()){
            AssignValues();
            console.log(myUser);
            var user = await Post(myUser)
            console.log(user);
            myUser.firstName = user.firstName
            myUser.lastName = user.lastName
            myUser.username = user.username
            myUser.password = user.password
            myUser.balance = user.balance
            myUser.banks = user.banks
            console.log(myUser);
            window.location.replace("./personal");
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

                    <button type="submit" onClick={SubmitUser}>SIGN UP</button>
                </form>
            </div>)
}