import { isIos } from "./ui";

export const fontFamilies = {
  POPPINS: {
    normal: isIos ? 'Poppins-Regular' : 'Poppins Regular',
    medium: isIos ? 'Poppins-Medium' : 'Poppins Medium',
    bold: isIos ? 'Poppins-Bold' : 'Poppins Bold',
  }
};
