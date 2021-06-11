import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [

  {
    title: 'Reports & Statistics',
  icon: 'nb-bar-chart',
    expanded: true,
    children: [
      {
        title: 'Statistics',
        icon: 'nb-bar-chart',
        link: '/pages/statreports',
      },

    ],
  },
  
  {
    title: 'Parameters',
    icon: 'nb-compose',
    link: '/pages/parameters',
  },

  {
   title: ' Holiday ',
   icon: 'nb-compose',
    link: '/pages/pointing',
  }, 

];
