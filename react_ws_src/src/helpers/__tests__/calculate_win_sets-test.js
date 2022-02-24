jest.unmock('../calculate_win_sets'); // unmock to use the actual implementation of calculate_win_sets
import calculate_win_sets from '../calculate_win_sets'

const doArraysIntersect = (array1, array2) => array1.some(item1 => array2.includes(item1))
const convertWinSetsIntoString = (arr) => arr.map(item => item.join());

describe('calculate_win_sets', () => {
	it('calculate_win_sets 3x3', () => {
		const winSets = calculate_win_sets(3);
		const simplifiedWinSets = convertWinSetsIntoString(winSets);

		const testSuites = [
			['c1', 'c2', 'c3'],
			['c4', 'c5', 'c6'],
			['c7', 'c8', 'c9'],

			['c1', 'c4', 'c7'],
			['c2', 'c5', 'c8'],
			['c3', 'c6', 'c9'],

			['c1', 'c5', 'c9'],
			['c3', 'c5', 'c7']
		];

		testSuites.forEach(testSuite => {
			expect(doArraysIntersect(simplifiedWinSets, testSuite.join())).toBe(true);
		})
	});

	it('calculate_win_sets 5x5', () => {
		const winSets = calculate_win_sets(5);
		const simplifiedWinSets = convertWinSetsIntoString(winSets);

		const testSuites = [
			['c1', 'c2', 'c3', 'c4', 'c5'],
			['c6', 'c7', 'c8', 'c9', 'c10'],
			['c11', 'c12', 'c13', 'c14', 'c15'],
			['c16', 'c17', 'c18', 'c19', 'c20'],
			['c21', 'c22', 'c23', 'c24', 'c25'],

			['c1', 'c6', 'c11', 'c16', 'c21'],
			['c2', 'c7', 'c12', 'c17', 'c22'],
			['c3', 'c8', 'c13', 'c18', 'c23'],
			['c4', 'c9', 'c14', 'c19', 'c24'],
			['c5', 'c10', 'c15', 'c20', 'c25'],

			['c1', 'c7', 'c13', 'c19', 'c25'],
			['c5', 'c9', 'c13', 'c17', 'c21'],
		];

		testSuites.forEach(testSuite => {
			expect(doArraysIntersect(simplifiedWinSets, testSuite.join())).toBe(true);
		})
	});
});