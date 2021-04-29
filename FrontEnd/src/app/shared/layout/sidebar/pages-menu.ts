import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [

  {
    title: 'Reports & Statistics',
    icon: 'nb-bar-chart',
    expanded: false,
    children: [
      {
        title: 'Monthly TS BY Contract',
        icon: 'nb-bar-chart',
        //link: '/pages/statreports',
      },

    ],
  },
  
  {
    title: 'Parameters',
    icon: 'nb-compose',
  //  link: '/pages/parameters',
  },

  // {
  //  title: 'Pointing chart',
  //  icon: 'nb-compose',
  //  link: '/pages/pointing',
  //},

];
