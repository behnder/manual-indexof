let firstStr = "reactcara-redax-re-cara"
let secondStr = "cara"

let compareArr = []
let temp

idxResult = 0

for (a = 0; a < firstStr.length; a++) {
	temp = a
	for (b = 0; b < secondStr.length; b++) {
		if (firstStr[a] === secondStr[b] && compareArr.length < secondStr.length) {
			a++
			compareArr.push(secondStr[b])
			if (compareArr.length < 2) {
				idxResult = a
			}
			console.log(
				"compareArr = " + compareArr.length + "  seconstr =    ",
				secondStr.length
			)
		} else if (compareArr.length === secondStr.length) {
			console.log("somos iguales: ", compareArr, secondStr)

			break
		} else {
			a = temp
			compareArr = []
		}
	}
}

console.log(
	`el array final es ${compareArr.join("")}, en la posicion ${idxResult}`
)

// SI ENCUENTRA, PUSHEA A compareArr
// sessionStorage,
