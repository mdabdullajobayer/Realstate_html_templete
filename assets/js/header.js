export default function loadHeader() {
    return `
        <!--==============================
        Mobile Menu
        ============================== -->
        <div class="th-menu-wrapper onepage-nav">
            <div class="th-menu-area text-center">
                <button class="th-menu-toggle"><i class="fal fa-times"></i></button>
                <div class="mobile-logo">
                    <a href="index.html">
                        <img src="assets/img/icon/logom.png" alt="Realar">
                    </a>
                </div>
                <div class="th-mobile-menu">
                    <ul>
                        <li class="menu-item-has-children">
                            <a href="index.html">Home</a>
                        </li>
                        <li><a href="about.html">About Us</a></li>
                        <li class="menu-item-has-children">
                            <a href="#">Our Concern</a>
                            <ul class="sub-menu">
                                <li><a href="#">Mermaid Duplex City</a></li>
                                <li><a href="green-city.html">Mermaid Green City</a></li>
                                <li><a href="express-city.html">Mermaid Express City</a></li>
                                <li><a href="commercial-city.html">Mermaid Commercial City</a></li>
                                <li><a href="#">Mermaid Holding LTD</a></li>
                                <li><a href="#">Mermaid River View</a></li>
                            </ul>
                        </li>
                        <li class="menu-item-has-children">
                            <a href="gallery.html">Gallery</a>
                        </li>
                        <li><a href="our-team.html">Our Team</a></li>
                        <li class="menu-item-has-children">
                            <a href="#">Document</a>
                            <ul class="sub-menu">
                                <li><a href="download.html">Download</a></li>
                                <li><a href="application-form.html">Application Form</a></li>
                            </ul>
                        </li>
                        <li><a href="#cont">Contact Us</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <!--==============================
        Header Area
        ==============================-->
        <header class="th-header header-layout2">
            <div class="sticky-wrapper">
                <!-- Main Menu Area -->
                <div class="menu-area">
                    <div class="container">
                        <div class="row align-items-center justify-content-between">
                            <div class="col-auto">
                                <div class="header-logo">
                                    <a href="index.html">
                                        <img style="width: 210px; height: 88px;" src="assets/img/icon/logom.png" alt="Realar">
                                    </a>
                                </div>
                            </div>
                            <div class="col-auto">
                                <nav class="main-menu d-none d-lg-inline-block">
                                    <ul>
                                        <li><a href="index.html">Home</a></li>
                                        <li><a href="about.html">About Us</a></li>
                                        <li class="menu-item-has-children">
                                            <a href="#">Our Concern</a>
                                            <ul class="sub-menu">
                                                <li><a href="#">Mermaid Duplex City</a></li>
                                                <li><a href="green-city.html">Mermaid Green City</a></li>
                                                <li><a href="express-city.html">Mermaid Express City</a></li>
                                                <li><a href="commercial-city.html">Mermaid Commercial City</a></li>
                                                <li><a href="#">Mermaid Holding LTD</a></li>
                                                <li><a href="#">Mermaid River View</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="gallery.html">Gallery</a></li>
                                        <li><a href="our-team.html">Our Team</a></li>
                                        <li class="menu-item-has-children">
                                            <a href="#">Document</a>
                                            <ul class="sub-menu">
                                                <li><a href="download.html">Download</a></li>
                                                <li><a href="application-form.html">Application Form</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="#cont">Contact Us</a></li>
                                    </ul>
                                </nav>
                                <div class="header-button d-flex d-lg-none">
                                    <button type="button" class="th-menu-toggle sidebar-btn">
                                        <span class="line"></span>
                                        <span class="line"></span>
                                        <span class="line"></span>
                                    </button>
                                </div>
                            </div>
                            <div class="col-auto d-none d-xxl-block">
                                <div class="header-button">
                                    <a href="#" class="th-btn style2 th-btn-icon">Request A Visit</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    `;
}