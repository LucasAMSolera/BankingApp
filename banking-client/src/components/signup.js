
export function SignUp() {
    return (<div class="center" alt="Sign up form">
                <form  id="form">
                    <label for="fname">First Name:</label><br/>
                    <input type="text" id="fname" name="fname"></input><br/>
                    <label for="lname">Last Name:</label><br/>
                    <input type="text" id="lname" name="lname"></input><br/>
                    <label for="username">Username:</label><br/>
                    <input type="text" id="username" name="username"></input><br/>
                    <label for="fpass">Password:</label><br/>
                    <input type="password" id="fpass" name="fpass"></input><br/>
                    <label for="lpass">Confirm Password:</label><br/>
                    <input type="password" id="lpass" name="lpass"></input><br/>

                    <button type="submit" onclick={()=>{console.log("hello")}}>SIGN UP</button>
                </form>
            </div>)
}