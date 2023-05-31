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

const contract = {
  id: 'contract',
  title: <FormattedMessage id="Contract" />,
  icon: icons.IconKey,
  type: 'group',
  children: [
    {
      id: 'Add Contract',
      title: <FormattedMessage id="Add Contract" />,
      type: 'item',
      icon: icons.IconKey,
      url:'/contract/add'
    },
    {
      id: 'manage-contract',
      title: <FormattedMessage id="Manage Contract" />,
      type: 'item',
      icon: icons.IconKey,
      url:'/contract/manage'
    }
  ]
};

export default contract;
