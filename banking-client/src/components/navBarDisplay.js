export function NavBarDisplay(){
    if(window.location.pathname !== "/signup" && window.location.pathname !== "/"){
        return(  
            <nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="../">Solera Banking App</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarColor01">
                    <ul class="navbar-nav me-auto">
                        <li class="nav-item">
                            <a class="nav-link active" href="../personal">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="../settings">My Account</a>
                        </li>
                        <li class="nav-item">
                        <   a class="nav-link" href="../bankaccounts">Bank Accounts</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="../transactions">Transactions</a>
                        </li>
                    </ul>
                    <form class="d-flex">
                        <button class="btn btn-secondary my-2 my-sm-0" type="button">Exit</button>
                    </form>
                    </div>
                </div>
            </nav>
        )
    }
    else{
        return(
            <nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="../">Solera Banking App</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>
        )
    }
}