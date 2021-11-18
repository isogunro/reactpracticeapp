import './App.css';
import {useState} from 'react'
import Title from './components/Title'
import Modal from './components/Modal'
import EventList from './components/EventList';
import NewEventForm from './components/NewEventForm';

function App(){
 const [showModal, setShowModal] = useState(false)
 const [showEvents, setShowEvents] = useState(true)
 const [events, setEvents] = useState([])

 const addEvent = (event) => {
    setEvents((prevEvents) => {
      return [...prevEvents, event]
    })
    setShowModal(false)
 }

 const handleClick = (id)=>{
   setEvents((prevEvents) => {
     return prevEvents.filter((event) => {
       return id !== event.id
   })
 })
}

const handleOpen = () => {
  setShowModal(true);
}

 const subtitle = "React is soo cool"
  return(
    <div className="App">
      <Title title="Events in your Area" subtitle={subtitle}/>

      {showEvents && (
            <div>
              <button onClick={() => setShowEvents(false)}>hide events</button>
            </div>
      )}

      {!showEvents && (<div>
        <button onClick={() => setShowEvents(true)}>show events</button>
      </div>
      )}

      {showEvents &&  <EventList handleClick={handleClick} eventList={events}/>}

    {/**
      <Modal>
        <h2>10% off Coupon Code!!</h2>
        <p>Use the code NINJA10 at the checkout.</p>
      </Modal>
     */}  
     
    {showModal && <Modal isSalesModal={false}>
        <NewEventForm addEvent={addEvent}/>
      </Modal>
      }
      <div>
        <button onClick={handleOpen}>Add New Event</button>
      </div>
    </div>
  )
}

export default App;
