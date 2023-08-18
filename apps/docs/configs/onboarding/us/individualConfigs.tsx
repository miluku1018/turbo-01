import {
  AddressController,
  CountryController,
  JobStatusController,
  MobileController,
} from '@components/Controller'
import AccountTypeController from '@components/Controller/AccountTypeController'
import { OnboardingLink } from '@components/Onboarding'
import { countryCodes } from '@core/data'
import { OnboardingConfig } from '@core/types'
import {
  addressValidated,
  mobileValidated,
  objectValidated,
  textValidated,
} from '@core/types/FieldConfig'
import { networksWithNetType } from '@utils/hooks/useNetworkData'

const individualConfigs: OnboardingConfig[] = [
  {
    title: 'Basic Information',
    subtitle: 'Please provide required basic information.',
    formFields: [
      {
        type: 'TEXT',
        name: 'First Name (English)',
        label: 'First Name (English)',
        required: true,
        validated: textValidated,
      },
      {
        type: 'TEXT',
        name: 'Middle Name (English)',
        label: 'Middle Name (English)',
        hint: <>The provided middle name should match the displayed name on your passport.</>,
      },
      {
        type: 'TEXT',
        name: 'Last Name (English)',
        label: 'Last Name (English)',
        required: true,
        validated: textValidated,
      },
      {
        type: 'TEXT',
        name: 'Full Name (Native)',
        label: 'Full Name (Native)',
        hint: <>Please enter your full name in your native language if applicable.</>,
      },
      {
        type: 'TEXT',
        name: 'Former Name(s)',
        label: 'Former Name(s)',
        hint: <>Please list out all former names you had in the past.</>,
      },
      {
        type: 'SINGLE_SELECT',
        name: 'Gender',
        label: 'Gender',
        options: [
          {
            label: 'Male',
            value: 'Male',
          },
          {
            label: 'Female',
            value: 'Female',
          },
        ],
        required: true,
        validated: objectValidated,
        hint: (
          <>Please select the option which matches the gender shown on your identification card.</>
        ),
      },
      {
        type: 'DATE',
        name: 'Date of Birth',
        label: 'Date of Birth',
        required: true,
        validated: textValidated,
      },
    ],
  },
  {
    title: 'Personal Details',
    subtitle: 'Please provide required personal information.',
    formFields: [
      {
        type: 'MOBILE',
        name: 'Mobile',
        label: 'Mobile',
        required: true,
        validated: mobileValidated,
        component: MobileController,
      },
      {
        type: 'MOBILE',
        name: 'Residential Landline',
        label: 'Residential Landline',
        component: MobileController,
      },
      {
        type: 'TEXT',
        name: 'Personal Email Address',
        label: 'Personal Email Address',
        required: true,
        validated: textValidated,
        hint: (
          <>
            Please provide an alternative email address other than the email you used as your user
            account.
          </>
        ),
      },
      {
        type: 'TEXTFILE',
        name: 'Occupation',
        label: 'Occupation',
        required: true,
        validated: textValidated,
      },
      {
        type: 'JOB_STATUS',
        name: 'Job Status',
        label: 'Job Status',
        required: true,
        validated: objectValidated,
        component: JobStatusController,
      },
      {
        type: 'SINGLE_SELECT_TEXTFILE',
        name: 'Educational Level',
        label: 'Educational Level',
        options: [
          {
            label: `Early Childhood Education`,
            value: `Early Childhood Education`,
          },
          {
            label: `Primary Education`,
            value: `Primary Education`,
          },
          {
            label: `Lower Secondary Education`,
            value: `Lower Secondary Education`,
          },
          {
            label: `Upper Secondary Education`,
            value: `Upper Secondary Education`,
          },
          {
            label: `Post-Secondary Non-Tertiary education`,
            value: `Post-Secondary Non-Tertiary education`,
          },
          {
            label: `Short-Cycle Tertiary Education`,
            value: `Short-Cycle Tertiary Education`,
          },
          {
            label: `Bachelor's or Equivalent`,
            value: `Bachelor's or Equivalent`,
          },
          {
            label: `Master's or Equivalent`,
            value: `Master's or Equivalent`,
          },
          {
            label: `Doctorate or Equivalent`,
            value: `Doctorate or Equivalent`,
          },
        ],
        required: true,
        validated: objectValidated,
        hint: <>The provided list is based on ISCED 2011 levels of education.</>,
      },
    ],
  },
  {
    title: 'Residential Details',
    subtitle: 'Please provide required residential information.',
    formFields: [
      {
        type: 'SINGLE_SELECT',
        name: 'Country of Residence',
        label: 'Country of Residence',
        options: countryCodes.map(({ countryName }) => ({
          label: countryName,
          value: countryName,
        })),
        required: true,
        validated: objectValidated,
        hint: (
          <>
            Please ensure that your country of residence is consistent with your proof of
            residential address. If your country of residence is not listed in the above options you
            are currently ineligible for client onboarding due to compliance reasons.
          </>
        ),
      },
      {
        type: 'TEXT',
        name: 'Residential Address',
        label: 'Residential Address',
        required: true,
        validated: textValidated,
        hint: <>Please enter your current residential address.</>,
      },
      {
        type: 'ADDRESS',
        name: 'Residential Details Address',
        required: true,
        validated: addressValidated,
        component: AddressController,
      },
      {
        type: 'FILE',
        name: 'Proof of Residential Address',
        label: 'Proof of Residential Address',
        required: true,
        validated: objectValidated,
        hint: (
          <>
            e.g. electricity / phone / other utility bill or bank statement issued within the last 3
            months with your residential address clearly shown on the provided document
          </>
        ),
      },
    ],
  },
  {
    title: 'Identity Verification',
    subtitle: 'Please provide required ID document.',
    formFields: [
      {
        type: 'COUNTRY',
        name: 'Country of Citizenship',
        label: 'Country of Citizenship',
        required: true,
        validated: objectValidated,
        component: CountryController,
        hint: (
          <>Please ensure that your country of citizenship is consistent with your ID document.</>
        ),
      },
      {
        type: 'SINGLE_SELECT',
        name: 'ID Document Type',
        label: 'ID Document Type',
        options: [
          {
            label: 'Passport',
            value: 'Passport',
          },
          {
            label: `Driver's License`,
            value: `Driver's License`,
          },
          {
            label: 'National ID Card',
            value: 'National ID Card',
          },
        ],
        required: true,
        validated: objectValidated,
      },
      {
        type: 'FILE',
        name: 'Front of Selected ID Document',
        label: 'Front of Selected ID Document',
        required: true,
        validated: objectValidated,
        hint: (
          <>
            Please upload the front of your national ID card or driver license, or the photo page of
            your passport. The photo should clearly show the full front of your ID document, and
            taken with good resolution under enough lighting without filters.
          </>
        ),
      },
      {
        type: 'FILE',
        name: 'Back of Selected ID Document',
        label: 'Back of Selected ID Document',
        required: true,
        validated: objectValidated,
        hint: (
          <>
            Please upload the back of your national ID card or driver license, or the signature page
            of your passport. The photo should clearly show the full back of your ID document, and
            taken with good resolution under enough lighting without filters.
          </>
        ),
      },

      {
        type: 'FILE',
        name: 'Face with ID Document',
        label: 'Face with ID Document',
        required: true,
        validated: objectValidated,
        hint: (
          <>
            Confirm your identity with a photo of yourself holding your ID. Make sure both your face
            and ID are clear on the photo — nothing on the ID can be covered or censored. Please
            avoid wearing hats, glasses, using filters, and have your photo taken under enough
            lighting to ensure visibility.
          </>
        ),
      },

      {
        type: 'FILE',
        name: 'W Form',
        label: 'W Form',
        required: true,
        validated: objectValidated,
        hint: (
          <>
            W9 form is for US individual (
            <OnboardingLink link="https://drive.google.com/file/d/1reb_uB6WgT1ZxU4V-sZYTl8CziLXhJks/view?usp=sharing">
              download
            </OnboardingLink>
            ), and W-8BEN form is for non-US individual (
            <OnboardingLink link="https://drive.google.com/file/d/1DrwGGRL9uSac8JW82ZNPYoFpXC1e8V4p/view?usp=sharing">
              download
            </OnboardingLink>
            ). Please download the appropriate fillable PDF and fill in the required fields.,
          </>
        ),
      },
    ],
  },
  {
    title: 'Financial Information',
    subtitle: 'Please provide the required financial information.',
    formFields: [
      {
        type: 'SINGLE_SELECT_TEXTFILE',
        name: 'Approximate Total Net Asset',
        label: 'Approximate Total Net Asset',
        options: [
          {
            label: 'Below US$1,000,000',
            value: 'Below US$1,000,000',
          },
          {
            label: 'US$1,000,000 - $5,000,000',
            value: 'US$1,000,000 - $5,000,000',
          },
          {
            label: 'US$5,000,001 - $8,000,000',
            value: 'US$5,000,001 - $8,000,000',
          },
          {
            label: 'Above US$8,000,000',
            value: 'Above US$8,000,000',
          },
        ],
        required: true,
        validated: objectValidated,
      },
      {
        type: 'SINGLE_SELECT',
        name: 'Main Source of Funds',
        label: 'Main Source of Funds',
        options: [
          {
            label: 'Salary',
            value: 'Salary',
          },
          {
            label: 'Commission',
            value: 'Commission',
          },
          {
            label: 'Rent',
            value: 'Rent',
          },
          {
            label: 'Interest Rate',
            value: 'Interest Rate',
          },
          {
            label: 'Pension',
            value: 'Pension',
          },
          {
            label: 'Investment',
            value: 'Investment',
          },
          {
            label: 'N/A',
            value: 'N/A',
          },
          {
            label: 'Other',
            value: 'Other',
          },
        ],
        required: true,
        validated: objectValidated,
      },
      {
        type: 'SINGLE_SELECT_TEXTFILE',
        name: 'Annual Income',
        label: 'Annual Income',
        options: [
          {
            label: 'Below US$45,000',
            value: 'Below US$45,000',
          },
          {
            label: 'US$45,000 to US$139,999',
            value: 'US$45,000 to US$139,999',
          },
          {
            label: 'US$140,000 to US$149,999',
            value: 'US$140,000 to US$149,999',
          },
          {
            label: 'US$150,000 to US$199,999',
            value: 'US$150,000 to US$199,999',
          },
          {
            label: 'Above US$200,000',
            value: 'Above US$200,000',
          },
        ],

        required: true,
        validated: objectValidated,
        hint: <>The provided income levels are based on data released by the U.S. Census Bureau.</>,
      },
    ],
  },
  {
    title: 'Anticipated Account Activities',
    subtitle: 'Please provide the required estimates.',
    formFields: [
      {
        type: 'NUMBER',
        name: 'Expected monthly number of transactions',
        label: 'Expected monthly number of transactions',
        required: true,
        validated: textValidated,
      },
      {
        type: 'NUMBER',
        name: 'Expected monthly total amount of transactions(USD)',
        label: 'Expected monthly total amount of transactions(USD)',
        required: true,
        validated: textValidated,
      },
      {
        type: 'NUMBER_TEXTFILE',
        name: 'Initial Deposit Amount (USD)',
        label: 'Initial Deposit Amount (USD)',
        required: true,
        validated: textValidated,
        hint: (
          <>
            Please provide an estimated amount in USD of your first deposit made to your custodial
            account/wallet.
          </>
        ),
      },
      {
        type: 'NUMBER_TEXTFILE',
        name: 'Expected Monthly Average Balance (USD)',
        label: 'Expected Monthly Average Balance (USD)',
        required: true,
        validated: textValidated,
        hint: (
          <>
            Please provide an estimated amount in USD of the expected monthly average maintained in
            your custodial account/wallet.
          </>
        ),
      },
      {
        type: 'SINGLE_SELECT',
        name: 'Will any occasional transactions be performed?',
        label: 'Will any occasional transactions be performed?',
        options: [
          {
            label: 'No',
            value: 'No',
          },
          {
            label: 'Yes',
            value: 'Yes',
          },
        ],
        required: true,
        validated: objectValidated,
        hint: (
          <>
            Occasional transaction is defined as a transaction between yourself and another
            individual/party that does not have a business relationship with you. Occasional
            transactions may include for example, wire transfers or currency exchanges.
          </>
        ),
      },
    ],
  },
  {
    title: 'Banking Detail',
    subtitle:
      'Please provide information of the bank you will use to make payments for invoices issued by AEGIS.',
    formFields: [
      {
        type: 'TEXT',
        name: 'Account Name',
        label: 'Account Name',
        required: true,
        validated: textValidated,
        hint: (
          <>
            If the provided bank account is not under your full legal name, the account name must be
            listed in the Custody Agreement as an authorized payer.
          </>
        ),
      },
      {
        type: 'ACCOUNT_TYPE',
        name: 'Account Type',
        label: 'Account Type',
        required: true,
        validated: objectValidated,
        component: AccountTypeController,
      },
      {
        type: 'TEXT',
        name: 'Account Number',
        label: 'Account Number',
        required: true,
        validated: textValidated,
      },
      {
        type: 'TEXT',
        name: 'Bank Name',
        label: 'Bank Name',
        required: true,
        validated: textValidated,
        hint: <>Full name of your bank in English</>,
      },
      {
        type: 'TEXT',
        name: 'Bank Address',
        label: 'Bank Address',
        required: true,
        validated: textValidated,
        hint: <>You can usually find this information on your bank statement.</>,
      },
      {
        type: 'ADDRESS',
        name: 'Banking Detail Address',
        required: true,
        validated: addressValidated,
        component: AddressController,
      },
    ],
  },
  {
    title: 'Whitelist Wallet Address',
    subtitle:
      'Please provide information on the blockchain and the associated whitelisted wallet address that you intend to use to add to your custodial wallet. This information will help us ensure that your assets are properly secured and that we are able to effectively manage your account.',
    moreFields: [
      {
        type: 'SINGLE_SELECT',
        name: 'name',
        label: 'Blockchain Network',
        options: networksWithNetType.map(item => ({ label: item.name, value: item.name })),
        required: true,
        validated: objectValidated,
        hint: (
          <>
            Please select the blockchain network that you would like to open for the custodial
            wallet.
          </>
        ),
      },
      {
        type: 'TEXTFILE',
        name: 'Whitelisted Wallet Address',
        label: 'Whitelisted Wallet Address',
        required: true,
        validated: textValidated,
        hint: (
          <>
            Please make sure that you provide the correct wallet address format for the specific
            blockchain network, as different networks may have different address formats.
          </>
        ),
      },
    ],
  },
  {
    title: 'Additional Document(s)',
    subtitle:
      'Please upload any additional documents that you find necessary to aid the due diligence process.',
    moreFields: [
      {
        type: 'TEXT',
        name: 'name',
        label: 'Title',
        required: true,
        validated: textValidated,
      },
      {
        type: 'FILE',
        name: 'Document',
        label: 'Document',
        required: true,
        validated: objectValidated,
        hint: <>Uploaded file must be in .jpg, .png, .gif or .pdf format and under 10MB.</>,
      },
    ],
  },
  {
    title: 'Client Declaration',
    subtitle: 'Please upload a signed declaration form.',
    formFields: [
      {
        type: 'FILE',
        name: 'Declaration Form',
        label: 'Declaration Form',
        required: true,
        validated: objectValidated,
        hint: (
          <>
            Please download the declaration form template (
            <OnboardingLink link="https://drive.google.com/file/d/1odQLHnbnW_ig5pF4YQMioZKcAkVW3gUd/view?usp=share_link">
              download
            </OnboardingLink>
            ) and upload a signed declaration form to complete the client onboarding application.
          </>
        ),
      },
    ],
  },
]

export default individualConfigs
