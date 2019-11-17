import Form from './Form';
import App from "../App";

const routes = [
    {
        path: '/form_hook',
        exact: true,
        component: Form,
    },
    {
        path: '/',
        exact: true,
        component: App,
    },
];

export {routes}
