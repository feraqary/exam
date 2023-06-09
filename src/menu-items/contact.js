// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { IconClipboardCheck, IconPictureInPicture, IconForms, IconBorderAll, IconChartDots, IconStairsUp } from '@tabler/icons';

// constant
const icons = {
  IconClipboardCheck,
  IconPictureInPicture,
  IconForms,
  IconBorderAll,
  IconChartDots,
  IconStairsUp
};

// ==============================|| UI FORMS MENU ITEMS ||============================== //

const contact = {
  id: 'contact',
  title: <FormattedMessage id="contact" />,
  icon: icons.IconPictureInPicture,
  type: 'group',
  children: [
    {
      id: 'add-contact',
      title: <FormattedMessage id="Add Contact" />,
      type: 'item',
      icon: icons.IconPictureInPicture,
      url: '/contact/add_contact'

    },
    {
      id: 'manage-contact',
      title: <FormattedMessage id="Manage Contacts" />,
      type: 'item',
      icon: icons.IconPictureInPicture,
      url: '/contact/manage_contacts'
    },

  ]
};

export default contact;