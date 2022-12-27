import { Stack, styled } from '@mui/material';

export const Body = styled('body')`
  ::-webkit-scrollbar {
    display: none;
    width: 0;
  }
`;

export const Container = styled(Stack)(({ theme }) => ({
  padding: '16px 16px 16px 0',
  height: '100%',
  [theme.breakpoints.down('lg')]: {
    padding: 16,
  },
}));
