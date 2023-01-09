
export function MsgsList({msgs}){

    return <ul>{msgs.map(msg=>{
        return <li key={msg.slice(0,5)}>{msg}</li>
    })}</ul>
}