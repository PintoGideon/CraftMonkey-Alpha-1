import formatMoney from '../lib/formatMoney';

describe('formatMoney function', () => {
	it('works with fraction units', () => {
		expect(formatMoney(1)).toEqual('$0.01');
	});

	it('leaves cents off for whole dollars', () => {
		expect(formatMoney(5000)).toEqual('$50');
		expect(formatMoney(100)).toEqual('$1');
	});
});
