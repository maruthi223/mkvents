import { ChangeEvent, useState } from "react";
import { Button, Form, Header, Segment } from "semantic-ui-react";
import { AppEvent } from "../../../app/types/event";
import { createId } from "@paralleldrive/cuid2";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../app/store/store";
import { createEvent, updateEvent } from "../eventSlice";
import {  Controller, FieldValues, useForm } from "react-hook-form";
import { categoryOptions } from "./categoryOptions";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';


export default function EventsForm() {
  const {register,handleSubmit, control,setValue, formState:{errors,isValid,isSubmitting}} = useForm({
    mode:"onTouched"
  });
  let {id} = useParams();
  const event = useAppSelector(state => state.events.events.find(e => e.id=== id));
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function onSubmit(data: FieldValues) {
    id = id ?? createId();
    event ?  
    dispatch(updateEvent({...event,...data,date:data.date.toString()}))
    : dispatch(createEvent({...data , id,hostedBy:'mkr',hostPhotoURL:'',attendees:[],date:data.date.toString()}));
    navigate(`/events/${id}`)
  } 



  return (
    <Segment clearing>
      <Header content= 'Event details' sub color="teal" />
        <Form onSubmit={handleSubmit(onSubmit)} >
          <Form.Input  
            placeholder="Event title"
            defaultValue = {event?.title || ''}
            {...register('title',{required:(true)})}
            error={errors.title && "title required" }
          />
          <Controller
              name='category'
              control={control}
              rules={{ required: 'Category is required' }}
              defaultValue={event?.category}
              render={({ field }) => (
                  <Form.Select
                      options={categoryOptions}
                      placeholder='Category'
                      clearable
                      {...field}
                      onChange={(_, d) => setValue('category', d.value, { shouldValidate: true })}
                      error={errors.category && errors.category.message}
                  />
              )}
          />
          <Form.TextArea  
            placeholder="Event description"
            defaultValue = {event?.description || ''}
            {...register('description',{required:(true)})}
            error={errors.description && "description required" }
          />
          <Header content= 'Location details' sub color="teal" />
          <Form.Input  
            placeholder="Event city"
            defaultValue = {event?.city || ''}
            {...register('city',{required:(true)})}
            error={errors.city && "city required" }
          />
          <Form.Input  
            placeholder="Event venue"
            defaultValue = {event?.venue || ''}
            {...register('venue',{required:(true)})}
            error={errors.venue && "venue required" }
          />
          <Form.Field>
            <Controller
                name='date'
                control={control}
                rules={{ required: 'Date is required' }}
                defaultValue={event && new Date(event.date) || null}
                render={({ field }) => (
                    <DatePicker
                        selected={field.value}
                        onChange={value => setValue('date', value, { shouldValidate: true })}
                        showTimeSelect
                        timeCaption='time'
                        dateFormat='MMM d, yyyy h:mm aa'
                        placeholderText='Event date and time'
                      />
                )}
            />
          </Form.Field>
          <Button loading={isSubmitting} disabled={!isValid} type="submit" floated="right" positive content='Submit'/>
          <Button loading={isSubmitting} as={Link} to={'/events'} type="button" floated="right" content='Cancel'/> 
        </Form>
    </Segment>
  )
}
