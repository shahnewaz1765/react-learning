import React from "react";
import "./itemlist.css"

function Item({ name, isPacked }) {
    return (
      <li className="item">
        {name} {isPacked ? '✔' : '❌'}
      </li>
    );
  }


export default function ItemList(){
    return(
        <section className="listing">
            <h1>My Packing List</h1>
                <ul>
                <Item isPacked={true} name="Space suit"/>
                <Item isPacked={true} name="Helmet with a golden leaf"/>
                <Item isPacked={false} name="Photo of Tam"/>
                </ul>
        </section>
    );

}