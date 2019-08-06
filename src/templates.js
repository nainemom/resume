const self = {
  workExpTag(item) {
    return `
      <div class="list-section margin-v padding-h">
        <div>
          <h3 class="inline-block"> ${item.title} </h3> - <i> From ${self.dateFormat(item.from)} To ${self.dateFormat(item.to)} (${item.type === 1 ? 'Full-Time' : 'Part-Time'}) </i>
        </div>
        <h4> ${item.position} </h4>
        <p> ${item.description} </p>
      </div>
    `
  },
  headerLinksTag(items) {
    let ret = ''
    items.forEach((item, index) => {
      ret += `<a href="${item.link}" target="_blank">${item.title}</a>`
      if (index + 1 !== items.length) {
        ret += ' | '
      }
    })
    return ret
  },
  openSourceProjectTag(item) {
    return `
      <div class="list-section margin-v padding-h">
        <div>
          <h3 class="inline-block"> ${item.title} </h3> - <i> as ${item.as === 0 ? 'Maintainer' : 'Contributer'}  </i> - <a href="${item.link}" target="_blank">Access Link</a>
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