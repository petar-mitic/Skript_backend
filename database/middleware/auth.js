import jwt from 'jsonwebtoken'

// export const authenticate = (req, res, next) => {
//     try {
//         if(!req.headers.authorization){
//             res.status(400).json({message: "Nema tokena"});
//             return;
//         }
//         const token = req.headers.authorization.split(" ")[1];
//         if(!token){
//             res.status(400).json({message: "error"});
//             return;
//         }
//         const decodedData = jwt.verify(token, process.env.SECRET_KEY);
//         req.headers.userId = decodedData.userId;
//         req.headers.userType = decodedData.userType;
//         next();
//     } catch (error) {
//         res.status(500).json({message: error.message});
//         return;
//     }
// }

export const authenticate = (req, res, next) => {
    try {
      if(!req.headers.authorization){
        res.status(400).json({message: "Authentication missing"});
        return;
      }
      const token = req.headers.authorization.split(" ")[1];
      if (!token) {
        res.status(401).json({ message: "Please login" });
        return;
      }
      const decodedData = jwt.verify(token, process.env.SECRET_KEY);
      req.headers.userId = decodedData.userId;
      req.headers.userType = decodedData.userType;
      next();
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

export const checkAdmin = (req, res, next) => {
    if(req.headers.userType != "ADMINISTRATOR"){
        res.status(403).json({message: "Only administrator can perform this action"});
        return;
    }
    next();
}

export const checkModerator = (req, res, next) => {
    if(req.headers.userType == "USER"){
        res.status(403).json({message: "You don't have permission to perform this action"});
        return;
    }
    next();
}