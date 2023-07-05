export function NavBarDisplay(){
    if(window.location.pathname !== "/signup" && window.location.pathname !== "/"){
        return (<nav id="nav-bar">
            <h1>This is displayed everywhere</h1>
        </nav>
        )
    }
}