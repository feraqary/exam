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

const exchange = {
  id: 'exchange',
  title: <FormattedMessage id="Exchange" />,
  icon: icons.IconPictureInPicture,
  type: 'group',
  children: [
    {
      id: 'manage-units',
      title: <FormattedMessage id="Manage Units" />,
      type: 'collapse',
      icon: icons.IconPictureInPicture,
      children: [
        {
          id: 'local-units',
          title: <FormattedMessage id="Local Units" />,
          type: 'item',
          url: '/exchange/local',
          
        },
        {
          id: 'international-units',
          title: <FormattedMessage id="International Units" />,
          type: 'item',
          url: '/exchange/international',
          
        }
      ]
    },
    {
      id: 'offer-units',
      title: <FormattedMessage id="Offer Units" />,
      type: 'item',
      icon: icons.IconForms,
      url:'/exchange/offer'
    },
    {
      id: 'manage-offer-units',
      title: <FormattedMessage id="Manage Offer Units" />,
      type: 'item',
      icon: icons.IconForms,
      url:'/exchange/manage'
    },
    {
      id: 'exchange-activities',
      title: <FormattedMessage id="Activities" />,
      type: 'item',
      icon: icons.IconBorderAll,
      url:'/exchange/activities'
    }
  ]
};

export default exchange;
