import {withRouter} from 'next/router'
import Layout from '../Components/Layout'

const Page = (props) => (
    <Layout>
  		<Content />
    </Layout>
)

export default Page;

const Content = withRouter((props) => (
  <div>
    <h1>{props.router.query.title}</h1>
    <p>This is the blog post content.</p>
  </div>
))