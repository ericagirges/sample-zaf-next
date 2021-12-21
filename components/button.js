// Create your components here. Example is of a button component when clicked will console.log all tickets
// Don't forget to import useZafClient into any components where requests/actions to the client will be made
import { useZafClient } from '../utils/zafClient';
import settings from '../pages/api/settings';

export default function Button() {
    // invoke client
    const client = useZafClient()

    const getTickets = () => {
        client.request(settings).then(function (data) {
            console.log("ALL TICKETS: ", data)
        })
    }

    return (
        <div>
            <h2>Hello!</h2>
            <button type="submit" onClick={getTickets}>Click me!</button>
        </div>
    )
}