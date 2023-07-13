const myServerIP='http://localhost:6060/'

export async function Post(myUser){
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(myUser)
    };
    const response = await fetch(myServerIP+'users/create', requestOptions);
    const result = await response.json();

    /*
        .then(response => response.json())
        .then(data => updatedUser = data);*/
    return result;    
}

export async function Put(myUser){
    const requestOptions = {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(myUser)
    };
    const response = await fetch(myServerIP+'user/update', requestOptions);
    const result = await response.json();

    /*
        .then(response => response.json())
        .then(data => updatedUser = data);*/
    return result;    
}

export async function GetUsers(){

    const response = await fetch(myServerIP+'users');
    const result = await response.json();
    
    return result;    
}