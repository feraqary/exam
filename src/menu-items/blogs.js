// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { IconKey, IconReceipt2,IconScriptX, IconBorderAll,IconBug,IconTextCaption, IconClipboardText,IconBellRinging, IconPhoneCall, IconQuestionMark, IconShieldLock } from '@tabler/icons';
import { Book } from 'tabler-icons-react';

// constant
const icons = {
  IconKey,
  IconReceipt2,
  IconBug,
  IconBellRinging,
  IconPhoneCall,
  IconQuestionMark,
  IconShieldLock,
  IconClipboardText,
  IconTextCaption,
  IconScriptX,
  IconBorderAll
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const blogs = {
  id: 'blogs',
  title: <FormattedMessage id="blogs" />,
  icon: <Book size={23} strokeWidth={1.5} color={'black'} style={{ marginRight: '10px' }} />,
  type: 'group',
  children: [
    {
      id: 'add-blog',
      title: <FormattedMessage id="Add Blog" />,
      type: 'item',
      icon: icons.IconKey,
      url: '/dashboard/blog/add_blog'
    },

    {
      id: 'manage-blogs',
      title: <FormattedMessage id="Manage Blogs" />,
      type: 'item',
      icon: icons.IconClipboardText,
      url: '/dashboard/blog/manage_blogs'
    },
    {
      id: 'manage-categories',
      title: <FormattedMessage id="Categories" />,
      type: 'item',
      icon: icons.IconTextCaption,
      url: '/dashboard/blog/manage_categories'
    },
    {
      id: 'deleted-blog',
      title: <FormattedMessage id="Deleted Blogs" />,
      type: 'item',
      icon: icons.IconScriptX,
      url: '/dashboard/blog/deleted_blogs'
    },
    {
      id: 'blogs-activities',
      title: <FormattedMessage id="Activities" />,
      icon: icons.IconBorderAll,
      type: 'item',
      url: '/dashboard/blog/activities'
    }
  ]
};

export default blogs;
