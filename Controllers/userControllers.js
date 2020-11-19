import passport from "passport";
import routes from "../routes";
import User from "../models/User";

export const User_getJoin = (req, res) => {
  res.render("join", { pageTitle: "Join" });
};

export const User_postJoin = async (req, res, next) => {
  const {
    body: { name, email, password, password2 },
  } = req;
  if (password !== password2) {
    res.status(400);
    res.render("join", { pageTitle: "Join" });
  } else {
    try {
      const user = await User({
        name,
        email,
      });
      await User.register(user, password);
      next();
    } catch (error) {
      console.log(error);
      res.redirect(routes.home);
    }
  }
};

export const User_getLogin = (req, res) =>
  res.render("login", { pageTitle: "Login" });

export const User_postLogin = passport.authenticate("local", {
  failureRedirect: routes.login,
  successRedirect: routes.home,
});

export const User_logout = (req, res) => {
  //To Do: Process Log out
  res.redirect(routes.home);
};

export const User_userDetail = (req, res) =>
  res.render("userDetail", { pageTitle: "UserDetail" });
export const User_editProfile = (req, res) =>
  res.render("editProfile", { pageTitle: "EditProfile" });
export const User_changePassword = (req, res) =>
  res.render("changePassword", { pageTitle: "ChangePassword" });
