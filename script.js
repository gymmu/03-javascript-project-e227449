export function aufgabe01(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
 // Wenn das aktuelle Zeichen ein 'e' ist, hänge nichts an die
if (currentElement === 'e') {
  result.push("")
  // Wenn das aktuelle Zeichen 'E' ist, hänge nichts an die
}else if ( currentElement === 'E'){

}else {
  result.push(currentElement)
}

  }
  return result.join("")
}





export function aufgabe02(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    // Soll aktuelles Element in Grossbuchstaben umwandeln
const capitalizedElement = currentElement.toUpperCase()

//Soll Grossbuchstaben an Resulat anhängen
result.push(capitalizedElement)


  }
  return result.join("")
}






export function aufgabe03(args) {
  const input = args
  const result = []
  let count = 0 

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    //Soll kleine 'e's zählen
if (currentElement === 'e'){
  count = count + 1
}

// Soll grosses 'E' zählen
else if (currentElement === 'E'){
  count = count + 1
}
  }
  return count
}



 



export function aufgabe04(args) {
  const input = args
  const result = []
  let count = 1

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
   
    //Soll Wörter zählen
if (currentElement === ' '){
  count = count + 1
}

  } //Soll den gezählten Wert zurückgeben
  return count 
}



export function aufgabe05(args) {
  const input = args
  const result = []
  let capitalLetters = 0

//Soll keine Grossbuchstaben enthalten
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    //Punkt soll Sonderzeichen sein
    if (currentElement === ".") {
      //Soll Lehrschläge ignorieren
    } else if (currentElement === " ") {
  //Soll falsch sein bei Sonderzeichen
} else if (currentElement !== currentElement.toLowerCase()) {
  capitalLetters ++
  }
}
  

if (capitalLetters > 0) {
  return true
}else {
 return false
 }



 return true
}



export function aufgabe06(args) {
      const input = args; //Soll testen ob Sonderzeichen vorkommt
   
    for (let i = 0; i < input.length; i++) {
      const currentElement = input[i] ;
      const ascii = currentElement.charCodeAt(0)
   
      if (65 <= ascii && ascii <= 90) {
        //Soll Grossbuchstaben prüfen
      } else if (97 <= ascii && ascii <=122) {
        //Soll Kleinbuchstaben prüfen
      } else if (currentElement === ' ') {
      }else {
        return true
      }
    }
    return false
  }



  export function aufgabe07 (args) {
    const input = args
    const result = []
   
    for (let i=0; i < input.length; i++) {
      const currentElement = input [i]
    if (currentElement === "u") {
      if (input[i+1] === "n") {
        if (input[i+2] === "d") {
          // Wenn der Code bis hier kommt, sind die Zeichen u,n,d hintereinander
        return true
        }
      }
    }
    }
  return false
  }


export function aufgabe08 (args) {
  const input = args
  const result = []
 
 
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    //Soll 'e's mit '3' ersetzen
     if (currentElement === 'e') {
  result.push('3')
  }else{
    result.push(currentElement)
  }
  }
  return result.join("")
}
 


export function aufgabe09 (args) {
  const input = args
  const result = []
  //Soll die Länge der Zeichen zählen
  let len = 0
  for (let i = 0; i < input.length; i++) {
    len++
  }
//Wenn es 6 Zeichen sind, soll true zurückgeben
  if (len === 6) {
    return true
  } else {
    return false
  }
}


export function aufgabe10(args) {
    const input = args
  
    //Wenn die Eingabe nicht 7 Zeichen lang ist, soll falsch zurückgeben
    //Hexcode ist immer 7 Zeichen lang
    if (input.length !== 7) {
    return false
    }
   //Wenn die Eingabe nicht mit einem '#' beginnt, soll flasch zurückgeben
    if (input[0] !== "#") {
    return false
    }
   
    for (let i = 1; i < input.length; i++) {
    const currentElement = input[i]
    //Soll ascii Code mitbewerten
    const ascii = currentElement.charCodeAt(0)
   
    if (48 <= ascii && ascii <= 57) {
    // Soll nichts machen, weil es Zahlen sind
    } else if (65 <= ascii && ascii <= 70) {
    // Soll nichts machen, weil es Buchstaben sind
    } else {
    return false
    }
    }
   
    return true
    }
 



export function aufgabe11 (args) {
  const input = args
  const result = []
  let ascii = -1
//Funktionswächter
  if ( input.length > 1) {
    return null
  }

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    ascii = currentElement.charCodeAt(0)
  //Soll direkt ascii zurückgeben
    return ascii
  }
  //Soll null zurückgeben
  return null
}



export function aufgabe12 (args) {
  const input = args
  const result = []
// 'i' kann 'pos' ersetzen
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === 'e') {
      return i
    }
  }
  //Soll -1 zurückgeben wenn nichts gefunden wird
  return -1
}




export function aufgabe13 (args) {
  const input = args
  const result = []
 
  let pos = -1

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    //Soll nicht dirket abbrechen beim ersten 'e'
    if (currentElement === 'e') {
      pos = i
    }
  }
  //Soll position zurückgeben
  return pos
}


    export function aufgabe14 (args) {
const input = args
const result = []
let count = 0

for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
   
    if (currentElement === 'e') {//Soll 'e' erkennen
   count = count + 1
   //Soll 'i' zurückgeben wenn Position 3 ist
    if (count === 3){
     return i
    }
      }
      }
      //Sonst soll -1 zurückgeben
    return -1
    }




export function aufgabe15(args) {
  const input = args
  const result = []

for (let i = 0; i < input.length; i++) {
  const currentElement = input[i]
  //Soll direkt zurückgeben, wenn es ein Leerzeichen gibt
  if (currentElement === ' ') {
return result.join("")
  }
  //Wenn es kein Leerzeichen hat soll alles zurückgeben
  result.push(currentElement)
}
  return result.join("")
}



export function aufgabe16(args) {
  const input = args
  const result = []
 
  for (let i= 0; i < input.length; i++) {
    const currentElement = input [i]
    //Wenn ein '$' kommt, soll abbrechen
    if (currentElement === '$'){
      break
    }
    //Solange kein '$' gibt Eingabe zurück
    result.push(currentElement);
}
return result.join('')
}


 
export function aufgabe17(args) {
  const input = args;
  //Input wird mit einem Array getrennt
  const result = input.split(',')
 
 
  for (let i = 0; i < result.length - 1; i++) {
    for (let j = 0; j < result.length - 1 - i; j++) {
      if (result[j] > result[j + 1]) {
  [result[j], result[j + 1]] = [result[j + 1], result[j]]
      }
    }
  }
 
  return result.join(',')
}
 


export function  aufgabe18 (args) {
  const input = args
  const result = []
  let ausgabe = []
//Eingabe wird mit Leerzeichen getrennt
  let parts = input.split(" ")
   
if (parts.length === 2) { 
  //Trim schneidet Leerzeichen vorne und hinten ab
  //Erster Teil soll Name sein (erstes Wort)
  let name = parts[0].trim()
  //Ist der zweite Teil(zweites Wort, also Alter)
  let age = parts[1].trim()
ausgabe = "Sie heissen " + name + 
" und sind " + age + " Jahre alt"
} 
else ausgabe = "Sie heissen " + input + 
" und sind Jahre alt"
//Soll den obigen Satz abgeben mit dem eingefügten Input
return ausgabe
}


export function aufgabe19 (args) {
  const input = args
  const result = []
 
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    //Soll den Input nochmals hinten dran hängen
    result.push(currentElement + currentElement )
  }
 
  return result.join("")
}


export function aufgabe20 (args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === '.') {
      //Wenn Input '.' ist, soll prüfen ob nächstes Zeichen ein ' ' ist.
    if (input[i+1] === ' ') {
      return true
        }
      }
    }
  return false
  }

 
  export function aufgabe21 (args) {
    const input = args
    const result = []
   
  for (let i = input.length -1; i>=0; i--) {
    const currentElement = input[i]
    //Soll die Eingabe umkeheren
    result.push(currentElement)
   
  }
    return result.join("")
  }




  export function aufgabe22(args) {
    const input = args
    let result = []
    let check = false
   
     for (let i = 0; i < input.length; i++) 
      if (currentElement === input[i])
      result.push("_")

      if (currentElement === 'k') {

return result.join("")  
}
  }
   



   export function aufgabe23(args) {
    const input = args;
    const result = [];
  
    if (input.length === 0) {
      return ''; // Soll leer zurückgeben 
    }
  
    const firstChar = input.charAt(0);
  
    result.push(firstChar); // Soll erstes Zeichen am Anfang der Ausgabe anhängen
  
    for (let i = 0; i < input.length; i++) {
      const currentElement = input[i];
      result.push(currentElement);
    }
  
    result.push(firstChar); // Soll erstes Zeichen am Schluss der Ausgabe anhängen
  
    return result.join('');
  }
  



  export function aufgabe25 (args) {
    const input = args
    const result = []
//Soll prüfen ob der input gerade ist
    if (input.length % 2 === 0) {

const pos = input.length / 2 - 1 // Soll noch eins abziehen um auf die richtige Position zu finden da man von null aus zählt

for (let i = 0; i < input.length; i++) {
  const currentElement = input[i]
  if (i === pos){

  }
  else if (i=== pos + 1){

  } else {
    result.push(currentElement)
  }
}
   } else {
    const pos = Math.floor(input.length / 2 )
    
    for (let i = 0; i < input.length; i++) {
      const currentElement = input[i]
      if (i === pos) {
//Soll nichts machen
    } else {
      result.push(currentElement)
    }
  }
}
    return result.join("")
  
  }




export function aufgabe26 (args) {
 
  const list = args.split("")  // Soll Text in Liste umwandlen
  for (let i = 0; i < list.length - 1; i++) {
    const currentElement = list[i]
    const nextElement = list[i+1]
    if ( currentElement.charCodeAt(0) > nextElement.charCodeAt(0)) {
      // Soll Elemente vertauschen wenn falsche Reihenfolge
      const tmp = list[i+1]
      list[i+1] = list[i]
      list[i] = tmp
      i = 0 // Soll von vorne starten wenn etwas vertauscht wirde
    }
  }
  const result = list.join("")
  return (result)
 
}

export function  aufgabe27 (args) {
  const input = args
  // '0' Weil in der Informatik von 0 gezählt wird
  if(input.length === 0) return false

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
   const ascii = currentElement.charCodeAt(0)
  //Soll mit ascii Code testen ob es Zahlen sind
  if (48 <= ascii && ascii <= 57) {

  } else return false 
}
  return true
}

export function  aufgabe28 (args) {
  const input = args
  const zahlen = input.split(' ')

  if (zahlen.length === 2 && !isNaN(zahlen[0]) && !isNaN(zahlen[1])) {
    const zahl1 = parseFloat(zahlen[0]);
    const zahl2 = parseFloat(zahlen[1]);
    
    const summe = zahl1 + zahl2;
    return `${summe}`;
} else {
    return null;
}
}


export function bubbleSort (args) {
 
  const list = args.split("")  // Soll Text i Liste umwandeln um nachher Elemente zu sortieren.
  for (let i = 0; i < list.length - 1; i++) {
    const currentElement = list[i]
    const nextElement = list[i+1]
    if ( currentElement.charCodeAt(0) > nextElement.charCodeAt(0)) {
      // Soll Elmente vertauschen
      const tmp = list[i+1]
      list[i+1] = list[i]
      list[i] = tmp
      i = -1 // Soll von vorne starten wenn etwas vertauscht worden ist.
    }
  }
  const result = list.join("")
  return (result)
 
}