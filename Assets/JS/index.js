document.addEventListener("DOMContentLoaded", function () {
  // Check if the 'TOS' item exists in localStorage
  if (localStorage.getItem('TOS') === 'accepted') {
    // The 'TOS' item exists
    console.log("User has accepted the TOS request.");
    // You can perform further actions here if needed
  } else {
    let msg = [`
                    <h1 id='TOS-welcome'>Welcome!</h1>
                    <p id='TOS-locale'>Please select a default language:</p>
                    <select id="languageSelect" class="languageSelect" onchange="changeLanguage(this.value)">
                        <option value="en">en/US</option>
                        <option value="es">es/ES</option>
                    </select>
                    <p id='TOS-ADA'>Our website is in compliance with ADA (Americans with Disabilities Act), as a result you may flip the switch located in the top right corner to toggle ADA compliance mode.</p>
                    <p id='TOS-preamble'>Our website gathers user data to enhance the overall user experience.<br>By continuing to use our site, you agree to our TOS.</p>
                    <a id='TOS-TOS' href="./TOS.html" target="_blank">Terms Of Service</a>
                    <br>
                    <br>
              `]

    window.toast({
      message: msg,
      btnmsg: "OK",
      action: () => TOS(),
    })
  }

  function TOS() {
    localStorage.setItem("TOS", "accepted")
  }

  if (localStorage.getItem('ada') === 'on') {
    changeRootStyles();
  } else {
    return;
  }

});

function detectDeviceType() {
  const userAgent = navigator.userAgent;
  function isiPadAir() {
    const userAgent = navigator.userAgent;
    return /iPad/i.test(userAgent) && /AppleWebKit/i.test(userAgent) && /CriOS/i.test(userAgent);
  }
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
  }
}

function navbar() {
  let navbar = document.getElementById("navbar");
  let navbarclass = document.getElementById("navbar");
  navbarclass.classList.remove("navbar");
  navbar.innerHTML = [`
  <div class="topnav">
      <h1>Odyssey Outfits</h1>
      <div id="Links">
          <a id="nav-home" href="./index.html">Home</a>
          <a id="nav-about" href="./About.html">About</a>
          <a id="nav-services" href="./Services.html">Services</a>
          <a id="nav-contact" href="./Contact.html">Contact</a>
          <a id="nav-resume" class="focused" href="./Resume.html">Upload a R&eacute;sum&eacute;</a>
          <select id="languageSelect" class="languageSelect" onchange="changeLanguage(this.value)">
              <option value="en">en/US</option>
              <option value="es">es/ES</option>
          </select>
          <label class="switch">
              <input type="checkbox" id='ADA'>
              <span class="slider round"></span>
          </label>
      </div>
      <a href="javascript:void(0);" class="icon" onclick="mobilehide()">
          <i class="mobile mobile-bars"></i>
      </a>
  </div>
`]
  updateContent();
}

function navbar_default() {
  let navbar = document.getElementById("navbar");
  let navbarclass = document.getElementById("navbar");
  navbarclass.classList.add("navbar");
  navbar.innerHTML = [`
  <h1 class="title">Odyssey Outfits</h1>
  <nav>
      <ul>
          <li><a id="nav-home" href="./index.html">Home</a></li>
          <li><a id="nav-about" href="./About.html">About</a></li>
          <li><a id="nav-services" href="./Services.html">Services</a></li>
          <li><a id="nav-contact" href="./Contact.html">Contact</a></li>
          <li><a id="nav-resume" class="focused" href="./Resume.html">Upload a R&eacute;sum&eacute;</a></li>
          <li>
              <select id="languageSelect" class="languageSelect" onchange="changeLanguage(this.value)">
                  <option value="en">en/US</option>
                  <option value="es">es/ES</option>
              </select>
          </li>
          <li>
              <label class="switch">
                  <input type="checkbox" id='ADA'>
                  <span class="slider round"></span>
              </label>
          </li>
      </ul>
  </nav>
`]
  updateContent();
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
      action();  // Call the function when the button is clicked
    }
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

window.alert = (message) => {
  toast({
    message
  });
}

window.confirm = (message) => {
  toast({
    message
  });
}

const ADACheckbox = document.getElementById('ADA');

//* Function to change root styles
function changeRootStyles() {
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
  rootElement.style.setProperty('--scrollbar-thumb', '#FFFFFF');
  rootElement.style.setProperty('--scrollbar-thumb-hover', '#FFFFFF');
  const styleElement = document.createElement('style');
  styleElement.textContent = `
    *:hover {
        background-color: white !important;
        border-color: black !important;
    }`;
  document.head.appendChild(styleElement);

  localStorage.setItem("ada", "on");
  ADACheckbox.checked = true;
  console.log("ADA Mode is enabled.")
}

// Add event listener for the 'click' event
ADACheckbox.addEventListener('click', function () {
  // Check if the checkbox is checked
  if (ADACheckbox.checked) {
    changeRootStyles();
    let msg = [`
                    <h1 id='ada-enabled'>You have enabled ADA Mode.</h1>
                    <p id='ada-enabled-continue'>It seems you've enabled ADA mode, the color scheme of this website will be black on white until ADA mode is disabled.</p>
                `]

    window.toast({
      message: msg,
      btnmsg: "OK",
      action: () => location.reload(),
    })
    console.log("ADA Mode is enabled.")
  } else {
    localStorage.removeItem("ada");
    let msg = [`
                    <h1 id='ada-disabled'>You have disabled ADA Mode.</h1>
                    <p id='ada-disabled-continue'>It seems you've disabled ADA mode, you will need to refresh in order to continue.</p>
                `]

    window.toast({
      message: msg,
      btnmsg: "OK",
      action: () => location.reload(),
    })
    console.log("ADA Mode is disabled.")
  }
});