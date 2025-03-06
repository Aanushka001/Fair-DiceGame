import '../styles/global.css';
import { AuthProvider } from '../context/authContext';
import { Web3Provider } from '../context/Web3Context';

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Web3Provider>
        <Component {...pageProps} />
      </Web3Provider>
    </AuthProvider>
  );
}

export default MyApp;