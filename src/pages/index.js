import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SimpleForm from '../components/subscribe'

const IndexPage = () => (
  <Layout>
  <div>
    <img src="organic-books-logo.svg"/>
    <h1>The new used bookstore in Nob Hill</h1>
  </div>
  <article>
<p>We&#39;re the Brewer family: Steve, Kelly, Max, Seth, and Jalila. We love books. We&#39;ve been writing, reading, designing and editing for over a hundred years.</p>
<p>We think that books are more important than ever. In a busy, distracted world, a real book is an oasis. Books change the way we think. They stretch our attention spans, challenge our opinions, transport us to other worlds. People who read books are more curious, more rational, and more kind.</p>
<p>We&#39;re building a place for books and the people who love them. A place for community, right here in our beloved Nob Hill. A place away from the distractions of home and work. A gateway to other lands, a secret portal to the world of the book people. </p>
<p>We&#39;re on a journey. Come with us.</p>
   </article>
<div>
  <h1>Organic Books</h1>
  <p>
  <em>In the historic Nob Hill Shopping Center</em></p>
  <p>
  111 Carlisle Boulevard SE</p>
  <SimpleForm />

  </div>
  </Layout>
)

export default IndexPage
