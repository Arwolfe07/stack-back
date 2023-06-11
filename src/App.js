import React, { useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css';
import RootLayout from './components/route/RootLayout';
import Home from './pages/home/Home';
import Auth from './pages/auth/Auth';
import Questions from './pages/questions/Questions';
import AskQuestion from './pages/askquestion/AskQuestion';
import DisplayQuestion from './pages/questions/DisplayQuestion';
import { useDispatch } from 'react-redux';
import { getQuestions } from './actions/question';
import { getAllUsers } from './actions/users';
import Tags from './pages/tags/Tags';
import Users from './pages/users/Users';
import User from './pages/userProfile/User';

const router = createBrowserRouter([{
  path: '/',
  element: <RootLayout />,
  children: [
    {
      index: true,
      element: <Home />
    },
    {
      path: '/auth',
      element: <Auth />
    },
    {
      path: '/questions',
      element: <Questions />
    },
    {
      path: '/askquestion',
      element: <AskQuestion />
    },
    {
      path: '/questions/:id',
      element: <DisplayQuestion />
    },
    {
      path: '/tags',
      element: <Tags />
    },
    {
      path: '/users',
      element: <Users />
    },
    {
      path: '/users/:id',
      element: <User/>
    }
  ]
}])

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getQuestions());
    dispatch(getAllUsers());
  }, [dispatch])

  return (<RouterProvider router={router} />);
}

export default App;
