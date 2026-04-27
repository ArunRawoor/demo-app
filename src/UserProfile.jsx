import { useState, useEffect } from 'react'
function UserProfile({ userId }) {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    useEffect(() => {
        // Reset state when userId changes
        setLoading(true)
        setError(null)
        // AbortController — cancel fetch if component unmounts
        const controller = new AbortController()
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
            signal: controller.signal
        })
            .then(res => {
                if (!res.ok) throw new Error('User not found')
                return res.json()
            })
            .then(data => {
                setUser(data)
                setLoading(false)
            })
            .catch(err => {
                if (err.name !== 'AbortError') { // ignore cancel errors
                    setError(err.message)
                    setLoading(false)
                }
            })
        // Cleanup: cancel fetch if userId changes or unmounts
        return () => controller.abort()
    }, [userId]) // re-runs whenever userId changes
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error}</p>
    return <div><h2>{user.name}</h2><p>{user.email}</p></div>
}

export default UserProfile;