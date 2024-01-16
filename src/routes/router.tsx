import { createBrowserRouter } from 'react-router-dom';
//TODO: List of rendering components on the router
import App from '../App';
import { Login } from '../components/login';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
	},
	{
		path: '/login',
		element: <Login />,
	},
]);
