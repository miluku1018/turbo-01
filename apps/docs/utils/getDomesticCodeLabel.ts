export const getDomesticCodeLabel = (country: string) => {
  switch (country) {
    case 'Singapore':
    case 'Taiwan': {
      return 'Bank Code'
    }

    case 'Hong Kong': {
      return 'Bank Identifier Code (BIC)'
    }

    case 'United States': {
      return 'ABA Routing Number'
    }

    case 'United Kingdom': {
      return 'Sort Code'
    }

    default:
      return 'Domestic Bank Identifier'
  }
}
