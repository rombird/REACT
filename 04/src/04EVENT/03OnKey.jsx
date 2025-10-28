import { useState, useEffect} from "react"

const EventComponent_03 = () => {
    
    const [state, setState] = useState("")

    const handleKeyUp = (e) => {
        console.log("KeyUp...", e.key);
        setState(state + e.key)
    }
    const handleKeyDown = (e) => {console.log("KeyDown...", e.key);}
    const handleKeyPress = (e) => {console.log("KeyPress...", e.key);}

    return (
        <div>
            <div>
                STATE : {state}
            </div>
            KEY UP : <input type="text" onKeyUp={handleKeyUp} className="KeyUp"/> <br/>
            KEY DOWN : <input type="text" onKeyDown={handleKeyDown}/> <br/>
            KEY PRESS : <input type="text" onKeyPress={handleKeyPress}/> <br/>
        </div>
    )
}

export default EventComponent_03