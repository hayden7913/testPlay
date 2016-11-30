const chai = require('chai');
const should = chai.should();

const toCaps = require('../toCaps');

describe('toCaps', () => {
	it ('should return a string in all caps', () => {
		const word = [
			["apple", "APPLE"],
			["butter", "BUTTER"]
		];
		word.forEach(word => {
			const ans = toCaps(word[0]);
			ans.should.equal(word[1]);
		});

		const invalid = [
			[1, "Invalid Input"],
			[undefined, "Invalid Input"],
			[["hat"], "Invalid Input"]
		];
		invalid.forEach(entry => {
			ans = toCaps(entry[0]);
			ans.should.equal(entry[1]);
		});
	});
});
