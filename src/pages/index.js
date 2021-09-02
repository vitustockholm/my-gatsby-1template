import React from "react"

import Layout from "../components/layout"
import Counter from "../components/counter"

const Home = () => {
  return (
    <div>
      <Layout>
        <section>
          <h1>Home Page</h1>
          <Counter />
        </section>
      </Layout>
    </div>
  )
}

export default Home
