function countLayers(rug) {
	let slice = rug[rug.length - Math.ceil(rug.length / 2)];
	let result = [];
	for (let i = 0; i < slice.length; i++) {
		let letter = slice[i];
		if (result.length) {
            if(result[result.length - 1] !== letter){
                result.push(letter);
            }
			
		} else {
			result.push(letter);
		}
	}
	console.log(Math.ceil(result.length / 2));
}
countLayers([
	'AAAAAAAAAAA',
	'AABBBBBBBAA',
	'AABCCCCCBAA',
	'AABCAAACBAA',
	'AABCADACBAA',
	'AABCAAACBAA',
	'AABCCCCCBAA',
	'AABBBBBBBAA',
	'AAAAAAAAAAA'
]);
countLayers([
    "AAAAAAAAA",
    "ABBBBBBBA",
    "ABBAAABBA",
    "ABBBBBBBA",
    "AAAAAAAAA"
  ])