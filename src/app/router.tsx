import { createBrowserRouter } from 'react-router-dom';
import { CharacterListPage } from '../characterList';
import { CharacterDetailsPage } from '../characterDetails';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <CharacterListPage />,
  },
  {
    path: '/character/:id',
    element: <CharacterDetailsPage />,
  },
]);
