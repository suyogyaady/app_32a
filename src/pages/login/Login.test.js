// importing
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Login from './Login';
import Api, { loginUserApi } from '../../apis/Api';
import { toast } from 'react-toastify';


// mocking
jest.mock('../../apis/Api'); // Mocking the API module to intercept API calls

// test cases
describe('Login Component Test', () => {

    // clear all the mock data
    afterEach(() => {
      jest.clearAllMocks();
    });

    // test case 1
    it('Show show error message on failed login', async () => {
        // rendering Login Components
        render(<Login />); // Built Screen

        // Mocking login fail response
        const mockResponse = {
            data : {
                success: false,
                message: 'Password not matched!'
            }
        };

        // config mock resolved value
        loginUserApi.mockResolvedValue(mockResponse);

        // config that error message as a test function
        toast.error = jest.fn();

        // Testing real UI components
        const email = await screen.getByPlaceholderText('Enter your email');
        const password = await screen.getByPlaceholderText('Enter your password');
        const loginBtn = screen.getByText('Login');

        // simulating user input and interaction
        fireEvent.change(email, { target: { value: 'test@gmail.com' } });
        fireEvent.change(password, { target: { value: 'test123' } });
        fireEvent.click(loginBtn);

        // After all the above actions, confirming the expected results
        waitFor(() => {
            expect(loginUserApi).toHaveBeenCalledWith({ email: 'test@gmail.com', password: 'test123' });
            expect(toast.error).toHaveBeenCalledWith('Password not matched!');
        })




        });
    });