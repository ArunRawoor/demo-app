import { useState,useEffect } from "react"
function LiveClock() {
    const [time, setTime] = useState(new Date())
    useEffect(() => {
        // Start interval on mount
        const interval = setInterval(() => {
            setTime(new Date())
        }, 1000)
        //  MUST cleanup — else interval keeps running after unmount
        return () => clearInterval(interval)
    }, []) // [] = start once on mount, clean on unmount
    return (
        <div>
            <h2> {time.toLocaleTimeString()}</h2>
        </div>
    )
}
export default LiveClock;