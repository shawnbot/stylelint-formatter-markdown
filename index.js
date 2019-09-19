const {stripCwd, getHeadRef, getRepoURL} = require('stylelint-formatter-utils')
const {MarkdownTable, link} = require('stylelint-formatter-utils/markdown')

module.exports = function stylelintFormatterMarkdown(results) {
  const repoURL = getRepoURL()
  const headRef = getHeadRef()

  const table = new MarkdownTable({
    columns: [
      {title: 'rule', format: ({rule}) => link(rule, `https://stylelint.io/user-guide/rules/${rule}`)},
      {title: 'path', format: warning => link(warning.source, href(warning))},
      {title: 'text', format: warning => warning.text}
    ]
  })

  const rows = []
  for (const {source, warnings} of results) {
    for (const warning of warnings) {
      warning.source = stripCwd(source)
      rows.push(warning)
    }
  }

  return table.format(rows)

  function href({source, line}) {
    const fragment = line ? `#L${line}` : ''
    return `${repoURL}/blob/${headRef}/${source}${fragment}`
  }
}
