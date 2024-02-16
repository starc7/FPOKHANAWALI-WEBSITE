import React from 'react'
import Layout from '../../components/LayoutComp/Layout'
import UserMenu from './UserMenu'

const Dashboard = ({children}) => {
  return (
    <Layout>
      <div className='container-fluid'>
        <div className='row'>
          <div className='ml-3 mt-3 col-md-3'>
            <UserMenu />
          </div>
          <main className='mt-3 col-md-9'>
            {children}
          </main>
        </div>
      </div>
    </Layout>
    
  )
}

export default Dashboard