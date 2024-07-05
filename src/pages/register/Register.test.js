// importing
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Register from './Register';
import { registerUserApi } from '../../apis/Api';
import { toast } from 'react-toastify';

// mocking
jest.mock('../../apis/Api'); // Mocking the API module to intercept API calls

// test cases
describe('Register Component Test', () => {

  // clear all the mock data
  afterEach(() => {
    jest.clearAllMocks();
  });

  // test case 4
  it('shows error message on failed registration', async () => {
    // rendering Register Component
    render(<Register />);

    // Mocking register fail response
    const mockResponse = {
      data: {
        success: false,
        message: 'Registration failed!'
      }
    };

    // config mock resolved value
    registerUserApi.mockResolvedValue(mockResponse);

    // config that error message as a test function
    toast.error = jest.fn();

    // Testing real UI components
    const firstName = await screen.getByPlaceholderText('Enter your firstname');
    const lastName = await screen.getByPlaceholderText('Enter your lastname');
    const email = await screen.getByPlaceholderText('Enter your email');
    const phone = await screen.getByPlaceholderText('Enter your Phone Number');
    const password = await screen.getByPlaceholderText('Enter your password');
    const confirmPassword = await screen.getByPlaceholderText('Enter your confirm password');
    const submitBtn = screen.getByText('Submit');

    // simulating user input and interaction
    fireEvent.change(firstName, { target: { value: 'John' } });
    fireEvent.change(lastName, { target: { value: 'Doe' } });
    fireEvent.change(email, { target: { value: 'john.doe@example.com' } });
    fireEvent.change(phone, { target: { value: '1234567890' } });
    fireEvent.change(password, { target: { value: 'password123' } });
    fireEvent.change(confirmPassword, { target: { value: 'password123' } });
    fireEvent.click(submitBtn);

    // After all the above actions, confirming the expected results
    await waitFor(() => {
      expect(registerUserApi).toHaveBeenCalledWith({
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        password: 'password123',
        phone: '1234567890'
      });
      expect(toast.error).toHaveBeenCalledWith('Registration failed!');
    });
  });
});
