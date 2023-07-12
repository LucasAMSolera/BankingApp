export function Transaction() {
    return <div id="trans-general" >
        <div id="transaction">
            <div class="bg-secondary">
                <select class="text-info">
                    <option value="ALL">Date: ALL</option>
                    <option value="WEEK">Date: LAST WEEK</option>
                    <option value="MONTH">Date: LAST MONTH</option>
                    <option value="3MONTHS">Date: LAST THREE MONTHS</option>
                </select>
                <select class="text-info">
                    <option value="1000">Amount: $0 - $1,000</option>
                    <option value="500">Amount: $0 - $500</option>
                    <option value="200">Amount: $0 - $200</option>
                    <option value="50">Amount: $0 - $50</option>
                </select>
            </div>
            <div id="transaction-model">
                <div id="transaction-model-picture">
                    <img src="../pictures/pfp.png"/>
                    
                </div>
                <div id="transaction-model-info">
                    <h2>"Someone" paid "someone else"</h2>
                    <p>Payment: "paymentId"</p>
                    <div id="transaction-model-info-social">
                        <div class="like-icon">&#x1F44D;</div>
                        <p>0</p>
                        <div class="comment-icon">&#128172;</div>
                        <p>0</p>
                    </div>
                </div>
                <div id="transaction-model-value">
                    <p class="text-danger">-$357</p>
                </div>
            </div>
        </div>
    </div>
}