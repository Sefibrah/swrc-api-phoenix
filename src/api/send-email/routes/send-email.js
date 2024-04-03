module.exports = {
  routes: [
    {
     method: 'POST',
     path: '/send-email',
     handler: 'send-email.sendEmailToSelf',
     config: {
       policies: [],
       middlewares: [],
     },
    },
  ],
};
