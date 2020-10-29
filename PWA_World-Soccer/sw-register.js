if(!('serviceWorker' in navigator)) {
    console.log('Browser ini tidak mendukung Service Worker');
} else {
    swRegister();
    requestPermission();
}

// registrasi SW
function swRegister() {
// let swRegister = () => {
    return navigator.serviceWorker.register('/service-worker.js')
    .then((registration) => { //coba arrow
        console.log('Service Worker berhasil diregistrasi!');
        return registration;
    })
    .catch((err) => {
        console.log('Registrasi Service Worker GAGAL', err);
    });
}

// premission untuk notification
function requestPermission() {
    if('Notification' in window) {
        Notification.requestPermission()
        .then((result) => {
            if(result === 'denied') {
                console.log('Permintaan Notifikasi ditolak!');
                return;
            } else if (result==='default') {
                console.error('User tidak memilih pengijinan notifikasi');
                return;
            }

            if(!('PushManager' in window)) {
                navigator.serviceWorker.getRegistration()
                .then((reg)=> {
                    reg.pushManager.subscribe({
                        userVisibleOnly:true
                    })
                    .then((sub) => {
                        console.log('Berhasil melakukan subs', sub.endpoint);
                    })
                    .catch((e) => {
                        console.log('Tidak dapat melakukan subscribe', e);
                    });
                });
            }
        });
    }

    
}