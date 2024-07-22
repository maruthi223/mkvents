import { NavLink } from 'react-router-dom'
import { Button, Container, Menu,MenuItem } from 'semantic-ui-react'
import SignedOutButton from './SignedOutButton'
import SignedInMenu from './SignedInMenu'
import { useAppSelector } from '../../store/store'
import { sampleData } from '../../api/sampleData'
import { doc, setDoc } from 'firebase/firestore'
import { db } from '../../config/firebase'

export default function NavBar() {
  const {authenticated} = useAppSelector(state => state.auth)

  function seedData() {
    sampleData.forEach(async event =>{
      const {id,...rest} = event;
      await setDoc(doc(db,'events',id),{
        ...rest
      })
    })
  }

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
            {import.meta.env.DEV && (<MenuItem>
              <Button inverted={true} color='teal' content='seed data' onClick={seedData} />
            </MenuItem>)}
            {authenticated ? <SignedInMenu  /> : <SignedOutButton  />}
        </Container>
    </Menu>
  )
}
