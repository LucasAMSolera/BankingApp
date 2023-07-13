import {getData} from "../managers/dataManager"

export function BankAccounts()
{
    return(
        <div style={{paddingLeft: 30+"%", paddingRight: 30+"%", paddingTop: 10+"%"}}>
            <div class="font-monospace input-group-text text-center flex-column text-wrap" >
            <h3>{BankIsThere()}</h3>
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