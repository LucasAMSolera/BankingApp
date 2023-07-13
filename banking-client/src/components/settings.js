import {getData, saveData} from "../managers/dataManager"
import { Put } from "../managers/serverManager";
import {useRef} from "react";
export function Settings() {

    var fname = useRef();
    var lname = useRef();
    var npass = useRef();
    var pass = useRef();

    var myTempUser = {};

    function AssignValues(){
        myTempUser.firstName = fname.current.value
        myTempUser.lastName = lname.current.value
        myTempUser.username = getData("myUser").username;
        if(npass.current.value != ""){
            myTempUser.newPassword = npass.current.value
        }
        myTempUser.password = pass.current.value
    }

    const UpdateUser = async function(event){
        event.preventDefault();
        AssignValues();
        console.log(myTempUser);
        var pkg = await Put(myTempUser)
        console.log("Package received:")
        console.log(pkg);

        if(pkg.status === false){
            alert("The password is incorrect!")
        }
        else{
            /*myUser.firstName = pkg.user.firstName
            myUser.lastName = pkg.user.lastName
            myUser.username = pkg.user.username
            myUser.password = pkg.user.password
            myUser.balance = pkg.user.balance
            myUser.banks = pkg.user.banks*/
            saveData("myUser", pkg.user);

            console.log("My User:");
            console.log(getData("myUser"));
            window.location.replace("./personal");
        }
    }
    
    return (
        <div alt="Sign up form" class="flex-column justify-content-center" style={{padding:8+"%"}}>
            <div style={{paddingLeft:35+"%", paddingRight:35+"%"}}>
                <h1 class="text-center">Update your user data</h1>
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
                            <label htmlFor="npass" class="form-label mt-4">New Password:</label>
                            <input type="password" class="form-control" id="npass" name="npass" ref={npass} placeholder="Enter your new password"></input>
                            <small id="passwdHelp" class="form-text text-muted">If you don't want to change passwords, leave blank!</small>
                        </div>
                        <div class="form-group">
                            <label htmlFor="pass" class="form-label mt-4">Confirm with old Password:</label>
                            <input type="password" class="form-control" id="pass" name="pass" ref={pass} placeholder="Confirm with your password"></input>
                        </div>
                        <br/>
                        <div class="form-group">
                            <button type="submit" class="btn btn-primary" onClick={UpdateUser}>UPDATE</button>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}