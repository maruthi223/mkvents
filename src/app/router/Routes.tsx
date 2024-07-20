import { createBrowserRouter } from "react-router-dom";
import App from "../layout/App";
import EventDashboard from "../../features/events/dashboard/EventDashboard";
import EventDetailedPage from "../../features/events/detail/EventDetailedPage";
import EventsForm from "../../features/events/form/EventForm";
import Scratch from "../../features/scratch/Scratch";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children:[
            {path: '/events' ,element: <EventDashboard/>},
            {path: '/events/:id', element: <EventDetailedPage/>},
            {path: '/manage/:id', element: <EventsForm/>},
            {path: '/createEvent', element: <EventsForm key='create' />},      
            {path: '/scratch', element: <Scratch/>},      
        ]
    }
])