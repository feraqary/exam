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
      icon: icons.IconKey,
      url: '/blog/add_blog'
    },
    {
      id: 'manage-blogs',
      title: <FormattedMessage id="Manage" />,
      type: 'collapse',
      icon: icons.IconReceipt2,
      children: [
        {
          id: 'manage-blogs',
          title: <FormattedMessage id="Manage Blogs" />,
          type: 'item',
          url: '/blog/manage_blogs'
        },
        {
          id: 'manage-categories',
          title: <FormattedMessage id="Categories" />,
          type: 'item',
          url: '/blog/manage_categories'
        },
        {
          id: 'deleted-blog',
          title: <FormattedMessage id="Deleted Blogs" />,
          type: 'item',
          url: '/blog/deleted_blogs'
        }
      ]
    },
    {
      id: 'blogs-activities',
      title: <FormattedMessage id="Activities" />,
      icon: icons.IconKey,
      type: 'item',
      url: '/blog/activities'
    }
  ]
};

export default blogs;
