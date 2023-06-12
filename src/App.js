import logo from './logo.svg';
import './App.css';
import PastOverFifty from './components/PastOverFifty';
import UpdatedPast from './components/UpdatedPast';
import HelloSessamiEvents from './components/HelloSessamiEvents';
import NoDescriptionEvents from './components/NoDescriptionEvents';
import EventForm from './components/EventForm';

const dataEvents = require('./components/events.json');
const dataUsers = require('./components/users.json');

function App() {

  return (
    <div>
      <PastOverFifty dataEvents = {dataEvents} />
      <UpdatedPast dataEvents = {dataEvents} />
      <HelloSessamiEvents dataEvents = {dataEvents} dataUsers = {dataUsers} />
      <NoDescriptionEvents dataEvents = {dataEvents}/>
      <EventForm></EventForm>
    </div>
  );
}

export default App;
