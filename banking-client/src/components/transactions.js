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
            <div class="font-monospace input-group-text text-center flex-column text-wrap">
                
                {getData("myUser").banks.map(function(d, idx)
                {
                    return (
                        <table>
                            <tr>
                                <th>
                                    <h1>Bank: </h1>
                                </th>
                            </tr>
                            <tr>
                                <th>
                                    <h3>{d.nombre}</h3>
                                </th>
                            </tr>
                            <h4>Transactions:</h4>
                            <ol>
                                {getData("myUser").banks[idx].transactions.map(function(d, idx)
                                {
                                    return (
                                        <li>
                                            <tr>
                                                <th>
                                                    <p  style={{marginRight:10+"px"}}>From: {d.emitter},</p>
                                                </th>
                                                <th>
                                                    <p  style={{marginRight:10+"px"}}>To: {d.receptor},</p>
                                                </th>
                                                <th>
                                                    <p  style={{marginRight:10+"px"}}>Transaction id: {d.id},</p>
                                                </th>
                                                <th>
                                                    <p  style={{marginRight:10+"px"}} class="fw-bold">Value: {d.value}</p>
                                                </th>
                                            </tr>
                                            
                                        </li>
                                    )
                                })}
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