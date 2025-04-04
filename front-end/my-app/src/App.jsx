import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useState } from 'react'
import './App.css'
import Form from './Form'
import Menu from './Menu'
import Order from './Order'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Form/>
  },
  {
    path: '/menu',
    element: <Menu/>
  }
  // ,
  // {
  //   path: '/order',
  //   element: <Product/>
  // }
])

export default function App() {
  return (
    <RouterProvider router={router} />
    // <Form />
    // <Menu />
    // ,
    // <Order />
  );
}
