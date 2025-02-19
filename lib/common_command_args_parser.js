const termCommandArgsParser = termType => ([ id, language, ...value ]) => {
  value = dropQuotes(value.join(' '))
  if (termType === 'alias') value = value.split('|')
  return [ { id, language, value } ]
}

const dropQuotes = value => {
  if (value.startsWith("'") && value.endsWith("'")) return value.slice(1, -1)
  if (value.startsWith('"') && value.endsWith('"')) return value.slice(1, -1)
  return value
}

const badgesCommandArgsParser = ([ id, site, badges ]) => {
  badges = badges.split(/[,|]/)
  return [ { id, site, badges } ]
}

module.exports = {
  termCommandArgsParser,
  badgesCommandArgsParser,
}
