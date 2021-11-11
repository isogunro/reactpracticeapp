import './App.css';
import {useState} from 'react'
import Title from './components/Title'
import Modal from './components/Modal'
import EventList from './components/EventList';

function App(){
 const [showModal, setShowModal] = useState(false)
 const [showEvents, setShowEvents] = useState(true)
 const [events, setEvents] = useState([
   {title: "Jon's birthday bast", id:1},
   {title: "Sheila's birthday bast", id:2},
   {title: "Best's birthday bast", id:3},
 ])

 const handleClick = (id)=>{
   setEvents((prevEvents) => {
     return prevEvents.filter((event) => {
       return id !== event.id
   })
 })
}

const handleClose = () => {
  setShowModal(false);
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
     
    {showModal && <Modal handleClose={handleClose} isSalesModal={false}>
        <h2>Vacation time</h2>
        <p>yada yada yada!!!</p>
      </Modal>
      }
      <div>
        <button onClick={handleOpen}>Show Modal!</button>
      </div>
    </div>
  )
}

export default App;
