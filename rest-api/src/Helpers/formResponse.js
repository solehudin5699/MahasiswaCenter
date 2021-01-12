const responseResult = {
  success: (res, data) => {
    const responseObject = {
      success: true,
      status: 200,
      data: data,
    };
    res.json(responseObject);
  },
  error: (res, error) => {
    const responseObject = {
      success: false,
      status: 500,
      error: error,
    };
    res.json(responseObject);
  },
};

module.exports = responseResult;
