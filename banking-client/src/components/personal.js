export function Personal() {
    return <div id="personal">
        <nav id="personal-navbar">
            <div id="personal-navbar-frow">
                <div class="menu-icon">&#9776;</div>
                <label>Real World App</label>
                <div id="personal-navbar-frow-topright">
                    <button>$ NEW</button>
                    <div class="notification-icon">&#128276;</div>
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
        </div>
    </div>
}