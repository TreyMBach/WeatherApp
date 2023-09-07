import react, {useState} from 'react';
import './card.css';



export default function Card( props ) {

    return (
        <div className="card">
            <h1>{props.data}</h1>
        </div>
    )
} 