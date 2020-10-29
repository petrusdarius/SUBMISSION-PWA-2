var webPush = require('web-push');
 
const vapidKeys = {
   "publicKey": "BFgRxmiak1JIfkBVoEaYpjI9FifrjjH8CvmS1rMvhD9Hbu8A29TGWIEw_mXN7MPOAguftSEoTMn0_znfgzR8E-I",
   "privateKey": "Ahxe5PmKuwnMXeSHZsGmegpfe8LFPpqxE4u0EnMBWJo"
};
 
 
webPush.setVapidDetails(
   'mailto:example@yourdomain.org',
   vapidKeys.publicKey,
   vapidKeys.privateKey
)
var pushSubscription = {
   "endpoint": "<Endpoint URL>",
   "keys": {
       "p256dh": "<p256dh Key>",
       "auth": "<Auth key>"
   }
};
var payload = 'Selamat! Aplikasi Anda sudah dapat menerima push notifikasi!';
 
var options = {
   gcmAPIKey: '1003166676176',
   TTL: 60
};
webPush.sendNotification(
   pushSubscription,
   payload,
   options
);