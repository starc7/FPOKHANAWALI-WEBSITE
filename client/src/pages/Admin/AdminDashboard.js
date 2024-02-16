import React from 'react'
import Layout from '../../components/LayoutComp/Layout'
import AdminMenu from './AdminMenu'

const AdminDashboard = ({children}) => {
  return (
    <Layout>
      <div className='container-fluid'>
        <h2 className='text-center pt-2' >Admin Dashboard</h2>
        <div className='row'>
          <div className='ml-3 mt-3 col-md-3'>
            <AdminMenu />
          </div>
          <main className='mt-3 col-md-9'>
            {children}
          </main>
        </div>
      </div>
    </Layout>
    
  )
}

export default AdminDashboard