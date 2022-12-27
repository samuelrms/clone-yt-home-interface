import {
  ButtonForIcon,
  Container,
  Content,
  Form,
  Img,
  InputForm,
} from './styles';
import { Stack, IconButton, Button, Hidden, Typography } from '@mui/material';
import {
  Menu,
  Search,
  Apps,
  MoreVert,
  VideoCall,
  AccountCircle,
} from '@mui/icons-material';

export const TopBar = () => {
  return (
    <Container color="default">
      <Content>
        <Stack flexDirection={'row'} alignItems={'center'} width="100%">
          <IconButton>
            <Menu />
          </IconButton>
          <Img src={'/new-youtube-logo.svg'} alt="" />
        </Stack>
        <Hidden mdDown>
          <Stack width="100%" alignItems={'center'}>
            <Form component="form" elevation={0}>
              <InputForm
                placeholder="Pesquisar"
                inputProps={{ 'aria-label': 'search google maps' }}
              />
              <ButtonForIcon type="submit" aria-label="search">
                <Search />
              </ButtonForIcon>
            </Form>
          </Stack>
        </Hidden>
        <Stack flexDirection={'row'} width="100%" justifyContent={'flex-end'}>
          <ButtonForIcon>
            <VideoCall />
          </ButtonForIcon>
          <ButtonForIcon>
            <Apps />
          </ButtonForIcon>
          <ButtonForIcon>
            <MoreVert />
          </ButtonForIcon>
          <Button
            sx={{ width: 'max-content' }}
            color="secondary"
            component="a"
            startIcon={<AccountCircle />}
            variant="outlined"
            // onClick={() => {
            //   signIn("google")
            // }}
          >
            Fazer Login
          </Button>
        </Stack>
      </Content>
    </Container>
  );
};
