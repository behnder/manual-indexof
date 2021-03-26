let firstStr = "redux"
let secondStr = "react-redux-re"

let compareArr = []

for (const letter of firstStr) {
	for (const letter2 of secondStr) {
		if (letter === letter2) {
			console.log("pusheando a compare arr", "com")
			compareArr.push(letter2)
			console.log(compareArr)
		} else if (compareArr.length != firstStr.length) {
			console.log("parece que no miden lo mismo")
			console.log(compareArr.length)
			compareArr = []
		} else if (compareArr.length === firstStr.length) {
			console.log(compareArr)
		}
		break
	}
}
for (a = 0; a < firstStr.length; a++) {
	for (b = 0; b < secondStr.length; b++) {
		if (letter === letter2) {
			console.log("pusheando a compare arr")
			compareArr.push(letter2)

			console.log(compareArr)
		} else if (compareArr.length != firstStr.length) {
			console.log("parece que no miden lo mismo")
			console.log(compareArr.length)
			compareArr = []
		} else if (compareArr.length === firstStr.length) {
			console.log(compareArr)
		}
		break
	}
}

console.log(compareArr)

// SI ENCUENTRA, PUSHEA A compareArr
// sessionStorage,
