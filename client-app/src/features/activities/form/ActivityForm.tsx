import React, { ChangeEvent, useState } from "react";
import { Button, Form, Segment } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";

interface Props {
    closeForm: () => void;
    activity: Activity | undefined;
    createOrEdit: (activity: Activity) => void;
    submitting: boolean;
}

export default function ActivityForm({ closeForm, activity: selectedActivity, createOrEdit, submitting }: Props) {

    const initialState = selectedActivity ?? {
        id: '',
        title: '',
        category: '',
        description: '',
        date: '',
        city: '',
        venue: ''
    }

    const [activity, setActivity] = useState(initialState);

    function handelSubmit() {
        createOrEdit(activity);
    }

    function handleInputChande(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = event.target;
        setActivity({ ...activity, [name]: value })
    }

    return (
        <Segment clearing>
            <Form onSubmit={handelSubmit} autoComplete='off'>
                <Form.Input placeholder='Title' value={activity.title} name='title' onChange={handleInputChande} />
                <Form.TextArea placeholder='Description' value={activity.description} name='description' onChange={handleInputChande} />
                <Form.Input placeholder='Category' value={activity.category} name='category' onChange={handleInputChande} />
                <Form.Input type='date' placeholder='Date' value={activity.date} name='date' onChange={handleInputChande} />
                <Form.Input placeholder='City' value={activity.city} name='city' onChange={handleInputChande} />
                <Form.Input placeholder='Venue' value={activity.venue} name='venue' onChange={handleInputChande} />
                <Button loading={submitting} floated='right' positive type='submit' content='Submit' />
                <Button onClick={closeForm} floated='right' type='submit' content='Cancel' />
            </Form>
        </Segment>
    )
}