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

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === ".") {
      //do nothing
    } else if (currentElement === " ") {
      //ignoriere Leerschläge
    } else if (currentElement === currentElement.toUpperCase()) {
  capitalLetters ++
}
  
  

if (capitalLetters > 0) {
  return true
} else {return false
}





  }
  return true
}

