import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const SecondPage = () => (
  <Layout>  <article>
     <div>
     <p>This is a second page where you can find out more about the store.</p>
     <Link to="/">Want to see that logo again?</Link>
    </div>
    </article>
  </Layout>
)

export default SecondPage
