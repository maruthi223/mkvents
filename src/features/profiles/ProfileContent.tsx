import { Tab } from "semantic-ui-react";
import { Profile } from "../../app/types/profile";
import ProfileAbout from "./ProfileAbout";
import ProfilePhotos from "./ProfilePhotos";
import ProfileEvents from "./ProfileEvents";

type Props={
  profile:Profile
}

export default function ProfileContent({profile}:Props) {
  const panes =[
    {menuItem:'About',render: ()=><ProfileAbout profile={profile} />},
    {menuItem:'Photos',render: ()=><ProfilePhotos profile={profile} />},
    {menuItem:'events',render: ()=><ProfileEvents profile={profile}/>},
    {menuItem:'followers',render: ()=><Tab.Pane>Followers</Tab.Pane>},
    {menuItem:'following',render: ()=><Tab.Pane>Following</Tab.Pane>},
  ]

  return (
    <Tab
        menu={{fluid:true, vertical:true}}
        menuPosition="right"
        panes={panes}
    />
  )
}
