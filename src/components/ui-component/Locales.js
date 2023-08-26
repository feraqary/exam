import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

// third-party
import { IntlProvider } from 'react-intl';
import useConfig from 'hooks/useConfig';
import flattenMessages from 'utils/flatten-message';

// load locales files
const loadLocaleData = (locale) => {
  switch (locale) {
    case 'fr':
      return import('utils/locales/fr.js');
    case 'ar':
      return import('utils/locales/ar.js');
    case 'ro':
      return import('utils/locales/ro.json');
    case 'zh':
      return import('utils/locales/zh.json');
    default:
      return import('utils/locales/en.js');
  }
};

// ==============================|| LOCALIZATION ||============================== //

const Locales = ({ children }) => {
  const { locale } = useConfig();
  const [messages, setMessages] = useState();
  useEffect(() => {
    loadLocaleData(locale).then((d) => {
      setMessages(d.default);
    });
  }, [locale]);

  return (
    <>
      {messages && (
        <IntlProvider locale={locale} defaultLocale="en" messages={flattenMessages(messages)}>
          {children}
        </IntlProvider>
      )}
    </>
  );
};

Locales.propTypes = {
  children: PropTypes.node
};

export default Locales;
