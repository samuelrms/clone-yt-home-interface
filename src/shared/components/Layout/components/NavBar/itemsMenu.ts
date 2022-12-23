import {
  Home,
  Subscriptions,
  Whatshot,
  VideoLibrary,
  History,
} from '@mui/icons-material';

export const primaryMenu = [
  { id: 1, label: 'Inicio', path: '/', icon: Home },
  { id: 2, label: 'Em alta', path: '/trending', icon: Whatshot },
  { id: 3, label: 'Inscrições', path: '/subscriptions', icon: Subscriptions },
];

export const secondaryMenu = [
  { id: 1, label: 'Biblioteca', icon: VideoLibrary },
  { id: 2, label: 'Histórico', icon: History },
];
