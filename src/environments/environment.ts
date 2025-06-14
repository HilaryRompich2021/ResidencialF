export const environment = {
  production: false,
  //apiUrl: 'http://localhost:8080/api'
  apiUrl:
    window.location.hostname.includes('azurewebsites.net')
      ? 'https://micasitaseguraresidencial-g3bed6dzbab9c2a4.canadacentral-01.azurewebsites.net/api'
      : 'http://localhost:8080/api',
  wsUrl:  'wss://micasitaseguraresidencial-g3bed6dzbab9c2a4.canadacentral-01.azurewebsites.net/ws'
};

