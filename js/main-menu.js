        //     <div class="nav-container">
        //         <nav class="navbar"> <!--menú de navegación-->
        //             <nav class="navbar navbar-expand-lg bg-light">
        //                 <div class="container-fluid">
        //                     <a class="navbar-brand" href="#">
        //                         <img class="logo" src="img/logoPrincipal-xl.png" alt="">
        //                     </a>
        //                 <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        //                     <span class="navbar-toggler-icon"></span>
        //                 </button>
        //                     <div class="collapse navbar-collapse" id="navbarSupportedContent">
        //                         <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        //                             <li class="nav-item">
        //                                 <a class="nav-link" href="customers.html">Clientes</a>
        //                             </li>
        //                                 <li class="nav-item">
        //                                     <a class="nav-link" href="rutas-aereas.html">Rutas Aéreas</a>
        //                                 </li>
        //                                 <li class="nav-item">
        //                                     <a class="nav-link" href="flota-aerea.html">Flota Aérea</a>
        //                                 </li>
        //                                 <li class="nav-item">
        //                                     <a class="nav-link" href="tiquetes.html">Compra de tiquetes</a>
        //                                 </li>
        //                                 <li class="nav-item">
        //                                     <a class="nav-link" href="embarque.html">Embarque</a>
        //                                 </li>
        //                                 <li class="nav-item">
        //                                     <a class="nav-link" href="personal.html">Personal</a>
        //                                 </li>
        //                             </ul>
        //                     </div>
        //                 </div>
        //             </nav>        
        //         </nav>
        //     </div>
        // `

    // SIDEBAR DROPDOWN
    const allDropdown = document.querySelectorAll('#sidebar .side-dropdown');
    const sidebar = document.getElementById('sidebar');
    allDropdown.forEach(item=> {
        const a = item.parentElement.querySelector('a:first-child');
        a.addEventListener('click', function (e) {
            e.preventDefault();

            if(!this.classList.contains('active')) {
                allDropdown.forEach(i=> {
                    const aLink = i.parentElement.querySelector('a:first-child');

                    aLink.classList.remove('active');
                    i.classList.remove('show');
                })
            }

            this.classList.toggle('active');
            item.classList.toggle('show');
        })
    })

    // SIDEBAR COLLAPSE
    const toggleSidebar = document.querySelector('nav .toggle-sidebar');
    const allSideDivider = document.querySelectorAll('#sidebar .divider');
    if(sidebar.classList.contains('hide')) {
        allSideDivider.forEach(item=> {
            item.textContent = '-'
        })
        allDropdown.forEach(item=> {
            const a = item.parentElement.querySelector('a:first-child');
            a.classList.remove('active');
            item.classList.remove('show');
        })
    } else {
        allSideDivider.forEach(item=> {
            item.textContent = item.dataset.text;
        })
    }
    toggleSidebar.addEventListener('click', function () {
        sidebar.classList.toggle('hide');

        if(sidebar.classList.contains('hide')) {
            allSideDivider.forEach(item=> {
                item.textContent = '-'
            })

            allDropdown.forEach(item=> {
                const a = item.parentElement.querySelector('a:first-child');
                a.classList.remove('active');
                item.classList.remove('show');
            })
        } else {
            allSideDivider.forEach(item=> {
                item.textContent = item.dataset.text;
            })
        }
    })
    sidebar.addEventListener('mouseleave', function () {
        if(this.classList.contains('hide')) {
            allDropdown.forEach(item=> {
                const a = item.parentElement.querySelector('a:first-child');
                a.classList.remove('active');
                item.classList.remove('show');
            })
            allSideDivider.forEach(item=> {
                item.textContent = '-'
            })
        }
    })
    sidebar.addEventListener('mouseenter', function () {
        if(this.classList.contains('hide')) {
            allDropdown.forEach(item=> {
                const a = item.parentElement.querySelector('a:first-child');
                a.classList.remove('active');
                item.classList.remove('show');
            })
            allSideDivider.forEach(item=> {
                item.textContent = item.dataset.text;
            })
        }
    })
    // PROFILE DROPDOWN
    const profile = document.querySelector('nav .profile');
    const imgProfile = profile.querySelector('img');
    const dropdownProfile = profile.querySelector('.profile-link');
    imgProfile.addEventListener('click', function () {
        dropdownProfile.classList.toggle('show');
    })
    // MENU
    const allMenu = document.querySelectorAll('main .content-data .head .menu');
    allMenu.forEach(item=> {
        const icon = item.querySelector('.icon');
        const menuLink = item.querySelector('.menu-link');

        icon.addEventListener('click', function () {
            menuLink.classList.toggle('show');
        })
    })
    window.addEventListener('click', function (e) {
        if(e.target !== imgProfile) {
            if(e.target !== dropdownProfile) {
                if(dropdownProfile.classList.contains('show')) {
                    dropdownProfile.classList.remove('show');
                }
            }
        }

        allMenu.forEach(item=> {
            const icon = item.querySelector('.icon');
            const menuLink = item.querySelector('.menu-link');

            if(e.target !== icon) {
                if(e.target !== menuLink) {
                    if (menuLink.classList.contains('show')) {
                        menuLink.classList.remove('show')
                    }
                }
            }
        })
    })
    // PROGRESSBAR
    const allProgress = document.querySelectorAll('main .card .progress');
    allProgress.forEach(item=> {
        item.style.setProperty('--value', item.dataset.value)
    })
    

