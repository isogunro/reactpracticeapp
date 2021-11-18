import React from "react"
import styles from "./EventList.module.css"

export default function EventList({ handleClick, eventList }){
    return(
        <div>
            {eventList.map((event, index) => (
            <div key={event.id} className={styles.card}>
            <h2>{index} - {event.title}</h2>
            <p>{event.location} - {event.date}</p>
                { /* <button onClick={handleClick(event.id)}>delete even</button> */}
                {/* This is a no no.  It will always fire since it's being invoked automatically*/}
                {/*Proper Way is to use arrow function*/}
            <button onClick={() => handleClick(event.id)}>Delete</button>
            </div>
        ))}
        </div>
      )
}