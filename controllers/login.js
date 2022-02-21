const users = [{ username: 'user1', password: 'aaa' }];
let notMatchingPassword = false;
let successfulRegister = false;

exports.getRegister = (req, res, next) => {
  res.render('register', {
    pageTitle: 'Register',
    notMatchingPassword: notMatchingPassword,
  });
};

exports.postNewUser = (req, res, next) => {
  if(req.body.pass !== req.body.rpass) {
    res.redirect('/register');
    notMatchingPassword = true;
  } else {
    users.push({username: req.body.user, password: req.body.pass});
    successfulRegister = true;
    notMatchingPassword = false;
    res.redirect('/');
  }  
};

exports.verification = (req, res, next) => {
  const userName = req.body.user;
  const password = req.body.pass;
  const matchUser = users.some(user => user.username === userName);
  const matchPass = users.some(user => user.password === password);
  if(matchUser && matchPass) {
    res.send('<h1>You have successfully loged in</h1>')
  } else {
    res.render('main', {
      again: true,
      pageTitle: 'Log In',
      successfulRegister: successfulRegister,
    })
  }
}

