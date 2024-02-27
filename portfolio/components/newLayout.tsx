import React from 'react'

type Props = {
    children: any,
    className : string
}

export default function newLayout({children, className}: Props) {
  return (
    <div className={className}>{children}</div>
  )
}