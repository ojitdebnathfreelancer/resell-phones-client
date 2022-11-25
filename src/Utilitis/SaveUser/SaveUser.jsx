import { useEffect, useState } from "react";


const SaveUser = user => {
    const [saved, setSaved] = useState(false);

    useEffect(() => {
        if(!user) return;
        fetch('http://localhost:5000/users', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    setSaved(data.acknowledged);
                }
            })
    }, [user])

    return [saved];
};
export default SaveUser;