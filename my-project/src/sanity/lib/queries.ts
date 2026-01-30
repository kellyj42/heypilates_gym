export const homeQuery = `
*[_type == "home"][0]{
  introText,
  conceptText,
  uniquePoints,
  ctaText,

  heroImage{
    asset->{url}
  },

  uniqueGallery[]{
    asset->{url}
  }
}
`




export const founderQuery = `
*[_type == "founder"][0]{
  name,
  title,
  bio,
  credentials,
  vision,
  image{
    asset->{
      url
    }
  }
}
`

export const classesQuery = `
*[_type == "classType"] | order(name asc){
  _id,
  name,
  description,
  maxParticipants
}
`
export const pricingQuery = `
*[_type == "pricing"]{
  _id,
  category,
  items[]{
    label,
    price,
    note
  }
}
`
export const privateTrainingQuery = `
*[_type == "privateTraining"]{
  _id,
  title,
  description,
  pricing[]{
    label,
    price,
    note
  }
}
`
