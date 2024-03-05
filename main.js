const svgIcon = document.querySelector("#svg-icon");

const handleChange = () => {
  if (document.getElementById("switch-1").checked) {
    svgIcon.src = "./active.svg";
  } else {
    svgIcon.src = "./nonActive.svg";
  }
};
