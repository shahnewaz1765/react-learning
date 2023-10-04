import React from "react";
import  {people} from "./ListData";
import salam from './gallery/salam.webp';



export default function List(){
    const listItem=people.map(person =>
        <li key={person.id}>
            
            <p>
                <b>{person.name}</b>
                {' ' + person.profession + ' '}
                known for {person.accomplishment}
            </p>
        </li>
        );
        return <ul>{listItem}</ul>
}
