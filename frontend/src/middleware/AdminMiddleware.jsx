import React from 'react'
import { Outlet } from 'react-router-dom'

function AdminMiddleware() {
    const isAdmin = true;
    if (!isAdmin) {
        return <h1>Access Denied. You are not an admin.</h1>;
    }
  return (
    <div>
        <h1>I am admin components</h1>
        <Outlet />
    </div>
  )
}

export default AdminMiddleware