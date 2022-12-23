import { OverridableComponent } from '@mui/types';
import { SvgIconTypeMap } from '@mui/material';

export type IsSelected =
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
