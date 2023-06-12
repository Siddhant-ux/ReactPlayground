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
        accessorKey: 'isExpired',
        header: 'Expired'
    }
]


const UpdatedPast = ({dataEvents}) => {
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

    const updatedPastEvents = pastEvents.map(i => ({...i, isExpired: true}));

    return (
        <div>
            <h2>Updated past events</h2>
            <Table data = {updatedPastEvents} columns = {columns} />
        </div>
    )
}

export default UpdatedPast;