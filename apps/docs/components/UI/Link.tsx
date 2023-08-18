import { Typography } from '@mui/material'
import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import React, { HTMLAttributeAnchorTarget } from 'react'

interface LinkProps extends NextLinkProps {
  target?: HTMLAttributeAnchorTarget | undefined
  children?: React.ReactNode
}

const Link: React.FC<LinkProps> = ({ target, children, ...props }) => {
  return (
    <NextLink {...props} passHref>
      <Typography component="a" variant="link" target={target}>
        {children}
      </Typography>
    </NextLink>
  )
}

export default Link
