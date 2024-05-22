import React from 'react'

const AdminDashboard = () => {
    return (
        <>
            <div className='container mt-2'>
                <div className='d-flex justify-content-between'>
                    <h3>Admin Dashboard</h3>
                    <button className='btn btn-danger'>Add product</button>
                </div>
                <table className='table table-light mt-3'>
                    <thead className='table-dark'>
                        <tr >
                            <th>Product Image</th>
                            <th>Product Name</th>
                            <th>Product Price</th>
                            <th>Category</th>
                            <th>Description</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <img width='200' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXPNBtBtclhq5HAvn__enHQbtiYUHPzOeOIg&s" alt="" />
                            </td>
                            <td>Phone</td>
                            <td>500</td>
                            <td>IOS</td>
                            <td>Iphone 17</td>
                            <td>
                              <button className='btn btn-primary'>Edit</button>
                              <button className='btn btn-danger ms-2'>Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default AdminDashboard