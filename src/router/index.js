// Pages
import {
    Test,
    Guest,
    User,
} from '~/features';


// Provider


// Public Page
const publicRoutes = [
    { path: '/test/*', component: Test},
    { path: '/*', component: Guest },
];

const privateRoutes = [
    { path: '/user/*', component: User}

];

export { publicRoutes, privateRoutes };