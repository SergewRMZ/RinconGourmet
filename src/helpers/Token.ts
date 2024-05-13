const Token = (() => {
  const getToken = () => {
    const token = sessionStorage.getItem('TOKEN');
    return token ? true : false;
  };

  const isValidToken = () => {
    
  }

  return {
    getToken
  }
})();

export default Token;