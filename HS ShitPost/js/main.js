img = document.getElementById("img")
audio = document.getElementById("audio")

counter = 0

function placeImage(e) {
  imgc = $("#img").clone().appendTo("body")[0]
  audioc=$("#audio").clone().appendTo("body")[0]
  imgc.style.visibility = "visible"
  imgc.style.left = (e.clientX - (img.width / 2)) + "px";
  imgc.style.top = (e.clientY - (img.height / 2)) + "px";
  audioc.play();
  counter++
  console.log(counter)
}

document.addEventListener("click", placeImage)
