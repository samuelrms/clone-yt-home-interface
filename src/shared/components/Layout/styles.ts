import { Stack, styled } from '@mui/material';

export const ContainerLayout = styled(Stack)``;

export const Container = styled(Stack)`
  background: #f4f6f8;
  width: 100vw;
  margin-top: 64px;
`;

export const Wrapper = styled(Stack)(({ theme }) => ({
  display: 'flex',
  flex: '1 1 auto',
  paddingTop: '64',
  [theme.breakpoints.up('lg')]: {
    paddingLeft: 256,
  },
}));

export const ContentContainer = styled(Stack)`
  display: flex;
  flex: 1 1 auto;
`;

export const Content = styled(Stack)`
  height: 100%;
  flex: 1 1 auto;
  overflow: auto;
`;
