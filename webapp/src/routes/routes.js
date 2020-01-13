import Login from '../components/login-component/Login'
import EmployList from '../components/employ-list-component/EmployList'


const routes = [
    {path: '/login', name: 'login', component: Login},
    {path: '/home', name: 'home', component: EmployList, meta: { requiresAuth: true}},
    {path: '/', redirect:'/login'},
    {path: '*', redirect:'/login'},
]



export default routes;