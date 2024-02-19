import React from "react"

export default function AfterLoginLayout({
    children,
  }: {
    children: React.ReactNode
  }):JSX.Element {
    return (
        <div>{children}</div>
    )
}