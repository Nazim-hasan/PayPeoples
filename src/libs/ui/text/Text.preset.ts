import {getFontFamily} from 'services';

const fontSizes = {
  heading: 22,
  xl: 20,
  lg: 18,
  md: 12,
  sm: 10,
};

export const presets = {
  heading: {
    fontFamily: getFontFamily('bold'),
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
};
