import { AddressController, MobileController } from '@components/Controller'
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

const corporateConfigs: OnboardingConfig[] = [
  {
    title: 'Your Information',
    subtitle: 'Please upload your KYC documents & authorized letter.',
    formFields: [
      {
        type: 'TEXT',
        name: 'Full Name',
        label: 'Full Name',
        required: true,
        validated: textValidated,
      },
      {
        type: 'FILE',
        name: 'Identity Proof (Front)',
        label: 'Identity Proof (Front)',
        required: true,
        validated: objectValidated,
        hint: (
          <>
            Please upload the front of your national ID card or driver license, or the photo page of
            your passport.
          </>
        ),
      },
      {
        type: 'FILE',
        name: 'Identity Proof (Back)',
        label: 'Identity Proof (Back)',
        required: true,
        validated: objectValidated,
        hint: (
          <>
            Please upload the back of your national ID card or driver license, or the signature page
            of your passport.
          </>
        ),
      },
      {
        type: 'TEXT',
        name: 'Residential Address',
        label: 'Residential Address',
        required: true,
        validated: textValidated,
        hint: (
          <>Please enter your full residential address, including country name and postal code. </>
        ),
      },
      {
        type: 'FILE',
        name: 'Address Proof',
        label: 'Address Proof',
        required: true,
        validated: objectValidated,
        hint: (
          <>
            e.g. electricity / phone / other utility bill or bank statement issued within the last 3
            months with the provided residential address clearly shown on the document
          </>
        ),
      },
      {
        type: 'FILE',
        name: 'Letter of Authorization',
        label: 'Letter of Authorization',
        required: true,
        validated: objectValidated,
        hint: (
          <>
            Please download the letter of authorization template (
            <OnboardingLink link="https://docs.google.com/document/d/1IO0gNbKqp72TtkTCukzSfbnJhgjpOJjS/edit?usp=sharing&ouid=114507208771789564770&rtpof=true&sd=true">
              download
            </OnboardingLink>
            ) and upload a signed letter.
          </>
        ),
      },
      {
        type: 'FILE',
        name: 'Record a video of yourself holding the uploaded ID',
        label: 'Record a video of yourself holding the uploaded ID',
        required: true,
        validated: objectValidated,
        hint: (
          <>
            Hold the ID up to the camera and say your name and the current date out loud. Make sure
            your face and ID are clearly visible in the video.
          </>
        ),
      },
      {
        type: 'FILE',
        name: 'Board Resolution',
        label: 'Board Resolution',
        required: true,
        validated: objectValidated,
        hint: (
          <>
            A board resolution is a formal{' '}
            <OnboardingLink link="https://docs.google.com/document/d/19HhiDRBXkquLb411oCxGfpFO6RA3GTv9/edit?usp=sharing&ouid=115690601506262347379&rtpof=true&sd=true">
              document
            </OnboardingLink>{' '}
            that outlines decisions made by a company’s board of directors, and should also include
            the appointment of a designated member to be responsible for certain activities for the
            custodial wallet/account. Please refer to the template.
          </>
        ),
      },
    ],
  },
  {
    title: 'Corporate Information',
    subtitle: 'Please provide required information.',
    formFields: [
      {
        type: 'TEXT',
        name: 'Full Name of Corporation',
        label: 'Full Name of Corporation',
        required: true,
        validated: textValidated,
      },
      {
        type: 'TEXT',
        name: 'Business Name of Corporation (if any)',
        label: 'Business Name of Corporation (if any)',
      },
      {
        type: 'DATE',
        name: 'Date of Incorporation',
        label: 'Date of Incorporation',
        required: true,
        validated: textValidated,
      },
      {
        type: 'SINGLE_SELECT',
        name: 'Country of Company Registration',
        label: 'Country of Company Registration',
        options: countryCodes.map(({ countryName }) => ({
          label: countryName,
          value: countryName,
        })),
        required: true,
        validated: objectValidated,
        hint: (
          <>
            If your country of company registration is not listed in the above options you are
            currently ineligible for client onboarding due to compliance reasons.
          </>
        ),
      },
      {
        type: 'TEXT',
        name: 'Registration or Incorporation No',
        label: 'Registration or Incorporation No.',
        required: true,
        validated: textValidated,
      },
      {
        type: 'TEXT',
        name: 'Registered Office Address',
        label: 'Registered Office Address',
        required: true,
        validated: textValidated,
        hint: (
          <>
            Please enter the full address with country and postal code included. The country of your
            provided office address should be the same as your country of registration.
          </>
        ),
      },
      {
        type: 'TEXT',
        name: 'Business Address',
        label: 'Business Address',
        required: true,
        validated: textValidated,
        hint: (
          <>
            {`If the address is same as the registered office address please type "same as above"
            otherwise please enter the full address with country and postal code included. Note that
            you will need to provide business address proof to complete the client onboarding
            process.`}
          </>
        ),
      },
      {
        type: 'MOBILE',
        name: 'Telephone',
        label: 'Telephone',
        required: true,
        validated: mobileValidated,
        component: MobileController,
        hint: (
          <>
            Please enter the general contact number of your office. The country code of your
            provided telephone should be the same as your business address.
          </>
        ),
      },
      {
        type: 'TEXT',
        name: 'Company Email Address',
        label: 'Company Email Address',
        required: true,
        validated: textValidated,
        hint: <>Please provide the general contact email address of your company.</>,
      },
      {
        type: 'NUMBER_TEXTFILE',
        name: 'Authorized Capital (USD)',
        label: 'Authorized Capital (USD)',
        required: true,
        validated: textValidated,
      },
      {
        type: 'NUMBER_TEXTFILE',
        name: 'Paid-Up Capital (USD)',
        label: 'Paid-Up Capital (USD)',
        required: true,
        validated: textValidated,
      },
      {
        type: 'TEXTAREA',
        name: 'Nature of Business',
        label: 'Nature of Business',
        required: true,
        validated: textValidated,
        hint: (
          <>
            Please describe the type of business the company does and its overall goals for
            compliance assessment.
          </>
        ),
      },
    ],
  },
  {
    title: 'Corporate Documents',
    subtitle: 'Please upload required documents.',
    formFields: [
      {
        type: 'FILE',
        name: 'Certified Certificate of Incorporation',
        label: 'Certified Certificate of Incorporation',
        required: true,
        validated: objectValidated,
        hint: <>The submitted document must be certified following the Certification Guideline.</>,
      },
      {
        type: 'FILE',
        name: 'Certified Business Registration Certificate (HK companies only)',
        label: 'Certified Business Registration Certificate (HK companies only)',
        hint: <>The submitted document must be certified following the Certification Guideline.</>,
      },
      {
        type: 'FILE',
        name: 'Charted Documents',
        label: 'Charted Documents',
        required: true,
        validated: objectValidated,
        hint: (
          <>
            e.g. memorandum and articles of association. The submitted document must be certified
            following the Certification Guideline.
          </>
        ),
      },
      {
        type: 'FILE',
        name: 'Certified Business Address Proof',
        label: 'Certified Business Address Proof',
        required: true,
        validated: objectValidated,
        hint: (
          <>
            The submitted document (e.g. electricity / phone / other utility bill or bank statement
            issued within the last 3 months with your business address clearly shown on the provided
            document) must be certified following the Certification Guideline.
          </>
        ),
      },
      {
        type: 'FILE',
        name: 'Certified Certificate of Incumbency',
        label: 'Certified Certificate of Incumbency',
        hint: (
          <>
            The submitted document must be within the last 3 months and certified following the
            Certification Guideline.
          </>
        ),
      },
      {
        type: 'FILE',
        name: 'Certified Ownership Chart',
        label: 'Certified Ownership Chart',
        required: true,
        validated: objectValidated,
        hint: (
          <>
            The submitted document must show the intermediate companies up to natural person(s), and
            be certified by a Director.
          </>
        ),
      },
      {
        type: 'FILE',
        name: 'Source of Funds Documentation',
        label: 'Source of Funds Documentation',
        required: true,
        validated: objectValidated,
        hint: (
          <>
            Documents that establish the provenance of the particular funds for applying entity
            initial transaction with Aegis account. This can include a bank, brokerage, or crypto
            statement from the fund administrator or fund/investment manager dated within the last 3
            months. Other alternative documents can be capital commitment letters, subscription
            agreement, statement of Partner’s capital, and management attestation of assets and
            liabilities.
          </>
        ),
      },
      {
        type: 'FILE',
        name: 'Audited Financial Report',
        label: 'Audited Financial Report',
        required: true,
        validated: objectValidated,
        hint: (
          <>
            The submitted document must be certified by a suitable 3rd party certifier, if the
            company couldn’t provide it, please provide the explanation.
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
            W9 form is for US corporate (
            <OnboardingLink link="https://drive.google.com/file/d/1reb_uB6WgT1ZxU4V-sZYTl8CziLXhJks/view?usp=sharing">
              download
            </OnboardingLink>
            ), and W-8BEN-E form is for non-US corporate (
            <OnboardingLink link="https://drive.google.com/file/d/15EcPze-J8uhoAQiySHJrxMS8cM16Up-7/view?usp=sharing">
              download
            </OnboardingLink>
            ). Please download the appropriate form and fill in the required fields.
          </>
        ),
      },
      {
        type: 'FILE',
        name: 'Company Chop (Optional)',
        label: 'Company Chop (Optional)',
        hint: <>Please seal on clean paper with Company Chop then upload.</>,
      },
    ],
  },
  {
    title: 'Finance Inquiry',
    subtitle: 'Please provide required information.',
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
        type: 'SINGLE_SELECT_TEXTFILE',
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
      {
        type: 'SINGLE_SELECT',
        name: 'Main Source of Funds',
        label: 'Main Source of Funds',
        options: [
          {
            label: 'Retained Earnings',
            value: 'Retained Earnings',
          },
          {
            label: 'Debt Capital',
            value: 'Debt Capital',
          },
          {
            label: 'Equity Capital',
            value: 'Equity Capital',
          },
          {
            label: 'Other',
            value: 'Other',
          },
        ],
        required: true,
        validated: objectValidated,
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
            If the provided bank account is not under the full name of your company, the account
            name must be listed in the Custody Agreement as an authorized payer.
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
    title: 'Director(s): INDIVIDUAL',
    subtitle:
      'This section applies to ALL Directors that are INDIVIDUALS. Please collect required documents and upload accordingly.',
    moreFields: [
      {
        type: 'TEXT',
        name: 'name',
        label: 'Full Name of Director',
        required: true,
        validated: textValidated,
      },
      {
        type: 'FILE',
        name: 'Identity Proof (front) of Director',
        label: 'Identity Proof (front) of Director',
        required: true,
        validated: objectValidated,
        hint: (
          <>
            Please upload the front of the his/her national ID card or driver license, or the photo
            page of his/her passport. The submitted document must be in color and certified
            following the Certification Guideline.
          </>
        ),
      },
      {
        type: 'FILE',
        name: 'Identity Proof (back) of Director',
        label: 'Identity Proof (back) of Director',
        required: true,
        validated: objectValidated,
        hint: (
          <>
            Please upload the back of the his/her national ID card or driver license, or the
            signature page of his/her passport. The submitted document must be in color and
            certified following the Certification Guideline.
          </>
        ),
      },
      {
        type: 'TEXT',
        name: 'Residential Address',
        label: 'Residential Address',
        required: true,
        validated: textValidated,
        hint: (
          <>
            Please enter the full residential address of the director, including country name and
            postal code.
          </>
        ),
      },
      {
        type: 'FILE',
        name: 'Address Proof of Director',
        label: 'Address Proof of Director',
        required: true,
        validated: objectValidated,
        hint: (
          <>
            The submitted document (e.g. electricity / phone / other utility bill or bank statement
            issued within the last 3 months with the provided residential address clearly shown on
            the document) must be certified following the Certification Guideline.
          </>
        ),
      },
      {
        type: 'FILE',
        name: 'Record a video of yourself holding the uploaded ID',
        label: 'Record a video of yourself holding the uploaded ID',
        required: true,
        validated: objectValidated,
        hint: (
          <>
            Hold the ID up to the camera and say your name and the current date out loud. Make sure
            your face and ID are clearly visible in the video.
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
            ). Please download the appropriate form and fill in the required fields.,
          </>
        ),
      },
    ],
  },
  {
    title: 'Director(s): CORPORATION',
    subtitle:
      'This section applies to ALL Directors that are CORPORATIONS. Please collect required documents and upload accordingly.',
    moreFields: [
      {
        type: 'TEXT',
        name: 'name',
        label: 'Full Name of Corporation',
        required: true,
        validated: textValidated,
      },
      {
        type: 'FILE',
        name: 'Certificate of Incorporation',
        label: 'Certificate of Incorporation',
        required: true,
        validated: objectValidated,
        hint: <>The submitted document must be certified following the Certification Guideline.</>,
      },
      {
        type: 'TEXT',
        name: 'Business Address',
        label: 'Business Address',
        required: true,
        validated: textValidated,
        hint: (
          <>
            Please enter the full business address of the director, including country name and
            postal code.
          </>
        ),
      },
      {
        type: 'FILE',
        name: 'Business Address Proof',
        label: 'Business Address Proof',
        required: true,
        validated: objectValidated,
        hint: (
          <>
            The submitted document (e.g. electricity / phone / other utility bill or bank statement
            issued within the last 3 months with the provided business address clearly shown on the
            document) must be certified following the Certification Guideline.
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
            W9 form is for US corporate (
            <OnboardingLink link="https://drive.google.com/file/d/1reb_uB6WgT1ZxU4V-sZYTl8CziLXhJks/view?usp=sharing">
              download
            </OnboardingLink>
            ), and W-8BEN-E form is for non-US corporate (
            <OnboardingLink link="https://drive.google.com/file/d/15EcPze-J8uhoAQiySHJrxMS8cM16Up-7/view?usp=sharing">
              download
            </OnboardingLink>
            ). Please download the appropriate form and fill in the required fields.
          </>
        ),
      },
    ],
  },
  {
    title: 'Beneficial Owner(s)',
    subtitle:
      'This section applies to ALL INDIVIDUAL beneficial owners with 25% or more shares of the company. Please collect required documents and upload accordingly.',
    formFields: [
      {
        type: 'FILE',
        name: 'Beneficial Owner(s) and Controller Certification',
        label: 'Beneficial Owner(s) and Controller Certification',
        hint: (
          <>
            Please download the fillable file and fill in the required fields. (
            <OnboardingLink link="https://drive.google.com/file/d/1eeI50goCJTpcOYH6g5GCc0gJr_qfKwIn/view?usp=sharing">
              download
            </OnboardingLink>
            )
          </>
        ),
      },
    ],
    moreFields: [
      {
        type: 'TEXT',
        name: 'name',
        label: 'Full Name of Beneficial Owner',
        required: true,
        validated: textValidated,
      },
      {
        type: 'FILE',
        name: 'Identity Proof (front) of Beneficial Owner',
        label: 'Identity Proof (front) of Beneficial Owner',
        required: true,
        validated: objectValidated,
        hint: (
          <>
            Please upload the front of the his/her national ID card or driver license, or the photo
            page of his/her passport. The submitted document must be in color and certified
            following the Certification Guideline.
          </>
        ),
      },
      {
        type: 'FILE',
        name: 'Identity Proof (back) of Beneficial Owner',
        label: 'Identity Proof (back) of Beneficial Owner',
        required: true,
        validated: objectValidated,
        hint: (
          <>
            Please upload the back of the his/her national ID card or driver license, or the
            signature page of his/her passport. The submitted document must be in color and
            certified following the Certification Guideline.
          </>
        ),
      },
      {
        type: 'TEXT',
        name: 'Residential Address',
        label: 'Residential Address',
        required: true,
        validated: textValidated,
        hint: (
          <>
            Please enter the full residential address of the beneficial owner, including country
            name and postal code.
          </>
        ),
      },
      {
        type: 'FILE',
        name: 'Address Proof of Beneficial Owner',
        label: 'Address Proof of Beneficial Owner',
        required: true,
        validated: objectValidated,
        hint: (
          <>
            The submitted document (e.g. electricity / phone / other utility bill or bank statement
            issued within the last 3 months with the provided residential address clearly shown on
            the document) must be certified following the Certification Guideline.
          </>
        ),
      },
      {
        type: 'FILE',
        name: 'Record a video of yourself holding the uploaded ID',
        label: 'Record a video of yourself holding the uploaded ID',
        required: true,
        validated: objectValidated,
        hint: (
          <>
            Hold the ID up to the camera and say your name and the current date out loud. Make sure
            your face and ID are clearly visible in the video.
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
            ). Please download the appropriate form and fill in the required fields.,
          </>
        ),
      },
    ],
  },
  {
    title: 'Authorized Person(s)',
    subtitle:
      'This section applies to ALL authorized persons. Please collect required documents and upload accordingly.',
    moreFields: [
      {
        type: 'TEXT',
        name: 'name',
        label: 'Full Name of Authorized Person',
        required: true,
        validated: textValidated,
      },
      {
        type: 'FILE',
        name: 'Identity Proof (front) of Authorized Person',
        label: 'Identity Proof (front) of Authorized Person',
        required: true,
        validated: objectValidated,
        hint: (
          <>
            Please upload the front of the his/her national ID card or driver license, or the photo
            page of his/her passport. The submitted document must be in color and certified
            following the Certification Guideline.
          </>
        ),
      },
      {
        type: 'FILE',
        name: 'Identity Proof (back) of Authorized Person',
        label: 'Identity Proof (back) of Authorized Person',
        required: true,
        validated: objectValidated,
        hint: (
          <>
            Please upload the back of the his/her national ID card or driver license, or the
            signature page of his/her passport. The submitted document must be in color and
            certified following the Certification Guideline.
          </>
        ),
      },
      {
        type: 'TEXT',
        name: 'Residential Address',
        label: 'Residential Address',
        required: true,
        validated: textValidated,
        hint: (
          <>
            Please enter the full residential address of the authorized person, including country
            name and postal code.
          </>
        ),
      },
      {
        type: 'FILE',
        name: 'Address Proof of Authorized Person',
        label: 'Address Proof of Authorized Person',
        required: true,
        validated: objectValidated,
        hint: (
          <>
            The submitted document (e.g. electricity / phone / other utility bill or bank statement
            issued within the last 3 months with the provided residential address clearly shown on
            the document) must be certified following the Certification Guideline.
          </>
        ),
      },
      {
        type: 'FILE',
        name: 'Record a video of yourself holding the uploaded ID',
        label: 'Record a video of yourself holding the uploaded ID',
        required: true,
        validated: objectValidated,
        hint: (
          <>
            Hold the ID up to the camera and say your name and the current date out loud. Make sure
            your face and ID are clearly visible in the video.
          </>
        ),
      },
      {
        type: 'FILE',
        name: 'Board Resolution',
        label: 'Board Resolution',
        required: true,
        validated: objectValidated,
        hint: (
          <>
            A board resolution is a formal{' '}
            <OnboardingLink link="https://docs.google.com/document/d/19HhiDRBXkquLb411oCxGfpFO6RA3GTv9/edit?usp=sharing&ouid=115690601506262347379&rtpof=true&sd=true">
              document
            </OnboardingLink>{' '}
            that outlines decisions made by a company’s board of directors, and should also include
            the appointment of a designated member to be responsible for certain activities for the
            custodial wallet/account. Please refer to the template.
          </>
        ),
      },
      {
        type: 'FILE',
        name: 'Letter of Authorization',
        label: 'Letter of Authorization',
        required: true,
        validated: objectValidated,
        hint: (
          <>
            Please download the letter of authorization template (
            <OnboardingLink link="https://docs.google.com/document/d/1IO0gNbKqp72TtkTCukzSfbnJhgjpOJjS/edit?usp=sharing&ouid=114507208771789564770&rtpof=true&sd=true">
              download
            </OnboardingLink>
            ) and upload a signed letter. The submitted document must be certified by a Director.
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
            <OnboardingLink link="https://drive.google.com/file/d/1XO5Zu6yY3wvbZqCzQnTicUETLQ__6-9f/view?usp=share_link">
              download
            </OnboardingLink>
            ) and upload a signed declaration form to complete the client onboarding application.
          </>
        ),
      },
    ],
  },
]

export default corporateConfigs
