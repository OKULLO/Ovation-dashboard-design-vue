import Home from './views/Home/index.js'
import Login from './views/Authentication/Login.js'
import Register from './views/Authentication/Register.js'

const routes = [
  { path: '/home', component: Home },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  
]

export default routes;