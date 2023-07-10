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

const target = new Date ('may, 30 2023 15:18:00').getTime();
const countdown = setInterval(function(){
    const now = new Date().getTime();
    let selisih = target - now
    let hari = Math.floor( selisih / (1000 * 60 * 60 * 24));
    let jam = Math.floor( selisih % (1000 * 60 * 60 * 24) / (1000*60*60));
    let menit = Math.floor( selisih % (1000 * 60 * 60 ) / (1000*60));
    let detik = Math.floor( selisih % (1000 * 60 ) / (1000));

    const text = document.getElementById('waktu1')
    const text1 = document.getElementById('waktu2')


    text.innerHTML = `${hari} hari ${jam} jam ${menit} menit ${detik} detik`
    text1.innerHTML = `${hari} hari ${jam} jam ${menit} menit ${detik} detik`
    

    if(selisih <= 0){
        clearInterval(countdown)
        text.innerHTML = "Expired!!!";
    }
}, 1000);


/*SECTION CONTACT*/
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
    const { temp} = data.main;
    const { speed } = data.wind;
    document.querySelector(".icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + "°C";
    document.querySelector(".wind").innerText =
      "Wind speed: " + speed + " km/h";
  },
};

weather.fetchWeather("Lamongan");


// SECTION GALLERY

const galleryPict = document.getElementsByClassName("image");
const lightboxContainer = document.createElement("div");
const lightboxContent = document.createElement("div");
const lightboxImg = document.createElement("img");
const lightboxPrev = document.createElement("div");
const lightboxNext = document.createElement("div");

lightboxContainer.classList.add("lightbox");
lightboxContent.classList.add("lightbox-content");
lightboxPrev.classList.add("fa", "fa-angle-left", "lightbox-prev");
lightboxNext.classList.add("fa", "fa-angle-right", "lightbox-next");

lightboxContainer.appendChild(lightboxContent);
lightboxContent.appendChild(lightboxImg);
lightboxContent.appendChild(lightboxPrev);
lightboxContent.appendChild(lightboxNext);
document.body.appendChild(lightboxContainer);

let ind = 1;

function displayLightbox(n) {
  if (n > galleryPict.length) {
    ind = 1;
  } else if (n < 1) {
    ind = galleryPict.length;
  }
  let ImgLocation = galleryPict[ind-1].children[0].getAttribute("src");
  lightboxImg.setAttribute("src", ImgLocation);
};

function currentImg() {
  lightboxContainer.style.display = "block";

  let Imgind = parseInt(this.getAttribute("data-pict"));
  displayLightbox(ind = Imgind);
};

for (let i = 0; i < galleryPict.length; i++) {
  galleryPict[i].addEventListener("click", currentImg);
};

function slideImg(n) {
  displayLightbox(ind += n);
};

function prevImg() {
  slideImg(-1);
};

function nextImg() {
  slideImg(1);
};

lightboxPrev.addEventListener("click", prevImg);
lightboxNext.addEventListener("click", nextImg);

function closelightbox() {
  if (this === event.target) {
    lightboxContainer.style.display = "none";
  }
};

lightboxContainer.addEventListener("click", closelightbox);
