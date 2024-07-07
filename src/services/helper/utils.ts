import { fontFamilies } from "services/constants";

export const getFontFamily = (weight: 'normal' | 'medium' | 'semiBold' | 'bold') => {
  const selectedFontFamily = fontFamilies.POPPINS;
  return selectedFontFamily[weight];
};