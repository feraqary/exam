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

const communityGuide = {
  id: 'community-guide',
  title: <FormattedMessage id="community guide" />,
  icon: icons.IconKey,
  type: 'group',
  children: [
    {
      id: 'manage',
      title: <FormattedMessage id="Manage" />,
      type: 'collapse',
      icon: icons.IconKey,
      children: [
        {
          id: 'manage-community',
          title: <FormattedMessage id="Community" />,
          type: 'item'
        },
        {
          id: 'manage-tower-image',
          title: <FormattedMessage id="Tower Image" />,
          type: 'item'
        }
      ]
    },

    {
      id: 'change-community-publish-status',
      title: <FormattedMessage id="Change Community Publish Status" />,
      type: 'item',
      icon: icons.IconBug
    },
    {
      id: 'change-tower-status',
      title: <FormattedMessage id="Change Tower Status" />,
      type: 'item',
      icon: icons.IconBellRinging,
      url: '/pages/landing',
      target: true
    },
    {
      id: 'activities',
      title: <FormattedMessage id="Activities" />,
      type: 'item',
      icon: icons.IconPhoneCall,
      url: '/pages/landing',
      target: true
    }
  ]
};

export default communityGuide;
