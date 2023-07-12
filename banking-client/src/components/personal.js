import {getData} from "../managers/dataManager"

export function Personal() {
    return (
        <div>
            <h1 class="navbar navbar-expand-lg bg-primary text-secondary text-center flex-column">Your data</h1>
            <div style={{paddingLeft: 30+"%", paddingRight: 30+"%"}}>
                <div class="font-monospace input-group-text text-center flex-column">

                    <h2>Name and last name: {getData("myUser").firstName} {getData("myUser").lastName}</h2>
                    <h2>Username: {getData("myUser").username}</h2>
                    <h2>{BalanceColor()}</h2>
                    
                </div>
            </div>
        </div>
        
    )
}

function BalanceColor()
{
    if (getData("myUser").balance > 0)
    {
        return <p class="text-succes">{getData("myUser").balance}€</p>
    }
    else if (getData("myUser").balance < 0)
    {
        return <p class="text-bg-danger">{getData("myUser").balance}€</p>
    }
    else
    {
        return <p class="text-warning">{getData("myUser").balance}€</p>
    }
}