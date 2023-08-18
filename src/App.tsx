import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import 'modern-normalize/modern-normalize.css';
import HomePage from './pages/HomePage';
import CharacterPage from './pages/CharacterPage';
import theme from './theme';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/character/:id',
    element: <CharacterPage />,
  },
]);

function App() {
  return (
    <React.StrictMode>
      <ConfigProvider theme={theme}>
        <RouterProvider router={router} />
      </ConfigProvider>
    </React.StrictMode>
  );
}

export default App;
