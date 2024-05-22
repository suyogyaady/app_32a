import React from 'react'

const AdminDashboard = () => {
    return (
        <>
            <div className='container mt-2'>
                <div className='d-flex justify-content-between'>
                    <h3>Admin Dashboard</h3>

                    
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Add Product
                    </button>

                    
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    ...
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <table className='table mt-2'>
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
                                <img width={'60px'} height={'60px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXPNBtBtclhq5HAvn__enHQbtiYUHPzOeOIg&s" alt="" />
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