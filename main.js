function mouseOver() {
  document.getElementById("deskripsi").style.color = "blue";
}
function mouseOut() {
  document.getElementById("deskripsi").style.color = "black";
}
function cariHargaTiket(event) {
  event.preventDefault();

  let kataKunci = "wbl harga tikel"; // Default kata kunci

  let url = "https://www.google.com/search?q=" + encodeURIComponent(kataKunci);
  window.open(url, "_blank");
}
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(function () {
    showSlides((slideIndex += 1));
  }, 5000);
}

const menuToggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector("nav ul");

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});

const segera1 = document.querySelector(".segera1");
const segera2 = document.querySelector(".segera2");

const target = new Date("1 juni, 2023 07:00:00").getTime();
const countdown = setInterval(function () {
  const now = new Date().getTime();
  let selisih = target - now;
  let hari = Math.floor(selisih / (1000 * 60 * 60 * 24));
  let jam = Math.floor((selisih % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let menit = Math.floor((selisih % (1000 * 60 * 60)) / (1000 * 60));
  let detik = Math.floor((selisih % (1000 * 60)) / 1000);

  const text = document.getElementById("waktu1");
  const text1 = document.getElementById("waktu2");

  text.innerHTML = `Segera!!<br>${hari} hari ${jam} jam ${menit} menit ${detik} detik`;
  text1.innerHTML = `Segera!!<br>${hari} hari ${jam} jam ${menit} menit ${detik} detik`;
  text.style.textAlign = "center";
  text1.style.textAlign = "center";

  if (selisih <= 0) {
    clearInterval(countdown);
    text.innerHTML = "Expired!!!";
    text1.innerHTML = "Expired!!!";
  }
}, 1000);

let weather = {
  apiKey: "8358a65c0c938f7a2daccfd2d01c403d",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        this.apiKey
    )
      .then((response) => {
        if (!response.ok) {
          alert("No weather found.");
          throw new Error("No weather found.");
        }
        return response.json();
      })
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    const { icon, description } = data.weather[0];
    const { temp } = data.main;
    const { speed } = data.wind;
    document.querySelector(".icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".ket-cuaca").innerText = description;
    document.querySelector(".temp").innerText = temp + "°C";
    document.querySelector(".wind").innerText =
      "Wind speed: " + speed + " km/h";
  },
};

weather.fetchWeather("lamongan");

// Get all the images
const images = document.querySelectorAll(".container-gallery img");

// Create the popup element
const popup = document.createElement("div");
popup.classList.add("popup");
document.body.appendChild(popup);

// Open the popup and show the selected image with animation
function openPopup(image) {
  const popupImage = document.createElement("img");
  popupImage.setAttribute("src", image.getAttribute("src"));
  popup.appendChild(popupImage);
  popup.classList.add("visible");
  document.body.style.overflow = "hidden";
}

// Close the popup and remove the image with animation
function closePopup() {
  popup.classList.remove("visible");
  document.body.style.overflow = "auto";
  popup.innerHTML = "";
}

// Add click event listener to each image
images.forEach((image) => {
  image.addEventListener("click", () => {
    openPopup(image);
  });
});

// Close the popup when clicked outside of it
popup.addEventListener("click", (event) => {
  if (event.target === popup) {
    closePopup();
  }
});
