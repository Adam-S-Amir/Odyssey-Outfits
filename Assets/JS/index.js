document.addEventListener("DOMContentLoaded", function () {
  // Check if the 'TOS' item exists in localStorage
  if (localStorage.getItem('TOS') === 'accepted') {
    // The 'TOS' item exists
    console.log("User has accepted the TOS request.");
    // You can perform further actions here if needed
  } else {
    let msg = [`
                    <h1>Terms of Service</h1>
                    <p>Our website gathers user data to enhance the overall user experience.<br>By continuing to use our site, you agree to our TOS.</p>
                    <a href="./TOS.html" target="_blank">Terms Of Service</a>
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

});

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
      <h1>Odyssey Outfits</h1>
      <div id="Links">
          <a href="./index.html">Home</a>
          <a href="./About.html">About</a>
          <a href="./Services.html">Services</a>
          <a href="./Contact.html">Contact</a>
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
  <h1 class="title">Odyssey Outfits</h1>
  <nav>
      <ul>
          <li><a href="./index.html">Home</a></li>
          <li><a href="./About.html">About</a></li>
          <li><a href="./Services.html">Services</a></li>
          <li><a href="./Contact.html">Contact</a></li>
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
  newButton.id = "agreed";
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
});

window.alert = (message) => {
  toast({
    message
  });
};

window.confirm = (message) => {
  toast({
    message
  });
};