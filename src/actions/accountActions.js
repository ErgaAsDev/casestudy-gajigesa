import { fetchAccounts } from '../api/accounts';

export const setAccounts = accounts => ({
  type: 'SET_ACCOUNTS',
  payload: accounts,
});

export const fetchAccountsData = () => {
  return async dispatch => {
    try {
      const accounts = await fetchAccounts();
      dispatch(setAccounts(accounts));
    } catch (error) {
      console.error('Error fetching accounts:', error);
    }
  };
};
