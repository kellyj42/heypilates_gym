export type PackageItem = {
  label: string
  amount: string
  note?: string
}

export type PrivateTrainingData = {
  heroHeadline?: string
  heroSubtext?: string
  heroImage?: {
    asset?: {
      url?: string
    }
  }
  introText?: string
  reformer?: {
    title?: string
    description?: string
    priceSingle?: string
    pricePack?: string
    image?: {
      asset?: {
        url?: string
      }
    }
  }
  personalTraining?: {
    title?: string
    description?: string
    packages?: PackageItem[]
    image?: {
      asset?: {
        url?: string
      }
    }
  }
  philosophy?: string
  ctaText?: string
}
