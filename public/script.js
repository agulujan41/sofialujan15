let cant = 35;
if (window.innerWidth > 800) {
  cant = 100;
}
for (let i = 0; i < cant; i++) {
  let star = document.createElement("div");
  star.classList.add("estrella");
  var randomWidth = Math.floor(Math.random() * (50 - 5 + 1)) + 50; // Tamaño aleatorio entre 100px y 200px
  star.style.height = randomWidth + "px";
  star.style.width = randomWidth + "px";
  let rotation = Math.floor(Math.random() * (140 - 8 + 1)) + 140; // Tamaño aleatorio entre 100px y 200px
  star.style.transform = "rotate(" + rotation + "deg);";
  document.querySelector(".estrellas").appendChild(star);
}
//left balloons
let sec = 0.2;
let ballonHeight = 70;
if (window.innerWidth > 1000) {
  ballonHeight = 120;
}
for (let i = 0; i < 12; i++) {
  let balloon = document.createElement("img");
  balloon.src = "globogris.png";
  document.querySelector(".infoDiv").appendChild(balloon);

  balloon.style.height = ballonHeight + "px";
  balloon.style.position = "absolute";
  balloon.style.filter = "contrast(20%)";
  balloon.style.filter = "brightness(110%)";
  balloon.style.bottom = "-120px";
  balloon.classList.add("globitoQuieto");
  balloon.style.animationDelay = sec + "s";
  window.addEventListener("resize", function () {
    if (window.innerWidth > 1000) {
      balloon.style.height = "100px";
    } else {
      balloon.style.height = "70px";
    }
  });
  switch (i % 3) {
    case 0:
      balloon.style.left = "0px";
      break;
    case 1:
      balloon.style.left = "30px";
      break;
    case 2:
      balloon.style.left = "60px";

      break;
  }

  sec += 0.6;
}
sec = 0.2;
for (let i = 0; i < 13; i++) {
  let balloon = document.createElement("img");
  balloon.src = "globogris.png";
  document.querySelector(".infoDiv").appendChild(balloon);
  balloon.style.height = ballonHeight + "px";
  balloon.style.position = "absolute";
  balloon.style.filter = "contrast(20%)";
  balloon.style.filter = "brightness(120%)";
  balloon.style.bottom = "-120px";
  balloon.classList.add("globitoQuieto");
  window.addEventListener("resize", function () {
    if (window.innerWidth > 1000) {
      balloon.style.height = "100px";
    } else {
      balloon.style.height = "70px";
    }
  });
  balloon.style.animationDelay = sec + "s";
  switch (i % 3) {
    case 0:
      balloon.style.right = "0px";
      break;
    case 1:
      balloon.style.right = "30px";
      break;
    case 2:
      balloon.style.right = "60px";

      break;
  }

  sec += 0.6;
}
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));
var audio = document.createElement("AUDIO");
document.body.appendChild(audio);
audio.src = "cancion.mp3";





cant = 35;
if (window.innerWidth > 800) {
  cant = 100;
}
for (let i = 0; i < cant; i++) {
  let star = document.createElement("div");
  star.classList.add("estrella");
  var randomWidth = Math.floor(Math.random() * (50 - 5 + 1)) + 50; // Tamaño aleatorio entre 100px y 200px
  star.style.height = randomWidth + "px";
  star.style.width = randomWidth + "px";
  let rotation = Math.floor(Math.random() * (140 - 8 + 1)) + 140; // Tamaño aleatorio entre 100px y 200px
  star.style.transform = "rotate(" + rotation + "deg);";
  document.querySelector(".estrellas2").appendChild(star);
}
let askingWindow = document.querySelector(".popupAsking");
let estrellas2 = document.querySelector(".estrellas2");
let a1 = document.getElementById("volume_up")
let a2 =document.getElementById("volume_off")
let as = [a1,a2];
for (let i=0;i<as.length;i++){
    as[i].onclick = function(){
        document.body.removeAttribute("class");
        document.body.classList.add("bodyCustom");
        askingWindow.removeAttribute("class");
        estrellas2.removeAttribute("class");
        askingWindow.classList.add("close");
        estrellas2.classList.add("close");
        if(i==0){
                audio.play();   
        }
        return false;
    }
}

let loader = document.getElementById("loader");
setTimeout(() => {
  loader.classList.add("close");
  askingWindow.removeAttribute("class");
  askingWindow.classList.add("popupAsking");
}, 6000);


window.addEventListener('unload', function () {
    window.location.reload();
});
let infoDiv = document.querySelector(".infoDiv");
let globos3  = document.querySelector(".infoTitle").getElementsByTagName("img");
const observer1 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("globitoQuieto")
        entry.target.classList.add("globitoMoviendose");
        globos3[0].classList.add("globos3");
        globos3[1].classList.add("globos3");
      }
    });
  });
  
const globitosQuietos = document.querySelectorAll(".globitoQuieto");
globitosQuietos.forEach((el) => observer1.observe(el));