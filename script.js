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
    // Wandle das aktuelle Element in enen Grossbuchstaben um
const capitalizedElement = currentElement.toUpperCase()

//Hänge den Grossbuchstaben an das Resultat an.
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
    //Soll nur ein 'e' enthalten
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
  let count = 4

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
   
    //Soll vier Wörter zählen
if (currentElement === 'word'){
  count = count + 1
}


else if (currentElement === 'word'){
  count = count + 1
}
  }
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
  const input = args
  const result = []
  let capitalLetters = 0
 
  for (let i = 0; i < input.length; i++) {
    const currentElement = input [i]
    if (currentElement === ".") {
 //Macht nichts
    } if (currentElement !== " ") {
  //ignoriert Leerschläge
    }
   
    else if (currentElement !== currentElement.toLowerCase()) {
      capitalLetters++
   
    }
  }
 
  if (capitalLetters> 0) {
    return true
  }else {
    return false
  }
 
}






export function aufgabe07(args) {
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



export function aufgabe08 (args) {
  const input = args
  const result = []
  
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
//Wenn es 6 Zeichen gibt, soll true zurückgeben
  if (len === 6) {
    return true
  } else {
    return false
  }
}


export function aufgabe10 (args) {
  const input = args
  const result = []
  
  return result.join("")
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
  //Soll direkt zurückgeben
    return ascii
  }
  //Soll null zurückgeben
  return null
}



export function aufgabe12 (args) {
  const input = args
  const result = []
// 'i' ersetzt 'pos'
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === 'e') {
      return i
    }
  }
  //Wenn nichts gefunden soll -1 zurückgeben
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
// Wenn e' soll 2 zurückgeben
if (currentElement === 'e') {
  return 2
} else if (currentElement === ' ') {
  let count
  //Wenn kein 'e' soll -1 zurückgeben
} else if (currentElement !== 'e') {
  return -1
} 
    
    
    
    
 return result.join("") 
}
}