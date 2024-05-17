import { Suspense, lazy, Component } from 'react';
import { Navigate } from 'react-router-dom';
// import EmployeeListDemo from 'src/components/LMSDash/employeeListDemo';
// import ToolBar from 'src/components/LMSDash/ToolBar';
// import Batches from 'src/components/LMSDash/Batches';
// import EmployeeList from 'src/LMSDash/EmployeeList';

import SuspenseLoader from 'src/layouts/Components/SuspenseLoader';

const Loader = (Component) => (props) =>
(
  <Suspense fallback={<SuspenseLoader />}>
    <Component {...props} />
  </Suspense>
);

// Dashboards
const SchoolList = Loader(lazy(() => import('src/components/SchoolList/SchoolList')));
const Login = Loader(lazy(()=> import('src/components/Login/Login')))
const DashboardLMS = Loader(lazy(()=> import('src/components/LMSDash/DashboardLMS')))
const Profile = Loader(lazy(() => import('src/components/LMSDash/Profile')));
const Courses = Loader(lazy(() => import('src/components/LMSDash/Courses')));
const Chat = Loader(lazy(() => import('src/components/LMSDash/Chat')));
const SideNav = Loader(lazy(() => import('src/components/LMSDash/SideNav')));
const LoginPage = Loader(lazy(() => import('src/components/LMSDash/LoginPage')));
const Batches = Loader(lazy(() => import('src/components/LMSDash/Batches')));
const ToolBar = Loader(lazy(() => import('src/components/LMSDash/ToolBar')));
const EmployeeList = Loader(lazy(() => import('src/components/LMSDash/EmployeeList')));
const EmpList = Loader(lazy(() => import('src/api/RegistrationForm/Emplist')));
const EmployeeListDemo = Loader(lazy(() => import('src/components/LMSDash/EmployeeList')));

//const EmployeeList = Loader(lazy(() => import('src/components/LMSDash/EmployeeList')));
const SignUp = Loader( lazy(() => import('src/components/RegistrationForm/SignUp')));


const AuthenticationRoute = [
  {
    path: '/',
    element: <Navigate to="Login" replace />
  },
 
  {
    path: 'Login',
    element: <Login/>
  },
  {
    path:'DashboardLMS',
    element:<DashboardLMS/>
  },
  {
    path:'Profile',
    element:<Profile/>
  },
  {
    path:'Profile/:Id',
    element:<Profile/>
  },
  {
    path:'Courses',
    element:<Courses/>
  },
  {
    path:'Chat',
    element:<Chat/>
  },
  {
    path:'SideNav',
    element:<SideNav/>
  },
  {
    path:'LoginPage',
    element:<LoginPage/>
  },
  {
    path:'EmployeeList',
    element:<EmployeeList/>
  },
  {
    path:'EmpList',
    element:<EmpList/>
  },
  {
    path:'Batches',
    element:<Batches/>
  },
  
  {
    path:'ToolBar',
    element:<ToolBar/>
  },
  {
      path: 'SignUp',
      element: <SignUp />
    },
    {
      path: 'EmployeeListDemo',
      element: <EmployeeListDemo />
    },
];

export default AuthenticationRoute;
