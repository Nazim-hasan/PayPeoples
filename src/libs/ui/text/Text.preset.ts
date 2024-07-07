import {getFontFamily} from 'services';
import { wp } from '../responsive-design/shared--responsive-dimenssion';

const fontSizes = {
  heading: wp(5.5),
  xl: wp(5.2),
  lg: wp(4.4),
  md: wp(3),
  sm: wp(2.5),
};

export const presets = {
  heading: {
    fontFamily: getFontFamily('semiBold'),
    fontSize: fontSizes.heading,
  },
  body: {
    fontFamily: getFontFamily('normal'),
    fontSize: fontSizes.md,
  },
  smRegular: {
    fontFamily: getFontFamily('normal'),
    fontSize: fontSizes.sm,
  },
  smBold: {
    fontFamily: getFontFamily('bold'),
    fontSize: fontSizes.sm,
  },
  mdBold: {
    fontFamily: getFontFamily('bold'),
    fontSize: fontSizes.md,
  },

  lgRegular: {
    fontFamily: getFontFamily('medium'),
    fontSize: fontSizes.lg,
  },
  xlRegular: {
    fontFamily: getFontFamily('medium'),
    fontSize: fontSizes.xl,
  },
};
