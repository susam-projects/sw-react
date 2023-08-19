import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import 'modern-normalize/modern-normalize.css';
import { theme } from './theme.ts';
import { router } from './router';

export function App() {
  return (
    <React.StrictMode>
      <ConfigProvider theme={theme}>
        <RouterProvider router={router} />
      </ConfigProvider>
    </React.StrictMode>
  );
}
