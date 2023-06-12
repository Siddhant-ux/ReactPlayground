import React from 'react';
import Table from './Table';

const columns = [
    {
        accessorKey: 'eventId',
        header: 'Id'
    },
    {
        accessorKey: 'name',
        header: 'Event Name'
    },
    {
        accessorKey: 'eventRevenue',
        header: 'Event Revenue'
    }
]

const HelloSessamiEvents = ({ dataEvents, dataUsers }) => {

    const events = Object.values(dataEvents["data"]); //Object of Objects, {key1 : {}, key2: {}} converted into [{}, {}](array of objects)
    const users = Object.values(dataUsers["data"]);

    const helloSessami = users.find((i) => i.email === "hello@sessami.co"); //each event has a hostId so to find the events hosted by the user we need the Id of the user
    const helloSessamiId = helloSessami.id;

    let helloSessamiEvents = events.filter((i) => i.hostId === helloSessamiId);

    const lifeTimeRevenue = helloSessamiEvents.reduce((total, i) => {
        const eventRevenue = i.tickets.reduce((acc, j) => acc + j.sold * j.price, 0);
        return total + eventRevenue;
    }, 0)

    const updatedHelloSessamiEvents = helloSessamiEvents.map(i => {
        const eventRevenue = (i.tickets.reduce((acc, j) => acc + j.sold * j.price, 0)).toFixed(2);
        return {...i, eventRevenue};
    })

    return (
        <div>
            <h2>Events created by hello@sessami.co</h2>
            <Table data = {updatedHelloSessamiEvents} columns = {columns}/>
        </div>
    )
}

export default HelloSessamiEvents;