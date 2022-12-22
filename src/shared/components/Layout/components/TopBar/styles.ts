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

export const Form = styled(Paper)(({ theme }) => ({}));

export const InputForm = styled(InputBase)(({ theme }) => ({}));

export const ButtonInputForm = styled(IconButton)(({ theme }) => ({}));
