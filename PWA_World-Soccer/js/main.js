var webPush = require('web-push');
var pushSubscription = {
    "endpoint": "https://android.googleapis.com/gcm/send/ckeeHmy48rw:APA91bFJZbHZQiYfUInnMQneVXfXZkKKp_TPkFPrpmHqdkrPsa50dnzXHtsROQvRdD3l0qPu-ukzuj8CqLgytc4_SKdPDr7dAICXYcacGHhQmbHbsOcSbJ0UvQWiczZBZbdyrNvZbKX8",
    "keys": {
        "p256dh": "BBTZ/krGBzoS7j/SJkmn6zI5Evyzxgv8x5mdalHAZI0Hohr/jX0s8SIDTHoFEKyg99CY5FwrDBbY58wmPK6yvgI=",
        "auth": "BEjQ7QO8tLxaEbJimNoH/Q=="
    }
};
var payload = 'Here is a payload!';
var options = {
    gcmAPIKey: 'AAAA6ZFktNA:APA91bH2YhKmlPVUxZTP23bM2VZeIMwQvNPN_BTfPPhzSQENwjiQXM5fdFO5ME4V1BOE1ikQRj6WPksY9TD8QT66mHWhydAFAHmMBVcqRBp9FSIF3epr6FhJV4NTnYvlDbA65PvnlHjc',
    TTL: 60
};
webPush.sendNotification(
    pushSubscription,
    payload,
    options
);