import Form from './Form';
import Create from "./Create";

const routes = [
    {
        path: '/',
        exact: true,
        component: Form,
    },
    {
        path: '/create',
        exact: true,
        component: Create,
    },
];

export {routes}
