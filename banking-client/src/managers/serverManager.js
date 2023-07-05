import { useNavigate } from "react-router-dom";

const myServerIP='http://localhost:8080/'

export async function Post(myUser){

    var updatedUser;

    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(myUser)
    };
    const response = await fetch(myServerIP+'users/create', requestOptions);
    const result = await response.json();
    console.log(result);

    /*
        .then(response => response.json())
        .then(data => updatedUser = data);*/
    const navigate = useNavigate();
    navigate("/");
    return updatedUser;    
}