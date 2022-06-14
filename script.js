const wrapper = document.querySelector("#wrapper");

wrapper.addEventListener("input", checkPasswords);

function comparePasswords() {
  const pw1 = wrapper.querySelector("#pw1");
  const pw2 = wrapper.querySelector("#pw2");

  if (pw1.value === pw2.value && pw1.value.length > 0) {
    return true;
  } else {
    return false;
  }
}

function checkPasswords() {
  //Passwörter identisch?
  const equal = document.querySelector("#equal");

  if (comparePasswords()) {
    equal.innerText = "Passwords are euqal ✅";
  } else {
    equal.innerText = "Passwords are euqal ❌";
  }

  //Kleine Buchstaben enthalten?
  const lower = document.querySelector("#lower");
  const lowerCase = /[a-z]/g;

  if (pw1.value === pw2.value && lowerCase.test(pw1.value)) {
    lower.innerText = "Lower Case Letters ✅";
  } else {
    lower.innerText = "Lower Case Letters ❌";
  }

  //Große Buchstaben enthalten?
  const upper = document.querySelector("#upper");
  const upperCase = /[A-Z]/g;

  if (pw1.value === pw2.value && upperCase.test(pw1.value)) {
    upper.innerText = "Upper Case Letters ✅";
  } else {
    upper.innerText = "Upper Case Letters ❌";
  }

  //Nummer enthalten?
  const numbers = document.querySelector("#numbers");
  const number = /[0-9]/g;

  if (pw1.value === pw2.value && number.test(pw1.value)) {
    numbers.innerText = "Contains Numbers ✅";
  } else {
    numbers.innerText = "Contains Numbers ❌";
  }

  //10 Zeichen lang?
  const long = document.querySelector("#long");
  if (pw1.value === pw2.value && pw1.value.length >= 10) {
    long.innerText = "At least character long ✅";
  } else {
    long.innerText = "At least character long ❌ ";
  }
}
//Password hidden and shown

const btnShow = document.querySelector("#showPW");

btnShow.addEventListener("click", () => {
  const input = document.querySelector("#pw1");
  const input2 = document.querySelector("#pw2");

  if (input.type === "text") {
    input.type = "password";
    input2.type = "password";
    btnShow.innerText = "Show Password";
  } else if (input.type === "password") {
    input.type = "text";
    input2.type = "text";
    btnShow.innerText = "Hide Password";
  }
});
