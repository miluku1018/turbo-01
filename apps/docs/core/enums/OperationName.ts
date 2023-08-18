const enum OperationName {
  ADD_WALLET = 'Add New Wallet',
  ADD_BANK = 'Add New Bank',
  ADD_WHITELIST = 'Add New Whitelist',
  ADD_POLICY = 'Add New Policy',
  ADD_USER = 'Add New User',
  EDIT_WALLET = 'Edit Wallet',
  EDIT_BANK = 'Edit Bank',
  EDIT_POLICY = 'Edit Policy',
  DEPOSIT_FIAT = 'Fiat Deposit',
  DEPOSIT_CRYPTO = 'Crypto Deposit',
  DEPOSIT_NFT = 'NFT Deposit',
  WITHDRAWAL_FIAT = 'Fiat Withdrawal',
  WITHDRAWAL_CRYPTO = 'Crypto Withdrawal',
  DELEGATION = 'Delegation',
  STAKING_LIQUID = 'Liquid Staking',
  FIAT_ON_RAMP = 'Fiat On-Ramp',
  FIAT_OFF_RAMP = 'Fiat Off-Ramp',
  CRYPTO_TO_CRYPTO = 'Crypto To Crypto',
  REMOVE_USER = 'Remove User',
}

export default OperationName
