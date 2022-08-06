// Pages
import {
    Test,
    Guest,
    Auth,
} from '~/features';


// Provider


// Public Page
const publicRoutes = [
    { path: '/test/*', component: Test},
    { path: '/*', component: Guest },
    { path: '/login', component: Auth },

];

const privateRoutes = [
    

];

export { publicRoutes, privateRoutes };