import { Button, Container, Menu,MenuItem } from 'semantic-ui-react'

export default function NavBar() {
  return (
    <Menu fixed='top' inverted={true}>
        <Container>
            <MenuItem header>
                <img src="./logo.png" alt="" />
                mkvents
            </MenuItem>
            <MenuItem name='Events' /> 
            <MenuItem>
                <Button floated='right' positive={true} inverted={true} content='Create Events'/> 
            </MenuItem>
            <MenuItem position='right'>
                <Button basic inverted content='Login'/>
                <Button basic inverted content='Register' style={{marginLeft : '0.5em'}} />
            </MenuItem>
        </Container>
    </Menu>
  )
}
