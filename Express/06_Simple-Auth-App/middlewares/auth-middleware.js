import jwt from "jsonwebtoken";

export async function authMiddleware(req, res, next) {
  try {
    const token = req.headers && req.headers.authorization.split(" ")[1];

    if (!token) {
      return res.status(400).json({
        success: false,
        message: "Token required !! Please login first",
      });
    }

    // decode token
    const decodedTokenInfo = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decodedTokenInfo);
    req.userInfo = decodedTokenInfo;
    next();
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Access denied",
    });
  }
}
