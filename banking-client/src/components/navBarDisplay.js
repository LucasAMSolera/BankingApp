export function NavBarDisplay(){
    if(window.location.pathname != "/signup" && window.location.pathname != "/"){
        return (<h1>This is displayed everywhere</h1>)
    }
}