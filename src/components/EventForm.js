import React from 'react';
import { useForm } from 'react-hook-form';

const EventForm = () => {

    const form = useForm();
    const newEvents = [];
    const { register, handleSubmit } = form;
    const onSubmit = (data) => {
        newEvents.push(data);
        console.log('Form Submitted', newEvents);
    }

    return (
        <div>
            <h2>Add an Event</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Event Name</label>
                <br />
                <input type='text'
                    {...register('name')}
                />
                <br />
                <label>Event Description</label>
                <br />
                <input type='text'
                    {...register('description')} />
                <br />
                <label>Location</label>
                <br />
                <input type='text'
                    {...register('location')} />
                <br />
                <button>Submit</button>
                <br />
            </form>
        </div>
    )
}

export default EventForm;