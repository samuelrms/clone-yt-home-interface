import { CheckCircle } from '@mui/icons-material';
import { Avatar, Stack, Tooltip, Typography } from '@mui/material';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

import { Caption, ImageStyle } from './styles';

dayjs.extend(relativeTime);

interface Props {
  item: {
    id: number;
    title: string;
    author: string;
    authorID: number;
    authorName: string;
    authorAvatar: string;
    views: number;
    thumb: string;
    videoURL: string;
    updateAt: Date;
    checked: boolean;
  };
}

export const VideoCard: React.FC<Props> = ({ item }) => {
  return (
    <Stack mb={1}>
      <ImageStyle width={500} height={200} alt={item.title} src={item.thumb} />
      <Stack mt={1} flexDirection={'row'}>
        <Avatar alt={item.authorName} src={item.authorAvatar}>
          SR
        </Avatar>
        <Stack ml={1}>
          <Caption gutterBottom variant="body1" color="textPrimary">
            {item.title}
          </Caption>
          <Typography display="flex" variant="body2" color="textSecondary">
            {item.author}
            {item.checked && (
              <Tooltip title="Verificado" arrow>
                <CheckCircle fontSize="small" sx={{ ml: 0.5 }} />
              </Tooltip>
            )}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {`${item.views} • ${dayjs(item.updateAt).fromNow()}`}
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};
