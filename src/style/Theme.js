// 중앙정렬
const common = {
  flexCenter: `
    display:flex;
    justify-content:center;
    align-items:center;
  `,
  flexCenterColumn: `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
};

const fontFace = {
  font1: "ClimateCrisisKR-1979",
};

const fontSizes = {
  small: "14px",
  base: "16px",
  lg: "18px",
  xl: "20px",
  xxl: "22px",
  xxxl: "24px",
  name: "30px",
  subTitleSize:"40px",
  titleSize: "50px",
};

const paddings = {
  small: "8px",
  base: "10px",
  lg: "12px",
  xl: "14px",
  xxl: "16px",
  xxxl: "18px",
};

const margins = {
  small: "8px",
  base: "10px",
  lg: "12px",
  xl: "14px",
  xxl: "16px",
  xxxl: "18px",
};

const deviceSizes = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "450px",
  tablet: "768px",
  tabletL: "1024px",
};

const colors = {
  black: "#000000",
  white: "#ffffff",
  gray_1: "#222222",
  gray_2: "#767676",
  green_1: "#3cb46e",
  mainBackgroundColor: "#1E1E1E",
  subBackgroundColor: "#dbdbdb",
  subColor1: "#6F6F6F",
  subColor2: "#B3B600",
  subColor3: "#222831",
  subColor4: "#3F3B6C",
  subColor6: "#738598",
};

const theme = {
  fontSizes,
  colors,
  deviceSizes,
  paddings,
  margins,
  common,
  fontFace,
};

export default theme;
