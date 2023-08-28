let genpassword = document.querySelector("#genpassword");
const lengthIncrease = document.querySelector("#length-increase");
const lengthDecrease = document.querySelector("#length-decrease");
const showmessagepassword = document.querySelector(".showmessagepassword");
const buttoncopy = document.querySelector(".buttoncopy");
const refreshbutton = document.querySelector(".refreshbutton");
let passwordlength = document.querySelector(".passwordlength");
let input = document.querySelector("#input");
let passwordlengthinput = 1;
let password =
  "0123456~7`890asdfghj?klA>SD<FG;H:'JKLzxcvbnm,./ZXCVBNM,./qwertyuiop[]QWERTYUIOP[]!@#$%^&*()_+";
refreshbutton.addEventListener("click", () => {
  passwordgenerator();

  refreshbutton.style.transform = "rotate(300deg)";
  setTimeout(() => {
    refreshbutton.style.transform = "rotate(0deg)";
  }, 1000);
});
(() => {
  input.addEventListener("change", () => {
    passwordgenerator();
  });
})();

lengthIncrease.addEventListener("click", () => {
  if (passwordlengthinput !== 51) {
    passwordlengthinput++;
  }

  if (passwordlengthinput !== 51) {
    passwordgenerator();
  }
});
lengthDecrease.addEventListener("click", () => {
  if (passwordlengthinput !== 0) {
    passwordlengthinput--;
  }
  if (passwordlengthinput !== 0) {
    passwordgenerator();
  }
});
const passwordgenerator = () => {
  passwordlengthinput = document.querySelector("#input").value =
    passwordlengthinput;
  passwordlength.textContent = passwordlengthinput;
  let passwordgenerate;
  if (passwordlengthinput < 5) {
    showmessagepassword.style.backgroundColor = "red";
    showmessagepassword.innerHTML = "VERY WEAK";
    showmessagepassword.style.color = "white";
  } else if (passwordlengthinput < 10) {
    showmessagepassword.style.backgroundColor = "red";
    showmessagepassword.innerHTML = "WEAK";
    showmessagepassword.style.color = "white";
  } else if (passwordlengthinput < 15) {
    showmessagepassword.style.backgroundColor = "yellow";
    showmessagepassword.style.color = "red";
    showmessagepassword.innerHTML = "GOOD";
  } else if (passwordlengthinput < 20) {
    showmessagepassword.style.backgroundColor = "green";
    showmessagepassword.style.color = "white";
    showmessagepassword.innerHTML = "STRONG";
  } else {
    showmessagepassword.style.backgroundColor = "blue";
    showmessagepassword.innerHTML = "VERY STRONG";
    showmessagepassword.style.color = "white";
  }

  const arr = password.split("");
  const genratepassword = [];
  for (let i = 0; i < passwordlengthinput; i++) {
    const randomnumber = Math.floor(Math.random() * 86 + 1);
    genratepassword[i] = arr[randomnumber];
  }
  passwordgenerate = genratepassword.toString();
  let passwordgen = passwordgenerate.replaceAll(",", "");
  genpassword.textContent = passwordgen;
};
passwordgenerator();

buttoncopy.addEventListener("click", () => {
  navigator.clipboard.writeText(genpassword.textContent);
  window.alert("Password copyed : " + genpassword.textContent);
});
