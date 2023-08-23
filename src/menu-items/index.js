import dashboard from './dashboard';
import project from './project';
import propertyhub from './property-hub';
import auctions from './auctions';
import exchange from './exchange';
import leads from './leads';
import agents from './agents';
import users from './users';
import services from './services';
import exhibitions from './exhibitions';
import management from './management';
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
import units from './units';
import banners from './banners_ads';
import contact from './contact';
import app from './app';
import categories from './categories_settings';
// import units from './units';
// ==============================|| MENU ITEMS ||============================== //

const menuItems = {
  items: [
    agents,
    dashboard,
    app,
    auctions,
    banners,
    blogs,
    careers,
    companies,
    communityGuide,
    contact,
    contract,
    exchange,
    exhibitions,
    leads,
    management,
    pages,
    project,
    propertyhub,
    reports,
    reviews,
    services,
    // categories,
    settings,
    subscribers,
    units,
    users
  ]
};

export default menuItems;

// old order:
// app,
//     banners,
//     companies,
//     dashboard,
//     management,
//     project,
//     reviews,
//     pages,
//     blogs,
//     communityGuide,
//     reports,
//     subscribers,
//     settings,
//     contract,
//     propertyhub,
//     units,
//     exchange,
//     auctions,
//     contact,
//     leads,
//     agents,
//     users,
//     services,
//     exhibitions,
//     careers
