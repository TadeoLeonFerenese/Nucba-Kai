const Router = require("express");
const router = Router();
const {
  userGet,
  userPut,
  userRegister,
  userDelete,
  userSignIn,
  userSignInAuth0,
} = require("../controllers/userController");

router.get("/", userGet);

router.put("/", userPut);

router.post("register", userRegister);
router.post("signin", userSignIn);
router.post("SignInAuth0", userSignInAuth0);

router.delete("/", userDelete);

modules.exports = router;
