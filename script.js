const textInput = document.querySelector(".text-input");
const buttonTranslate = document.querySelector(".btn");
const textOutput = document.querySelector(".text-output");

const serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(input) {
  return serverURL + "?" + "text=" + input;
}

function errorHandler() {
  textOutput.innerText = `There might be some issues with the server. Please try again in sometime.`;
  textOutput.style.color = "red";
}
function clickHandler() {
  const inputText = textInput.value;

  fetch(getTranslationURL(inputText))
    .then((response) => response.json())
    .then((json) => {
      let translatedText = json.contents.translated;
      textOutput.innerText = translatedText;
    })
    .catch(errorHandler);
}

buttonTranslate.addEventListener("click", clickHandler);
