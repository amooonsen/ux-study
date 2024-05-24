import { useState, useEffect } from "react";
import "./UsePulse.css"
import axios from 'axios';
function UserPulse() {
    const [docs, setDocs] = useState([]);
    const [user, setUser] = useState();

    useEffect(()=> {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
            setDocs(res.data)
        })
        .catch((err) => {
            console.error('에러 : ', err);
        });
    }, []);
    const handlcardClick = (doc) => {
        setUser(doc);
    };

    return (
        <div className="UsePulse">
            <p>🗂️UI CARD LIST</p>
            <ul className="list-wrap">
                {docs.map((doc) => (
                    <li key={doc.id} onClick={() => handlcardClick(doc)}>
                    {doc.name}
                    </li>
                ))}
            </ul>

            {user ? (
                <div className="Modal">
                    <p className="title">CARD INFO LIST</p>
                    <p>{user.name}</p>
                    <p>{user.city}</p>
                    <p>{user.phone}</p>
                    <button onClick={() => setUser(null)}>CLOSE</button>
                </div>
            ) : null}
        </div>
    );
}

export default UserPulse;
