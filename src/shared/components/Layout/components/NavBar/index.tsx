import { AccountCircle } from '@mui/icons-material';
import { useRouter } from 'next/router';
import {
  Stack,
  Button,
  Hidden,
  List,
  ListItemIcon,
  Divider,
  Typography,
} from '@mui/material';

import { primaryMenu, secondaryMenu } from './itemsMenu';
import { CustomListItem, CustomListItemText, DesktopDrawer } from './styles';
import { IsSelected } from '../../../../types';

export const NavBar = () => {
  const router = useRouter();

  const isSelected = (data: Partial<IsSelected>) => {
    return router.pathname === data?.path;
  };

  const content = (
    <Stack height="100%" width={240} mt={7}>
      <List>
        {primaryMenu.map((data) => {
          const Icon = data.icon;
          return (
            <CustomListItem key={data.id} selected={isSelected(data)}>
              <ListItemIcon>
                <Icon
                  style={{ color: isSelected(data) ? '#f44336' : undefined }}
                />
              </ListItemIcon>
              <CustomListItemText primary={data.label} />
            </CustomListItem>
          );
        })}
      </List>
      <Divider />
      <List>
        {secondaryMenu.map((data) => {
          const Icon = data.icon;
          return (
            <CustomListItem key={data.id} selected={isSelected(data)}>
              <ListItemIcon>
                <Icon
                  style={{ color: isSelected(data) ? '#f44336' : undefined }}
                />
              </ListItemIcon>
              <CustomListItemText primary={data.label} />
            </CustomListItem>
          );
        })}
      </List>
      <Divider />
      <Stack mx={4} my={2}>
        <Typography variant="body2">
          Faça login para curtir vídeos, comentar e se inscrever.
        </Typography>
        <Stack mt={2}>
          <Button
            variant="outlined"
            color="secondary"
            startIcon={<AccountCircle />}
          >
            Fazer Login
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );

  return (
    <Hidden mdDown>
      <DesktopDrawer anchor="left" open variant="persistent">
        {content}
      </DesktopDrawer>
    </Hidden>
  );
};
