onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};

// set up text to print, each item in array is new line
var aText = new Array(
  "Sarai, eres la persona más genial del universo", 
  "y a pesar de que has pasado por mucho, has dado", 
  "lo mejor de ti, eres alguien con quien es bonito", 
  "pasar el tiempo.", 
  "Has llegado muy lejos, si te caes te levantas, si lloras", 
  "puedes volver a reir en un momento, no necesitas", 
  "ser nadie más, siendo tu atraeras a la gente correcta.", 
  "Creo en ti, que lograras todo eso que tienes pendiente,", 
  "tienes las capacidades de lograrlo.", 
  "Te extraño, no dejes de sonreir, es algo que es natural", 
  "y es bonito, va mucho con tu estilo xd", 
  "sigue trayendo cosas bonitas a este plano existencial", 
  "con la creatividad que solo tu posees.", 
  "Se paciente, muchas cosas toman algo de tiempo", 
  "....", 
  "Se feliz, come , rie ,juega, duerme, escucha y disfruta..."
  );
  var iSpeed = 100; // time delay of print out
  var iIndex = 0; // start printing array at this posision
  var iArrLength = aText[0].length; // the length of the text array
  var iScrollAt = 20; // start scrolling up at this many lines
   
  var iTextPos = 0; // initialise text position
  var sContents = ''; // initialise contents variable
  var iRow; // initialise current row
   
  function typewriter()
  {
   sContents =  ' ';
   iRow = Math.max(0, iIndex-iScrollAt);
   var destination = document.getElementById("typedtext");
   
   while ( iRow < iIndex ) {
    sContents += aText[iRow++] + '<br />';
   }
   destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
   if ( iTextPos++ == iArrLength ) {
    iTextPos = 0;
    iIndex++;
    if ( iIndex != aText.length ) {
     iArrLength = aText[iIndex].length;
     setTimeout("typewriter()", 500);
    }
   } else {
    setTimeout("typewriter()", iSpeed);
   }
  }
  
  
  typewriter();