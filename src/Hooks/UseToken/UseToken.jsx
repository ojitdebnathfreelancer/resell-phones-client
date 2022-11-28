import { useEffect, useState } from "react"

const UseToken = email => {
    const [token, setToken] = useState('');
    useEffect(() => {
        fetch(`https://resell-phones-server.vercel.app/jwt?email=${email}`)
            .then(res => res.json())
            .then(data => {
                localStorage.setItem('accessToken', data.token);
                setToken(data.token);
            })
    }, [email])
    return [token]
}

export default UseToken;