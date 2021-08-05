const formatNumber = (num: number): string =>
	(Math.round(num * 100) / 100).toFixed(2)

export default formatNumber
