module.exports = {
  routes: [
    {
     method: 'POST',
     path: '/import/gtrc/contract',
     handler: 'import.importContractFromGTRC',
     config: {
       policies: [],
       middlewares: [],
     },
    },
    {
     method: 'POST',
     path: '/import/gtrc/reservation',
     handler: 'import.importReservationFromGTRC',
     config: {
       policies: [],
       middlewares: [],
     },
    },
  ],
};
