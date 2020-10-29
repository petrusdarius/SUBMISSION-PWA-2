document.addEventListener("DOMContentLoaded", function () {
    // aktivasi sidebar
    const burger = document.querySelectorAll(".sidenav");
    M.Sidenav.init(burger);

    var typeFavorit = '';

    navLoad();

    function navLoad() {
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4) {
                if (this.status != 200) return;

                // Muat daftar tautan menu
                document.querySelectorAll(".topnav, .sidenav").forEach(function (elm) {
                    elm.innerHTML = xhttp.responseText;
                });

                // Daftarkan event listener untuk setiap tautan menu
                document.querySelectorAll(".sidenav a, .topnav a").forEach(function (elm) {
                    elm.addEventListener("click", function (event) {
                        // Tutup sidenav
                        const sidenav = document.querySelector(".sidenav");
                        M.Sidenav.getInstance(sidenav).close();    
                        
                        

                        // Muat konten halaman yang dipanggil
                        page = event.target.getAttribute("href").substr(1);
                        //console.log("cek halaman yang dimuat: navLoad: " + page);

                        pageLoad(setupPage(page));

                    });
                });
            }
        };
        xhttp.open("GET", "nav.html", true);
        xhttp.send();
    }

    // Load page content
    var page = window.location.hash.substr(1);


    pageLoad(setupPage(page));

    function setupPage(page) {
        if (page == "" || page == "#") {
            page = "home";
        } else if (page === "favorit" || page === "team-fav") {
            page = "favorit";
            typeFavorit = "tim";
        } else if (page === "player-fav") {
            page = "favorit";
            typeFavorit = "pemain";
        } else if (page === "match-fav") {
            page = "favorit";
            typeFavorit = "pertandingan";
        } else {
            typeFavorit = "";
        }
        return page;
    }

    function pageLoad(page) {

        console.log("loadPage: page: " + page);
        console.log("loadPage: typeFavorit: " + typeFavorit);
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            var content = document.querySelector("#body-content");

            if (this.readyState == 4) {
                if (page === "home") {
                    getLigaKlasemen();
                } else if (page === "matches") {
                    getMatchByIdLeague();
                } else if (page === "favorit") {
                    setupDataFavHtml(typeFavorit);
                }

                if (this.status == 200) {
                    content.innerHTML = xhttp.responseText;
                } else if (this.status == 404) {
                    content.innerHTML = "<p>Halaman tidak ditemukan.</p>";
                } else {
                    content.innerHTML = "<p>Ups.. halaman tidak dapat diakses.</p>";
                }
            }
        };

        xhttp.open("GET", "pages/" + page + ".html", true);
        xhttp.send();
    }

});