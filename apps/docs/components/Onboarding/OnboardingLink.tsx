import { Link } from '@components/UI'
import React from 'react'

interface OnboardingLinkProps {
  link: string
  children: React.ReactNode
}

const OnboardingLink: React.FC<OnboardingLinkProps> = ({ link, children }) => {
  return (
    <Link target="_blank" href={link}>
      {children}
    </Link>
  )
}

export default OnboardingLink
