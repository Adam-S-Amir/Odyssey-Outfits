function detectDeviceType() {
  const userAgent = navigator.userAgent;

  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(userAgent)) {
    navbar();
    console.log("Device Type: Tablet");
  } else if (/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera Mini/i.test(userAgent)) {
    navbar();
    console.log("Device Type: Phone");
  } else {
    navbar_default();
    console.log("Device Type: Computer");
  }
}

function navbar() {
  let navbar = document.getElementById("navbar");
  let navbarclass = document.getElementById("navbar");
  navbarclass.classList.remove("navbar");
  navbar.innerHTML = [`
  <div class="topnav">
      <h1>Company</h1>
      <div id="Links">
          <a href="./index.html">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
          <a class="focused" href="./Resume.html">Upload a R&eacute;sum&eacute;</a>
      </div>
      <a href="javascript:void(0);" class="icon" onclick="mobilehide()">
          <i class="mobile mobile-bars"></i>
      </a>
  </div>
`]
}

function navbar_default() {
  let navbar = document.getElementById("navbar");
  let navbarclass = document.getElementById("navbar");
  navbarclass.classList.add("navbar");
  navbar.innerHTML = [`
  <h1 class="title">Company</h1>
  <nav>
      <ul>
          <li><a href="./index.html">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a class="focused" href="./Resume.html">Upload a R&eacute;sum&eacute;</a></li>
      </ul>
  </nav>
`]
}

function mobilehide() {
  var x = document.getElementById("Links");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
window.addEventListener('resize', function (event) {
  detectDeviceType();
});
detectDeviceType();