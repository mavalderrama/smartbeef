export default {
  API_URI:
    process.env.NODE_ENV === "development" ? "http://127.0.0.1:5000" : "/api/v1"
};
