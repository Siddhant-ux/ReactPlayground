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
    }
]

const NoDescriptionEvents = ({dataEvents}) => {

    const events = Object.values(dataEvents["data"]);

    const eventsWithNoDescription = events.filter(i => !i.description);

    return (
        <div>
            <h2>Events with No description</h2>
            <Table data = {eventsWithNoDescription} columns = {columns}/>
        </div>
    )
}

export default NoDescriptionEvents;