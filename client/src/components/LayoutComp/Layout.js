import React from 'react'
import Header from './Header'
import { Helmet } from 'react-helmet'
import Footer from './Footer'
import { Toaster } from 'react-hot-toast';

const Layout = ({ children, title, description, keywords, author, backGround }) => {
  return (
    <div>
        <Helmet>
          <meta charSet="UTF-8" />
          <meta name="description" content={description} />
          <meta name="keywords" content={keywords} />
          <meta name="author" content={author} />
          <title>{title}</title>
        </Helmet>
        <Header />
        <main style={{minHeight:'80vh'}}>
          <div>
            <Toaster />
            {children}
          </div>
        </main>
        <Footer />
    </div>
  
  );
}

Layout.defaultProps = {
  title: 'FPO KHANAWALI',
  description: 'Farmer Production Organization FPO KHANAWALI',
  keywords: 'FPO Khanawali, FPO, Farmer Production Organization, Abhishek Panwar, Khanawali',
  author: 'Starc'
}

export default Layout