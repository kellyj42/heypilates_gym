export const homeQuery = `
*[_type == "home"][0]{
  introText,
  conceptText,
  uniquePoints,
  ctaText,
  heroImage
}
`
