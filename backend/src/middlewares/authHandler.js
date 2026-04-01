const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../models/User.model");

const authMiddleware = (req, res, next) => {
  try {
    const token = req.cookies.token;
    
    if (!token) {
      res
      .status(401).json({ 
        status: false, 
        message: "Unauthorized user" 
      });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify the token
    req.userId = decoded.userId; // Attach userId to the request object
    // req.user = decoded;
        next(); //
  } catch (error) {
      return res.status(401).json({ 
        status: false, 
        message: "Unauthorized user"
       });
    }
};

// ROUTES PROTECTED AUTHENTICATION
const protectedRoute = async (req, res, next) => {
  try {
    let token = req.cookies.token;
    if (token) {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      const user = await User.findById(decoded.userId).select("isAdmin email");
      
      req.user = {
        email: user.email,
        isAdmin: user.isAdmin,
        userId: decoded.userId,
      };
      next();
    } 
  
    // else {
    //   return res
    //     .status(401)
    //     .json({ status: false, message: "Not authorized, Please Login" });
    // }
  } catch (error) {
    console.error(error);
    return res
      .status(401)
      .json({ status: false, message: "Not Allowed, Please Login" });
  }
};

// ROUTES PROTECTED ADMIN AUTHENTICATION
const isAdminRoute = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    return res
      .status(401)
      .json({ status: false, message: "Not authorized, Admin only" });
  }
};



module.exports = { protectedRoute, isAdminRoute, authMiddleware };