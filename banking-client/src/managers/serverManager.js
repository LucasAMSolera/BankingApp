const myServerIP='http://localhost:8080/'

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