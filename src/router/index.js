// Pages
import {
    Test,
    Guest
} from '~/features';


// Provider


// Public Page
const publicRoutes = [
    { path: '/test/*', component: Test},
    { path: '/*', component: Guest },

];

const privateRoutes = [
    

];

export { publicRoutes, privateRoutes };