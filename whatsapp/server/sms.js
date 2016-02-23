// Add in order to use with a real twilio account
// SMS.twilio = {
//   ACCOUNT_SID: Meteor.settings.TWILIO.SID,
//   AUTH_TOKEN: Meteor.settings.TWILIO.TOKEN
// };
// {
//   "TWILIO": {
//     "FROM": "meteor-whatsapp",
//     "SID": "",
//     "TOKEN": ""
//   },
//   "ACCOUNTS_PHONE": {
//     "ADMIN_NUMBERS": ["123456789", "987654321"],
//     "MASTER_CODE": "1234"
//   }
// }

if (Meteor.isServer) {
  if (Meteor.settings && Meteor.settings.ACCOUNTS_PHONE) {
    Accounts._options.adminPhoneNumbers = Meteor.settings.ACCOUNTS_PHONE.ADMIN_NUMBERS;
    Accounts._options.phoneVerificationMasterCode = Meteor.settings.ACCOUNTS_PHONE.MASTER_CODE;
  }
}