import { isIos } from "./ui";

export const fontFamilies = {
  POPPINS: {
    normal: isIos ? 'Poppins-Regular' : 'Poppins Regular',
    medium: isIos ? 'Poppins-Medium' : 'Poppins Medium',
    semiBold: isIos ? 'Poppins-SemiBold' : 'Poppins SemiBold',
    bold: isIos ? 'Poppins-Bold' : 'Poppins Bold',
  }
};
