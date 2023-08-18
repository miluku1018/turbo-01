export type Maybe<T> = T | undefined
export type InputMaybe<T> = T | undefined
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  DateOnly: any
  DateTime: any
  FieldInput: any
  UUID: any
}

export type Account = {
  actions: Array<Action>
  createdAt: Scalars['DateTime']
  creator?: Maybe<Admin>
  email: Scalars['String']
  firstName: Scalars['String']
  hasSetPassword: Scalars['Boolean']
  hasSetTfa: Scalars['Boolean']
  id: Scalars['ID']
  lastName: Scalars['String']
  mobile: Scalars['String']
  position?: Maybe<Scalars['String']>
  removeRecord?: Maybe<RemoveAccountRecord>
  role: Role
}

export type AccountAlreadyExistsError = Error & {
  __typename?: 'AccountAlreadyExistsError'
  id: Scalars['ID']
  message: Scalars['String']
}

export type AccountNotFoundError = Error & {
  __typename?: 'AccountNotFoundError'
  id: Scalars['ID']
  message: Scalars['String']
}

export enum Action {
  ConfigureClientCustodyBank = 'CONFIGURE_CLIENT_CUSTODY_BANK',
  ConfigureClientDelegationNode = 'CONFIGURE_CLIENT_DELEGATION_NODE',
  ConfigureClientEthValidator = 'CONFIGURE_CLIENT_ETH_VALIDATOR',
  ConfigureClientOtcProvider = 'CONFIGURE_CLIENT_OTC_PROVIDER',
  ConfigureDelegationHost = 'CONFIGURE_DELEGATION_HOST',
  ConfigureDelegationNode = 'CONFIGURE_DELEGATION_NODE',
  ConfigureEthValidator = 'CONFIGURE_ETH_VALIDATOR',
  ConfigureOtcProvider = 'CONFIGURE_OTC_PROVIDER',
  ConfirmBankDeposit = 'CONFIRM_BANK_DEPOSIT',
  ConfirmWalletDeposit = 'CONFIRM_WALLET_DEPOSIT',
  CreateAegisBankAccount = 'CREATE_AEGIS_BANK_ACCOUNT',
  CreateAegisWalletAccount = 'CREATE_AEGIS_WALLET_ACCOUNT',
  CreateOnboarding = 'CREATE_ONBOARDING',
  CreateUser = 'CREATE_USER',
  ExecuteCryptoToFiat = 'EXECUTE_CRYPTO_TO_FIAT',
  ExecuteFiatToCrypto = 'EXECUTE_FIAT_TO_CRYPTO',
  RemoveUser = 'REMOVE_USER',
  ReportBankWithdrawal = 'REPORT_BANK_WITHDRAWAL',
  RequestAdminCreate = 'REQUEST_ADMIN_CREATE',
  RequestAdminRemove = 'REQUEST_ADMIN_REMOVE',
  RequestAuthAppRebind = 'REQUEST_AUTH_APP_REBIND',
  RequestBankCreate = 'REQUEST_BANK_CREATE',
  RequestBankDeposit = 'REQUEST_BANK_DEPOSIT',
  RequestBankUpdate = 'REQUEST_BANK_UPDATE',
  RequestBankWithdrawal = 'REQUEST_BANK_WITHDRAWAL',
  RequestCryptoToFiat = 'REQUEST_CRYPTO_TO_FIAT',
  RequestDelegation = 'REQUEST_DELEGATION',
  RequestFiatToCrypto = 'REQUEST_FIAT_TO_CRYPTO',
  RequestLiquidStaking = 'REQUEST_LIQUID_STAKING',
  RequestPinReset = 'REQUEST_PIN_RESET',
  RequestPolicyCreate = 'REQUEST_POLICY_CREATE',
  RequestPolicyUpdate = 'REQUEST_POLICY_UPDATE',
  RequestUserCreate = 'REQUEST_USER_CREATE',
  RequestUserRemove = 'REQUEST_USER_REMOVE',
  RequestWalletCreate = 'REQUEST_WALLET_CREATE',
  RequestWalletDeposit = 'REQUEST_WALLET_DEPOSIT',
  RequestWalletUpdate = 'REQUEST_WALLET_UPDATE',
  RequestWalletWithdrawal = 'REQUEST_WALLET_WITHDRAWAL',
  RequestWhitelistedBankCreate = 'REQUEST_WHITELISTED_BANK_CREATE',
  RequestWhitelistedWalletCreate = 'REQUEST_WHITELISTED_WALLET_CREATE',
  ReviewOnboarding = 'REVIEW_ONBOARDING',
  ReviewOperation = 'REVIEW_OPERATION',
  SettleCryptoToFiat = 'SETTLE_CRYPTO_TO_FIAT',
  SettleFiatToCrypto = 'SETTLE_FIAT_TO_CRYPTO',
  SubmitOnboarding = 'SUBMIT_ONBOARDING',
  UpdateOnboarding = 'UPDATE_ONBOARDING',
  ViewAdminList = 'VIEW_ADMIN_LIST',
  ViewAdminOperationList = 'VIEW_ADMIN_OPERATION_LIST',
  ViewAegisAccountList = 'VIEW_AEGIS_ACCOUNT_LIST',
  ViewBankOperationList = 'VIEW_BANK_OPERATION_LIST',
  ViewBankWithdrawalOperationList = 'VIEW_BANK_WITHDRAWAL_OPERATION_LIST',
  ViewClientList = 'VIEW_CLIENT_LIST',
  ViewConfigurationList = 'VIEW_CONFIGURATION_LIST',
  ViewCryptoToFiatExecuteList = 'VIEW_CRYPTO_TO_FIAT_EXECUTE_LIST',
  ViewCryptoToFiatOperationList = 'VIEW_CRYPTO_TO_FIAT_OPERATION_LIST',
  ViewCryptoToFiatReviewList = 'VIEW_CRYPTO_TO_FIAT_REVIEW_LIST',
  ViewCryptoToFiatSettleList = 'VIEW_CRYPTO_TO_FIAT_SETTLE_LIST',
  ViewDelegationOperationList = 'VIEW_DELEGATION_OPERATION_LIST',
  ViewDepositOperationList = 'VIEW_DEPOSIT_OPERATION_LIST',
  ViewFiatToCryptoOperationList = 'VIEW_FIAT_TO_CRYPTO_OPERATION_LIST',
  ViewLiquidStakingOperationList = 'VIEW_LIQUID_STAKING_OPERATION_LIST',
  ViewOnboardingList = 'VIEW_ONBOARDING_LIST',
  ViewPolicyOperationList = 'VIEW_POLICY_OPERATION_LIST',
  ViewUserOperationList = 'VIEW_USER_OPERATION_LIST',
  ViewWalletCreateOperationList = 'VIEW_WALLET_CREATE_OPERATION_LIST',
  ViewWalletOperationList = 'VIEW_WALLET_OPERATION_LIST',
  ViewWalletUpdateOperationList = 'VIEW_WALLET_UPDATE_OPERATION_LIST',
  ViewWalletWithdrawalOperationList = 'VIEW_WALLET_WITHDRAWAL_OPERATION_LIST',
  ViewWhitelistOperationList = 'VIEW_WHITELIST_OPERATION_LIST',
  ViewWithdrawalOperationList = 'VIEW_WITHDRAWAL_OPERATION_LIST',
}

export type AddressAttr = {
  __typename?: 'AddressAttr'
  city: Scalars['String']
  state: Scalars['String']
  zipCode: Scalars['String']
}

export type AddressField = {
  __typename?: 'AddressField'
  hint?: Maybe<Scalars['String']>
  label: Scalars['String']
  type: FieldType
  value?: Maybe<AddressAttr>
}

export type Admin = Account & {
  __typename?: 'Admin'
  actions: Array<Action>
  aegisEntity: AegisEntity
  createdAt: Scalars['DateTime']
  creator?: Maybe<Admin>
  custodyEntities: Array<CustodyEntity>
  email: Scalars['String']
  firstName: Scalars['String']
  hasSetPassword: Scalars['Boolean']
  hasSetTfa: Scalars['Boolean']
  id: Scalars['ID']
  kvFidoEnabled: Scalars['Boolean']
  kvPinSet: Scalars['Boolean']
  kvRequired: Scalars['Boolean']
  lastName: Scalars['String']
  mobile: Scalars['String']
  operationLogs: OperationLogs
  position?: Maybe<Scalars['String']>
  removeRecord?: Maybe<RemoveAccountRecord>
  role: Role
}

export type AdminCreateOperation = Operation & {
  __typename?: 'AdminCreateOperation'
  adminReviewGroups: Array<AdminReviewGroup>
  args: AdminCreateOperationArgs
  client?: Maybe<Client>
  clientReviewGroups: Array<ClientReviewGroup>
  createdAdmin?: Maybe<Admin>
  currentReviewRole?: Maybe<OperationReviewRole>
  executionRecord?: Maybe<OperationExecutionRecord>
  id: Scalars['ID']
  isKvOp: Scalars['Boolean']
  requestedAt: Scalars['DateTime']
  requester: Account
  reviewRecords: Array<OperationReviewRecord>
  state: OperationState
  viewerReviewingRecord?: Maybe<OperationReviewRecord>
  viewerShouldReview: Scalars['Boolean']
  viewerShouldReviewViaAuthApp?: Maybe<Scalars['Boolean']>
}

export type AdminCreateOperationArgs = {
  __typename?: 'AdminCreateOperationArgs'
  aegisEntity: AegisEntity
  email: Scalars['String']
  firstName: Scalars['String']
  lastName: Scalars['String']
  mobile: Scalars['String']
  position: Scalars['String']
  role: AdminRole
}

export type AdminPage = {
  __typename?: 'AdminPage'
  list: Array<Admin>
  total: Scalars['Int']
}

export type AdminRemoveOperation = Operation & {
  __typename?: 'AdminRemoveOperation'
  adminReviewGroups: Array<AdminReviewGroup>
  args: AdminRemoveOperationArgs
  client?: Maybe<Client>
  clientReviewGroups: Array<ClientReviewGroup>
  currentReviewRole?: Maybe<OperationReviewRole>
  executionRecord?: Maybe<OperationExecutionRecord>
  id: Scalars['ID']
  isKvOp: Scalars['Boolean']
  requestedAt: Scalars['DateTime']
  requester: Account
  reviewRecords: Array<OperationReviewRecord>
  state: OperationState
  viewerReviewingRecord?: Maybe<OperationReviewRecord>
  viewerShouldReview: Scalars['Boolean']
  viewerShouldReviewViaAuthApp?: Maybe<Scalars['Boolean']>
}

export type AdminRemoveOperationArgs = {
  __typename?: 'AdminRemoveOperationArgs'
  admin: Admin
  reason: Scalars['String']
}

export type AdminReviewGroup = {
  __typename?: 'AdminReviewGroup'
  approved?: Maybe<Scalars['Boolean']>
  required: Scalars['Int']
  resolvedAt?: Maybe<Scalars['DateTime']>
  reviewRecords: Array<AdminReviewRecord>
  role: OperationAdminReviewRole
}

export type AdminReviewRecord = OperationReviewRecord & {
  __typename?: 'AdminReviewRecord'
  comment?: Maybe<Scalars['String']>
  createdAt: Scalars['DateTime']
  id: Scalars['ID']
  operation: Operation
  reviewedAt?: Maybe<Scalars['DateTime']>
  reviewer: Admin
  role: OperationReviewRole
  state: OperationReviewRecordState
}

export enum AdminRole {
  AdminAccountManager = 'ADMIN_ACCOUNT_MANAGER',
  AdminBd = 'ADMIN_BD',
  AdminBoss = 'ADMIN_BOSS',
  AdminCompliance = 'ADMIN_COMPLIANCE',
  AdminFinance = 'ADMIN_FINANCE',
  AdminManager = 'ADMIN_MANAGER',
  AdminOfficer = 'ADMIN_OFFICER',
  AdminSuperior = 'ADMIN_SUPERIOR',
}

export enum AegisEntity {
  Bvi = 'BVI',
  Hk = 'HK',
  Sd = 'SD',
  Tw = 'TW',
}

export type AegisWallet = {
  __typename?: 'AegisWallet'
  address: Scalars['String']
  aegisEntity: AegisEntity
  assets: Array<AegisWalletAsset>
  createdAt: Scalars['DateTime']
  id: Scalars['ID']
  name: Scalars['String']
  networkInfo: NetworkInfo
}

export type AegisWalletAsset = {
  __typename?: 'AegisWalletAsset'
  amount: Scalars['String']
  assetType: AssetType
}

export type AegisWalletPage = {
  __typename?: 'AegisWalletPage'
  list: Array<AegisWallet>
  total: Scalars['Int']
}

export enum ApproverGroupTriggerCondition {
  EveryTransaction = 'EVERY_TRANSACTION',
  Full = 'FULL',
  Half = 'HALF',
  Quarter = 'QUARTER',
  ThreeQuarters = 'THREE_QUARTERS',
}

export type AssetAmount = {
  __typename?: 'AssetAmount'
  assetType: AssetType
  totalAmount: Scalars['String']
}

export type AssetType = CoinAssetType | TokenAssetType

export type AuthAppRebindOperation = Operation & {
  __typename?: 'AuthAppRebindOperation'
  adminReviewGroups: Array<AdminReviewGroup>
  args: AuthAppRebindOperationArgs
  client?: Maybe<Client>
  clientReviewGroups: Array<ClientReviewGroup>
  currentReviewRole?: Maybe<OperationReviewRole>
  executionRecord?: Maybe<OperationExecutionRecord>
  id: Scalars['ID']
  isKvOp: Scalars['Boolean']
  requestedAt: Scalars['DateTime']
  requester: Account
  reviewRecords: Array<OperationReviewRecord>
  state: OperationState
  viewerReviewingRecord?: Maybe<OperationReviewRecord>
  viewerShouldReview: Scalars['Boolean']
  viewerShouldReviewViaAuthApp?: Maybe<Scalars['Boolean']>
}

export type AuthAppRebindOperationArgs = {
  __typename?: 'AuthAppRebindOperationArgs'
  filesDriveFolder: Scalars['String']
}

export type AuthAppResetPinOperation = Operation & {
  __typename?: 'AuthAppResetPinOperation'
  adminReviewGroups: Array<AdminReviewGroup>
  args: AuthAppResetPinOperationArgs
  client?: Maybe<Client>
  clientReviewGroups: Array<ClientReviewGroup>
  currentReviewRole?: Maybe<OperationReviewRole>
  executionRecord?: Maybe<OperationExecutionRecord>
  id: Scalars['ID']
  isKvOp: Scalars['Boolean']
  requestedAt: Scalars['DateTime']
  requester: Account
  reviewRecords: Array<OperationReviewRecord>
  state: OperationState
  viewerReviewingRecord?: Maybe<OperationReviewRecord>
  viewerShouldReview: Scalars['Boolean']
  viewerShouldReviewViaAuthApp?: Maybe<Scalars['Boolean']>
}

export type AuthAppResetPinOperationArgs = {
  __typename?: 'AuthAppResetPinOperationArgs'
  authType: AuthType
  filesDriveFolder: Scalars['String']
}

export enum AuthType {
  Pin = 'PIN',
  Yubikey = 'YUBIKEY',
}

export type Bank = {
  __typename?: 'Bank'
  balance: Scalars['String']
  client: Client
  createdAt: Scalars['DateTime']
  currency: FiatCurrency
  custodyBank: CustodyBank
  id: Scalars['ID']
  operationLogs: OperationLogs
  policy: Policy
  usage: Scalars['String']
  whitelistedBanks: Array<WhitelistedBank>
}

export type BankCreateInput = {
  currency: FiatCurrency
  custodyBankId: Scalars['ID']
  policyId: Scalars['ID']
  usage: Scalars['String']
  whitelistedBankIds: Array<Scalars['ID']>
}

export type BankCreateOperation = Operation & {
  __typename?: 'BankCreateOperation'
  adminReviewGroups: Array<AdminReviewGroup>
  client?: Maybe<Client>
  clientReviewGroups: Array<ClientReviewGroup>
  currency: FiatCurrency
  currentReviewRole?: Maybe<OperationReviewRole>
  custodyBank: CustodyBank
  executionRecord?: Maybe<OperationExecutionRecord>
  id: Scalars['ID']
  isKvOp: Scalars['Boolean']
  policy: Policy
  requestedAt: Scalars['DateTime']
  requester: Account
  reviewRecords: Array<OperationReviewRecord>
  state: OperationState
  usage: Scalars['String']
  viewerReviewingRecord?: Maybe<OperationReviewRecord>
  viewerShouldReview: Scalars['Boolean']
  viewerShouldReviewViaAuthApp?: Maybe<Scalars['Boolean']>
  whitelistedBanks: Array<WhitelistedBank>
}

export type BankDepositOperation = Operation & {
  __typename?: 'BankDepositOperation'
  adminReviewGroups: Array<AdminReviewGroup>
  bank: Bank
  client?: Maybe<Client>
  clientReviewGroups: Array<ClientReviewGroup>
  currentReviewRole?: Maybe<OperationReviewRole>
  executionRecord?: Maybe<OperationExecutionRecord>
  filesDriveFolder: Scalars['String']
  id: Scalars['ID']
  isKvOp: Scalars['Boolean']
  receivedAmount?: Maybe<Scalars['String']>
  reportedAmount: Scalars['String']
  requestedAt: Scalars['DateTime']
  requester: Account
  reviewRecords: Array<OperationReviewRecord>
  state: OperationState
  viewerReviewingRecord?: Maybe<OperationReviewRecord>
  viewerShouldReview: Scalars['Boolean']
  viewerShouldReviewViaAuthApp?: Maybe<Scalars['Boolean']>
  whitelistedBank: WhitelistedBank
}

export type BankInfo = {
  __typename?: 'BankInfo'
  address: Scalars['String']
  alias?: Maybe<Scalars['String']>
  city: Scalars['String']
  country: Scalars['String']
  icon?: Maybe<Scalars['String']>
  name: Scalars['String']
  state: Scalars['String']
  zip: Scalars['String']
}

export type BankPage = {
  __typename?: 'BankPage'
  list: Array<Bank>
  total: Scalars['Int']
}

export enum BankRoutingType {
  Bic = 'BIC',
  Iban = 'IBAN',
  Swift = 'SWIFT',
}

export type BankUpdateCommand = Operation & {
  __typename?: 'BankUpdateCommand'
  adminReviewGroups: Array<AdminReviewGroup>
  bank: Bank
  client?: Maybe<Client>
  clientReviewGroups: Array<ClientReviewGroup>
  currentReviewRole?: Maybe<OperationReviewRole>
  executionRecord?: Maybe<OperationExecutionRecord>
  id: Scalars['ID']
  isKvOp: Scalars['Boolean']
  newDatas: BankUpdateCommandArgs
  oldDatas: BankUpdateCommandArgs
  requestedAt: Scalars['DateTime']
  requester: Account
  reviewRecords: Array<OperationReviewRecord>
  state: OperationState
  viewerReviewingRecord?: Maybe<OperationReviewRecord>
  viewerShouldReview: Scalars['Boolean']
  viewerShouldReviewViaAuthApp?: Maybe<Scalars['Boolean']>
}

export type BankUpdateCommandArgs = {
  __typename?: 'BankUpdateCommandArgs'
  policy: Policy
  whitelistedBanks: Array<WhitelistedBank>
}

export type BankWithdrawalOperation = Operation & {
  __typename?: 'BankWithdrawalOperation'
  adminReviewGroups: Array<AdminReviewGroup>
  amount: Scalars['String']
  bank: Bank
  client?: Maybe<Client>
  clientReviewGroups: Array<ClientReviewGroup>
  currentReviewRole?: Maybe<OperationReviewRole>
  executionRecord?: Maybe<OperationExecutionRecord>
  id: Scalars['ID']
  isKvOp: Scalars['Boolean']
  requestedAt: Scalars['DateTime']
  requester: Account
  reviewRecords: Array<OperationReviewRecord>
  state: OperationState
  usage: Scalars['String']
  viewerReviewingRecord?: Maybe<OperationReviewRecord>
  viewerShouldReview: Scalars['Boolean']
  viewerShouldReviewViaAuthApp?: Maybe<Scalars['Boolean']>
  whitelistedBank: WhitelistedBank
  wiringFee?: Maybe<Scalars['String']>
  wiringType?: Maybe<WiringType>
}

export type ChangePasswordResponse =
  | Admin
  | CompanyUser
  | IndividualUser
  | InvalidCurrentPasswordError
  | PasswordTooWeakError

export type Client = {
  auc: Scalars['String']
  custodyEntity: CustodyEntity
  dateAmount: Scalars['String']
  displayId: Scalars['String']
  id: Scalars['ID']
  onboarding: Onboarding
  otcProviders: Array<ClientOtcProviderConfig>
  users: Array<User>
  wallets: Array<Wallet>
  whitelistedWallets: Array<WhitelistedWallet>
}

export type ClientUsersArgs = {
  roles?: Array<UserRole>
}

export type ClientAsset = {
  __typename?: 'ClientAsset'
  cryptoAssets: Array<AssetAmount>
  usdAmount: Scalars['String']
}

export type ClientAssetsHistory = {
  __typename?: 'ClientAssetsHistory'
  auc: Scalars['String']
  createdAt: Scalars['DateOnly']
}

export type ClientCustodyBankConfig = {
  __typename?: 'ClientCustodyBankConfig'
  client: Client
  createdAt: Scalars['DateTime']
  createdBy: Admin
  custodyBank: CustodyBank
  id: Scalars['ID']
}

export type ClientCustodyBankConfigPage = {
  __typename?: 'ClientCustodyBankConfigPage'
  list: Array<ClientCustodyBankConfig>
  total: Scalars['Int']
}

export type ClientEthNodeConfig = {
  __typename?: 'ClientEthNodeConfig'
  client: Client
  creator?: Maybe<Admin>
  ethNode: EthNode
  id: Scalars['ID']
  removeRecord?: Maybe<RemoveClientEthNodeConfig>
}

export type ClientEthNodeConfigPage = {
  __typename?: 'ClientEthNodeConfigPage'
  list: Array<ClientEthNodeConfig>
  total: Scalars['Int']
}

export type ClientOtcProviderConfig = {
  __typename?: 'ClientOtcProviderConfig'
  client: Client
  createdAt: Scalars['DateTime']
  createdBy: Admin
  id: Scalars['ID']
  otcProvider: OtcProvider
}

export type ClientOtcProviderConfigPage = {
  __typename?: 'ClientOtcProviderConfigPage'
  list: Array<ClientOtcProviderConfig>
  total: Scalars['Int']
}

export type ClientPage = {
  __typename?: 'ClientPage'
  list: Array<Client>
  total: Scalars['Int']
}

export type ClientReviewGroup = {
  __typename?: 'ClientReviewGroup'
  approved?: Maybe<Scalars['Boolean']>
  required: Scalars['Int']
  resolvedAt?: Maybe<Scalars['DateTime']>
  reviewRecords: Array<ClientReviewRecord>
  reviewers: Array<User>
}

export type ClientReviewRecord = OperationReviewRecord & {
  __typename?: 'ClientReviewRecord'
  comment?: Maybe<Scalars['String']>
  createdAt: Scalars['DateTime']
  id: Scalars['ID']
  operation: Operation
  reviewedAt?: Maybe<Scalars['DateTime']>
  reviewer: User
  role: OperationReviewRole
  state: OperationReviewRecordState
}

export type ClientStakingNodeConfig = {
  __typename?: 'ClientStakingNodeConfig'
  client: Client
  creator?: Maybe<Admin>
  id: Scalars['ID']
  node: StakingNode
  removeRecord?: Maybe<RemoveClientStakingNodeConfig>
}

export type ClientStakingNodeConfigPage = {
  __typename?: 'ClientStakingNodeConfigPage'
  list: Array<ClientStakingNodeConfig>
  total: Scalars['Int']
}

export enum ClientType {
  Company = 'COMPANY',
  Individual = 'INDIVIDUAL',
}

export enum Coin {
  Eth = 'ETH',
}

export type CoinAssetType = {
  __typename?: 'CoinAssetType'
  coin: Coin
  icon: Scalars['String']
  id: Scalars['ID']
  name: Scalars['String']
  networkInfo: NetworkInfo
  symbol: Scalars['String']
}

export type CommandBankUpdateInput = {
  policyId: Scalars['UUID']
  whitelistedBankIds: Array<Scalars['UUID']>
}

export type CommandBankUpdateResponse = BankUpdateCommand | ObjectHasBeenLockedError

export type CommandBankWithdrawalInput = {
  amount: Scalars['String']
  usage: Scalars['String']
  whitelistedBankId: Scalars['UUID']
}

export type CommandCryptoToFiatInput = {
  amount: Scalars['String']
  assetTypeId: Scalars['String']
  bankId: Scalars['UUID']
  bps: Scalars['String']
  estimatedGasFee: Scalars['String']
  maxEstimatedGasFee: Scalars['String']
  providerId: Scalars['UUID']
  unitPrice: Scalars['String']
  usage: Scalars['String']
}

export type CommandEthStakeInput = {
  depositData: DepositDataInput
  depositDataRoot: Scalars['String']
  estimatedGasFee: Scalars['String']
  ethNodeId: Scalars['ID']
  maxEstimatedGasFee: Scalars['String']
}

export type CommandFiatToCryptoInput = {
  amountInUsd: Scalars['String']
  assetTypeId: Scalars['String']
  bps: Scalars['String']
  providerId: Scalars['UUID']
  unitPrice: Scalars['String']
  usage: Scalars['String']
  walletId: Scalars['UUID']
}

export type CommandLiquidStakeLidoInput = {
  amount: Scalars['String']
  description?: InputMaybe<Scalars['String']>
  estimatedGasFee: Scalars['String']
  maxEstimatedGasFee: Scalars['String']
}

export type CommandPolicyCreateInput = {
  approverGroups: Array<WalletApproverGroupInput>
  description: Scalars['String']
  name: Scalars['String']
  requesters: Array<WalletRequesterInput>
  viewerIds: Array<Scalars['String']>
}

export type CommandPolicyUpdateInput = {
  approverGroups: Array<WalletApproverGroupInput>
  requesters: Array<WalletRequesterInput>
  viewerIds: Array<Scalars['ID']>
}

export type CommandPolicyUpdateResponse = ObjectHasBeenLockedError | PolicyUpdateCommand

export type CommandRemoveUserInput = {
  reason: Scalars['String']
  userId: Scalars['UUID']
}

export type CommandUserCreateInput = {
  authorizationDocument?: InputMaybe<Scalars['String']>
  email: Scalars['String']
  firstName: Scalars['String']
  lastName: Scalars['String']
  mobile: Scalars['String']
  notes?: InputMaybe<Scalars['String']>
  role: UserRole
}

export type CommandUserCreateResponse = AccountAlreadyExistsError | UserCreateCommand

export type CommandUserRemoveResponse = UserAssociatePolicyError | UserRemoveCommand

export type CommandWalletCreateInput = {
  name: Scalars['String']
  network: Network
  policyId: Scalars['String']
  usage: Scalars['String']
  whitelistedWalletIds: Array<Scalars['String']>
}

export type CommandWalletUpdateInput = {
  policyId: Scalars['UUID']
  whitelistedWalletIds: Array<Scalars['UUID']>
}

export type CommandWalletUpdateResponse = ObjectHasBeenLockedError | WalletUpdateCommand

export type CommandWalletWithdrawalInput = {
  amount: Scalars['String']
  assetTypeId: Scalars['ID']
  description: Scalars['String']
  estimatedGasFee: Scalars['String']
  maxEstimatedGasFee: Scalars['String']
  whitelistedWalletId: Scalars['ID']
}

export type CommandWhitelistedBankCreateInput = {
  account: Scalars['String']
  accountName: Scalars['String']
  bankAddress: Scalars['String']
  bankCity: Scalars['String']
  bankCountry: Scalars['String']
  bankName: Scalars['String']
  bankState: Scalars['String']
  bankZip: Scalars['String']
  currency: FiatCurrency
  domesticCode?: InputMaybe<Scalars['String']>
  employmentContract?: InputMaybe<Scalars['String']>
  notes?: InputMaybe<Scalars['String']>
  ownerType: WhitelistedBankOwnerType
  proofOfRelationship?: InputMaybe<Scalars['String']>
  routingCode: Scalars['String']
  routingType: BankRoutingType
}

export type CommandWhitelistedWalletCreateInput = {
  address: Scalars['String']
  employmentContract?: InputMaybe<Scalars['String']>
  name: Scalars['String']
  network: Network
  owner: WhitelistedWalletOwnerType
  proofOfRelationship?: InputMaybe<Scalars['String']>
}

export type Company = Client & {
  __typename?: 'Company'
  auc: Scalars['String']
  bankAccountName?: Maybe<Scalars['String']>
  bankAccountNo?: Maybe<Scalars['String']>
  bankName?: Maybe<Scalars['String']>
  businessAddress?: Maybe<Scalars['String']>
  businessName?: Maybe<Scalars['String']>
  businessNature?: Maybe<Scalars['String']>
  custodyEntity: CustodyEntity
  dateAmount: Scalars['String']
  displayId: Scalars['String']
  email: Scalars['String']
  iban?: Maybe<Scalars['String']>
  id: Scalars['ID']
  incorporationNo: Scalars['String']
  incorporationPlace?: Maybe<Scalars['String']>
  name: Scalars['String']
  officeAddress?: Maybe<Scalars['String']>
  onboarding: Onboarding
  otcProviders: Array<ClientOtcProviderConfig>
  swiftCode?: Maybe<Scalars['String']>
  telephone?: Maybe<Scalars['String']>
  users: Array<CompanyUser>
  wallets: Array<Wallet>
  whitelistedWallets: Array<WhitelistedWallet>
}

export type CompanyUsersArgs = {
  roles?: Array<UserRole>
}

export type CompanyUser = Account &
  User & {
    __typename?: 'CompanyUser'
    actions: Array<Action>
    client: Company
    createdAt: Scalars['DateTime']
    creator?: Maybe<Admin>
    custodyEntity: CustodyEntity
    email: Scalars['String']
    firstName: Scalars['String']
    hasSetPassword: Scalars['Boolean']
    hasSetTfa: Scalars['Boolean']
    id: Scalars['ID']
    lastName: Scalars['String']
    mobile: Scalars['String']
    onboarding?: Maybe<Onboarding>
    operationLogs: OperationLogs
    position?: Maybe<Scalars['String']>
    removeRecord?: Maybe<RemoveAccountRecord>
    role: Role
    seqNo: Scalars['Int']
  }

export type ConfirmWalletDepositInput = {
  notes?: InputMaybe<Scalars['String']>
  txHash: Scalars['String']
}

export type ConfirmWalletDepositResponse =
  | IncorrectTxError
  | TxNotFounError
  | WalletDepositConfirmation

export type CountryAttr = {
  __typename?: 'CountryAttr'
  countryCode: Scalars['String']
  countryName: Scalars['String']
}

export type CountryField = {
  __typename?: 'CountryField'
  hint?: Maybe<Scalars['String']>
  label: Scalars['String']
  type: FieldType
  value?: Maybe<CountryAttr>
}

export type CreateAegisWalletInput = {
  address: Scalars['String']
  aegisEntity: AegisEntity
  assetTypeIds: Array<Scalars['ID']>
  name: Scalars['String']
  network: Network
}

export type CreateClientEthNodeConfigInput = {
  clientId: Scalars['UUID']
  nodeIds: Array<Scalars['String']>
}

export type CreateClientStakingNodeConfigInput = {
  clientId: Scalars['UUID']
  nodeIds: Array<Scalars['String']>
}

export type CreateEthNodeInput = {
  name: Scalars['String']
  notes?: InputMaybe<Scalars['String']>
  type: EthHostType
}

export type CreateOnboardingInput = {
  clientType: ClientType
  custodyEntity: CustodyEntity
  email: Scalars['String']
  firstName: Scalars['String']
  lastName: Scalars['String']
}

export type CreateStakingHostInput = {
  name: Scalars['String']
  note?: InputMaybe<Scalars['String']>
  type: StakingHostType
}

export type CreateStakingNodeInput = {
  address: Scalars['String']
  hostId: Scalars['UUID']
  name: Scalars['String']
  network: Network
  note?: InputMaybe<Scalars['String']>
}

export type CreateStatementInput = {
  endsAt: Scalars['DateOnly']
  startsAt: Scalars['DateOnly']
}

export type CreateTfaSecretResponse = {
  __typename?: 'CreateTfaSecretResponse'
  qrCode: Scalars['String']
  secret: Scalars['String']
}

export type CryptoToFiat = {
  __typename?: 'CryptoToFiat'
  amount: Scalars['String']
  amountInUsd: Scalars['String']
  assetType: AssetType
  bank: Bank
  id: Scalars['ID']
  price: Scalars['String']
  provider: OtcProvider
  state: CryptoToFiatState
  wallet: Wallet
  walletTransaction?: Maybe<CryptoToFiatTransferToAegisTx>
}

export type CryptoToFiatCommand = Operation & {
  __typename?: 'CryptoToFiatCommand'
  adminReviewGroups: Array<AdminReviewGroup>
  args: CryptoToFiatCommandArgs
  client?: Maybe<Client>
  clientReviewGroups: Array<ClientReviewGroup>
  cryptoToFiat?: Maybe<CryptoToFiat>
  currentReviewRole?: Maybe<OperationReviewRole>
  executionRecord?: Maybe<OperationExecutionRecord>
  id: Scalars['ID']
  isKvOp: Scalars['Boolean']
  requestedAt: Scalars['DateTime']
  requester: Account
  reviewRecords: Array<OperationReviewRecord>
  state: OperationState
  viewerReviewingRecord?: Maybe<OperationReviewRecord>
  viewerShouldReview: Scalars['Boolean']
  viewerShouldReviewViaAuthApp?: Maybe<Scalars['Boolean']>
}

export type CryptoToFiatCommandArgs = {
  __typename?: 'CryptoToFiatCommandArgs'
  amount: Scalars['String']
  amountInUsd: Scalars['String']
  assetType: AssetType
  bank: Bank
  bps: Scalars['String']
  estimatedGasFee?: Maybe<Scalars['String']>
  maxEstimatedGasFee?: Maybe<Scalars['String']>
  provider: OtcProvider
  unitPrice: Scalars['String']
  usage: Scalars['String']
  wallet: Wallet
}

export enum CryptoToFiatState {
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  SettlePending = 'SETTLE_PENDING',
  TransferToAegisWallet = 'TRANSFER_TO_AEGIS_WALLET',
  TransferToProviderWallet = 'TRANSFER_TO_PROVIDER_WALLET',
}

export type CryptoToFiatTransferToAegisTx = WalletTransaction & {
  __typename?: 'CryptoToFiatTransferToAegisTx'
  amount: Scalars['String']
  amountInUsd: Scalars['String']
  assetType: AssetType
  createdAt: Scalars['DateTime']
  id: Scalars['ID']
  operationLogs: OperationLogs
  txHash: Scalars['String']
  wallet: Wallet
}

export type CustodyBank = {
  __typename?: 'CustodyBank'
  account: Scalars['String']
  accountName: Scalars['String']
  bankInfo: BankInfo
  currencies: Array<FiatCurrency>
  custodyEntity: CustodyEntity
  domesticCode?: Maybe<Scalars['String']>
  id: Scalars['ID']
  notes?: Maybe<Scalars['String']>
  routingCode: Scalars['String']
  routingType: BankRoutingType
}

export type CustodyBankPage = {
  __typename?: 'CustodyBankPage'
  list: Array<CustodyBank>
  total: Scalars['Int']
}

export enum CustodyEntity {
  Hk = 'HK',
  Sd = 'SD',
  Sg = 'SG',
}

export enum DailyLimitBreakpoint {
  Full = 'FULL',
  Half = 'HALF',
  Quarter = 'QUARTER',
  ThreeQuarters = 'THREE_QUARTERS',
}

export type DashboardCountsDto = {
  __typename?: 'DashboardCountsDto'
  activeUsers: Scalars['Int']
  banks: Scalars['Int']
  cryptoToFiats: Scalars['Int']
  delegations: Scalars['Int']
  deposits: Scalars['Int']
  fiatToCryptos: Scalars['Int']
  liquidStakings: Scalars['Int']
  policies: Scalars['Int']
  users: Scalars['Int']
  wallets: Scalars['Int']
  whitelistedBanks: Scalars['Int']
  whitelistedWallets: Scalars['Int']
  withdrawals: Scalars['Int']
}

export type DepositDataInput = {
  /** 32 */
  amount: Scalars['String']
  signature: Scalars['String']
  validatorPubkey: Scalars['String']
  withdrawalCredentials: Scalars['String']
}

export enum Ecosystem {
  Ethereum = 'ETHEREUM',
}

export type Error = {
  id: Scalars['ID']
  message: Scalars['String']
}

export enum EthHostType {
  ClientHosted = 'CLIENT_HOSTED',
  NodeProvider = 'NODE_PROVIDER',
}

export type EthNode = {
  __typename?: 'EthNode'
  clients: Array<Client>
  creator?: Maybe<Admin>
  id: Scalars['ID']
  name: Scalars['String']
  notes?: Maybe<Scalars['String']>
  removeRecord?: Maybe<RemoveEthNodeRecord>
  type: EthHostType
}

export type EthNodePage = {
  __typename?: 'EthNodePage'
  list: Array<EthNode>
  total: Scalars['Int']
}

export type EthStaking = WalletTransaction & {
  __typename?: 'EthStaking'
  amount: Scalars['String']
  amountInUsd: Scalars['String']
  assetType: AssetType
  createdAt: Scalars['DateTime']
  ethNode: EthNode
  id: Scalars['ID']
  operation: EthStakingCommand
  operationLogs: OperationLogs
  txHash: Scalars['String']
  validator: Scalars['String']
  wallet: Wallet
}

export type EthStakingCommand = Operation &
  SimpleWithdrawalOperation & {
    __typename?: 'EthStakingCommand'
    adminReviewGroups: Array<AdminReviewGroup>
    amount: Scalars['String']
    amountInUsd: Scalars['String']
    assetType: AssetType
    client?: Maybe<Client>
    clientReviewGroups: Array<ClientReviewGroup>
    currentReviewRole?: Maybe<OperationReviewRole>
    depositData: EthStakingDepositData
    depositDataRoot: Scalars['String']
    estimatedGasFee?: Maybe<Scalars['String']>
    ethNode: EthNode
    executionRecord?: Maybe<OperationExecutionRecord>
    id: Scalars['ID']
    isKvOp: Scalars['Boolean']
    maxEstimatedGasFee?: Maybe<Scalars['String']>
    requestedAt: Scalars['DateTime']
    requester: Account
    reviewRecords: Array<OperationReviewRecord>
    state: OperationState
    viewerReviewingRecord?: Maybe<OperationReviewRecord>
    viewerShouldReview: Scalars['Boolean']
    viewerShouldReviewViaAuthApp?: Maybe<Scalars['Boolean']>
    wallet: Wallet
    walletTransaction?: Maybe<EthStaking>
  }

export type EthStakingDepositData = {
  __typename?: 'EthStakingDepositData'
  amount: Scalars['String']
  signature: Scalars['String']
  validatorPubkey: Scalars['String']
  withdrawalCredentials: Scalars['String']
}

export type EthStakingFeeEstimateInput = {
  depositData: DepositDataInput
  depositDataRoot: Scalars['String']
}

export type EthStakingPage = {
  __typename?: 'EthStakingPage'
  list: Array<EthStaking>
  total: Scalars['Int']
}

export type ExecuteCryptoToFiatInput = {
  price: Scalars['String']
  rfqId: Scalars['String']
}

export type FeeEstimate = {
  __typename?: 'FeeEstimate'
  failureReason?: Maybe<Scalars['String']>
  fee?: Maybe<Scalars['String']>
  maxFee?: Maybe<Scalars['String']>
}

export enum FiatCurrency {
  Hkd = 'HKD',
  Usd = 'USD',
}

export type FiatToCrypto = {
  __typename?: 'FiatToCrypto'
  amount: Scalars['String']
  amountInUsd: Scalars['String']
  assetType: AssetType
  bank: Bank
  id: Scalars['ID']
  price: Scalars['String']
  provider: OtcProvider
  state: FiatToCryptoState
  txHash?: Maybe<Scalars['String']>
  wallet: Wallet
}

export type FiatToCryptoCommand = Operation & {
  __typename?: 'FiatToCryptoCommand'
  adminReviewGroups: Array<AdminReviewGroup>
  args: FiatToCryptoCommandArgs
  client?: Maybe<Client>
  clientReviewGroups: Array<ClientReviewGroup>
  currentReviewRole?: Maybe<OperationReviewRole>
  executionRecord?: Maybe<OperationExecutionRecord>
  fiatToCrypto?: Maybe<FiatToCrypto>
  id: Scalars['ID']
  isKvOp: Scalars['Boolean']
  requestedAt: Scalars['DateTime']
  requester: Account
  reviewRecords: Array<OperationReviewRecord>
  state: OperationState
  viewerReviewingRecord?: Maybe<OperationReviewRecord>
  viewerShouldReview: Scalars['Boolean']
  viewerShouldReviewViaAuthApp?: Maybe<Scalars['Boolean']>
}

export type FiatToCryptoCommandArgs = {
  __typename?: 'FiatToCryptoCommandArgs'
  amount: Scalars['String']
  amountInUsd: Scalars['String']
  assetType: AssetType
  bank: Bank
  bps: Scalars['String']
  provider: OtcProvider
  unitPrice: Scalars['String']
  usage: Scalars['String']
  wallet: Wallet
}

export enum FiatToCryptoState {
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  TransferPending = 'TRANSFER_PENDING',
  TransferToClientWallet = 'TRANSFER_TO_CLIENT_WALLET',
}

export type FieldResponse =
  | AddressField
  | CountryField
  | FileField
  | GroupField
  | MobileField
  | TextField

export enum FieldType {
  Address = 'ADDRESS',
  Country = 'COUNTRY',
  Date = 'DATE',
  File = 'FILE',
  Group = 'GROUP',
  Mobile = 'MOBILE',
  SingleSelect = 'SINGLE_SELECT',
  SingleSelectTextfile = 'SINGLE_SELECT_TEXTFILE',
  Text = 'TEXT',
  Textarea = 'TEXTAREA',
  Textfile = 'TEXTFILE',
}

export type FileField = {
  __typename?: 'FileField'
  hint?: Maybe<Scalars['String']>
  label: Scalars['String']
  type: FieldType
  value?: Maybe<Scalars['String']>
}

export type GroupField = {
  __typename?: 'GroupField'
  hint?: Maybe<Scalars['String']>
  label: Scalars['String']
  type: FieldType
  value?: Maybe<Array<FieldResponse>>
}

export type IncorrectTxError = Error & {
  __typename?: 'IncorrectTxError'
  id: Scalars['ID']
  message: Scalars['String']
}

export type Individual = Client & {
  __typename?: 'Individual'
  auc: Scalars['String']
  bankAccountName?: Maybe<Scalars['String']>
  bankAccountNo?: Maybe<Scalars['String']>
  bankName?: Maybe<Scalars['String']>
  birthday: Scalars['DateOnly']
  city?: Maybe<Scalars['String']>
  countryOfCitizenship: Scalars['String']
  countryOfResidence?: Maybe<Scalars['String']>
  custodyEntity: CustodyEntity
  dateAmount: Scalars['String']
  displayId: Scalars['String']
  email?: Maybe<Scalars['String']>
  firstName?: Maybe<Scalars['String']>
  formerName?: Maybe<Scalars['String']>
  fullName?: Maybe<Scalars['String']>
  gender?: Maybe<Scalars['String']>
  iban?: Maybe<Scalars['String']>
  id: Scalars['ID']
  lastName?: Maybe<Scalars['String']>
  middleName?: Maybe<Scalars['String']>
  mobile?: Maybe<Scalars['String']>
  onboarding: Onboarding
  otcProviders: Array<ClientOtcProviderConfig>
  residentialAddress?: Maybe<Scalars['String']>
  residentialLandline?: Maybe<Scalars['String']>
  state?: Maybe<Scalars['String']>
  swiftCode?: Maybe<Scalars['String']>
  users: Array<IndividualUser>
  wallets: Array<Wallet>
  whitelistedWallets: Array<WhitelistedWallet>
  zipCode?: Maybe<Scalars['String']>
}

export type IndividualUsersArgs = {
  roles?: Array<UserRole>
}

export type IndividualUser = Account &
  User & {
    __typename?: 'IndividualUser'
    actions: Array<Action>
    client: Individual
    createdAt: Scalars['DateTime']
    creator?: Maybe<Admin>
    custodyEntity: CustodyEntity
    email: Scalars['String']
    firstName: Scalars['String']
    hasSetPassword: Scalars['Boolean']
    hasSetTfa: Scalars['Boolean']
    id: Scalars['ID']
    lastName: Scalars['String']
    mobile: Scalars['String']
    onboarding?: Maybe<Onboarding>
    operationLogs: OperationLogs
    position?: Maybe<Scalars['String']>
    removeRecord?: Maybe<RemoveAccountRecord>
    role: Role
    seqNo: Scalars['Int']
  }

export type InvalidCurrentPasswordError = Error & {
  __typename?: 'InvalidCurrentPasswordError'
  id: Scalars['ID']
  message: Scalars['String']
}

export type InvalidSignInInputError = Error & {
  __typename?: 'InvalidSignInInputError'
  id: Scalars['ID']
  message: Scalars['String']
}

export type InvalidTfaCodeError = Error & {
  __typename?: 'InvalidTfaCodeError'
  id: Scalars['ID']
  message: Scalars['String']
}

export type LiquidStakeLidoCommand = Operation &
  SimpleWithdrawalOperation & {
    __typename?: 'LiquidStakeLidoCommand'
    adminReviewGroups: Array<AdminReviewGroup>
    amount: Scalars['String']
    amountInUsd: Scalars['String']
    assetType: AssetType
    client?: Maybe<Client>
    clientReviewGroups: Array<ClientReviewGroup>
    currentReviewRole?: Maybe<OperationReviewRole>
    description?: Maybe<Scalars['String']>
    estimatedGasFee?: Maybe<Scalars['String']>
    executionRecord?: Maybe<OperationExecutionRecord>
    id: Scalars['ID']
    isKvOp: Scalars['Boolean']
    maxEstimatedGasFee?: Maybe<Scalars['String']>
    protocolInfo: LiquidStakingProtocolInfo
    requestedAt: Scalars['DateTime']
    requester: Account
    reviewRecords: Array<OperationReviewRecord>
    state: OperationState
    viewerReviewingRecord?: Maybe<OperationReviewRecord>
    viewerShouldReview: Scalars['Boolean']
    viewerShouldReviewViaAuthApp?: Maybe<Scalars['Boolean']>
    wallet: Wallet
    walletTransaction?: Maybe<LiquidStakingLido>
  }

export type LiquidStaking = {
  amount: Scalars['String']
  amountInUsd: Scalars['String']
  assetType: AssetType
  createdAt: Scalars['DateTime']
  description?: Maybe<Scalars['String']>
  id: Scalars['ID']
  operationLogs: OperationLogs
  protocolInfo: LiquidStakingProtocolInfo
  txHash: Scalars['String']
  wallet: Wallet
}

export type LiquidStakingLido = LiquidStaking &
  WalletTransaction & {
    __typename?: 'LiquidStakingLido'
    amount: Scalars['String']
    amountInUsd: Scalars['String']
    assetType: AssetType
    createdAt: Scalars['DateTime']
    description?: Maybe<Scalars['String']>
    id: Scalars['ID']
    operation: LiquidStakeLidoCommand
    operationLogs: OperationLogs
    protocolInfo: LiquidStakingProtocolInfo
    txHash: Scalars['String']
    wallet: Wallet
  }

export type LiquidStakingLidoPage = {
  __typename?: 'LiquidStakingLidoPage'
  list: Array<LiquidStakingLido>
  total: Scalars['Int']
}

export enum LiquidStakingProtocol {
  Lido = 'LIDO',
}

export type LiquidStakingProtocolInfo = {
  __typename?: 'LiquidStakingProtocolInfo'
  icon: Scalars['String']
  id: LiquidStakingProtocol
  name: Scalars['String']
}

export type MeResponse = {
  __typename?: 'MeResponse'
  account?: Maybe<Account>
  hasVerifiedTfa?: Maybe<Scalars['Boolean']>
}

export type MobileAttr = {
  __typename?: 'MobileAttr'
  code: Scalars['String']
  number: Scalars['String']
}

export type MobileField = {
  __typename?: 'MobileField'
  hint?: Maybe<Scalars['String']>
  label: Scalars['String']
  type: FieldType
  value?: Maybe<MobileAttr>
}

export type Mutation = {
  __typename?: 'Mutation'
  changePassword: ChangePasswordResponse
  commandBankCreate: BankCreateOperation
  commandBankUpdate: CommandBankUpdateResponse
  commandBankWithdrawal: BankWithdrawalOperation
  commandCryptoToFiat: CryptoToFiatCommand
  commandEthStake: EthStakingCommand
  commandFiatToCrypto: FiatToCryptoCommand
  commandLiquidStakeLido: LiquidStakeLidoCommand
  commandPolicyCreate: PolicyCreateCommand
  commandPolicyUpdate: CommandPolicyUpdateResponse
  commandUserCreate: CommandUserCreateResponse
  commandUserRemove: CommandUserRemoveResponse
  commandWalletCreate: WalletCreateCommand
  commandWalletUpdate: CommandWalletUpdateResponse
  commandWalletWithdrawal: WalletWithdrawalCommand
  commandWhitelistedBankCreate: WhitelistedBankCreateCommand
  commandWhitelistedWalletCreate: WhitelistedWalletCreateCommand
  confirmWalletDeposit: ConfirmWalletDepositResponse
  createAegisWallet: AegisWallet
  createClientCustodyBankConfig: Client
  createClientEthNodeConfig: Array<ClientEthNodeConfig>
  createClientOtcProviderConfig: Client
  createClientStakingNodeConfig: Array<ClientStakingNodeConfig>
  createEthNode: EthNode
  createOnboarding: Onboarding
  createStakingHost: StakingHost
  createStakingNode: StakingNode
  createTfaSecret: CreateTfaSecretResponse
  executeCryptoToFiat: CryptoToFiatCommand
  executeFiatToCrypto: FiatToCryptoCommand
  kvSyncAppState: Admin
  removeClientCustodyBankConfig: Client
  removeClientEthNodeConfig: ClientEthNodeConfig
  removeClientOtcProviderConfig: Client
  removeClientStakingNodeConfig: ClientStakingNodeConfig
  removeEthNode: EthNode
  removeStakingHost: StakingHost
  removeStakingNode: StakingNode
  removeUser: User
  reportBankDeposit: BankDepositOperation
  reportBankWithdrawal: BankWithdrawalOperation
  requestAdditionalInfo: Onboarding
  requestAdminCreate: RequestAdminCreateResponse
  requestAdminRemove: AdminRemoveOperation
  requestAuthAppRebind: AuthAppRebindOperation
  requestAuthAppResetPin: AuthAppResetPinOperation
  requestWalletDepositConfirmation: WalletDepositConfirmation
  resetPassword: ResetPasswordResponse
  reviewOnboarding: ReviewRecord
  reviewOperation: OperationReviewRecord
  sendResetPasswordEmail: SendResetPasswordEmailResponse
  setOperationFailed: Operation
  setPassword: SetPasswordResponse
  setTfa: SetTfaResponse
  settleCryptoToFiat: CryptoToFiatCommand
  settleFiatToCrypto: FiatToCryptoCommand
  signInAdmin: SignInAdminResponse
  signInUser: SignInUserResponse
  signOut: Success
  signUpCompanyUser: SignUpCompanyUserResponse
  signUpIndividualUser: SignUpIndividualUserResponse
  statementCreate: Scalars['String']
  submitAdditionalInfo: Onboarding
  submitBankDeposit: BankDepositOperation
  submitOnboarding: Onboarding
  updateOnboarding: Onboarding
  verifyTfa: VerifyTfaResponse
}

export type MutationChangePasswordArgs = {
  currentPassword: Scalars['String']
  newPassword: Scalars['String']
}

export type MutationCommandBankCreateArgs = {
  input: BankCreateInput
}

export type MutationCommandBankUpdateArgs = {
  bankId: Scalars['UUID']
  input: CommandBankUpdateInput
}

export type MutationCommandBankWithdrawalArgs = {
  bankId: Scalars['UUID']
  input: CommandBankWithdrawalInput
}

export type MutationCommandCryptoToFiatArgs = {
  input: CommandCryptoToFiatInput
  walletId: Scalars['UUID']
}

export type MutationCommandEthStakeArgs = {
  input: CommandEthStakeInput
  walletId: Scalars['UUID']
}

export type MutationCommandFiatToCryptoArgs = {
  bankId: Scalars['UUID']
  input: CommandFiatToCryptoInput
}

export type MutationCommandLiquidStakeLidoArgs = {
  input: CommandLiquidStakeLidoInput
  walletId: Scalars['UUID']
}

export type MutationCommandPolicyCreateArgs = {
  input: CommandPolicyCreateInput
}

export type MutationCommandPolicyUpdateArgs = {
  input: CommandPolicyUpdateInput
  policyId: Scalars['ID']
}

export type MutationCommandUserCreateArgs = {
  input: CommandUserCreateInput
}

export type MutationCommandUserRemoveArgs = {
  input: CommandRemoveUserInput
}

export type MutationCommandWalletCreateArgs = {
  input: CommandWalletCreateInput
}

export type MutationCommandWalletUpdateArgs = {
  input: CommandWalletUpdateInput
  walletId: Scalars['UUID']
}

export type MutationCommandWalletWithdrawalArgs = {
  input: CommandWalletWithdrawalInput
  walletId: Scalars['UUID']
}

export type MutationCommandWhitelistedBankCreateArgs = {
  input: CommandWhitelistedBankCreateInput
}

export type MutationCommandWhitelistedWalletCreateArgs = {
  input: CommandWhitelistedWalletCreateInput
}

export type MutationConfirmWalletDepositArgs = {
  input: ConfirmWalletDepositInput
  operationId: Scalars['ID']
}

export type MutationCreateAegisWalletArgs = {
  input: CreateAegisWalletInput
}

export type MutationCreateClientCustodyBankConfigArgs = {
  clientId: Scalars['ID']
  custodyBankId: Scalars['ID']
}

export type MutationCreateClientEthNodeConfigArgs = {
  input: CreateClientEthNodeConfigInput
}

export type MutationCreateClientOtcProviderConfigArgs = {
  clientId: Scalars['ID']
  otcProviderId: Scalars['ID']
}

export type MutationCreateClientStakingNodeConfigArgs = {
  input: CreateClientStakingNodeConfigInput
}

export type MutationCreateEthNodeArgs = {
  input: CreateEthNodeInput
}

export type MutationCreateOnboardingArgs = {
  input: CreateOnboardingInput
}

export type MutationCreateStakingHostArgs = {
  input: CreateStakingHostInput
}

export type MutationCreateStakingNodeArgs = {
  input: CreateStakingNodeInput
}

export type MutationExecuteCryptoToFiatArgs = {
  input: ExecuteCryptoToFiatInput
  operationId: Scalars['UUID']
}

export type MutationExecuteFiatToCryptoArgs = {
  operationId: Scalars['UUID']
}

export type MutationRemoveClientCustodyBankConfigArgs = {
  clientId: Scalars['ID']
  custodyBankId: Scalars['ID']
  reason: Scalars['String']
}

export type MutationRemoveClientEthNodeConfigArgs = {
  id: Scalars['ID']
  reason: Scalars['String']
}

export type MutationRemoveClientOtcProviderConfigArgs = {
  clientId: Scalars['ID']
  otcProviderId: Scalars['ID']
  reason: Scalars['String']
}

export type MutationRemoveClientStakingNodeConfigArgs = {
  id: Scalars['ID']
  reason: Scalars['String']
}

export type MutationRemoveEthNodeArgs = {
  id: Scalars['ID']
  reason: Scalars['String']
}

export type MutationRemoveStakingHostArgs = {
  id: Scalars['ID']
  reason: Scalars['String']
}

export type MutationRemoveStakingNodeArgs = {
  id: Scalars['ID']
  reason: Scalars['String']
}

export type MutationRemoveUserArgs = {
  input: RemoveUserInput
}

export type MutationReportBankDepositArgs = {
  input: ReportBankDepositInput
  operationId: Scalars['UUID']
}

export type MutationReportBankWithdrawalArgs = {
  input: ReportBankWithdrawalInput
  operationId: Scalars['UUID']
}

export type MutationRequestAdditionalInfoArgs = {
  id: Scalars['String']
  input: RequestAdditionalInfoInput
}

export type MutationRequestAdminCreateArgs = {
  input: RequestAdminCreateInput
}

export type MutationRequestAdminRemoveArgs = {
  id: Scalars['UUID']
  reason: Scalars['String']
}

export type MutationRequestAuthAppRebindArgs = {
  input: RequestAuthAppRebindInput
}

export type MutationRequestAuthAppResetPinArgs = {
  input: RequestAuthAppResetPinInput
}

export type MutationRequestWalletDepositConfirmationArgs = {
  input: RequestWalletDepositConfirmationInput
}

export type MutationResetPasswordArgs = {
  newPassword: Scalars['String']
  token: Scalars['String']
}

export type MutationReviewOnboardingArgs = {
  id: Scalars['String']
  input: ReviewInput
}

export type MutationReviewOperationArgs = {
  id: Scalars['UUID']
  input?: InputMaybe<ReviewOperationInput>
}

export type MutationSendResetPasswordEmailArgs = {
  email: Scalars['String']
  recaptchaToken?: InputMaybe<Scalars['String']>
}

export type MutationSetOperationFailedArgs = {
  message: Scalars['String']
  operationId: Scalars['ID']
}

export type MutationSetPasswordArgs = {
  newPassword: Scalars['String']
}

export type MutationSetTfaArgs = {
  code: Scalars['String']
  secret: Scalars['String']
}

export type MutationSettleCryptoToFiatArgs = {
  input: SettleCryptoToFiatInput
  operationId: Scalars['UUID']
}

export type MutationSettleFiatToCryptoArgs = {
  operationId: Scalars['UUID']
}

export type MutationSignInAdminArgs = {
  email: Scalars['String']
  password: Scalars['String']
  recaptchaToken?: InputMaybe<Scalars['String']>
}

export type MutationSignInUserArgs = {
  email: Scalars['String']
  password: Scalars['String']
  recaptchaToken?: InputMaybe<Scalars['String']>
}

export type MutationSignUpCompanyUserArgs = {
  input: SignUpCompanyUserInput
  onboardingId: Scalars['ID']
}

export type MutationSignUpIndividualUserArgs = {
  input: SignUpIndividualUserInput
  onboardingId: Scalars['ID']
}

export type MutationStatementCreateArgs = {
  input: CreateStatementInput
}

export type MutationSubmitAdditionalInfoArgs = {
  fields: Array<Scalars['FieldInput']>
  id: Scalars['String']
}

export type MutationSubmitBankDepositArgs = {
  bankId: Scalars['UUID']
  input: SubmitBankDepositInput
}

export type MutationSubmitOnboardingArgs = {
  id: Scalars['String']
}

export type MutationUpdateOnboardingArgs = {
  field: Scalars['FieldInput']
  id: Scalars['String']
  stepNum: Scalars['Float']
}

export type MutationVerifyTfaArgs = {
  code: Scalars['String']
}

export enum Network {
  EthereumGoerli = 'ETHEREUM_GOERLI',
  EthereumMainnet = 'ETHEREUM_MAINNET',
}

export type NetworkInfo = {
  __typename?: 'NetworkInfo'
  assetTypes: Array<AssetType>
  coin: Coin
  ecosystem: Ecosystem
  enabled: Scalars['Boolean']
  id: Network
  name: Scalars['String']
}

export type ObjectHasBeenLockedError = Error & {
  __typename?: 'ObjectHasBeenLockedError'
  id: Scalars['ID']
  message: Scalars['String']
}

export type Onboarding = {
  __typename?: 'Onboarding'
  additionalInfos?: Maybe<Array<OnboardingAdditionalInfo>>
  approved?: Maybe<Scalars['Boolean']>
  clientType: ClientType
  createdAt: Scalars['DateTime']
  creator: Admin
  currentReviewRole?: Maybe<OnboardingReviewRole>
  custodyEntity: CustodyEntity
  email: Scalars['String']
  firstName: Scalars['String']
  form?: Maybe<OnboardingForm>
  id: Scalars['ID']
  lastName: Scalars['String']
  reviewRecords: Array<ReviewRecord>
  state: OnboardingState
  user?: Maybe<User>
}

export type OnboardingAdditionalInfo = {
  __typename?: 'OnboardingAdditionalInfo'
  createdAt: Scalars['DateTime']
  fields: Array<FieldResponse>
  note: Scalars['String']
  submittedAt?: Maybe<Scalars['DateTime']>
}

export type OnboardingForm = {
  __typename?: 'OnboardingForm'
  fields: Array<FieldResponse>
  filesDriveFolder?: Maybe<Scalars['String']>
  filesDriveFolderId?: Maybe<Scalars['String']>
  stepNum: Scalars['Float']
  submittedAt?: Maybe<Scalars['DateTime']>
  updatedAt: Scalars['DateTime']
}

export type OnboardingPage = {
  __typename?: 'OnboardingPage'
  list: Array<Onboarding>
  total: Scalars['Int']
}

export enum OnboardingReviewRole {
  AdminCompliance = 'ADMIN_COMPLIANCE',
  AdminManager = 'ADMIN_MANAGER',
  AdminOfficer = 'ADMIN_OFFICER',
}

export enum OnboardingState {
  AccountCreated = 'ACCOUNT_CREATED',
  AdditionalInfoRequested = 'ADDITIONAL_INFO_REQUESTED',
  Approved = 'APPROVED',
  InvitationCreated = 'INVITATION_CREATED',
  Pended = 'PENDED',
  Reviewing = 'REVIEWING',
}

export type Operation = {
  adminReviewGroups: Array<AdminReviewGroup>
  client?: Maybe<Client>
  clientReviewGroups: Array<ClientReviewGroup>
  currentReviewRole?: Maybe<OperationReviewRole>
  executionRecord?: Maybe<OperationExecutionRecord>
  id: Scalars['ID']
  isKvOp: Scalars['Boolean']
  requestedAt: Scalars['DateTime']
  requester: Account
  reviewRecords: Array<OperationReviewRecord>
  state: OperationState
  viewerReviewingRecord?: Maybe<OperationReviewRecord>
  viewerShouldReview: Scalars['Boolean']
  viewerShouldReviewViaAuthApp?: Maybe<Scalars['Boolean']>
}

export enum OperationAdminReviewRole {
  AdminAccountManager = 'ADMIN_ACCOUNT_MANAGER',
  AdminManager = 'ADMIN_MANAGER',
  AdminOfficer = 'ADMIN_OFFICER',
  AdminSuperior = 'ADMIN_SUPERIOR',
}

export type OperationCount = {
  __typename?: 'OperationCount'
  count: Scalars['Int']
  type: OperationType
}

export type OperationExecutionRecord = {
  __typename?: 'OperationExecutionRecord'
  endedAt?: Maybe<Scalars['DateTime']>
  message?: Maybe<Scalars['String']>
  startedAt: Scalars['DateTime']
  succeeded?: Maybe<Scalars['Boolean']>
}

export type OperationLogs = {
  __typename?: 'OperationLogs'
  create?: Maybe<Operation>
  remove?: Maybe<Operation>
  updates?: Maybe<Array<Operation>>
}

export type OperationPage = {
  __typename?: 'OperationPage'
  list: Array<Operation>
  total: Scalars['Int']
}

export type OperationReviewRecord = {
  comment?: Maybe<Scalars['String']>
  createdAt: Scalars['DateTime']
  id: Scalars['ID']
  operation: Operation
  reviewedAt?: Maybe<Scalars['DateTime']>
  reviewer: Account
  role: OperationReviewRole
  state: OperationReviewRecordState
}

export enum OperationReviewRecordState {
  Approved = 'APPROVED',
  Expired = 'EXPIRED',
  Frozen = 'FROZEN',
  Rejected = 'REJECTED',
  Reviewing = 'REVIEWING',
}

export enum OperationReviewRole {
  AdminAccountManager = 'ADMIN_ACCOUNT_MANAGER',
  AdminManager = 'ADMIN_MANAGER',
  AdminOfficer = 'ADMIN_OFFICER',
  AdminSuperior = 'ADMIN_SUPERIOR',
  User = 'USER',
}

export enum OperationState {
  Approved = 'APPROVED',
  Completed = 'COMPLETED',
  Executing = 'EXECUTING',
  Failed = 'FAILED',
  Rejected = 'REJECTED',
  Reviewing = 'REVIEWING',
}

export enum OperationType {
  AdminCreate = 'ADMIN_CREATE',
  AdminRemove = 'ADMIN_REMOVE',
  AuthAppRebind = 'AUTH_APP_REBIND',
  AuthAppResetPin = 'AUTH_APP_RESET_PIN',
  BankCreate = 'BANK_CREATE',
  BankDeposit = 'BANK_DEPOSIT',
  BankUpdate = 'BANK_UPDATE',
  BankWithdrawal = 'BANK_WITHDRAWAL',
  CryptoToFiat = 'CRYPTO_TO_FIAT',
  EthStaking = 'ETH_STAKING',
  FiatToCrypto = 'FIAT_TO_CRYPTO',
  LiquidStakeLido = 'LIQUID_STAKE_LIDO',
  PolicyCreate = 'POLICY_CREATE',
  PolicyUpdate = 'POLICY_UPDATE',
  UserCreate = 'USER_CREATE',
  UserRemove = 'USER_REMOVE',
  WalletCreate = 'WALLET_CREATE',
  WalletDeposit = 'WALLET_DEPOSIT',
  WalletUpdate = 'WALLET_UPDATE',
  WalletWithdrawal = 'WALLET_WITHDRAWAL',
  WhitelistedBankCreate = 'WHITELISTED_BANK_CREATE',
  WhitelistedWalletCreate = 'WHITELISTED_WALLET_CREATE',
}

export type OtcProvider = {
  __typename?: 'OtcProvider'
  id: Scalars['ID']
  name: Scalars['String']
  networkInfos: Array<OtcProviderNetworkInfo>
}

export type OtcProviderNetworkInfo = {
  __typename?: 'OtcProviderNetworkInfo'
  address: Scalars['String']
  assetTypes: Array<AssetType>
  network: Network
}

export type OtcProviderPage = {
  __typename?: 'OtcProviderPage'
  list: Array<OtcProvider>
  total: Scalars['Int']
}

export type PasswordResetExpiredError = Error & {
  __typename?: 'PasswordResetExpiredError'
  id: Scalars['ID']
  message: Scalars['String']
}

export type PasswordTooWeakError = Error & {
  __typename?: 'PasswordTooWeakError'
  id: Scalars['ID']
  message: Scalars['String']
}

export type Policy = {
  __typename?: 'Policy'
  approverGroups: Array<PolicyApproverGroup>
  associatedBanks: Array<Bank>
  associatedWallets: Array<Wallet>
  description: Scalars['String']
  id: Scalars['ID']
  name: Scalars['String']
  operationLogs: OperationLogs
  requesters: Array<PolicyRequester>
  /** 可以看到 wallet 的 users */
  users: Array<User>
  viewers: Array<User>
}

export type PolicyApproverGroup = {
  __typename?: 'PolicyApproverGroup'
  /** required signature count */
  required: Scalars['Int']
  triggerCondition: ApproverGroupTriggerCondition
  users: Array<User>
}

export type PolicyCreateCommand = Operation & {
  __typename?: 'PolicyCreateCommand'
  adminReviewGroups: Array<AdminReviewGroup>
  args: PolicyCreateCommandArgs
  client?: Maybe<Client>
  clientReviewGroups: Array<ClientReviewGroup>
  createdPolicy?: Maybe<Policy>
  currentReviewRole?: Maybe<OperationReviewRole>
  executionRecord?: Maybe<OperationExecutionRecord>
  id: Scalars['ID']
  isKvOp: Scalars['Boolean']
  requestedAt: Scalars['DateTime']
  requester: Account
  reviewRecords: Array<OperationReviewRecord>
  state: OperationState
  viewerReviewingRecord?: Maybe<OperationReviewRecord>
  viewerShouldReview: Scalars['Boolean']
  viewerShouldReviewViaAuthApp?: Maybe<Scalars['Boolean']>
}

export type PolicyCreateCommandArgs = {
  __typename?: 'PolicyCreateCommandArgs'
  approverGroups: Array<PolicyApproverGroup>
  description: Scalars['String']
  name: Scalars['String']
  requesters: Array<PolicyRequester>
  viewers: Array<User>
}

export type PolicyPage = {
  __typename?: 'PolicyPage'
  list: Array<Policy>
  total: Scalars['Int']
}

export type PolicyRequester = {
  __typename?: 'PolicyRequester'
  dailyLimit: DailyLimitBreakpoint
  user: User
}

export type PolicyUpdateCommand = Operation & {
  __typename?: 'PolicyUpdateCommand'
  adminReviewGroups: Array<AdminReviewGroup>
  client?: Maybe<Client>
  clientReviewGroups: Array<ClientReviewGroup>
  currentReviewRole?: Maybe<OperationReviewRole>
  executionRecord?: Maybe<OperationExecutionRecord>
  id: Scalars['ID']
  isKvOp: Scalars['Boolean']
  newValues: PolicyUpdateValues
  policy: Policy
  previousValues: PolicyUpdateValues
  requestedAt: Scalars['DateTime']
  requester: Account
  reviewRecords: Array<OperationReviewRecord>
  state: OperationState
  viewerReviewingRecord?: Maybe<OperationReviewRecord>
  viewerShouldReview: Scalars['Boolean']
  viewerShouldReviewViaAuthApp?: Maybe<Scalars['Boolean']>
}

export type PolicyUpdateValues = {
  __typename?: 'PolicyUpdateValues'
  approverGroups: Array<PolicyApproverGroup>
  requesters: Array<PolicyRequester>
  viewers: Array<User>
}

export type Query = {
  __typename?: 'Query'
  adminPermissions: Array<RoleInfo>
  admins: AdminPage
  aegisWallets: AegisWalletPage
  appVersion: Scalars['String']
  assetTypes: Array<AssetType>
  bank: Bank
  banks: BankPage
  client: Client
  clientAssets: ClientAsset
  clientAssetsHistories: Array<ClientAssetsHistory>
  clientCustodyBankConfigs: ClientCustodyBankConfigPage
  clientEthNodeConfigs: ClientEthNodeConfigPage
  clientOtcProviderConfigs: ClientOtcProviderConfigPage
  clientStakingNodeConfigs: ClientStakingNodeConfigPage
  clients: ClientPage
  cryptoToFiatFeeEstimate: FeeEstimate
  custodyBank: CustodyBank
  custodyBanks: CustodyBankPage
  dashboardCounts: DashboardCountsDto
  ethNodes: EthNodePage
  ethStakingFeeEstimate: FeeEstimate
  ethStakings: EthStakingPage
  kvBindingToken: Scalars['String']
  liquidStakingLidoFeeEstimate: FeeEstimate
  liquidStakingLidos: LiquidStakingLidoPage
  me?: Maybe<MeResponse>
  networkInfo: NetworkInfo
  networkInfoList: Array<NetworkInfo>
  onboarding?: Maybe<Onboarding>
  onboardings: OnboardingPage
  operation: Operation
  operations: OperationPage
  otcProviders: OtcProviderPage
  policies: PolicyPage
  policy: Policy
  resetPasswordInvalidatedAt: ResetPasswordInvalidatedAtResponse
  rfq: Rfq
  stakingHosts: StakingHostPage
  stakingNodes: StakingNodePage
  statementSignedUrl?: Maybe<Scalars['String']>
  statements: StatementPage
  tokenQuotes: Array<TokenQuote>
  user: User
  users: UserPage
  waitingForViewerCounts: WaitingForViewerCountsDto
  wallet: Wallet
  walletWithdrawal: WalletWithdrawal
  walletWithdrawalCommand: WalletWithdrawalCommand
  walletWithdrawalCommands: WalletWithdrawalCommandPage
  walletWithdrawalFeeEstimate: FeeEstimate
  wallets: WalletPage
  whitelistedBank: WhitelistedBank
  whitelistedBanks: WhitelistedBankPage
  whitelistedWallet: WhitelistedWallet
  whitelistedWallets: WhitelistedWalletPage
}

export type QueryAdminsArgs = {
  aegisEntity?: InputMaybe<AegisEntity>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  role?: InputMaybe<AdminRole>
}

export type QueryAegisWalletsArgs = {
  aegisEntity?: InputMaybe<AegisEntity>
  limit?: InputMaybe<Scalars['Int']>
  network?: InputMaybe<Network>
  offset?: InputMaybe<Scalars['Int']>
}

export type QueryBankArgs = {
  id: Scalars['ID']
}

export type QueryBanksArgs = {
  clientId?: InputMaybe<Scalars['ID']>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
}

export type QueryClientArgs = {
  id: Scalars['UUID']
}

export type QueryClientAssetsHistoriesArgs = {
  endsAt: Scalars['DateTime']
  startsAt: Scalars['DateTime']
}

export type QueryClientCustodyBankConfigsArgs = {
  clientId?: InputMaybe<Scalars['ID']>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
}

export type QueryClientEthNodeConfigsArgs = {
  clientId?: InputMaybe<Scalars['UUID']>
  isActivate?: InputMaybe<Scalars['Boolean']>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
}

export type QueryClientOtcProviderConfigsArgs = {
  clientId?: InputMaybe<Scalars['ID']>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
}

export type QueryClientStakingNodeConfigsArgs = {
  clientId?: InputMaybe<Scalars['UUID']>
  isActivate?: InputMaybe<Scalars['Boolean']>
  limit?: InputMaybe<Scalars['Int']>
  network?: InputMaybe<Network>
  offset?: InputMaybe<Scalars['Int']>
}

export type QueryClientsArgs = {
  clientType?: InputMaybe<ClientType>
  custodyEntity?: InputMaybe<CustodyEntity>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
}

export type QueryCryptoToFiatFeeEstimateArgs = {
  amount: Scalars['String']
  assetTypeId: Scalars['ID']
  walletId: Scalars['ID']
}

export type QueryCustodyBankArgs = {
  id: Scalars['ID']
}

export type QueryCustodyBanksArgs = {
  custodyEntity?: InputMaybe<CustodyEntity>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
}

export type QueryEthNodesArgs = {
  isActivate?: InputMaybe<Scalars['Boolean']>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  type?: InputMaybe<EthHostType>
}

export type QueryEthStakingFeeEstimateArgs = {
  input: EthStakingFeeEstimateInput
  walletId: Scalars['UUID']
}

export type QueryEthStakingsArgs = {
  clientId?: InputMaybe<Scalars['UUID']>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
}

export type QueryLiquidStakingLidoFeeEstimateArgs = {
  amount: Scalars['String']
  walletId: Scalars['ID']
}

export type QueryLiquidStakingLidosArgs = {
  clientId?: InputMaybe<Scalars['UUID']>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
}

export type QueryNetworkInfoArgs = {
  network: Network
}

export type QueryNetworkInfoListArgs = {
  enabled?: InputMaybe<Scalars['Boolean']>
}

export type QueryOnboardingArgs = {
  id: Scalars['ID']
}

export type QueryOnboardingsArgs = {
  clientType?: InputMaybe<ClientType>
  custodyEntity?: InputMaybe<CustodyEntity>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  pendingReview?: InputMaybe<Scalars['Boolean']>
}

export type QueryOperationArgs = {
  id: Scalars['UUID']
}

export type QueryOperationsArgs = {
  bankId?: InputMaybe<Scalars['UUID']>
  clientId?: InputMaybe<Scalars['UUID']>
  clientType?: InputMaybe<ClientType>
  custodyEntity?: InputMaybe<CustodyEntity>
  endsAt?: InputMaybe<Scalars['DateTime']>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  operationTypes?: InputMaybe<Array<OperationType>>
  startsAt?: InputMaybe<Scalars['DateTime']>
  states?: InputMaybe<Array<OperationState>>
  waitingForViewer?: InputMaybe<Scalars['Boolean']>
  walletId?: InputMaybe<Scalars['UUID']>
}

export type QueryOtcProvidersArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
}

export type QueryPoliciesArgs = {
  clientId?: InputMaybe<Scalars['UUID']>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
}

export type QueryPolicyArgs = {
  id: Scalars['UUID']
}

export type QueryResetPasswordInvalidatedAtArgs = {
  token: Scalars['String']
}

export type QueryRfqArgs = {
  input: RfqInput
  providerId: Scalars['UUID']
}

export type QueryStakingHostsArgs = {
  isActivate?: InputMaybe<Scalars['Boolean']>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  type?: InputMaybe<StakingHostType>
}

export type QueryStakingNodesArgs = {
  hostId?: InputMaybe<Scalars['UUID']>
  isActivate?: InputMaybe<Scalars['Boolean']>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
}

export type QueryStatementSignedUrlArgs = {
  id: Scalars['ID']
}

export type QueryStatementsArgs = {
  clientId?: InputMaybe<Scalars['UUID']>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
}

export type QueryTokenQuotesArgs = {
  symbols: Array<Scalars['String']>
}

export type QueryUserArgs = {
  id: Scalars['UUID']
}

export type QueryUsersArgs = {
  clientId?: InputMaybe<Scalars['UUID']>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  roles?: Array<UserRole>
}

export type QueryWalletArgs = {
  id: Scalars['UUID']
}

export type QueryWalletWithdrawalArgs = {
  id: Scalars['ID']
}

export type QueryWalletWithdrawalCommandArgs = {
  id: Scalars['UUID']
}

export type QueryWalletWithdrawalCommandsArgs = {
  clientId?: InputMaybe<Scalars['UUID']>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  walletId?: InputMaybe<Scalars['UUID']>
  whitelistedWalletId?: InputMaybe<Scalars['UUID']>
}

export type QueryWalletWithdrawalFeeEstimateArgs = {
  amount: Scalars['String']
  assetTypeId: Scalars['ID']
  walletId: Scalars['ID']
  whitelistedWalletId: Scalars['ID']
}

export type QueryWalletsArgs = {
  clientId?: InputMaybe<Scalars['UUID']>
  isRequester?: InputMaybe<Scalars['Boolean']>
  limit?: InputMaybe<Scalars['Int']>
  network?: InputMaybe<Network>
  offset?: InputMaybe<Scalars['Int']>
  tokenTypes?: InputMaybe<Array<TokenType>>
}

export type QueryWhitelistedBankArgs = {
  id: Scalars['UUID']
}

export type QueryWhitelistedBanksArgs = {
  clientId?: InputMaybe<Scalars['UUID']>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
}

export type QueryWhitelistedWalletArgs = {
  id: Scalars['UUID']
}

export type QueryWhitelistedWalletsArgs = {
  clientId?: InputMaybe<Scalars['UUID']>
  limit?: InputMaybe<Scalars['Int']>
  network?: InputMaybe<Network>
  offset?: InputMaybe<Scalars['Int']>
}

export type RemoveAccountRecord = {
  __typename?: 'RemoveAccountRecord'
  account: Account
  createdAt: Scalars['DateTime']
  creator: Account
  reason: Scalars['String']
}

export type RemoveClientEthNodeConfig = {
  __typename?: 'RemoveClientEthNodeConfig'
  createdAt: Scalars['DateTime']
  creator: Admin
  reason: Scalars['String']
  record: ClientEthNodeConfig
}

export type RemoveClientStakingNodeConfig = {
  __typename?: 'RemoveClientStakingNodeConfig'
  createdAt: Scalars['DateTime']
  creator: Admin
  reason: Scalars['String']
  record: ClientStakingNodeConfig
}

export type RemoveEthNodeRecord = {
  __typename?: 'RemoveEthNodeRecord'
  createdAt: Scalars['DateTime']
  creator: Admin
  node: EthNode
  reason: Scalars['String']
}

export type RemoveStakingHostRecord = {
  __typename?: 'RemoveStakingHostRecord'
  createdAt: Scalars['DateTime']
  creator: Admin
  host: StakingHost
  reason: Scalars['String']
}

export type RemoveStakingNodeRecord = {
  __typename?: 'RemoveStakingNodeRecord'
  createdAt: Scalars['DateTime']
  creator: Admin
  node: StakingNode
  reason: Scalars['String']
}

export type RemoveUserInput = {
  reason: Scalars['String']
  userId: Scalars['UUID']
}

export type ReportBankDepositInput = {
  notes?: InputMaybe<Scalars['String']>
  receivedAmount: Scalars['String']
}

export type ReportBankWithdrawalInput = {
  notes?: InputMaybe<Scalars['String']>
  wiringFee: Scalars['String']
  wiringType: WiringType
}

export type RequestAdditionalInfoInput = {
  fields: Array<Scalars['FieldInput']>
  note: Scalars['String']
}

export type RequestAdminCreateInput = {
  aegisEntity: AegisEntity
  email: Scalars['String']
  firstName: Scalars['String']
  lastName: Scalars['String']
  mobile: Scalars['String']
  position: Scalars['String']
  role: AdminRole
}

export type RequestAdminCreateResponse = AccountAlreadyExistsError | AdminCreateOperation

export type RequestAuthAppRebindInput = {
  declarationForm: Scalars['String']
}

export type RequestAuthAppResetPinInput = {
  authType: AuthType
  declarationForm: Scalars['String']
}

export type RequestWalletDepositConfirmationInput = {
  assetTypeId: Scalars['ID']
  reportedAmount: Scalars['String']
  reportedTxHash?: InputMaybe<Scalars['String']>
  walletId: Scalars['String']
  whitelistedWalletId: Scalars['String']
}

export type ResetPasswordInvalidatedAtResponse = {
  __typename?: 'ResetPasswordInvalidatedAtResponse'
  invalidatedAt: Scalars['DateTime']
}

export type ResetPasswordResponse = PasswordResetExpiredError | PasswordTooWeakError | Success

export type ReviewInput = {
  approved: Scalars['Boolean']
  comment?: InputMaybe<Scalars['String']>
}

export type ReviewOperationInput = {
  approved: Scalars['Boolean']
  comment?: InputMaybe<Scalars['String']>
}

export type ReviewRecord = {
  __typename?: 'ReviewRecord'
  admin: Admin
  approved: Scalars['Boolean']
  comment?: Maybe<Scalars['String']>
  reviewedAt: Scalars['DateTime']
}

export type Rfq = {
  __typename?: 'Rfq'
  clientRfqId: Scalars['String']
  createdAt: Scalars['DateTime']
  expiredAt: Scalars['DateTime']
  price: Scalars['String']
  quantity: Scalars['String']
  rfqId: Scalars['ID']
  side: Scalars['String']
}

export type RfqInput = {
  amount: Scalars['String']
  assetTypeId: Scalars['String']
  side: TradeSide
}

export enum Role {
  AdminAccountManager = 'ADMIN_ACCOUNT_MANAGER',
  AdminBd = 'ADMIN_BD',
  AdminBoss = 'ADMIN_BOSS',
  AdminCompliance = 'ADMIN_COMPLIANCE',
  AdminFinance = 'ADMIN_FINANCE',
  AdminManager = 'ADMIN_MANAGER',
  AdminOfficer = 'ADMIN_OFFICER',
  AdminSuperior = 'ADMIN_SUPERIOR',
  UserAuthorizedPerson = 'USER_AUTHORIZED_PERSON',
  UserPrimary = 'USER_PRIMARY',
  UserViewer = 'USER_VIEWER',
}

export type RoleInfo = {
  __typename?: 'RoleInfo'
  actions: Array<Action>
  admins: Array<Admin>
  role: Role
}

export type SendResetPasswordEmailResponse = AccountNotFoundError | Success

export type SetPasswordResponse = Admin | CompanyUser | IndividualUser | PasswordTooWeakError

export type SetTfaResponse = InvalidTfaCodeError | Success

export type SettleCryptoToFiatInput = {
  amount: Scalars['String']
  notes?: InputMaybe<Scalars['String']>
}

export type SignInAdminResponse = Admin | InvalidSignInInputError

export type SignInUserResponse = CompanyUser | IndividualUser | InvalidSignInInputError

export type SignUpCompanyUserInput = {
  companyName: Scalars['String']
  email: Scalars['String']
  firstName: Scalars['String']
  incorporationNo: Scalars['String']
  lastName: Scalars['String']
  mobile: Scalars['String']
  position: Scalars['String']
}

export type SignUpCompanyUserResponse = AccountAlreadyExistsError | CompanyUser

export type SignUpIndividualUserInput = {
  birthday: Scalars['DateOnly']
  countryOfCitizenship: Scalars['String']
  email: Scalars['String']
  firstName: Scalars['String']
  lastName: Scalars['String']
  mobile: Scalars['String']
}

export type SignUpIndividualUserResponse = AccountAlreadyExistsError | IndividualUser

export type SimpleWithdrawalOperation = {
  adminReviewGroups: Array<AdminReviewGroup>
  amount: Scalars['String']
  amountInUsd: Scalars['String']
  assetType: AssetType
  client?: Maybe<Client>
  clientReviewGroups: Array<ClientReviewGroup>
  currentReviewRole?: Maybe<OperationReviewRole>
  estimatedGasFee?: Maybe<Scalars['String']>
  executionRecord?: Maybe<OperationExecutionRecord>
  id: Scalars['ID']
  isKvOp: Scalars['Boolean']
  maxEstimatedGasFee?: Maybe<Scalars['String']>
  requestedAt: Scalars['DateTime']
  requester: Account
  reviewRecords: Array<OperationReviewRecord>
  state: OperationState
  viewerReviewingRecord?: Maybe<OperationReviewRecord>
  viewerShouldReview: Scalars['Boolean']
  viewerShouldReviewViaAuthApp?: Maybe<Scalars['Boolean']>
  wallet: Wallet
  walletTransaction?: Maybe<WalletTransaction>
}

export type StakingHost = {
  __typename?: 'StakingHost'
  creator?: Maybe<Admin>
  id: Scalars['ID']
  name: Scalars['String']
  nodes: Array<StakingNode>
  note?: Maybe<Scalars['String']>
  removeRecord?: Maybe<RemoveStakingHostRecord>
  type: StakingHostType
}

export type StakingHostPage = {
  __typename?: 'StakingHostPage'
  list: Array<StakingHost>
  total: Scalars['Int']
}

export enum StakingHostType {
  AegisHosted = 'AEGIS_HOSTED',
  ClientHosted = 'CLIENT_HOSTED',
  NodeProvider = 'NODE_PROVIDER',
}

export type StakingNode = {
  __typename?: 'StakingNode'
  address: Scalars['String']
  clients: Array<Client>
  creator?: Maybe<Admin>
  host: StakingHost
  id: Scalars['ID']
  name: Scalars['String']
  networkInfo: NetworkInfo
  note?: Maybe<Scalars['String']>
  removeRecord?: Maybe<RemoveStakingNodeRecord>
}

export type StakingNodePage = {
  __typename?: 'StakingNodePage'
  list: Array<StakingNode>
  total: Scalars['Int']
}

export type Statement = {
  __typename?: 'Statement'
  createdAt: Scalars['DateTime']
  endAmount: Scalars['String']
  id: Scalars['ID']
  startAmount: Scalars['String']
}

export type StatementPage = {
  __typename?: 'StatementPage'
  list: Array<Statement>
  total: Scalars['Int']
}

export type SubmitBankDepositInput = {
  remittanceSlip: Scalars['String']
  reportedAmount: Scalars['String']
  whitelistedBankId: Scalars['UUID']
}

export type Subscription = {
  __typename?: 'Subscription'
  operationReviewRecordStateChanged: OperationReviewRecord
  operationStateChanged: Operation
}

export type SubscriptionOperationReviewRecordStateChangedArgs = {
  recordId?: InputMaybe<Scalars['ID']>
}

export type SubscriptionOperationStateChangedArgs = {
  ids?: InputMaybe<Array<Scalars['ID']>>
  types?: InputMaybe<Array<OperationType>>
}

export type Success = {
  __typename?: 'Success'
  id: Scalars['ID']
  message: Scalars['String']
}

export type TextField = {
  __typename?: 'TextField'
  hint?: Maybe<Scalars['String']>
  label: Scalars['String']
  type: FieldType
  value?: Maybe<Scalars['String']>
}

export type TokenAssetType = {
  __typename?: 'TokenAssetType'
  icon: Scalars['String']
  id: Scalars['ID']
  name: Scalars['String']
  networkInfo: NetworkInfo
  symbol: Scalars['String']
  tokenAddress: Scalars['String']
  tokenId?: Maybe<Scalars['String']>
  tokenType: TokenType
}

export type TokenQuote = {
  __typename?: 'TokenQuote'
  cmcId: Scalars['String']
  platform?: Maybe<Scalars['String']>
  priceInUsd: Scalars['String']
  symbol: Scalars['String']
}

export enum TokenType {
  Erc20 = 'ERC20',
  Erc721 = 'ERC721',
  Erc1155 = 'ERC1155',
}

export enum TradeSide {
  Buy = 'BUY',
  Sell = 'SELL',
}

export type TxNotFounError = Error & {
  __typename?: 'TxNotFounError'
  id: Scalars['ID']
  message: Scalars['String']
}

export type User = {
  actions: Array<Action>
  client: Client
  createdAt: Scalars['DateTime']
  creator?: Maybe<Admin>
  custodyEntity: CustodyEntity
  email: Scalars['String']
  firstName: Scalars['String']
  hasSetPassword: Scalars['Boolean']
  hasSetTfa: Scalars['Boolean']
  id: Scalars['ID']
  lastName: Scalars['String']
  mobile: Scalars['String']
  onboarding?: Maybe<Onboarding>
  operationLogs: OperationLogs
  position?: Maybe<Scalars['String']>
  removeRecord?: Maybe<RemoveAccountRecord>
  role: Role
  seqNo: Scalars['Int']
}

export type UserAssociatePolicyError = Error & {
  __typename?: 'UserAssociatePolicyError'
  id: Scalars['ID']
  message: Scalars['String']
}

export type UserCreateCommand = Operation & {
  __typename?: 'UserCreateCommand'
  adminReviewGroups: Array<AdminReviewGroup>
  args: UserCreateCommandArgs
  client?: Maybe<Client>
  clientReviewGroups: Array<ClientReviewGroup>
  createdUser?: Maybe<User>
  currentReviewRole?: Maybe<OperationReviewRole>
  executionRecord?: Maybe<OperationExecutionRecord>
  id: Scalars['ID']
  isKvOp: Scalars['Boolean']
  requestedAt: Scalars['DateTime']
  requester: Account
  reviewRecords: Array<OperationReviewRecord>
  state: OperationState
  viewerReviewingRecord?: Maybe<OperationReviewRecord>
  viewerShouldReview: Scalars['Boolean']
  viewerShouldReviewViaAuthApp?: Maybe<Scalars['Boolean']>
}

export type UserCreateCommandArgs = {
  __typename?: 'UserCreateCommandArgs'
  email: Scalars['String']
  filesDriveFolder?: Maybe<Scalars['String']>
  firstName: Scalars['String']
  lastName: Scalars['String']
  mobile: Scalars['String']
  notes?: Maybe<Scalars['String']>
  role: UserRole
}

export type UserPage = {
  __typename?: 'UserPage'
  list: Array<User>
  total: Scalars['Int']
}

export type UserRemoveCommand = Operation & {
  __typename?: 'UserRemoveCommand'
  adminReviewGroups: Array<AdminReviewGroup>
  args: UserRemoveCommandArgs
  client?: Maybe<Client>
  clientReviewGroups: Array<ClientReviewGroup>
  currentReviewRole?: Maybe<OperationReviewRole>
  executionRecord?: Maybe<OperationExecutionRecord>
  id: Scalars['ID']
  isKvOp: Scalars['Boolean']
  requestedAt: Scalars['DateTime']
  requester: Account
  reviewRecords: Array<OperationReviewRecord>
  state: OperationState
  viewerReviewingRecord?: Maybe<OperationReviewRecord>
  viewerShouldReview: Scalars['Boolean']
  viewerShouldReviewViaAuthApp?: Maybe<Scalars['Boolean']>
}

export type UserRemoveCommandArgs = {
  __typename?: 'UserRemoveCommandArgs'
  reason: Scalars['String']
  user: User
}

export enum UserRole {
  UserAuthorizedPerson = 'USER_AUTHORIZED_PERSON',
  UserPrimary = 'USER_PRIMARY',
  UserViewer = 'USER_VIEWER',
}

export type VerifyTfaResponse = InvalidTfaCodeError | Success

export type WaitingForViewerCountsDto = {
  __typename?: 'WaitingForViewerCountsDto'
  onboardings: Scalars['Int']
  operations: Array<OperationCount>
}

export type Wallet = {
  __typename?: 'Wallet'
  address: Scalars['String']
  assets: Array<WalletAsset>
  createdAt: Scalars['DateTime']
  id: Scalars['ID']
  name: Scalars['String']
  networkInfo: NetworkInfo
  operationLogs: OperationLogs
  policy: Policy
  usage: Scalars['String']
  whitelisteds?: Maybe<Array<WhitelistedWallet>>
}

export type WalletApproverGroupInput = {
  /** required signature count */
  required: Scalars['Int']
  triggerCondition: ApproverGroupTriggerCondition
  userIds: Array<Scalars['ID']>
}

export type WalletAsset = {
  __typename?: 'WalletAsset'
  amount: Scalars['String']
  assetType: AssetType
  availableAmount: Scalars['String']
  confirmedAmount: Scalars['String']
  lockedAmount: Scalars['String']
}

export type WalletCreateCommand = Operation & {
  __typename?: 'WalletCreateCommand'
  adminReviewGroups: Array<AdminReviewGroup>
  args: WalletCreateCommandArgs
  client?: Maybe<Client>
  clientReviewGroups: Array<ClientReviewGroup>
  createdWallet?: Maybe<Wallet>
  currentReviewRole?: Maybe<OperationReviewRole>
  executionRecord?: Maybe<OperationExecutionRecord>
  id: Scalars['ID']
  isKvOp: Scalars['Boolean']
  requestedAt: Scalars['DateTime']
  requester: Account
  reviewRecords: Array<OperationReviewRecord>
  state: OperationState
  viewerReviewingRecord?: Maybe<OperationReviewRecord>
  viewerShouldReview: Scalars['Boolean']
  viewerShouldReviewViaAuthApp?: Maybe<Scalars['Boolean']>
}

export type WalletCreateCommandArgs = {
  __typename?: 'WalletCreateCommandArgs'
  name: Scalars['String']
  networkInfo: NetworkInfo
  policy: Policy
  usage: Scalars['String']
  whitelistedWallets: Array<WhitelistedWallet>
}

export type WalletDepositConfirmation = Operation & {
  __typename?: 'WalletDepositConfirmation'
  adminReviewGroups: Array<AdminReviewGroup>
  amount?: Maybe<Scalars['String']>
  assetType: AssetType
  client?: Maybe<Client>
  clientReviewGroups: Array<ClientReviewGroup>
  currentReviewRole?: Maybe<OperationReviewRole>
  executionRecord?: Maybe<OperationExecutionRecord>
  id: Scalars['ID']
  isKvOp: Scalars['Boolean']
  reportedAmount: Scalars['String']
  reportedTxHash?: Maybe<Scalars['String']>
  requestedAt: Scalars['DateTime']
  requester: Account
  reviewRecords: Array<OperationReviewRecord>
  state: OperationState
  txHash?: Maybe<Scalars['String']>
  viewerReviewingRecord?: Maybe<OperationReviewRecord>
  viewerShouldReview: Scalars['Boolean']
  viewerShouldReviewViaAuthApp?: Maybe<Scalars['Boolean']>
  wallet: Wallet
  whitelistedWallet: WhitelistedWallet
}

export type WalletPage = {
  __typename?: 'WalletPage'
  list: Array<Wallet>
  total: Scalars['Int']
}

export type WalletRequesterInput = {
  dailyLimit: DailyLimitBreakpoint
  userId: Scalars['ID']
}

export type WalletTransaction = {
  amount: Scalars['String']
  amountInUsd: Scalars['String']
  assetType: AssetType
  createdAt: Scalars['DateTime']
  id: Scalars['ID']
  operationLogs: OperationLogs
  txHash: Scalars['String']
  wallet: Wallet
}

export type WalletUpdateCommand = Operation & {
  __typename?: 'WalletUpdateCommand'
  adminReviewGroups: Array<AdminReviewGroup>
  client?: Maybe<Client>
  clientReviewGroups: Array<ClientReviewGroup>
  currentReviewRole?: Maybe<OperationReviewRole>
  executionRecord?: Maybe<OperationExecutionRecord>
  id: Scalars['ID']
  isKvOp: Scalars['Boolean']
  newDatas: WalletUpdateCommandArgs
  oldDatas: WalletUpdateCommandArgs
  requestedAt: Scalars['DateTime']
  requester: Account
  reviewRecords: Array<OperationReviewRecord>
  state: OperationState
  viewerReviewingRecord?: Maybe<OperationReviewRecord>
  viewerShouldReview: Scalars['Boolean']
  viewerShouldReviewViaAuthApp?: Maybe<Scalars['Boolean']>
  wallet: Wallet
}

export type WalletUpdateCommandArgs = {
  __typename?: 'WalletUpdateCommandArgs'
  policy: Policy
  whitelistedWallets: Array<WhitelistedWallet>
}

export type WalletWithdrawal = WalletTransaction & {
  __typename?: 'WalletWithdrawal'
  amount: Scalars['String']
  amountInUsd: Scalars['String']
  assetType: AssetType
  createdAt: Scalars['DateTime']
  id: Scalars['ID']
  operation: WalletWithdrawalCommand
  operationLogs: OperationLogs
  txHash: Scalars['String']
  wallet: Wallet
  whitelistedWallet: WhitelistedWallet
}

export type WalletWithdrawalCommand = Operation &
  SimpleWithdrawalOperation & {
    __typename?: 'WalletWithdrawalCommand'
    adminReviewGroups: Array<AdminReviewGroup>
    amount: Scalars['String']
    amountInUsd: Scalars['String']
    assetType: AssetType
    client?: Maybe<Client>
    clientReviewGroups: Array<ClientReviewGroup>
    currentReviewRole?: Maybe<OperationReviewRole>
    description: Scalars['String']
    estimatedGasFee?: Maybe<Scalars['String']>
    executionRecord?: Maybe<OperationExecutionRecord>
    id: Scalars['ID']
    isKvOp: Scalars['Boolean']
    maxEstimatedGasFee?: Maybe<Scalars['String']>
    requestedAt: Scalars['DateTime']
    requester: Account
    reviewRecords: Array<OperationReviewRecord>
    state: OperationState
    viewerReviewingRecord?: Maybe<OperationReviewRecord>
    viewerShouldReview: Scalars['Boolean']
    viewerShouldReviewViaAuthApp?: Maybe<Scalars['Boolean']>
    wallet: Wallet
    walletTransaction?: Maybe<WalletWithdrawal>
    whitelistedWallet: WhitelistedWallet
  }

export type WalletWithdrawalCommandPage = {
  __typename?: 'WalletWithdrawalCommandPage'
  list: Array<WalletWithdrawalCommand>
  total: Scalars['Int']
}

export type WhitelistedBank = {
  __typename?: 'WhitelistedBank'
  account: Scalars['String']
  accountName: Scalars['String']
  bankInfo: BankInfo
  client: Client
  currency: FiatCurrency
  domesticCode?: Maybe<Scalars['String']>
  id: Scalars['ID']
  notes?: Maybe<Scalars['String']>
  operationLogs: OperationLogs
  ownerType: WhitelistedBankOwnerType
  routingCode: Scalars['String']
  routingType: BankRoutingType
}

export type WhitelistedBankCreateCommand = Operation & {
  __typename?: 'WhitelistedBankCreateCommand'
  account: Scalars['String']
  accountName: Scalars['String']
  adminReviewGroups: Array<AdminReviewGroup>
  bankInfo: BankInfo
  client?: Maybe<Client>
  clientReviewGroups: Array<ClientReviewGroup>
  createdWhitelistedBank?: Maybe<WhitelistedBank>
  currency: FiatCurrency
  currentReviewRole?: Maybe<OperationReviewRole>
  domesticCode?: Maybe<Scalars['String']>
  executionRecord?: Maybe<OperationExecutionRecord>
  filesFolderLink: Scalars['String']
  id: Scalars['ID']
  isKvOp: Scalars['Boolean']
  notes?: Maybe<Scalars['String']>
  ownerType: WhitelistedBankOwnerType
  requestedAt: Scalars['DateTime']
  requester: Account
  reviewRecords: Array<OperationReviewRecord>
  routingCode: Scalars['String']
  routingType: BankRoutingType
  state: OperationState
  viewerReviewingRecord?: Maybe<OperationReviewRecord>
  viewerShouldReview: Scalars['Boolean']
  viewerShouldReviewViaAuthApp?: Maybe<Scalars['Boolean']>
}

export enum WhitelistedBankOwnerType {
  Director = 'DIRECTOR',
  Employee = 'EMPLOYEE',
  Self = 'SELF',
  Shareholder = 'SHAREHOLDER',
  Subsidiary = 'SUBSIDIARY',
  ThirdParty = 'THIRD_PARTY',
}

export type WhitelistedBankPage = {
  __typename?: 'WhitelistedBankPage'
  list: Array<WhitelistedBank>
  total: Scalars['Int']
}

export type WhitelistedWallet = {
  __typename?: 'WhitelistedWallet'
  address: Scalars['String']
  client: Client
  createdAt: Scalars['DateTime']
  id: Scalars['ID']
  name: Scalars['String']
  networkInfo: NetworkInfo
  operationLogs: OperationLogs
  owner: WhitelistedWalletOwnerType
}

export type WhitelistedWalletCreateCommand = Operation & {
  __typename?: 'WhitelistedWalletCreateCommand'
  adminReviewGroups: Array<AdminReviewGroup>
  args: WhitelistedWalletCreateCommandArgs
  client?: Maybe<Client>
  clientReviewGroups: Array<ClientReviewGroup>
  createdWhitelistedWallet?: Maybe<WhitelistedWallet>
  currentReviewRole?: Maybe<OperationReviewRole>
  executionRecord?: Maybe<OperationExecutionRecord>
  id: Scalars['ID']
  isKvOp: Scalars['Boolean']
  requestedAt: Scalars['DateTime']
  requester: Account
  reviewRecords: Array<OperationReviewRecord>
  state: OperationState
  viewerReviewingRecord?: Maybe<OperationReviewRecord>
  viewerShouldReview: Scalars['Boolean']
  viewerShouldReviewViaAuthApp?: Maybe<Scalars['Boolean']>
}

export type WhitelistedWalletCreateCommandArgs = {
  __typename?: 'WhitelistedWalletCreateCommandArgs'
  address: Scalars['String']
  filesDriveFolder: Scalars['String']
  name: Scalars['String']
  networkInfo: NetworkInfo
  owner: WhitelistedWalletOwnerType
}

export enum WhitelistedWalletOwnerType {
  Director = 'DIRECTOR',
  Employee = 'EMPLOYEE',
  Self = 'SELF',
  Shareholder = 'SHAREHOLDER',
  Subsidiary = 'SUBSIDIARY',
  ThirdParty = 'THIRD_PARTY',
}

export type WhitelistedWalletPage = {
  __typename?: 'WhitelistedWalletPage'
  list: Array<WhitelistedWallet>
  total: Scalars['Int']
}

export enum WiringType {
  Absorbed = 'ABSORBED',
  Addition = 'ADDITION',
  Deducted = 'DEDUCTED',
}
