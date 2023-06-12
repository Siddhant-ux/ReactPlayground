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
        accessorKey: 'totalSold',
        header: 'Total Tickets Sold'
    },
    {
        accessorKey: 'totalCapacity',
        header: 'Total Ticket Capacity'
    }
]

const PastOverFifty = ({ dataEvents }) => {
    const events = Object.values(dataEvents["data"]); //Object of Objects, {key1 : {}, key2: {}} converted into [{}, {}](array of objects)
    const today = new Date(); // date object
    const todayISO = today.toISOString(); // convert into ISO string so that we can compare

    const pastEvents = events.filter((i) => {
        //__time__ is in ISO string format
        if (i.date.__time__) return todayISO > i.date.__time__;
        else {
            const isoFormat = new Date(i.date.seconds * 1000).toISOString(); //to convert a unix timestamp into ISO string format, ignored nano-seconds, the function as arguement takes milliseconds

            return todayISO > isoFormat;
        }
    });
    const pastEventsOverFifty = pastEvents.filter(i => {
        const totalCapacity = i.tickets.reduce((acc, j) => acc + j.capacity, 0);
        const totalSold = i.tickets.reduce((acc, j) => acc + j.sold, 0);
        return totalSold > 0.5 * totalCapacity;
    })

    const updatedPastEventsOverFifty = pastEventsOverFifty.map(i => {
        const totalCapacity = i.tickets.reduce((acc, j) => acc + j.capacity, 0);
        const totalSold = i.tickets.reduce((acc, j) => acc + j.sold, 0);
        return {...i, totalCapacity, totalSold};
    })

    return (
        <div>
            <h2>Past events that sold over 50% of the tickets</h2>
            <Table data = {updatedPastEventsOverFifty} columns = {columns}/>
        </div>
    )
}

export default PastOverFifty;