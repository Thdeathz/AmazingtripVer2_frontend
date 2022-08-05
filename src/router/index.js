//Layout
import { 
    DefaultLayout, 
} from '~/components/Layouts';

// Pages


// Provider

import Test from '~/features/Test';

// Public Page
const publicRoutes = [
    { path: '/test/*', component: Test, layout: DefaultLayout },

];

const privateRoutes = [
    

];

export { publicRoutes, privateRoutes };