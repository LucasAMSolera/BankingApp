import {getData} from "../managers/dataManager"

export function Personal() {
    return (
        <div>
            <h1>
                {getData("myUser").firstName}<br/>
                {getData("myUser").firstName}
            </h1>
            <p></p>
        </div>
    )
}