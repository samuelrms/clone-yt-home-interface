import {
  Stack,
  IconButton,
  Button,
  Hidden,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListSubheader,
  Avatar,
  Divider,
  Typography,
  SvgIconTypeMap,
} from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import { OverridableComponent } from '@mui/types';
import { useRouter } from 'next/router';
import { primaryMenu, secondaryMenu } from './itemsMenu';
import { CustomListItem, CustomListItemText, DesktopDrawer } from './styles';

type IsSelected =
  | {
      id: number;
      label: string;
      path: string;
      icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & {
        muiName: string;
      };
    }
  | {
      id: number;
      label: string;
      icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & {
        muiName: string;
      };
      path: string;
    };

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
