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
            var pkg = await Post(myUser)
            console.log(pkg);

            if(pkg.status == false){
                alert("The user already exists and the password is incorrect!")
                console.log("Mi usuario desactualizado="+myUser.username);
            }
            else{
                myUser.firstName = pkg.user.firstName
                myUser.lastName = pkg.user.lastName
                myUser.username = pkg.user.username
                myUser.password = pkg.user.password
                myUser.balance = pkg.user.balance
                myUser.banks = pkg.user.banks
                console.log(myUser);
                //window.location.replace("./personal");
            }
        }
        else if(ValidateUser() && !ValidatePassword()){
            alert("The passwords do not match!")
        }
        else{
            alert("The fields are not properly filled!")
        }
    }

    return (
        <div alt="Sign up form" class="d-flex justify-content-center">
            <form id="form">
                <fieldset>
                    <div class="form-group">
                        <label htmlFor="fname"  class="form-label mt-4">First Name:</label>
                        <input type="text" class="form-control" id="fname" name="fname" ref={fname} placeholder="Enter your name"></input>
                    </div>
                    <div class="form-group">
                        <label htmlFor="lname" class="form-label mt-4">Last Name:</label>
                        <input type="text" class="form-control" id="lname" name="lname" ref={lname} placeholder="Enter your last name"></input>
                    </div>
                    <div class="form-group">
                        <label htmlFor="username" class="form-label mt-4">Username:</label><br/>
                        <input type="text" class="form-control" id="username" name="username" ref={username} aria-describedby="usernameHelp" placeholder="Enter your username"></input>
                        <small id="usernameHelp" class="form-text text-muted">This will be your identifier, remember it!</small>
                    </div>
                    <div class="form-group">
                        <label htmlFor="fpass" class="form-label mt-4">Password:</label>
                        <input type="password" class="form-control" id="fpass" name="fpass" ref={fpass} placeholder="Enter your password"></input>
                        <small id="passwdHelp" class="form-text text-muted">This will be your way in, don't lose it!</small>
                    </div>
                    
                    <div class="form-group">
                        <label htmlFor="lpass" class="form-label mt-4">Confirm Password:</label>
                        <input type="password" class="form-control" id="lpass" name="lpass" ref={lpass} placeholder="Confirm your password"></input>
                    </div>
                    <br/>
                    <div class="form-group">
                        <button type="submit" class="btn btn-primary" onClick={SubmitUser}>SIGN UP</button>
                    </div>
                </fieldset>
            </form>
        </div>
    )
}