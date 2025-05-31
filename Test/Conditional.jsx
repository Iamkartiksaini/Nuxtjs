import React from 'react'

export default function Conditional() {

    const x = 12

    return (
        <div>
            <h3>Conditional</h3>
            {x > 12 && <p>Your age must be greater than 12</p>}
            {x >= 12 ? "You can play" : "You can not play this game"}
        </div>
    )
}
