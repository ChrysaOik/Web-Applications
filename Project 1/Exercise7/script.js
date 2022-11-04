document.querySelector("h1").style.fontFamily = "Georgia ,Garamond ";
document.querySelector("h1").style.fontSize = "35px";

document.querySelector("footer").style.fontFamily = "Arial,Verdana,Helvetica";

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

function changeBGImage(){
  document.body.style.backgroundColor = "#d4d3d3da";
}

function  myFunction() {
  var d=new Date();
  var theday=d.getDay();
  switch (theday) {
    case 0:
      document.getElementById("date-p").innerHTML = "Ο Alan Turing έπαιξε πολύ σημαντικό ρόλο στον Β' Παγκόσμιο Πόλεμο.";
      break;
    case 1:
      document.getElementById("date-p").innerHTML ="O John McCarthy ήταν καθηγητής στο Stanford από το 1962 μέχρι το 2000.";
      break;
    case 2:
      document.getElementById("date-p").innerHTML ="Ο Marvin Minky είχε μεγάλο ταλέντο στο πιάνο, καθώς έπαιζε ερασιτεχνικά.";
      break;
    case 3:
      document.getElementById("date-p").innerHTML ="O Edward Feigenbaum συμμετείχε σε πολύ σημαντικά projects όπως το ACME, το Mycin, το SUMEX, και το Dendral.";
      break;
    case 4:
      document.getElementById("date-p").innerHTML ="Ο Warren McCulloch έγραφε ποιήματα, ενώ επίσης σχεδίαζε κτίρια.";
      break;
    case 5:
      document.getElementById("date-p").innerHTML ="Ο Walter Pitts ήταν αυτοδίδακτος, έμαθε μόνος του λογική και μαθηματικά ενώ μπορούσε να διαβάσει διάφορες γλώσσες, όπως ελληνικά και λατινικά.";
      break;
    case 6:
      document.getElementById("date-p").innerHTML = "Υπάρχουν πάρα πολλοί επιστήμονες οι οποίοι έχουν συνεισφέρει στον κλάδο της τεχνητής νοημοσύνης.";
      break;
  }
}

function load() {
  changeBGImage();
  myFunction();
}