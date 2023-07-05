module.exports = {
  routes: [
    {
     method: 'POST',
     path: '/send-email',
     handler: 'send-email.sendEmail',
     config: {
       policies: [],
       middlewares: [],
     },
    },
  ],
};
