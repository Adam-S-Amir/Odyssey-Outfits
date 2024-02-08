document.addEventListener("DOMContentLoaded", function () {
  // Check if the 'TOS' item exists in localStorage
  if (localStorage.getItem('TOS') === 'accepted') {
    // The 'TOS' item exists
    console.log("User has accepted the TOS request.");
    // You can perform further actions here if needed
  } else {
    let msg = [`
      <h1 id='TOS-welcome' aria-label="Welcome!">Welcome!</h1>
      <p id='TOS-locale' aria-label="Please select a default language">Please select a default language:</p>
      <select title="Change Site Language" id="languageSelect_2" class="languageSelect" onchange="changeLanguage(this.value)">
          <option value="ar" aria-label="Arabic.">العربية</option>
          <option value="da" aria-label="Dansk.">Dansk</option>
          <option value="de" aria-label="Deutsch.">Deutsch</option>
          <option value="el" aria-label="Greek.">Ελληνικά</option>
          <option value="en" aria-label="English.">English</option>
          <option value="es" aria-label="Spanish.">Español</option>
          <option value="fi" aria-label="Finnish.">Suomi</option>
          <option value="fr" aria-label="French.">Français</option>
          <option value="he" aria-label="Hebrew.">עברית</option>
          <option value="hu" aria-label="Hungarian.">Magyar</option>
          <option value="it" aria-label="Italian.">Italiano</option>
          <option value="ja" aria-label="Japanese.">日本語</option>
          <option value="ko" aria-label="Korean.">한국어</option>
          <option value="nb" aria-label="Norwegian Bokmål.">Norsk Bokmål</option>
          <option value="nl" aria-label="Dutch.">Nederlands</option>
          <option value="pl" aria-label="Polish.">Polski</option>
          <option value="pt" aria-label="Portuguese.">Português</option>
          <option value="ru" aria-label="Russian.">Русский</option>
          <option value="sk" aria-label="Slovak.">Slovenčina</option>
          <option value="sl" aria-label="Slovenian.">Slovenščina</option>
          <option value="sv" aria-label="Swedish.">Svenska</option>
          <option value="tr" aria-label="Turkish.">Türkçe</option>
          <option value="zh" aria-label="Chinese.">中文</option>
      </select>
      <p id='TOS-ADA' aria-label="ADA Terms of Service">Our website is in compliance with ADA (Americans with Disabilities Act) standards.<br>As a result, you may click the eye icon located in the top right corner to toggle<br>ADA compliance mode.</p>
      <p id='TOS-preamble' aria-label="Terms of Service">Our website gathers user data to enhance the overall user experience.<br>By continuing to use our site, you agree to our TOS.</p>
      <a id='TOS-TOS' aria-label="View Terms of Service" href="./TOS-Privacy.html">Terms of Service & Privacy Policy</a>
      <br>
      <br>
    `];
    window.toast({
      message: msg,
      btnmsg: "OK",
      action: () => TOS(),
    });
  };

  function TOS() {
    localStorage.setItem("TOS", "accepted")
  }
  if (localStorage.getItem('ada') === 'on') {
    changeRootStyles();
  } else {
    localStorage.setItem('ada', 'off');
  };
});

function redirectToHomepage() {
  window.location.href = "./index.html";
}
let scrolled = false;

function scrollToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}

// Show the button when scrolling down and hide it when at the top
window.onscroll = function () {
  if (!scrolled) {
    let scrollTop = document.createElement("button");
    scrollTop.id = "scrollToTopBtn";
    scrollTop.ariaLabel = "Scroll to Top";
    scrollTop.innerText = "Scroll to Top"; // Set button text
    scrollTop.addEventListener('click', scrollToTop);
    document.body.appendChild(scrollTop);
    scrolled = true;
  }

  const btn = document.getElementById("scrollToTopBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};


function detectDeviceType() {
  const userAgent = navigator.userAgent;

  function isiPadAir() {
    const userAgent = navigator.userAgent;
    return /iPad/i.test(userAgent) && /AppleWebKit/i.test(userAgent) && /CriOS/i.test(userAgent);
  };
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(userAgent)) {
    navbar();
    console.log("Device Type: Tablet");
  } else if (isiPadAir()) {
    navbar();
    console.log("Device Type: Tablet");
  } else if (/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera Mini/i.test(userAgent)) {
    navbar();
    console.log("Device Type: Phone");
  } else {
    navbar_default();
    console.log("Device Type: Computer");
  };
}

function getDeviceWidth() {
  return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
}

function HomePage() {
  const HomeBanner = document.querySelector("#Home-Banner")
  const HomeHeader = document.querySelector("#Home-Header");
  const HomeBio = document.querySelector("#Home-Bio");
  const Tab = document.querySelector(".tab");
  if (HomeBanner) {
    HomeBanner.style.backgroundPosition = "right";
    HomeHeader.style.width = "90%";
    HomeBio.style.width = "60%";
    Tab.style.display = "grid";
  }
}

function ContactPage() {
  const ContactForm = document.querySelector('#Contact-Form');
  if (ContactForm) {
    ContactForm.style.left = "-1%";
    ContactForm.style.width = "85%";
  }
}

function CareerPage() {
  const JobContainer = document.querySelector('#Job-Container');
  const JobList = document.querySelector('#Job-List');
  const JobAbout = document.querySelector('#Job-About');
  if (JobContainer) {
    JobContainer.style.display = "block";
    JobList.style.left = "10%";
    JobList.style.width = "70%";
    JobList.style.boxSizing = "unset";
    JobAbout.style.left = "10%";
    JobAbout.style.width = "70%";
    JobAbout.style.boxSizing = "unset";
    JobAbout.style.marginLeft = "unset";
    JobAbout.style.flexDirection = "row";
  };
}

function CareerApply() {
  const JobForm = document.querySelector('#Job-Form');
  const pdfViewer = document.querySelector('#pdfViewer');
  if (JobForm) {
    JobForm.style.left = "-1%";
    JobForm.style.width = "85%";
    pdfViewer.remove();
  }
}

function navbar() {
  let navbar = document.getElementById("navbar");
  let navbarclass = document.getElementById("navbar");
  navbarclass.classList.remove("navbar");
  navbar.innerHTML = [`
  <div class="topnav">
  <h1 onclick="redirectToHomepage()" class="title" aria-label="Odyssey Outfits Home Page.">Odyssey Outfits</h1>
  <div id="Links">
      <a id="nav-home" href="./index.html" aria-label="Home Page">Home</a>
      <a id="nav-contact" href="./Contact.html" aria-label="Contact Page">Contact</a>
      <a id="nav-legal" href="./Legal.html" aria-label="Legal Page">Legal</a>
      <a id="nav-careers" class="focused" href="./Careers.html" aria-label="Careers Page">Careers</a>
      <select title="Change Site Language" id="languageSelect" class="languageSelect" onchange="changeLanguage(this.value)">
          <option value="ar" aria-label="Arabic.">العربية</option>
          <option value="da" aria-label="Dansk.">Dansk</option>
          <option value="de" aria-label="Deutsch.">Deutsch</option>
          <option value="el" aria-label="Greek.">Ελληνικά</option>
          <option value="en" aria-label="English.">English</option>
          <option value="es" aria-label="Spanish.">Español</option>
          <option value="fi" aria-label="Finnish.">Suomi</option>
          <option value="fr" aria-label="French.">Français</option>
          <option value="he" aria-label="Hebrew.">עברית</option>
          <option value="hu" aria-label="Hungarian.">Magyar</option>
          <option value="it" aria-label="Italian.">Italiano</option>
          <option value="ja" aria-label="Japanese.">日本語</option>
          <option value="ko" aria-label="Korean.">한국어</option>
          <option value="nb" aria-label="Norwegian Bokmål.">Norsk Bokmål</option>
          <option value="nl" aria-label="Dutch.">Nederlands</option>
          <option value="pl" aria-label="Polish.">Polski</option>
          <option value="pt" aria-label="Portuguese.">Português</option>
          <option value="ru" aria-label="Russian.">Русский</option>
          <option value="sk" aria-label="Slovak.">Slovenčina</option>
          <option value="sl" aria-label="Slovenian.">Slovenščina</option>
          <option value="sv" aria-label="Swedish.">Svenska</option>
          <option value="tr" aria-label="Turkish.">Türkçe</option>
          <option value="zh" aria-label="Chinese.">中文</option>
      </select>
      <button type="button" id='ADA-Toggle' title="Toggle ADA Mode" onclick='changeRootStyles()' aria-label="Toggle ADA Mode"></button>
  </div>
  <a href="javascript:void(0);" class="icon" aria-label="Hide Navbar" onclick="mobilehide()">
      <i class="mobile mobile-bars"></i>
  </a>
</div>
  `];
  CareerPage();
  HomePage();
  ContactPage();
  updateContent();
}

function navbar_default() {
  let navbar = document.getElementById("navbar");
  let navbarclass = document.getElementById("navbar");
  navbarclass.classList.add("navbar");
  navbar.innerHTML = [`
  <h1 onclick="redirectToHomepage()" class="title" aria-label="Odyssey Outfits Home Page.">Odyssey Outfits</h1>
  <nav>
      <ul>
          <li><a id="nav-home" href="./index.html" aria-label="Home Page">Home</a></li>
          <li><a id="nav-contact" href="./Contact.html" aria-label="Contact Page">Contact</a></li>
          <li><a id="nav-legal" href="./Legal.html" aria-label="Legal Page">Legal</a></li>
          <li><a id="nav-careers" class="focused" href="./Careers.html" aria-label="Careers Page">Careers</a></li>
          <li aria-label="Change sites language.">
              <select title="Change Site Language" id="languageSelect" class="languageSelect"
                  onchange="changeLanguage(this.value)">
                  <option value="ar" aria-label="Arabic.">العربية</option>
                  <option value="da" aria-label="Dansk.">Dansk</option>
                  <option value="de" aria-label="Deutsch.">Deutsch</option>
                  <option value="el" aria-label="Greek.">Ελληνικά</option>
                  <option value="en" aria-label="English.">English</option>
                  <option value="es" aria-label="Spanish.">Español</option>
                  <option value="fi" aria-label="Finnish.">Suomi</option>
                  <option value="fr" aria-label="French.">Français</option>
                  <option value="he" aria-label="Hebrew.">עברית</option>
                  <option value="hu" aria-label="Hungarian.">Magyar</option>
                  <option value="it" aria-label="Italian.">Italiano</option>
                  <option value="ja" aria-label="Japanese.">日本語</option>
                  <option value="ko" aria-label="Korean.">한국어</option>
                  <option value="nb" aria-label="Norwegian Bokmål.">Norsk Bokmål</option>
                  <option value="nl" aria-label="Dutch.">Nederlands</option>
                  <option value="pl" aria-label="Polish.">Polski</option>
                  <option value="pt" aria-label="Portuguese.">Português</option>
                  <option value="ru" aria-label="Russian.">Русский</option>
                  <option value="sk" aria-label="Slovak.">Slovenčina</option>
                  <option value="sl" aria-label="Slovenian.">Slovenščina</option>
                  <option value="sv" aria-label="Swedish.">Svenska</option>
                  <option value="tr" aria-label="Turkish.">Türkçe</option>
                  <option value="zh" aria-label="Chinese.">中文</option>
              </select>
          </li>
          <li>
              <button type="button" id='ADA-Toggle' title="Toggle ADA Mode" onclick='changeRootStyles()' aria-label="Toggle ADA Mode"></button>
          </li>
      </ul>
  </nav>
  `];
  updateContent();
}

function mobilehide() {
  var x = document.getElementById("Links");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  };
};
window.addEventListener('resize', function (event) {
  detectDeviceType();
});
detectDeviceType();

window.toast = window.toast || (({
  message,
  btnmsg,
  action,
}) => {
  // Create overlay
  const overlay = document.createElement('div');
  overlay.id = "toast-overlay";
  overlay.classList.add("toast-overlay");
  document.body.appendChild(overlay);
  // Div element for the toast
  const createDiv = document.createElement('div');
  createDiv.classList.add("toast");
  // Container for the message
  const messageContainer = document.createElement('div');
  messageContainer.classList.add('message-container');
  // Function to handle removal with fade-out and slide-down animations
  const removeToast = () => {
    createDiv.style.opacity = 0;
    createDiv.style.transform = 'translateY(50%)';
    setTimeout(() => {
      createDiv.remove();
      overlay.remove(); // Remove overlay when toast is removed
    }, 500); // Remove after the animation duration (in milliseconds)
  };
  // Iterate through the array and create HTML elements for each message
  message.forEach(htmlString => {
    const element = document.createElement('div');
    element.innerHTML = htmlString;
    messageContainer.appendChild(element);
  });
  // Button element
  const newButton = document.createElement('button');
  newButton.textContent = btnmsg || 'I agree';
  newButton.id = "toast-ok";
  newButton.classList.add("toast-button");
  // removes div element on button click with fade-out and slide-down animations
  newButton.onclick = function () {
    // If action is defined and is a function, execute it before removing the toast
    if (action && typeof action === 'function') {
      action(); // Call the function when the button is clicked
    };
    removeToast();
  };
  // Combine them all together
  overlay.appendChild(createDiv);
  // Triggering reflow to restart the CSS transition
  void createDiv.offsetWidth;
  createDiv.style.opacity = 1;
  createDiv.appendChild(messageContainer);
  createDiv.appendChild(newButton);
  updateContent();
  window.scrollTo(0, 0);
});

window.confirm = (message) => {
  toast({
    message
  });
}

const ADACheckbox = document.getElementById('ADA');
var toggle = 0;
//* Function to change root styles
function changeRootStyles() {
  if (toggle === 0) {
    toggle = 1;
    if (localStorage.getItem("ada") === "off") {
      let msg = [`
        <h1 id='ada-enabled'>You have enabled ADA Mode.</h1>
        <p id='ada-enabled-continue'>It seems you've enabled ADA mode, the color scheme of this website will be black on white until ADA mode is disabled.</p>
      `];
      window.toast({
        message: msg,
        btnmsg: "OK",
      });
    } else {
      console.log("ADA Mode is enabled.");
    }
    // Access the root element
    const rootElement = document.documentElement;
    // Modify or set styles
    rootElement.style.setProperty('--background-color', '#FFFFFF');
    rootElement.style.setProperty('--alt-background-color', '#FFFFFF');
    rootElement.style.setProperty('--text-color', '#000000');
    rootElement.style.setProperty('--alt-text-color', '#000000');
    rootElement.style.setProperty('--focused', '#000000');
    rootElement.style.setProperty('--button-background-color', '#FFFFFF');
    rootElement.style.setProperty('--border-color', '#000000');
    rootElement.style.setProperty('--overlay', '#FFFFFF');
    rootElement.style.setProperty('--text-background-color-overlay', '#FFFFFF');
    rootElement.style.setProperty('--scrollbar-track', '#000000');
    rootElement.style.setProperty('--scrollbar-thumb', '#FFFFFF');
    rootElement.style.setProperty('--font-family', "Times New Roman");
    const styleElement = document.createElement('style');
    styleElement.textContent = [`
    img {
      filter: grayscale(100%);
    }
    *{
        font-family: "Times New Roman", Times, serif;
    }
    nav>ul>li>a:hover {
          background-color: white !important;
          border-color: black !important;
    }
    section#Job-About>div#Job-About-Inner>button#Apply-Now {
        width: 100%;
        background-color: black;
        color: white;
    }
    .tab>button.tab-links:hover {
      background-color: black;
      color: white;
    }
    #scrollToTopBtn {
      background-color: black;
      color: white;
    }
    #scrollToTopBtn:hover {
      background-color: black;
      color: white;
    }
    section#why-odyssey>div.container>div.tab>button.tab-links:hover {
      background-color: black;
      color: white;
    }
      `];
    localStorage.setItem("ada", "on");
    document.head.appendChild(styleElement);
    document.getElementById("ADA-Toggle").style.background = "url(./Assets/Img/Eye-On.png) center/cover no-repeat";
  } else if (toggle === 1) {
    console.log("ADA Mode is disabled.");
    localStorage.removeItem("ada");
    toggle = 0;
    document.getElementById("ADA-Toggle").style.background = "url(./Assets/Img/Eye-Off.png) center/cover no-repeat";
    let msg = [`
      <h1 id='ada-disabled'>You have disabled ADA Mode.</h1>
      <p id='ada-disabled-continue'>It seems you've disabled ADA mode, you will need to refresh in order to continue.</p>
    `];

    window.toast({
      message: msg,
      btnmsg: "OK",
      action: () => location.reload(),
    })
  };
}