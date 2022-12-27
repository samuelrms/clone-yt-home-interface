import { styled, Typography } from '@mui/material';
import Image from 'next/image';

export const Caption = styled(Typography)`
  font-weight: 500;
  // overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const ImageStyle = styled(Image)`
  width: 100%;
  height: inherit;
  cursor: pointer;
  border-radius: 16px;
`;
