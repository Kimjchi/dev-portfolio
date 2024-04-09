import Theme from '../styles/theme';

interface AppProps {
  Component: React.FC;
  pageProps: any;
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
