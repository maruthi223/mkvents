import { createBrowserRouter } from "react-router-dom";
import App from "../layout/App";
import EventDashboard from "../../features/events/dashboard/EventDashboard";
import EventDetailedPage from "../../features/events/detail/EventDetailedPage";
import EventsForm from "../../features/events/form/EventForm";
import Scratch from "../../features/scratch/Scratch";
import AccountPage from "../../features/auth/AccountPage";
import ProfilePage from "../../features/profiles/ProfilePage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children:[
            {path: '/events' ,element: <EventDashboard/>},
            {path: '/events/:id', element: <EventDetailedPage/>},
            {path: '/manage/:id', element: <EventsForm/>},
            {path: '/profiles/:id', element: <ProfilePage/>},
            {path: '/createEvent', element: <EventsForm key='create' />},      
            {path: '/scratch', element: <Scratch/>},      
            {path: '/account', element: <AccountPage/>},      
        ]
    }
])