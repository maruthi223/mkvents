import { Button, Form, Header, Segment } from "semantic-ui-react";

export default function EventsForm() {
  return (
    <Segment clearing>
      <Header content='Create event' />
        <Form >
          <Form.Field>
            <input type="text" placeholder="Event title"/>
          </Form.Field>
          <Form.Field>
            <input type="text" placeholder="Description"/>
          </Form.Field>
          <Form.Field>
            <input type="text" placeholder="Catogery"/>
          </Form.Field>
          <Form.Field>
            <input type="text" placeholder="City"/>
          </Form.Field>
          <Form.Field>
            <input type="text" placeholder="Venue"/>
          </Form.Field>
          <Form.Field>
            <input type="text" placeholder="Date"/>
          </Form.Field>
          <Button type="submit" floated="right" positive content='Submit'/>
          <Button type="button" floated="right" content='Cancel'/> 
        </Form>
    </Segment>
  )
}
