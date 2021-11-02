export const numberRange = (start, end, exceptions) => {
	const res = [];
	if (end < start) {
		return res;
	}
	for (var i = start; i < end; i++) {
		if (exceptions && exceptions.length) {
			if (exceptions.indexOf(i) > -1) {
				// Ignore
			} else {
				res.push(i);
			}
		} else {
			res.push(i);
		}
	}
	return res;
};

export const range0to100 = (exceptions) => {
	return numberRange(0, 100, exceptions);
};

export const range0to1000 = (exceptions) => {
	return numberRange(0, 1000, exceptions);
};

export const rangeNegative100to100 = (exceptions) => {
	return numberRange(-100, 100, exceptions);
};
