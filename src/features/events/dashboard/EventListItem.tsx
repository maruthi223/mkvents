import { Item, ItemGroup, Segment, SegmentGroup,Icon, List, Button } from "semantic-ui-react";
import EventListAttendee from "./EventListAttendee";
import { AppEvent } from "../../../app/types/event";

type Props = {
  event : AppEvent
};


export default function EventListItem({event} : Props) {
  return (
    <SegmentGroup>
      <Segment>
        <ItemGroup>
          <Item>
            <Item.Image src={event.hostPhotoURL} size="tiny" circular />
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
        <Button color="teal" floated="right" content='View'/>
      </Segment>
    </SegmentGroup>
  )
}
