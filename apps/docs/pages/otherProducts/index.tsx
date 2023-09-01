import { Alert, AuthLayout, Paper } from '@components/UI'
import BorderColorIcon from '@mui/icons-material/BorderColor'
import ConstructionIcon from '@mui/icons-material/Construction'
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange'
import FilePresentIcon from '@mui/icons-material/FilePresent'
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore'
import VisibilityIcon from '@mui/icons-material/Visibility'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Head from 'next/head'
import { ReactElement } from 'react'

const style = {
  container: (theme: any) => ({
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '20px',
    [theme.breakpoints.down('md')]: {
      gridTemplateColumns: '1fr',
    },
  }),
  wrapper: (theme: any) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    padding: '0 20px',
    border: `1px solid ${theme.palette.tertiary.main}`,
    borderRadius: '6px',
    '&:hover': {
      backgroundColor: theme.palette.bg.main,
    },
  }),
  line: (theme: any) => ({
    width: '2px',
    height: '100%',
    backgroundColor: theme.palette.tertiary.main,
  }),
  icon: {
    margin: '20px',
    fontSize: '50px',
  },
}

const list = [
  {
    icon: BorderColorIcon,
    link: 'https://www.aegiscustody.com/deFiGovernance',
    title: 'DeFi Governance',
    description: (
      <>
        We govern and regulate your DeFi protocols through participating in the required multisig
        approval mechanism.
      </>
    ),
  },
  {
    icon: FilePresentIcon,
    link: 'https://www.aegiscustody.com/assetDigitization',
    title: 'Asset Digitization',
    description: (
      <>
        Create digital representations of your assets under a custodial structure without technical
        knowledge required.
      </>
    ),
  },
  {
    icon: VisibilityIcon,
    link: 'https://www.aegiscustody.com/kycAML',
    title: 'KYC & AML',
    description: (
      <>
        Leverage our KYC/AML services for AEGIS to inspect your end users with multiple powerful
        databases to comply with regulatory requirements.
      </>
    ),
  },
  {
    icon: ConstructionIcon,
    link: 'https://www.aegiscustody.com/walletIntegration',
    title: 'Wallet Integration',
    description: (
      <>
        Integrate with our API controllable wallet management system to connect your own platform
        with the custodial wallets you have with AEGIS.
      </>
    ),
  },
  {
    icon: CurrencyExchangeIcon,
    link: 'https://www.aegiscustody.com/fiatCrypto',
    title: 'Automated Conversion ',
    description: (
      <>
        Connect with our automated stablecoin conversion platform through effortless integration to
        provide fiat on/off ramping services for your end users.
      </>
    ),
  },
  {
    icon: LocalGroceryStoreIcon,
    link: 'https://www.aegiscustody.com/nftMarketplace',
    title: 'NFT Marketplace',
    description: (
      <>
        We provide a fully customizable white-label solution to build a complete custodial NFT
        marketplace for you to operate.
      </>
    ),
  },
]

const OtherProducts = () => {
  return (
    <>
      <Head>
        <title>Other Products</title>
        <meta name="description" content="Other Products" />
      </Head>

      <Typography variant="h1">Other Products</Typography>

      <Paper>
        <Stack gap="30px">
          <Alert icon={false}>
            <Typography color="primary">
              Here are other products and services provided by AEGIS. Please contact us at{' '}
              <b>info@aegiscustody.com</b> if you wish to schedule a demo to further understand the
              products.
            </Typography>
          </Alert>

          <Box sx={style.container}>
            {list.map((item, index) => {
              const { icon: Icon, link, title, description } = item
              return (
                <Box key={index} component="a" target="_blank" href={link} sx={style.wrapper}>
                  <Icon sx={style.icon} color="primary" />
                  <Box sx={style.line}></Box>
                  <Box my="20px">
                    <Typography variant="subtitle1">{title}</Typography>
                    <Typography>{description}</Typography>
                  </Box>
                </Box>
              )
            })}
          </Box>
        </Stack>
      </Paper>
    </>
  )
}

OtherProducts.getLayout = (page: ReactElement) => {
  return <AuthLayout>{page}</AuthLayout>
}

export default OtherProducts
