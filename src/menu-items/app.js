// third-party
import { FormattedMessage } from 'react-intl';

// assets
import {
  IconKey,
  IconReceipt2,
  IconBug,
  IconBellRinging,
  IconPhoneCall,
  IconQuestionMark,
  IconShieldLock,
  IconFile,
  IconSettings
} from '@tabler/icons';
import { AlignBoxLeftBottom } from 'tabler-icons-react';
// constant
const icons = {
  IconKey,
  IconReceipt2,
  IconBug,
  IconBellRinging,
  IconPhoneCall,
  IconQuestionMark,
  IconShieldLock,
  IconFile,
  IconSettings
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const items = 'dashboard.menuItems.app';

const app = {
  id: 'App',
  title: <FormattedMessage id={items + '.app'} />,
  icon: <AlignBoxLeftBottom size={23} style={{ marginRight: '10px' }} strokeWidth={1.5} color={'black'} />,
  type: 'group',
  children: [
    {
      id: 'Posts',
      title: <FormattedMessage id={items + '.posts'} />,
      type: 'item',
      icon: icons.IconKey,
      url: '/dashboard/sm-app/posts'
    },
    {
      id: 'Documents',
      title: <FormattedMessage id={items + '.documents'} />,
      type: 'item',
      icon: icons.IconFile,
      url: '/dashboard/company/documents'
    },
    {
      id: 'ManageDocuments',
      title: <FormattedMessage id={items + '.manageDocuments'} />,
      type: 'item',
      icon: icons.IconSettings,
      url: '/dashboard/company/documents/manage_documents'
    }
  ]
};

export default app;
