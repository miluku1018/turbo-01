import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import Stack from '@mui/material/Stack'
import { styled } from '@mui/material/styles'
import Tab from '@mui/material/Tab'
import React, { useState } from 'react'

interface Config {
  label: string
  count?: number
  hidden?: boolean
  render?: React.ComponentType
}

interface TabsProps {
  configs: Config[]
  variant?: 'outlined'
}

const StyledTabList = styled(TabList)(({ theme }) => ({
  marginBottom: '30px',
  borderBottom: `1px solid ${theme.palette.stroke.main}`,
  '.MuiTab-root': {
    color: theme.palette.menu.main,
  },
  '.count': {
    display: 'flex',
    alignItems: 'center',
    height: '20px',
    padding: '0 6px',
    borderRadius: '10px',
    color: 'white',
    backgroundColor: theme.palette.primary.main,
  },
  '&.outlined': {
    minHeight: 'auto',
    borderBottom: 'none',
    '.MuiTab-root': {
      minHeight: '36px',
      padding: '0 10px',
      color: theme.palette.tertiary.main,
      border: `1px solid ${theme.palette.tertiary.main}`,
      borderRadius: '100px',
      '&.Mui-selected': {
        color: 'white',
        backgroundColor: theme.palette.tertiary.main,
        '.count': {
          color: theme.palette.tertiary.main,
          backgroundColor: 'white',
        },
      },
    },
    '.MuiTabs-indicator': {
      display: 'none',
    },
    '.MuiTabs-flexContainer': {
      gap: '5px',
    },
  },
}))

const StyledTabPanel = styled(TabPanel)({
  padding: 0,
  '.MuiTabs-root': {
    marginBottom: 0,
  },
})

const Tabs: React.FC<TabsProps> = ({ configs, variant }) => {
  const [value, setValue] = useState('0')
  const visibleConfigs = configs.filter(config => !config.hidden)

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  return (
    <TabContext value={value}>
      <StyledTabList variant="scrollable" className={variant} onChange={handleChange}>
        {visibleConfigs.map((item, index) => (
          <Tab
            key={index}
            value={index.toString()}
            label={
              <Stack direction="row" alignItems="center" gap="5px">
                {item.label}
                {item.count ? <span className="count">{item.count}</span> : <></>}
              </Stack>
            }
          />
        ))}
      </StyledTabList>

      {visibleConfigs.map((item, index) => {
        const { render: Component } = item
        return (
          <StyledTabPanel key={index} value={index.toString()}>
            <Stack gap="30px">{Component && <Component />}</Stack>
          </StyledTabPanel>
        )
      })}
    </TabContext>
  )
}

export type { Config }
export default Tabs
