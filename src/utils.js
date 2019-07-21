export default {
  replaceAll(str, find, replaceBy) {
    return str.split(find).join(replaceBy)
  },
  applyEvals(markup) {
    let res = markup
    const expersions = markup.match(/{{[^}]*\}}/g)
    const evals = expersions.map(exp => exp.substr(2, exp.length - 4))
    expersions.forEach((pos, index) => {
      res = this.replaceAll(res, pos, eval(evals[index]))
    })
    return res
  }
}