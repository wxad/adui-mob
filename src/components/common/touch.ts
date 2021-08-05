/* tslint:disable */
// @ts-ignore: Unreachable code error
// @ts-nocheck
export const touch = Behavior({
  methods: {
    touchStart(event: WechatMiniprogram.Touch) {
      const touches = event.touches[0]
      this.direction = ''
      this.deltaX = 0
      this.deltaY = 0
      this.offsetX = 0
      this.offsetY = 0
      this.startX = touches.clientX
      this.startY = touches.clientY
    },

    touchMove(event: WechatMiniprogram.Touch) {
      const touches = event.touches[0]
      this.deltaX = touches.clientX - this.startX
      this.deltaY = touches.clientY - this.startY
      this.offsetX = Math.abs(this.deltaX)
      this.offsetY = Math.abs(this.deltaY)
      this.direction =
        this.offsetX > this.offsetY
          ? 'horizontal'
          : this.offsetX < this.offsetY
          ? 'vertical'
          : ''
    },
  },
})
