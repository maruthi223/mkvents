import { List,Image } from "semantic-ui-react";
import { Attendee } from "../../../app/types/event";

type Props = {
  attendee : Attendee
};

export default function EventListAttendee({attendee}:Props) {
  return (
    <>
    <List.Item>
      <Image src={attendee.photoURL} size='mini' circular/>
    </List.Item>
    </>
  )
}
