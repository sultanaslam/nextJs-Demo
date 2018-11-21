import { withRouter } from 'next/router'

import Layout from '../Components/Layout'

const About = (props) => (
	
  <Layout>
    <p style={{height: '100px', backgroundColor: 'red'}}>
    This is the about page
    <button
    onClick= {()=>props.router.push('/')}
    >HOME</button>	
    </p>
    <p style={{height: '100px', backgroundColor: 'yellow'}}>This is the about page</p>
  </Layout>
)

export default withRouter(About)