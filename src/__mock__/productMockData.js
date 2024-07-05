const { getAllProductsApi } = require("../apis/Api")

const productMockData = {
    "success": true,
    "message": "Product Created Successfully",
    "products": [
        {
            "_id": "6677afd5c64fc43ba6616a83",
            "productName": "p1",
            "productCategory": "electronics",
            "productDescription": "Product 1",
            "productImage": "1719119829654-Screenshot 2024-06-14 111456.png",
            "productPrice": "1000",
            "createdAt": "2024-06-23T05:14:30.037Z",
            "__v": 0
        },
        {
            "_id": "6677aff7c64fc43ba6616a87",
            "productName": "p2",
            "productCategory": "gadgets",
            "productDescription": "product3",
            "productImage": "1719119863879-Screenshot (2).png",
            "productPrice": "2000",
            "createdAt": "2024-06-23T05:14:30.037Z",
            "__v": 0
        },
        {
            "_id": "6677b00ac64fc43ba6616a89",
            "productName": "p3",
            "productCategory": "furniture",
            "productDescription": "product3",
            "productImage": "1719119882683-Screenshot 2023-06-08 141535.png",
            "productPrice": "3000",
            "createdAt": "2024-06-23T05:14:30.037Z",
            "__v": 0
        },
        {
            "_id": "6677b01cc64fc43ba6616a8b",
            "productName": "p4",
            "productCategory": "gadgets",
            "productDescription": "product4",
            "productImage": "1719119900064-Screenshot 2023-06-01 213151.png",
            "productPrice": "4000",
            "createdAt": "2024-06-23T05:14:30.037Z",
            "__v": 0
        },
        {
            "_id": "6677b036c64fc43ba6616a8f",
            "productName": "p5",
            "productCategory": "electronics",
            "productDescription": "product5",
            "productImage": "1719119926222-Screenshot 2023-08-10 171513.png",
            "productPrice": "5000",
            "createdAt": "2024-06-23T05:14:30.037Z",
            "__v": 0
        }
    ]
}
module.exports = productMockData