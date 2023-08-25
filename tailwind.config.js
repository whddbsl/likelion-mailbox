/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.jsx'],
  theme: {
    extend: {
      fontFamily: {
        suit: ['SUIT Variable'],
        nanumSquareNeo: ['NanumSquareNeo-Variable'],
        pretendard: ['Pretendard-Regular'],
        GmarketSansMedium: ['GmarketSansMedium'],
      },
      backgroundImage: {
        hero: 'url("/cover2.jpg")',
        message: 'url(/images/message.png)',
      },
      colors: {
        primary: '#4a9944',
        lionYellow: '#FFC63E',
        lionGray: '#F5F5F5',
        lionOrange: '#D76700',
        inputYellow: '#FFE19A',
        lionBlack: '#000',
        lionBlue: '#0D77D8',
        lionSecondOrange: '#FD983C',
        lionWhite: '#FFF',
      },
    },
  },
  plugins: [],
};