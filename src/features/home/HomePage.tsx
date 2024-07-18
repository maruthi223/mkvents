import { Link } from "react-router-dom";
import { Button, Container, Header,  Icon,  Image,  Segment } from "semantic-ui-react";

export default function HomePage() {
  return (
    <Segment inverted textAlign="center" vertical className="masthead">
      <Container>
        <Header as={'h1'} inverted>
          <Image src='./logo.png' size="massive" style={{marginBottom : 12}}/>
          MK-Events
        </Header>
        <Button size="huge" inverted as={Link} to={'/events'}>
          Get started
          <Icon inverted name="caret right" />
        </Button>
      </Container>
    </Segment>
  )
}
