// eslint-disable-next-line no-unused-vars
function errorHandler(err, req, res, next) {
  console.error("[error]", err);
  const status = err.status || 500;
  res.status(status).json({
    error: err.publicMessage || "Something went wrong on the server.",
  });
}

module.exports = errorHandler;
