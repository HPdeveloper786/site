document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");
  const submenu = document.querySelector(".submenu");
  const dropdown = document.querySelector(".dropdown");

  // 📌 Toggle menu with smooth slide-in effect
  menuToggle.addEventListener("click", function (event) {
    this.classList.toggle("open");
    navLinks.classList.toggle("active");
    
    // Animate links (Fade In)
    if (navLinks.classList.contains("active")) {
      navLinks.style.animation = "fadeIn 0.5s ease-in-out";
    } else {
      navLinks.style.animation = "fadeOut 0.3s ease-in-out";
    }

    event.stopPropagation(); // Prevents event from bubbling up
  });

  // 📌 Close menu when clicking outside
  document.addEventListener("click", function (event) {
    if (!menuToggle.contains(event.target) && !navLinks.contains(event.target)) {
      menuToggle.classList.remove("open");
      navLinks.classList.remove("active");
    }
  });

  // 📌 Close menu with ESC key
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      menuToggle.classList.remove("open");
      navLinks.classList.remove("active");
    }
  });

  // 📌 Dropdown Animation
  submenu.addEventListener("mouseenter", function () {
    dropdown.style.display = "contents";
    dropdown.style.opacity = "0";
    dropdown.style.animation = "fadeIn 0.5s ease-in-out forwards";
  });

  submenu.addEventListener("mouseleave", function () {
    dropdown.style.animation = "fadeOut 0.3s ease-in-out";
    setTimeout(() => {
      dropdown.style.display = "contents";
    }, 300);
  });
});
// ------------dark-mode---------------
document.addEventListener("DOMContentLoaded", function () {
  const toggleSwitch = document.getElementById("theme-toggle");
  const body = document.body;

  function applyTheme(theme) {
    if (theme === "light") {
      body.classList.add("light-mode");
      body.classList.remove("dark-mode");
    } else {
      body.classList.add("dark-mode");
      body.classList.remove("light-mode");
    }
  }

  // Load saved theme preference
  const savedTheme = localStorage.getItem("theme") || "dark";
  applyTheme(savedTheme);
  toggleSwitch.checked = savedTheme === "light";

  // Toggle theme
  toggleSwitch.addEventListener("change", function () {
    const theme = this.checked ? "light" : "dark";
    localStorage.setItem("theme", theme);
    applyTheme(theme);
  });
});
// -------------------------------cookies------------------------

document.addEventListener("DOMContentLoaded", function () {
  const banner = document.getElementById("cookie-banner");
  const acceptBtn = document.getElementById("accept-cookies");

  if (!getCookie("cookie_consent")) {
      banner.style.display = "flex";
  }

  acceptBtn.addEventListener("click", function () {
      setCookie("cookie_consent", "accepted", 365);
      banner.style.display = "none";
  });

  function setCookie(name, value, days) {
      let expires = "";
      if (days) {
          let date = new Date();
          date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
          expires = "; expires=" + date.toUTCString();
      }
      document.cookie = name + "=" + value + expires + "; path=/";
  }

  function getCookie(name) {
      let nameEQ = name + "=";
      let cookiesArray = document.cookie.split(";");
      for (let i = 0; i < cookiesArray.length; i++) {
          let c = cookiesArray[i].trim();
          if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length);
      }
      return null;
  }
});





// ------------core-mode---------------
document.addEventListener("DOMContentLoaded", function () {
  const serviceBoxes = document.querySelectorAll(".service-box");

  const revealBoxes = () => {
    serviceBoxes.forEach((box) => {
      const boxTop = box.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (boxTop < windowHeight - 50) {
        box.style.opacity = "1";
        box.style.transform = "translateX(0)";
      }
    });
  };

  window.addEventListener("scroll", revealBoxes);
  revealBoxes();
});



// About
document.addEventListener("DOMContentLoaded", function () {
  const imgSection = document.querySelector(".img");

  function revealOnScroll() {
    const sectionPosition = imgSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (sectionPosition < screenPosition) {
      imgSection.classList.add("animate");
    }
  }

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // Run on page load in case already in view
});



new FinisherHeader({
  "count": 35,
  "size": {
    "min": 5,
    "max": 120,
    "pulse": 0.1
  },
  "speed": {
    "x": {
      "min": 0,
      "max": 0.2
    },
    "y": {
      "min": 0,
      "max": 0.4
    }
  },
  "colors": {
    "background": "#b580ff",
    "particles": [
      "#ffe960",
      "#87ddfe",
      "#8481ff",
      "#fc7bfc",
      "#e2ffa5"
    ]
  },
  "blending": "overlay",
  "opacity": {
    "center": 0,
    "edge": 0.7
  },
  "skew": -2,
  "shapes": [
    "c",
    "t"
  ]
});
