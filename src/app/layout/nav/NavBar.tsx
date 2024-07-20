import { NavLink } from 'react-router-dom'
import { Button, Container, Menu,MenuItem } from 'semantic-ui-react'
import SignedOutButton from './SignedOutButton'
import SignedInMenu from './SignedInMenu'
import { useAppSelector } from '../../store/store'

export default function NavBar() {
  const {authenticated} = useAppSelector(state => state.auth)

  return (
    <Menu fixed='top' inverted={true}>
        <Container>
            <MenuItem header as={NavLink} to={'/'}>
                <img src="./logo.png" alt="" />
                mkvents
            </MenuItem>
            <MenuItem name='Events' as={NavLink} to={'/events'} /> 
            <MenuItem name='Scratch' as={NavLink} to={'/scratch'} /> 
            <MenuItem>
                <Button as={NavLink} to={'/createEvent'}
                floated='right' positive={true} inverted={true} content='Create Events'/> 
            </MenuItem>
            {authenticated ? <SignedInMenu  /> : <SignedOutButton  />}
        </Container>
    </Menu>
  )
}
