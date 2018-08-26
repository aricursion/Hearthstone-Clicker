function cardChanger(a){
  var cardPlaceholder = a;
  sessionStorage.setItem("Key", cardPlaceholder);
}

var card = sessionStorage.getItem("Key");

document.getElementById("img").src="Assets/Cards/" +card+"/"+card+".png"
document.getElementById("audio").src="Assets/Cards/" +card+"/"+card+".ogg"

img = document.getElementById("img")
audio = document.getElementById("audio")

function placeImage(e) {
  imgc = $("#img").clone().appendTo("body")[0]
  audioc=$("#audio").clone().appendTo("body")[0]
  imgc.style.visibility = "visible"
  imgc.style.left = (e.clientX - (img.width / 2)) + "px";
  imgc.style.top = (e.clientY - (img.height / 2)) + "px";
  audioc.play();
}

document.addEventListener("click", placeImage)
