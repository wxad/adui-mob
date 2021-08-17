export function isObj(x: any): boolean {
  const type = typeof x
  return x !== null && (type === 'object' || type === 'function')
}

export const getNavigationHeight = (): number => {
  const { platform } = wx.getSystemInfoSync()
  const { bottom } = wx.getMenuButtonBoundingClientRect()
  const capsuleBottom = platform === 'android' ? 6 : 8
  return bottom + capsuleBottom
}
