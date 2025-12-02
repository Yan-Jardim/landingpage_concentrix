import React from 'react'

export type BenefitCardProps = {
  title: string
  description: string
  variant?: 'default' | 'highlight'
  icon?: React.ReactNode
  image?: string
}