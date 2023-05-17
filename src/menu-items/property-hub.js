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

const propertyhub = {
  id: 'ui-forms',
  title: <FormattedMessage id="Property-Hub" />,
  icon: icons.IconPictureInPicture,
  type: 'group',
  children: [
    {
      id: 'components',
      title: <FormattedMessage id="Add Projects" />,
      type: 'item',
      icon: icons.IconPictureInPicture
    },
    {
      id: 'plugins',
      title: <FormattedMessage id="Manage Projects" />,
      type: 'collapse',
      icon: icons.IconForms,
      children: [
        {
          id: 'local-projects',
          title: <FormattedMessage id="Local Projects" />,
          type: 'item',
          url: '/forms/tables/tbl-basic',
          breadcrumbs: false
        },
        {
          id: 'int-projects',
          title: <FormattedMessage id="International Project" />,
          type: 'item',
          url: '/forms/tables/tbl-dense',
          breadcrumbs: false
        }
      ]
    },
    {
      id: 'layouts',
      title: 'View Shared Projects',
      type: 'item',
      icon: icons.IconForms
    },
    {
      id: 'tables',
      title: <FormattedMessage id="table" />,
      type: 'collapse',
      icon: icons.IconBorderAll,
      children: [
        {
          id: 'tbl-basic',
          title: <FormattedMessage id="table-basic" />,
          type: 'item',
          url: '/forms/tables/tbl-basic',
          breadcrumbs: false
        },
        {
          id: 'tbl-dense',
          title: <FormattedMessage id="table-dense" />,
          type: 'item',
          url: '/forms/tables/tbl-dense',
          breadcrumbs: false
        },
        {
          id: 'tbl-enhanced',
          title: <FormattedMessage id="table-enhanced" />,
          type: 'item',
          url: '/forms/tables/tbl-enhanced',
          breadcrumbs: false
        },
        {
          id: 'tbl-data',
          title: <FormattedMessage id="table-data" />,
          type: 'item',
          url: '/forms/tables/tbl-data',
          breadcrumbs: false
        },
        {
          id: 'tbl-customized',
          title: <FormattedMessage id="table-customized" />,
          type: 'item',
          url: '/forms/tables/tbl-customized',
          breadcrumbs: false
        },
        {
          id: 'tbl-sticky-header',
          title: <FormattedMessage id="table-sticky-header" />,
          type: 'item',
          url: '/forms/tables/tbl-sticky-header',
          breadcrumbs: false
        },
        {
          id: 'tbl-collapse',
          title: <FormattedMessage id="table-collapse" />,
          type: 'item',
          url: '/forms/tables/tbl-collapse',
          breadcrumbs: false
        }
      ]
    },
    {
      id: 'charts',
      title: <FormattedMessage id="charts" />,
      type: 'collapse',
      icon: icons.IconChartDots,
      children: [
        {
          id: 'apexchart',
          title: <FormattedMessage id="apexchart" />,
          type: 'item',
          url: '/forms/charts/apexchart',
          breadcrumbs: false
        },
        {
          id: 'organization-chart',
          title: <FormattedMessage id="organization-chart" />,
          type: 'item',
          url: '/forms/charts/orgchart',
          breadcrumbs: false
        }
      ]
    },
    {
      id: 'forms-validation',
      title: <FormattedMessage id="forms-validation" />,
      type: 'item',
      url: '/forms/forms-validation',
      icon: icons.IconClipboardCheck
    },
    {
      id: 'forms-wizard',
      title: <FormattedMessage id="forms-wizard" />,
      type: 'item',
      url: '/forms/forms-wizard',
      icon: icons.IconStairsUp
    }
  ]
};

export default propertyhub;
