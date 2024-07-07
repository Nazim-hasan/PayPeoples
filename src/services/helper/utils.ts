import { fontFamilies } from "services/constants";

export const getFontFamily = (weight: 'normal' | 'medium' | 'bold') => {
  const selectedFontFamily = fontFamilies.POPPINS;
  return selectedFontFamily[weight];
};