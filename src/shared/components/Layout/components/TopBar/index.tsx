import { Container, Content, Form, Img } from './styles';
import { Stack, IconButton } from '@mui/material';
import { Menu } from '@mui/icons-material';

export const TopBar = () => {
  return (
    <Container color="default">
      <Content>
        <Stack flexDirection={'row'} alignItems={'center'}>
          <IconButton>
            <Menu />
          </IconButton>
          <Img src={'/new-youtube-logo.svg'} alt="" />
        </Stack>
        <Stack>
          <Form></Form>
        </Stack>
        <Stack></Stack>
      </Content>
    </Container>
  );
};
