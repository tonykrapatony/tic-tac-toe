import React from 'react'

export default function Field({squares, className, onClick}) {
    return (
        <div className={className}>
            {squares.map((item, index) => <div onClick={onClick} num={index} key={index} className='square'>{item}</div>)}
        </div>
    )
}
