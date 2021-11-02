const RANDOM_STRING = [
	'Lorem',
	'ipsum',
	'dolor',
	'sit',
	'amet',
	'consectetur',
	'adipiscing',
	'elit',
	'sed',
	'do',
	'eiusmod',
	'tempor',
	'incididunt',
	'ut',
	'labore',
	'et',
	'dolore',
	'magna',
	'aliqua.',
	'Ut',
	'enim',
	'ad',
	'minim',
	'veniam',
	'quis',
	'nostrud',
	'exercitation',
	'ullamco',
	'laboris',
	'nisi',
	'ut',
	'aliquip',
	'ex',
	'ea',
	'commodo',
	'consequat.',
	'Duis',
	'aute',
	'irure',
	'dolor',
	'in',
	'reprehenderit',
	'in',
	'voluptate',
	'velit',
	'esse',
	'cillum',
	'dolore',
	'eu',
	'fugiat',
	'nulla',
	'pariatur.',
	'Excepteur',
	'sint',
	'occaecat',
	'cupidatat',
	'non',
	'proident',
	'sunt',
	'in',
	'culpa',
	'qui',
	'officia',
	'deserunt',
	'mollit',
	'anim',
	'id',
	'est',
	'laborum',
];
const charArray = (i, j, exceptions) => {
	const res = [];
	for (var k = i; k < j; k++) {
		//convert the char code to string (Alphabets)
		var str = String.fromCharCode(k);
		if (exceptions && exceptions.length) {
			if (exceptions.indexOf(str) > -1) {
				// Ignore
			} else {
				res.push(str);
			}
		} else {
			res.push(i);
		}
	}
	return res;
};
export const smallChars = (exceptions) => {
	return charArray(97, 123, exceptions);
};

export const capitalChars = (exceptions) => {
	return charArray(65, 91, exceptions);
};

export const specialChars = (exceptions) => {
	return charArray(33, 47, exceptions)
		.concat(charArray(58, 64, exceptions))
		.concat(charArray(91, 96, exceptions))
		.concat(charArray(123, 126, exceptions));
};
export const printableChars = (exceptions) => {
	return charArray(33, 126, exceptions);
};

export const randomString = (count, exceptions) => {
	const cCount = count || RANDOM_STRING.length;
	const res = [];
	for (var i = 1; i < cCount; i++) {
		res.push(RANDOM_STRING[i]);
	}

	return res;
};
