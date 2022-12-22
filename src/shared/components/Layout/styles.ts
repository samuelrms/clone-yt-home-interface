import { Stack, styled } from '@mui/material';
export const Container = styled(Stack)`
  display: flex;
  background: #f4f6f8;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;

export const Wrapper = styled(Stack)(({ theme }) => ({
  display: 'flex',
  flex: '1 1 auto',
  overflow: 'hidden',
  paddingTop: '64',
  [theme.breakpoints.up('lg')]: {
    paddingLeft: 256,
  },
}));

export const ContentContainer = styled(Stack)`
  display: flex;
  flex: 1 1 auto;
  overflow: hidden;
`;

export const Content = styled(Stack)`
  height: 100%;
  flex: 1 1 auto;
  overflow: auto;
`;
