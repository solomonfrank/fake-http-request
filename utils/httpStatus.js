export const error = (statusCode) =>
  clientError(statusCode) || serverError(statusCode);
export const clientError = (statusCode) =>
  statusCode >= 400 && statusCode < 500;
export const serverError = (statusCode) =>
  statusCode >= 500 && statusCode < 600;
