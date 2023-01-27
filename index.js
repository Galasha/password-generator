const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/"
];
let generateSymbols = [];
let numbers = characters.slice(0, 62);
let abc = characters.slice(0, 52);
let chkstatusSymbol = document.getElementById("wo-symbols");
let chkstatusNumber = document.getElementById("wo-numbers");
let chkstatusSymbol2 = document.getElementById("wo-symbols2");
let chkstatusNumber2 = document.getElementById("wo-numbers2");

function startUpdate() {
  generateSymbols.length = 0;
  if (chkstatusSymbol.checked && chkstatusNumber.checked) {
    generatePassword();
  } else if (chkstatusNumber.checked) {
    generatePasswordNumbers();
  } else if (chkstatusSymbol.checked) {
    generatePasswordSymbol();
  } else {
    generatePasswordABC();
  }
  passwordUpdate();
}

function startUpdate2() {
  generateSymbols.length = 0;
  if (chkstatusSymbol2.checked && chkstatusNumber2.checked) {
    generatePassword();
  } else if (chkstatusNumber2.checked) {
    generatePasswordNumbers();
  } else if (chkstatusSymbol2.checked) {
    generatePasswordSymbol();
  } else {
    generatePasswordABC();
  }
  passwordUpdate2();
}

function passwordUpdate() {
  let firstPass = document.getElementById("first-pass");
  password1 = generateSymbols.slice(0, 15);
  firstPass.textContent = password1.join("");
  let secondPass = document.getElementById("second-pass");
  password2 = generateSymbols.slice(15, 30);
  secondPass.textContent = password2.join("");
}

function passwordUpdate2() {
  let firstPass2 = document.getElementById("first-pass2");
  password3 = generateSymbols.slice(0, 15);
  firstPass2.textContent = password3.join("");
  let secondPass2 = document.getElementById("second-pass2");
  password4 = generateSymbols.slice(15, 30);
  secondPass2.textContent = password4.join("");
}

function generatePasswordNumbers() {
  let symbol = Math.floor(Math.random(numbers) * 63);
  for (let i = 0; i < numbers.length; i++) {
    if (generateSymbols.length < 30) {
      generateSymbols.push(numbers[symbol]);
      generatePasswordNumbers();
    } else {
      return generateSymbols;
    }
  }
  passwordUpdate();
}

function generatePasswordABC() {
  let symbol = Math.floor(Math.random(abc) * 52);
  for (let i = 0; i < abc.length; i++) {
    if (generateSymbols.length < 30) {
      generateSymbols.push(abc[symbol]);
      generatePasswordABC();
    } else {
      return generateSymbols;
    }
  }
  passwordUpdate();
}

function generatePassword() {
  let symbol = Math.floor(Math.random(characters) * 91);
  for (let i = 0; i < characters.length; i++) {
    if (generateSymbols.length < 30) {
      generateSymbols.push(characters[symbol]);
      generatePassword();
    } else {
      return generateSymbols;
    }
  }
  passwordUpdate();
}

function generatePasswordSymbol() {
  let symbols = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "~",
    "`",
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "_",
    "-",
    "+",
    "=",
    "{",
    "[",
    "}",
    "]",
    ",",
    "|",
    ":",
    ";",
    "<",
    ">",
    ".",
    "?",
    "/"
  ];
  let symbol = Math.floor(Math.random(symbols) * 64);
  for (let i = 0; i < symbols.length; i++) {
    if (generateSymbols.length < 30) {
      generateSymbols.push(symbols[symbol]);
      generatePasswordSymbol();
    } else {
      return generateSymbols;
    }
  }
  passwordUpdate();
}

document.getElementById("copy-password1").onclick = function() {
  let copyTextarea = document.createElement("textarea");
  copyTextarea.style.position = "fixed";
  copyTextarea.style.opacity = "0";
  copyTextarea.textContent = document.getElementById("first-pass").value;
  document.body.appendChild(copyTextarea);
  copyTextarea.select();
  document.execCommand("copy");
  document.body.removeChild(copyTextarea);
};

document.getElementById("copy-password2").onclick = function() {
  let copyTextarea = document.createElement("textarea");
  copyTextarea.style.position = "fixed";
  copyTextarea.style.opacity = "0";
  copyTextarea.textContent = document.getElementById("second-pass").value;
  document.body.appendChild(copyTextarea);
  copyTextarea.select();
  document.execCommand("copy");
  document.body.removeChild(copyTextarea);
};

document.getElementById("copy-password3").onclick = function() {
  let copyTextarea = document.createElement("textarea");
  copyTextarea.style.position = "fixed";
  copyTextarea.style.opacity = "0";
  copyTextarea.textContent = document.getElementById("first-pass2").value;
  document.body.appendChild(copyTextarea);
  copyTextarea.select();
  document.execCommand("copy");
  document.body.removeChild(copyTextarea);
};

document.getElementById("copy-password4").onclick = function() {
  let copyTextarea = document.createElement("textarea");
  copyTextarea.style.position = "fixed";
  copyTextarea.style.opacity = "0";
  copyTextarea.textContent = document.getElementById("second-pass2").value;
  document.body.appendChild(copyTextarea);
  copyTextarea.select();
  document.execCommand("copy");
  document.body.removeChild(copyTextarea);
};
