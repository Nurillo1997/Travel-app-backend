const Member = require("../models/Member");

let memberController = module.exports;


memberController.signup = async (req, res) => {
  try {
    console.log('POST cont/signup');
    const data = req.body;
    const member = new Member();
    const  new_member = await member.signupData(data);
    console.log('body:::', data);

    res.send('done');
  } catch (error) {
    console.log(`ERROR, cont/signup',${error.message}`);
  }
};
memberController.login = (req, res) => {
  console.log('POST cont.login');
  res.send("login sahifadasiz");
};
memberController.logout = (req, res) => {
  console.log('GET cont.logout');
  res.send("logout sahifadasiz");
};