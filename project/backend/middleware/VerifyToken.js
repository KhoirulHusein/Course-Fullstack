import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; //jika user tidak megirimkan token maka variabel token kosong
  if(token == null) return res.sendStatus(401); //unauthetication
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if(err) return res.sendStatus(403); //forbiden
    req.email = decoded.email;
    next();
  })
}
