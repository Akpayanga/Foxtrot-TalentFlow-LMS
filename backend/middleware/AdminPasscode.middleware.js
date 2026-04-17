const { verifyToken } = require("../utilities/jwt");
const ApiError = require("../utilities/apiError.util");

const requireAdminPasscode = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      throw new ApiError(401, "No token provided");
    }

    const token = authHeader.split(" ")[1];
    const decoded = verifyToken(token, process.env.JWT_SECRET);

    if (decoded.role !== "admin-passcode") {
      throw new ApiError(403, "Forbidden: invalid admin passcode token");
    }

    req.user = decoded;
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = requireAdminPasscode;
