const myServerIP='http://localhost:8080/'

export function Post(){

    var updatedUser;

    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({title: 'React POST Request' })
    };
    fetch(myServerIP+'/, requestOptions')
        .then(response => response.json())
        .then(data => updatedUser = data);
    return updatedUser;    
}