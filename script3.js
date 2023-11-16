function reverseString() {
  let final = "";
  let str = document.getElementById("reverse").value;
  for (let i = str.length - 1; i >= 0; i--) {
    final += str[i];
  }
  document.getElementById("display").innerHTML = final;
}

function replaceS() {
  let str = document.getElementById("str").value;
  let replaceMethod = document.getElementById("replaceMethod").value;
  let charOrIndex = document.getElementById("charOrIndex").value;
  let newChar = document.getElementById("newChar").value;

  if (replaceMethod === "char") {
    let newString = str.replace(charOrIndex, newChar);
    document.getElementById("display1").innerHTML = newString;
  } else if (replaceMethod === "index") {
    let index = parseInt(charOrIndex);
    if (!isNaN(index) && index >= 0 && index < str.length) {
      let newString = str.substring(0, index) + newChar + str.substring(index + 1);
      document.getElementById("display1").innerHTML = newString;
    } else {
      document.getElementById("display1").innerHTML = "Invalid index.";
    }
  }
}

function palindromeS() {
  let final = "";
  let check_pal = "";
  let str = document.getElementById("palindrome").value;
  for (let i = str.length - 1; i >= 0; i--) {
    final += str[i];
  }
  if (str == final) {
    check_pal = "string is a palindrome";
  } else {
    check_pal = "string is not a palindrome";
  }
  document.getElementById("display2").innerHTML = check_pal;
}