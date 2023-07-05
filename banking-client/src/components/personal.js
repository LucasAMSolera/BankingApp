export function Personal() {
    return <div id="personal">
        <nav id="personal-navbar">
            <div id="personal-navbar-frow">
                <div class="menu-icon">&#9776;</div>
                <p id="personal-title">Real World App</p>
                <div id="personal-navbar-frow-topright">
                    <button class="new-button">$ NEW</button>
                    <div class="notification-icon">&#128276;</div>
                </div>
            </div>
            <div id="personal-navbar-lrow">
                <div id="personal-navbar-lrow-classification">
                    <button class="nav-button" id="everyone">EVERYONE</button>
                    <button class="nav-button" id="friends">FRIENDS</button>
                    <button class="nav-button" id="mine">MINE</button>
                </div>
            </div>
        </nav>
        <div id="personal-transactions">
            <select>
                <option value="ALL">Date: ALL</option>
                <option value="WEEK">Date: LAST WEEK</option>
                <option value="MONTH">Date: LAST MONTH</option>
                <option value="3MONTHS">Date: LAST THREE MONTHS</option>
            </select>
            <select>
                <option value="1000">Amount: $0 - $1,000</option>
                <option value="500">Amount: $0 - $500</option>
                <option value="200">Amount: $0 - $200</option>
                <option value="50">Amount: $0 - $50</option>
            </select>
            <p>Personal</p>
            <div id="personal-transactions-model">
                <div id="personal-transactions-model-picture">
                    <img src="../pictures/pfp.png"/>
                    
                </div>
                <div id="personal-transactions-model-info">
                    <h2>"Someone" paid "someone else"</h2>
                    <p>Payment: "paymentId"</p>
                    <div id="personal-transactions-model-info-social">
                        <div class="like-icon">&#x1F44D;</div>
                        <p>0</p>
                        <div class="comment-icon">&#128172;</div>
                        <p>0</p>
                    </div>
                </div>
                <div id="personal-transactions-model-value">
                    <p>-$357</p>
                </div>
            </div>
        </div>
    </div>
}