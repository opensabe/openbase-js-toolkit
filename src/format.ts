/**
 * Multiplies the given value by 10,000 and rounds the result to the nearest integer.
 *
 * @param value - The number to be multiplied.
 * @returns The result of the multiplication, rounded to the nearest integer.
 */
export function multiple10K(value: number): number {
  return Math.round(value * 10000)
}

/**
 * Divides the given number by 10,000.
 *
 * @param value - The number to be divided.
 * @returns The result of the division.
 */
export function devide10K(value: number): number {
  return value / 10000
}

/**
 * Counts the number of decimal places in a string representation of a number.
 * @param {string} str - The string representation of the number.
 * @returns {number} The number of decimal places.
 */
function countDecimalPlaces(str: string): number {
  const decimalIndex = str.indexOf('.')
  return decimalIndex === -1 ? 0 : str.length - decimalIndex - 1
}

/**
 * Formats a number with commas and specified decimal places.
 * @param {number | string} num - The number to format.
 * @param {number} [decimals] - The number of decimal places to include.
 * @returns {string} The formatted number as a string with commas.
 */
export function formatNumber(num: number | string, decimals: number | null = null): string {
  if (num === undefined || num === null || num === '') return ''
  const value: string = num.toString()

  // Automatically calculate decimal places if not provided
  if (decimals === null || decimals === undefined) {
    decimals = countDecimalPlaces(value)
  } else if (!decimals) {
    decimals = 0
  }

  const [integerNum, decimalNum] = Number(num).toFixed(decimals).split('.')
  const formattedIntegerNum = integerNum.replace(/\B(?=(\d{3})+(?!\d))/g, ',')

  return formattedIntegerNum + (decimalNum ? '.' + decimalNum : '')
}