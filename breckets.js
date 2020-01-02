let startBrackets = ['{', '(', '[', '<'];
let endBrackets = ['}', ')', ']', '>'];

let inputs = ['{({[]})[<>{[}]}}', '()', '<(><)><()>', ')('];

function isBracketsValid(value) {
    let temp = [];
	for (let index = 0; index < value.length; index++) {
		const element = value[index];

		if (startBrackets.includes(element)) {
			temp.push(element);
		}

		if (endBrackets.includes(element)) {
			let endBracketIndex = endBrackets.findIndex(el => el === element);
			if (temp[temp.length - 1] === startBrackets[endBracketIndex]) {
				temp.pop();
			} else {
				temp.push(element);
			}
		}
    }
    return !temp.length ? 'EVRIKA' : 'nope'
}

// inputs.forEach(element => {
// 	console.log(isBracketsValid(element));
// });

console.log(isBracketsValid(inputs[0]));
console.log(isBracketsValid(inputs[1]));
