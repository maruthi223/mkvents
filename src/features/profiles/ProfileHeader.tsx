import { Button, Divider, Grid, Item, Reveal, Segment, Statistic } from "semantic-ui-react";
import { Profile } from "../../app/types/profile";

type Props={
    profile: Profile
}

export default function ProfileHeader({profile}:Props) {
  return (
    <Segment>
        <Grid>
            <Grid.Column width={12}>
                <Item.Group>
                    <Item>
                        <Item.Image avatar size="small" src={profile.photoURL || '/user.png'}/>
                        <Item.Content verticalAlign="middle" >
                            <Item.Header as="h1" 
                            style={{display:'block',marginBottom:10}} content={profile.displayName} />
                        </Item.Content>
                    </Item>
                </Item.Group>
            </Grid.Column>
            <Grid.Column width={4} style={{marginTop:20}}>
                <Statistic.Group>
                    <Statistic label='followers' value={10} />
                    <Statistic label='following' value={1} />
                </Statistic.Group>
                <Divider/>
                <Reveal animated="move">
                    <Reveal.Content visible style={{width:'100%'}}>
                        <Button fluid color="teal" content='following' />
                    </Reveal.Content>
                    <Reveal.Content hidden style={{width:'100%'}}>
                        <Button basic fluid color="red" content='unfollow' />
                    </Reveal.Content>
                </Reveal>
            </Grid.Column>
        </Grid>
    </Segment>
  )
}
