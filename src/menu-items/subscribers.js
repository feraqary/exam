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

const subscribers = {
  id: 'subscribers',
  title: <FormattedMessage id="Subscribes" />,
  icon: icons.IconKey,
  type: 'group',
  children: [
    {
      id: 'subscribers-list',
      title: <FormattedMessage id="Subscribers List" />,
      type: 'item',
      icon: icons.IconKey,
      url:'/subscribers/list'
    }
  ]
};

export default subscribers;
