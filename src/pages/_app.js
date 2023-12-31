import { useEffect, useState } from 'react';

// global styles
import PropTypes from 'prop-types';

// third-party
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

// styles
import 'scss/style.scss';
import 'styles/globals.css';

// project import
import NavigationScroll from 'layout/NavigationScroll';
import { persister, store, dispatch } from 'store';
import ThemeCustomization from 'themes';
import RTLLayout from 'components/ui-component/RTLLayout';
import Locales from 'components/ui-component/Locales';
import Snackbar from 'components/ui-component/extended/Snackbar';
import Loader from 'components/ui-component/Loader';
import { getMenu } from 'store/slices/menu';
import { ConfigProvider } from 'contexts/ConfigContext';
import { JWTProvider as AuthProvider } from 'contexts/JWTContext';
import { SessionProvider } from 'next-auth/react';
import { UserProvider } from '@auth0/nextjs-auth0/client';
// import { FirebaseProvider as AuthProvider } from '../contexts/FirebaseContext';
// import { Auth0Provider as AuthProvider } from '../contexts/Auth0Context';
// import { AWSCognitoProvider as AuthProvider } from 'contexts/AWSCognitoContext';

const Noop = ({ children }) => <> {children} </>;

Noop.propTypes = {
  children: PropTypes.node
};

// ==============================|| APP ||============================== //

function App({ Component, pageProps:{session,...pageProps} }) {
  const getLayout = Component.getLayout ?? ((page) => page);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(getMenu()).then(() => {
      setLoading(true);
    });
  }, []);

  if (!loading) return <Loader />;

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persister}>
        <ConfigProvider>
          <ThemeCustomization>
            <RTLLayout>
              <Locales>
                <NavigationScroll>
                  <AuthProvider>
                    <UserProvider>
                      <SessionProvider  session={session}>
                        <>
                          {getLayout(<Component {...pageProps} />)}
                          <Snackbar />
                        </>
                      </SessionProvider>
                    </UserProvider>
                  </AuthProvider>
                </NavigationScroll>
              </Locales>
            </RTLLayout>
          </ThemeCustomization>
        </ConfigProvider>
      </PersistGate>
    </Provider>
  );
}

App.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object
};

export default App;
