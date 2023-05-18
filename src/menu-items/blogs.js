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

const blogs = {
  id: 'blogs',
  title: <FormattedMessage id="blogs" />,
  icon: icons.IconKey,
  type: 'group',
  children: [
    {
      id: 'add-blog',
      title: <FormattedMessage id="Add Blog" />,
      type: 'item',
      icon: icons.IconKey
    },
    {
      id: 'manage-blogs',
      title: <FormattedMessage id="Manage" />,
      type: 'collapse',
      icon: icons.IconReceipt2,
      children: [
        {
          id: 'manage-blogs',
          title: <FormattedMessage id="blogs" />,
          type: 'item'
        },
        {
          id: 'manage-categories',
          title: <FormattedMessage id="Categories" />,
          type: 'item',
          url: '/pages/landing'
        },
        {
          id: 'delete-blog',
          title: <FormattedMessage id="Delete Blog" />,
          type: 'item',
          url: '/pages/delete-blog'
        }
      ]
    },
    {
      id: 'activities',
      title: <FormattedMessage id="Activities" />,
      icon: icons.IconKey,
      type: 'item',
      url: '/pages/landing'
    }
  ]
};

export default blogs;
