export function Post(){

    const updatedUser;

    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({title: 'React POST Request' })
    };
    const data = fetch('https://reqres.in/api/posts', requestOptions)
                .then(response => response.json())
                .then(data => updatedUser = data);
}