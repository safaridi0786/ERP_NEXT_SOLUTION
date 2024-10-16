export const getColorIndexes = (key, lightColors, darkColors) => {
  const index = key ? key.charCodeAt(0) % lightColors.length : 0;
  return {
    lightColor: lightColors[index],
    darkColor: darkColors[index],
  };
};
