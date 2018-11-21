import Link from 'next/link'
import Router from 'next/router'

import Layout from '../Components/Layout'

const Index = () => (

  <Layout>
  	<ul>
      <PostLink title="Hello Next.js" as="hello-nextjs"/>
      <PostLink title="Learn Next.js is awesome" as="learn-nextjs"/>
      <PostLink title="Deploy apps with Zeit" as="deploy-nextjs"/>
    </ul>
  </Layout>
)

export default Index;

const PostLink = (props) => (
  <li>
    <Link href={`/post?title=${props.title}`} as={`/p/${props.as}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)