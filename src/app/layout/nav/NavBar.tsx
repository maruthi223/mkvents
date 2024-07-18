import { NavLink } from 'react-router-dom'
import { Button, Container, Menu,MenuItem } from 'semantic-ui-react'
import SignedOutButton from './SignedOutButton'
import SignedInMenu from './SignedInMenu'
import { useState } from 'react'

export default function NavBar() {
  const [auth,setAuth]= useState(false);

  return (
    <Menu fixed='top' inverted={true}>
        <Container>
            <MenuItem header as={NavLink} to={'/'}>
                <img src="./logo.png" alt="" />
                mkvents
            </MenuItem>
            <MenuItem name='Events' as={NavLink} to={'/events'} /> 
            <MenuItem>
                <Button as={NavLink} to={'/createEvent'}
                floated='right' positive={true} inverted={true} content='Create Events'/> 
            </MenuItem>
            {auth ? <SignedInMenu setAuth={setAuth} /> : <SignedOutButton setAuth={setAuth} />}
        </Container>
    </Menu>
  )
}
