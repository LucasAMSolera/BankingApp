import {getData} from "../managers/dataManager"
import {useRef} from "react";
export function Settings() {

    var fname = useRef();
    var lname = useRef();
    var npass = useRef();
    var pass = useRef();

    var myTempUser = {};

    

    const UpdateUser = async function(event){
        event.preventDefault();
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