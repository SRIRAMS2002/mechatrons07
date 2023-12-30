// pages/_app.js

import '../styles/GlobalCards.css'; // Replace 'GlobalCards.css' with your global CSS file path

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
