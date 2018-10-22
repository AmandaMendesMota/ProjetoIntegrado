import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'IoT Dashboard',
    icon: 'nb-home',
    link: '/pages/dashboard',
    home: true,
  },
 /* {
    title: 'IoT Dashboard',
    icon: 'nb-home',
    link: '/pages/iot-dashboard',
    
  },*/
  {
    title: 'CÔMODOS',
    group: true,
  },
  
  {
    title: 'Jardim',
    icon: 'nb-sunny',
    link: '/pages/jardim',
  },

  {
    title: 'Sala',
    icon: 'nb-audio',
    link: '/pages/sala',
  },

  {
    title: 'Auth',
    icon: 'nb-locked',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
];
