import React from 'react'

const NotFound = (props) => {
  return (
    <div>
      <h1 className="display-4 mb-2"><span className='text-danger'>404</span> Not Found</h1>
      <p className="lead display-6">Sorry our programmers did not create this page.</p>
      <p className="lead display-6">Try visiting a page that actually exists.</p>
    </div>
  )
}

export default NotFound
