import { useEffect, useState } from "react"

const UseToken = email => {
    const [token, setToken] = useState('');
    useEffect(() => {
        fetch(`http://localhost:5000/jwt?email=${email}`)
            .then(res => res.json())
            .then(data => {
                localStorage.setItem('accessToken', data.token);
                setToken(data.token);
            })
    }, [email])
    return [token]
}

export default UseToken;