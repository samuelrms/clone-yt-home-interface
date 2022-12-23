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
  styled,
  ListItemButton,
} from '@mui/material';

export const MobileDrawer = styled(Stack)(() => ({
  width: 240,
}));

export const DesktopDrawer = styled(Drawer)(() => ({
  width: 240,
  top: 64,
  height: 'calc(100% - 64px)',
  borderRight: 'none',
}));

export const CustomAvatar = styled(Avatar)(() => ({
  cursor: 'pointer',
  width: 24,
  height: 24,
}));

export const CustomListItem = styled(ListItemButton)(({ theme }) => ({
  paddingTop: 6,
  paddingBottom: 6,
  paddingLeft: theme.spacing(3),
}));

export const CustomListItemText = styled(ListItemText)(() => ({
  fontSize: 14,
}));
