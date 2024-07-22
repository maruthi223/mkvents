import { Button, Form, Header, Segment } from "semantic-ui-react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {  useAppSelector } from "../../../app/store/store";
import {  Controller, FieldValues, useForm } from "react-hook-form";
import { categoryOptions } from "./categoryOptions";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import { AppEvent } from "../../../app/types/event";
import { Timestamp } from "firebase/firestore";
import { toast } from "react-toastify";
import { useFireStore } from "../../../app/hooks/firestore/useFirestore";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { useEffect } from "react";
import { actions } from "../eventSlice";


export default function EventsForm() {
  const {loadDocument,create,update} = useFireStore('events')
  const {register,handleSubmit, control,setValue, formState:{errors,isValid,isSubmitting}} = useForm({
    mode:"onTouched",
    defaultValues : async() => {
      if (event) return {...event, date:new Date(event.date) }
    }
  });
  const {id} = useParams();
  const event = useAppSelector(state => state.events.data.find(e => e.id=== id));
  const {status} = useAppSelector(state => state.events)
  const navigate = useNavigate();

  useEffect(()=>{
    if (!id) return;
    loadDocument(id,actions)
  },[id,loadDocument])

  async function updateEvent(data: AppEvent) {
      if (!event) return;
      await update(data.id, {
          ...data,
          date: Timestamp.fromDate(data.date as unknown as Date)
      })
  }

  async function createEvent(data: FieldValues) {
      const ref = await create({
          ...data,
          hostedBy: 'bob', 
          attendees: [], 
          hostPhotoURL: '',
          date: Timestamp.fromDate(data.date as unknown as Date)
      })
      return ref;
  }
  async function handleCancelToggle(event: AppEvent) {
    await update(event.id, {
        isCancelled: !event.isCancelled
    });
    toast.success(`Event has been ${event.isCancelled ? 'uncancelled' : 'cancelled'}`)
}
  async function onSubmit(data: FieldValues) {
    try {
      if (event) {
        await updateEvent({...event,...data})
        navigate(`/events/${event.id}`)
      } else {
        const ref = await createEvent(data);
        navigate(`/events/${ref?.id}`)
      }
    } catch (error:any) {
      toast.error(error.message)
      console.log(error);
    }
  }

  if (status === 'loading') return <LoadingComponent/>

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
          {event && (
                    <Button 
                        type='button'
                        floated='left'
                        color={event.isCancelled ? 'green' : 'red'}
                        onClick={() => handleCancelToggle(event)}
                        content={event.isCancelled ? 'Reactivate event' : 'Cancel event'}
                    />
                )}
          <Button loading={isSubmitting} disabled={!isValid} type="submit" floated="right" positive content='Submit'/>
          <Button loading={isSubmitting} as={Link} to={'/events'} type="button" floated="right" content='Cancel'/> 
        </Form>
    </Segment>
  )
}
