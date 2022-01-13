import jwt from 'jsonwebtoken';

export const verify = (req, res, next) => {
  try {
      if(!req.headers.authorization){
          res.status(400).json({message: "Nema tokena"});
          return;
      }
      const token = req.headers.authorization.split(" ")[1];
      if(!token){
          res.status(400).json({message: "error"});
          return;
      }
      const decodedData = jwt.verify(token, process.env.SECRET_KEY);
      req.headers.userId = decodedData.userId;
      req.headers.userType = decodedData.userType;
      next();
  } catch (error) {
      res.status(500).json({message: error.message});
      return;
  }
}

export const checkAdmin = (req, res, next) => {
    if(req.headers.userType != "ADMINISTRATOR"){
        res.status(403).json({message: "Samo administrator moze upravljati user-ima"});
        return;
    }
    next();
}
