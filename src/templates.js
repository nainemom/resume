const self = {
  workExpTag(item) {
    const d1 = new Date(item.from).getTime();
    const d2 = item.to === 'present' ? Date.now() : new Date(item.to).getTime();
    const offsetDays = (d2 - d1) / 86400000;
    const offsetMonths = Math.round(offsetDays / 30);
    return `
      <div class="list-section margin-v padding-h">
        <div>
          <h3 class="inline-block"> ${item.title} </h3> - <i> From ${self.dateFormat(item.from)} To ${self.dateFormat(item.to)} (~${offsetMonths} Months)</i>
        </div>
        <h4> ${item.position} </h4>
        <p> ${item.info} </p>
      </div>
    `
  },
  headerLinksTag(me) {
    let ret = `<a href="mailto:${me.mail}" title="${me.mail}">Send Email</a> | <a href="callto:${me.phone}" title="${me.phone}">Phone Call</a> | `
    me.links.forEach((item, index) => {
      ret += `<a href="${item.link}" target="_blank">${item.title}</a>`
      if (index + 1 !== me.links.length) {
        ret += ' | '
      }
    })
    return ret
  },
  openSourceProjectTag(item) {
    return `
      <div class="list-section margin-v padding-h">
        <div>
          <h3 class="inline-block"> ${item.title} </h3> - <i> as ${item.as === 0 ? 'Creator - Maintainer' : 'Contributer'}  </i> ${item.accessLink && ` - <a href="${item.accessLink}" target="_blank">Access Link</a>`} - <a href="${item.githubLink}" target="_blank">Github Link</a>
        </div>
        <p> ${item.description} </p>
      </div>
    `
  },
  dateFormat(date) {
    if (date === 'present') {
      return 'Present'
    } else {
      return `${date.getMonth() + 1}-${date.getFullYear()}`
    }
  }
}

export default self