import React from "react"
import "../styles/layout.css"
import "../styles/layout.css"

//   Components
import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
