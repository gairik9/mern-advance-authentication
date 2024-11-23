import jwt from "jsonwebtoken";

export const VerifyToken = (req, res, next) => {
  const token = req.cookies.token || "";
  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized! Please login to continue.",
    });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    if (!decoded) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized! Invalid Token.",
      });
    }
    req.userID = decoded.userID;
    next();
  } catch (error) {
    console.log("Error in verifyToken : ", error);
    return res.status(500).json({
      success: false,
      message: "Server error! Please try again later.",
    });
  }
};
