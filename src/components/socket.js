import React, { useEffect, useState } from 'react'
import {io} from 'socket.io-client'
const socket = io.connect('http://localhost:5000')

// socket.emit('new user', 'data')
socket.on("connect", () => {
    console.log('success connect')
});
socket.emit('imclient', 'testing')
function Socket_() {
    const [id, setId] = useState([]);
    console.log('mau emit')


     const out = () => {
        socket.emit('imclient' , 'data')
    }
    useEffect( () => {
         socket.on('imclient' , (message) => {
            console.log(message, 'isi')
            setId([...id, message])
            // socket.emit('imclient' , 'data')
        })

    }, [id])

    console.log(id, 'id')
    return (
        <div>
            {
                id.map((val) => {
                    return(
                        <>{val}</>
                    )
                })
            }
            <button onClick={(e) => out()}>out</button>
        </div>
    )
}

export default Socket_