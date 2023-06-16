// third-party
import { FormattedMessage } from 'react-intl';
import { SvgIcon } from '@mui/material';
// assets
import { IconClipboardCheck, IconPictureInPicture, IconForms, IconBorderAll, IconChartDots, IconStairsUp, IconCreditCard, IconVideo, IconTrash } from '@tabler/icons';
import { Ad2 } from 'tabler-icons-react';
// constant
const icons = {
  IconClipboardCheck,
  IconPictureInPicture,
  IconForms,
  IconBorderAll,
  IconChartDots,
  IconStairsUp,
  IconCreditCard,
  IconVideo,
  IconTrash
};

// ==============================|| UI FORMS MENU ITEMS ||============================== //

const banners = {
  id: 'banners_ads',
  title: <FormattedMessage id="Banners / Ads" />,
  icon: <Ad2 size={25} strokeWidth={1.5} style={{ marginRight: '10px' }} color={'black'} />,
  type: 'group',
  children: [
    {
      id: 'add-banners',
      title: <FormattedMessage id="Add Banner" />,
      type: 'item',
      icon: icons.IconPictureInPicture,
      url: '/banners_ads/add_banner'
    },
    {
      id: 'banners',
      title: <FormattedMessage id="Manage Banners" />,
      icon: icons.IconCreditCard,
      type: 'item',
      url: '/banners_ads/banners',
      breadcrumbs: false
    },
    {
      id: 'company-videos',
      title: <FormattedMessage id="Manage Company Videos" />,
      type: 'item',
      url: '/banners_ads/company_videos',
      icon: icons.IconVideo,
      breadcrumbs: false
    },
    {
      id: 'project-videos',
      title: <FormattedMessage id="Manage Project Videos" />,
      type: 'item',
      url: '/banners_ads/project_videos',
      icon: icons.IconVideo,
      breadcrumbs: false
    },
    {
      id: 'tower-videos',
      title: <FormattedMessage id="Manage Tower Videos" />,
      type: 'item',
      url: '/banners_ads/tower_videos',
      icon: icons.IconVideo,
      breadcrumbs: false
    },
    {
      id: 'deleted-banners',
      title: <FormattedMessage id="Manage Deleted Banners" />,
      type: 'item',
      url: '/banners_ads/deleted_banners',
      icon: icons.IconTrash,
      breadcrumbs: false
    },
    {
      id: 'banner-activities',
      title: <FormattedMessage id="Activities" />,
      type: 'item',
      icon: icons.IconBorderAll,
      url: '/banners_ads/activities'
    }
  ]
};

export default banners;
