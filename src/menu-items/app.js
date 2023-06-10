// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { IconKey, IconReceipt2, IconBug, IconBellRinging, IconPhoneCall, IconQuestionMark, IconShieldLock } from '@tabler/icons';

// constant
const icons = {
  IconKey,
  IconReceipt2,
  IconBug,
  IconBellRinging,
  IconPhoneCall,
  IconQuestionMark,
  IconShieldLock
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const app = {
  id: 'App',
  title: <FormattedMessage id="App" />,
  icon: icons.IconKey,
  type: 'group',
  children: [
    {
      id: 'Posts',
      title: <FormattedMessage id="Posts" />,
      type: 'item',
      icon: icons.IconKey,
      url: '/sm-app/posts'
    }
  ]
};

export default app;
