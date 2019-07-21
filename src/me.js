export default {
  careerStart: '2013-04-30T19:30:00.000Z',
  experience() {
    const start = new Date(this.careerStart).getTime()
    const end = new Date().getTime()
    return `~${Math.round((end - start) / 31536000000)}`
  },
  workExprience: [
    {
      title: 'Snapp',
      from: new Date('May 2019'),
      to: 'present',
      type: 1
    },
    {
      title: 'Paygear Tunisia',
      from: new Date('November 2018'),
      to: new Date('April 2019'),
      type: 0,
      position: 'Frontend Developer'
    },
    {
      title: 'HotelOneClick',
      from: new Date('March 2018'),
      to: new Date('April 2019'),
      type: 0,
      position: 'Frontend Developer - Platform Designer'
    },
    {
      title: 'Paygear',
      from: new Date('April 2017'),
      to: new Date('April 2019'),
      type: 1,
      position: 'Frontend Developer'
    },
    {
      title: 'Mahna',
      from: new Date('May 2013'),
      to: new Date('April 2017'),
      type: 1,
      position: 'Full-stack Developer'
    },
  ]
}