import { Item, ItemGroup, Segment, SegmentGroup,Icon, List, Button } from "semantic-ui-react";
import EventListAttendee from "./EventListAttendee";
import { AppEvent } from "../../../app/types/event";

type Props = {
  event : AppEvent;
  selectEvent :(event : AppEvent)=>void;
  deleteEvent : (eventId : string)=> void;
};


export default function EventListItem({event,selectEvent,deleteEvent} : Props) {
  return (
    <SegmentGroup>
      <Segment>
        <ItemGroup>
          <Item>
            <Item.Image src={event.hostPhotoURL || './user.png'} size="tiny" circular />
            <Item.Content>
              <Item.Header>{event.title}</Item.Header>
              <Item.Description>{event.description} </Item.Description>
            </Item.Content>
          </Item>
        </ItemGroup>
      </Segment>
      <Segment>
        <Icon name='clock'/> Date
        <Icon name='marker'/> Venue
      </Segment>
      <Segment secondary>
        <List horizontal>
          {event.attendees.map((attendee : any) => (
        <EventListAttendee key={attendee.id} attendee = {attendee}/>
        ))}
        </List>
      </Segment>
      <Segment clearing>
        <span>{event.description}</span>
        <Button color="red" floated="right" content='Delete' onClick={()=>deleteEvent(event.id)} />
        <Button color="teal" floated="right" content='View' onClick={()=>selectEvent(event)} />
      </Segment>
    </SegmentGroup>
  )
}
