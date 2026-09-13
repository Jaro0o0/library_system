import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../../src/store';


// React Router Mock
jest.mock('react-router', () => ({
  Link: ({ children, to, ...props }: any) => (
    <a href={to} {...props}>{children}</a>
  ),
}));

import Header from '../../src/components/common/Header';
import useGetUserStatus from '../../src/hooks/useGetUserStatus';





// Hook Mock
jest.mock('../../src/hooks/useGetUserStatus');

const mockedUseGetUserStatus = jest.mocked(useGetUserStatus);

describe('Header', () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: async () => [],
    });
  });


  //User is not logged
  test('shows login buttons when the user is NOT logged in', () => {
    mockedUseGetUserStatus.mockReturnValue({ isUserLogin: false });

    const { getByText, queryByTestId } = render(
      <Provider store={store}>
        <Header />
      </Provider>,
    );

    expect(getByText('Login')).toBeInTheDocument();
    expect(getByText('Register')).toBeInTheDocument();
    expect(queryByTestId('AccountCircleIcon')).not.toBeInTheDocument();
  });


  // user is loged
  test('shows the profile button when the user is logged in', () => {
    mockedUseGetUserStatus.mockReturnValue({ isUserLogin: true });

    const { getByTestId, queryByText } = render(
      <Provider store={store}>
        <Header />
      </Provider>,
    );

    expect(getByTestId('AccountCircleIcon')).toBeInTheDocument();
    expect(queryByText('Login')).not.toBeInTheDocument();
  });
});
