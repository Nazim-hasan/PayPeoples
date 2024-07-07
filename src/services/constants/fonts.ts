import { isIos } from "./ui";

export const fontFamilies = {
  POPPINS: {
    normal: isIos ? 'Poppins-Regular' : 'PoppinsRegular',
    medium: isIos ? 'Poppins-Medium' : 'PoppinsMedium',
    bold: isIos ? 'Poppins-Bold' : 'PoppinsBold',
  }
};
