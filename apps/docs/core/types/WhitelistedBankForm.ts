import { BankRoutingType, FiatCurrency, WhitelistedBankOwnerType } from '@core/graphql/types'
import Option from './Option'

interface Owner {
  owner: Option<WhitelistedBankOwnerType>
  proofOfRelationship?: { id: string }
}

interface WhitelistedBankForm {
  accountName: string
  bankName: string
  bankAddress: string
  account: string
  bankCountry: Option<string>
  currency: Option<FiatCurrency>
  owner: Owner
  address: {
    city: string
    state: string
    zipCode: string
  }
  routingCode: {
    code: string
    type: Option<BankRoutingType>
  }
  domesticCode: string
  notes: string
}

export default WhitelistedBankForm
