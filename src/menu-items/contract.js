// third-party
import { FormattedMessage } from 'react-intl';
import { WritingSign } from 'tabler-icons-react';
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
const items = 'dashboard.menuItems.contracts';

const contract = {
  id: 'contract',
  title: <FormattedMessage id={items + '.contracts'} />,
  icon: <WritingSign size={23} strokeWidth={1.5} style={{ marginRight: '10px' }} color={'black'} />,
  type: 'group',
  children: [
    {
      id: 'Add Contract',
      title: <FormattedMessage id={items + '.addContract'} />,
      type: 'item',
      icon: icons.IconKey,
      url: '/dashboard/contract/add'
    },
    {
      id: 'manage-contract',
      title: <FormattedMessage id={items + '.manageContracts'} />,
      type: 'item',
      icon: icons.IconKey,
      url: '/dashboard/contract/manage'
    }
  ]
};

export default contract;
