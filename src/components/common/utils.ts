export function isObj(x: any): boolean {
  const type = typeof x
  return x !== null && (type === 'object' || type === 'function')
}