import {getData} from "../managers/dataManager"

export function Transaction() {
    return <div>
        <nav class="navbar navbar-expand-lg bg-primary text-center flex-column" style={{fontSize:24+"px"}}>
            <h1 class="text-secondary">Your movements</h1>
        </nav>
        <br/>
        <div style={{paddingLeft: 30+"%", paddingRight: 30+"%"}}>
            <div>
                <div class="text-center flex-column text-wrap">
                    <select class="form-select">
                        <option value="ALL">Date: ALL</option>
                        <option value="WEEK">Date: LAST WEEK</option>
                        <option value="MONTH">Date: LAST MONTH</option>
                        <option value="3MONTHS">Date: LAST THREE MONTHS</option>
                    </select>
                    <select class="form-select">
                        <option value="1000">Amount: $0 - $1,000</option>
                        <option value="500">Amount: $0 - $500</option>
                        <option value="200">Amount: $0 - $200</option>
                        <option value="50">Amount: $0 - $50</option>
                    </select>
                </div>
                <br/>
                {ReturnCards()}
            </div>
        </div>
    </div>
}

function ReturnCards()
{
    return (
        <div>
            {BankCard()}
        </div>
    )
}

function BankCard()
{
    if (getData("myUser").banks.length > 0)
    {
        return(
            <div>
                <h1>Bank account: </h1>
                {getData("myUser").banks.map(function(d, idx)
                {
                    return (
                        <table>
                            <tr>
                                <th>
                                    {d.nombre}
                                </th>
                            </tr>
                            <h1>Transactions:</h1>
                            <ol>
                                <li>
                                    {getData("myUser").banks[idx].transactions.map(function(d, idx)
                                    {
                                        return (
                                            <div>
                                                <tr>
                                                    <th>
                                                        <p>From: {d.emitter} </p>
                                                    </th>
                                                    <th>
                                                        <p>to: {d.receptor}</p>
                                                    </th>
                                                    <th>
                                                        {d.id}
                                                    </th>
                                                </tr>
                                                
                                            </div>
                                        )
                                    })}
                                </li>
                            </ol>
                            
                                
                            
                        </table>
                        
                    )
                    
                })}
            </div>
        )
    }
}

function TransactionCard()
{
    for (const i = 0; i < getData("myUser").banks.length; i++)
    {
        BankCard(i);
        for (const j = 0; i < getData("myUser").banks[i].transactions.length; j++)
        {
            return (
                <div  class="font-monospace input-group-text text-center flex-column text-wrap">
                    <div>
                        <h2>{getData("myUser").banks[i].transactions[j].emitter} paid {getData("myUser").banks[i].transactions[j].receptor}</h2>
                        <p>Payment: "paymentId"</p>
                        <div>
                            <div>&#x1F44D;</div>
                            <p>0</p>
                            <div>&#128172;</div>
                            <p>0</p>
                        </div>
                    </div>
                    <div>
                        <p class="text-danger">-$357</p>
                    </div>
                </div>
            )
        }
    }
}