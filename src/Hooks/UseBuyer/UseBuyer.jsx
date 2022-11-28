import { useEffect, useState } from "react"

const UseBuyer = email => {
    const [isBuyer, setIsbuyer] = useState(false);
    const [buyerLoading, setBuyerLoading] = useState(true);

    useEffect(() => {
        fetch(`https://resell-phones-server.vercel.app/user/buyer/${email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setIsbuyer(data);
                setBuyerLoading(false);
            })
    }, [email])
    return [isBuyer, buyerLoading]
}

export default UseBuyer;