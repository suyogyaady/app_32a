import { render, screen, waitFor } from '@testing-library/react';
import Homepage from './Homepage';
import { getAllProductsApi } from '../../apis/Api';
import productMockData, { products } from '../../__mock__/productMockData';

// Mock the api.js
jest.mock('../../apis/Api');

//test case
describe('Testing Homepage', () => {

    // Clearing all mock before testing
    afterEach(() => {
        jest.clearAllMocks();
    });

    // test 1
    it('Should display all products', async () => {
        // config all
        

        // // Mock response
        // const mock_data = {
        //     data: {
        //         'success':true,
        //         'message' : 'Product Fetched',
        //         'products' : [{product1},{product2}]
        //     }
        // }
        const mock_data = productMockData;

        getAllProductsApi.mockResolvedValue({
            data : {
                products : mock_data
            }
        })
        render(<Homepage />)

        //configured
        waitFor(()=>{
            mock_data.array.forEach(product => {
                expect(screen.getAllByText(product.productName)).toBeInTheDocument()
            });
        })

    })
})