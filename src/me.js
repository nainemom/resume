export default {
  careerStart: '2013-04-30T19:30:00.000Z',
  experience() {
    const start = new Date(this.careerStart).getTime()
    const end = new Date().getTime()
    return `~${Math.round((end - start) / 31536000000)}`
  }
}