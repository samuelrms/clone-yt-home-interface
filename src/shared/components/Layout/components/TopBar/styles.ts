import {
  styled,
  AppBar,
  Toolbar,
  Paper,
  InputBase,
  IconButton,
} from '@mui/material';

export const Container = styled(AppBar)(({ theme }) => ({
  boxShadow: 'none',
  zIndex: theme.zIndex.drawer + 1,
  background: theme.palette.background.default,
}));

export const Content = styled(Toolbar)`
  min-height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const Img = styled('img')(({ theme }) => ({
  cursor: 'pointer',
  height: 18,
  marginLeft: theme.spacing(3),
}));

export const Form = styled(Paper)(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  alignItems: 'center',
  padding: '2px 4px',
  display: 'flex',
  maxWidth: 700,
  minWidth: 350,
  width: '100%',
  height: 35,
})) as typeof Paper;

export const InputForm = styled(InputBase)(({ theme }) => ({
  flex: 1,
}));

export const ButtonForIcon = styled(IconButton)(({ theme }) => ({}));
