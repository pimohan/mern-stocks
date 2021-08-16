export const getBaseUrl = () => {
  const { REACT_APP_STOCK_API_BASE_URL } = process.env;
  return REACT_APP_STOCK_API_BASE_URL;
};
