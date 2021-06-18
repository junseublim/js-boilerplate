import _ from "lodash";

function component() {
  const element = document.createElement("div");
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  return element;
}

function buttonComponent() {
  const button = document.createElement("button");
  button.onclick = () => {
    alert("clicked");
  };
  return button;
}
document.body.appendChild(component());
document.body.appendChild(buttonComponent());
