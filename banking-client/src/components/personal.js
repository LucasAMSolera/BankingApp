import {getData} from "../managers/dataManager"

export function Personal() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-primary text-center flex-column" style={{fontSize:24+"px"}}>
                <h1 class="text-secondary">Your profile</h1>
            </nav>
            <br/>
            <div style={{paddingLeft: 30+"%", paddingRight: 30+"%"}}>
                <div class="font-monospace input-group-text text-center flex-column text-wrap" >
                    <h2>Name and last name: {getData("myUser").firstName} {getData("myUser").lastName}</h2>
                    <h2>Username: {getData("myUser").username}</h2>
                    <h2>{BalanceColor()}</h2>
                </div>
            </div>
            <br/>
            <div style={{paddingLeft: 30+"%", paddingRight: 30+"%"}}>
                <div class="font-monospace input-group-text text-center flex-column text-wrap">
                    <h2>{BankIsThere()}</h2>
                </div>
            </div>
        </div>
        
    )
}

function BankIsThere()
{

    if (getData("myUser").banks.length > 0)
    {
        return (
            <div>
                <p>Your bank account(s) are:</p>
                {getData("myUser").banks.map(function(d,idx){
                    return (
                        <ol key={idx}>
                            {d.nombre}
                        </ol>
                    )
                })}
            </div>
        
        )
    }
    else
    {
        return <p>This account does not belong to any bank</p>
    }
}

function BalanceColor()
{
    if (getData("myUser").balance > 0)
    {
        return <p class="text-success">{getData("myUser").balance}€</p>
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