import dashboard from './dashboard';
import project from './project';
import propertyhub from './property-hub';
import auctions from './auctions';
<<<<<<< HEAD
import management from './management';
import exhibition from './exhibition';
/**
 * import auctions from './auctions';
 * import services from './services';
 * 
 * import leads from './leads';
 
 * import agents from './agents';
 * import users from './users';
 * import careers from './companies';
 * import reviews from './reviews';
 * import pages from './pages';
 * import blogs from './blogs';
 * import community_guide from './community_guide';
 * import banners from './banners';
 * import reports from './reports';
 * import subscribers from './subscribers';
 * import settings from './settings';
 * import contracts from './contracts';
 */
=======
import exchange from './exchange';
import leads from './leads';
import agents from './agents';
import users from './users';
import services from './services';
import exhibitions from './exhibitions';
import managment from './managment';
>>>>>>> e90f2f6 (added the rest of the sidebar options)
import companies from './companies';
import careers from './careers';
import reviews from './reviews';
import pages from './pages';
import blogs from './blogs';
import communityGuide from './communityGuide';
import reports from './reports';
import subscribers from './subscribers';
import settings from './settings';
import contract from './contract';

// import units from './units';
// ==============================|| MENU ITEMS ||============================== //

const menuItems = {
<<<<<<< HEAD
  items: [dashboard, management, project, propertyhub, companies, units, exhibition, auctions]
=======
  items: [
    dashboard,
    managment,
    project,
    reviews,
    pages,
    blogs,
    communityGuide,
    reports,
    subscribers,
    settings,
    contract,
    propertyhub,
    companies,
    exchange,
    auctions,
    leads,
    agents,
    users,
    services,
    exhibitions,
    careers
  ]
>>>>>>> e90f2f6 (added the rest of the sidebar options)
};

export default menuItems;
