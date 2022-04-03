function navbar() {
  return `
    <div id="nav_header" class="sticky">
        <div class="logo">
            <a href="../index.html">
                <img src="https://www.netmeds.com/assets/gloryweb/images/home-logo-netmeds-new.svg">
            </a>
        </div>
        <div class="searchbar">
            <input type="text" placeholder="Search for medicine & wellness products…">
        </div>
        <div class="upload_prescription">
            <a href="">Upload</a>
        </div>
        <div class="cart">
            <a href="../pages/cart.html">Cart</a>
        </div>
        <div class="login">
            <a href="">Sign in / Sign up</a>
        </div>
    </div>
    <div id="main_navigation">
        <ul>
            <li>
                <a href="" class="nav-med">Medicine</a>
            </li>
            <li>
                <a href="../pages/wellness.html" class="nav-wellness">Wellness</a>
            </li>
            <li>
                <a href="" class="nav-lab">LabTest</a>
            </li>
            <li>
                <a href="" class="nav-beauty">Beauty</a>
            </li>
            <li>
                <a href="" class="nav-health">Health Corner</a>
            </li>
        </ul>
    </div>
    <div id="nav_sections">
        <div class="navigation">
            <ul>
                <li><a>COVID Essentials</a></li>
                <li><a>Diabetes</a></li>
                <li><a>Eyewear</a></li>
                <li><a>Ayush</a></li>
                <li><a>Fitnes</a></li>
                <li><a>Mom & Baby</a></li>
                <li><a>Devices</a></li>
                <li><a>Surgicals</a></li>
                <li><a>Sexual Wellness</a></li>
                <li><a>Treatments</a></li>
            </ul>
        </div>
</div>`;
}

export default navbar;
