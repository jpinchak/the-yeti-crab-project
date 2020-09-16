const db = require('../models/usersModel');

const userControllers = {};

//query user will query the db to check if that email already exists or not
userControllers.queryUser = async (req, res, next) => {
  //destructure req.body and assign variables to res.locals

  // const newUser = {
  //   firstName: 'j',
  //   lastName: 'j',
  //   email: 'gfd',
  //   username: 'jhg',
  //   password: 'gfd',
  //   confirmPassword: 'gdddfd'
  // }

  // const { username, password, confirmPassword, email, firstName, lastName  } = newUser;

  const { email } = req.body;

  //checking if email exists in database. If a row with that email is returned, it will indicate that the email already has an account and return an error that the email is already registered.
  const email_selector = 'SELECT * FROM users WHERE email = $1';
  const email_value = [email];

  db.query(email_selector, email_value, (err, data) => {
    console.log(data.rows);
    if (err) return next(err);
    if (data.rows[0] === email) {
      return next({
        error: 'Email already registered, please login or use another email.',
      });
    }
    return next(); 
  });
}

userControllers.createNewUser = async (req, res, next) => {

  const { username, password, confirmPassword, email, firstName, lastName } = req.body;

  //check if passwords match
  if (password === confirmPassword) {
    res.locals.createuser = 'success';
    const user_selector = 'INSERT INTO users (_id, username, password, email, first_name, last_name) VALUES ($1, $2, $3, $4, $5, $6)';
    const user_value = [3927, username, password, email, firstName, lastName];

    db.query(user_selector, user_value, (err, data) => {
      if (err) return next(err);
        //send confirmation back to client
      res.locals.createuser = `user created successfully`;
      return next();
    });  
  } else {
    //if passwords don't match
    res.locals.createuser = 'Passwords not matching.';
    return next();
  }
};

userControllers.verifyUser = (req, res, next) => {
  // get username and password from req.body
  const { username, password }  = req.body;
  // store username as an array in values
  const values = [username];
  // query from user where id is equal to username
  const queryUser = 'SELECT * FROM users WHERE username = $1';
  // check if username exists by querying the database
  db.query(queryUser, values, (err, user) => {
    // if err send to global err handler
    if (!user.rows[0].username) {
      return next({ 
        error: err 
      }) 
    } 
      // if password checks out send back user id
      if (user.rows[0].password === password) {
        // console.log(user.rows[0]);
        //store in res.locals
        res.locals.login = user.rows[0]._id;
        // return next back to server.js
        return next();
      } else {
        res.locals.login = 'password is incorrect';
        return next();
      }
  })
}

userControllers.createPost = (req, res, next) => {
  // destructure title, pros, cons, date  from the req body
  const {userId, title, pros, cons} = req.body;
  // get current date as a stretch feature because it keeps breaking the table
  // let date = Date.now
  // store each req input into an array of values;
  let values = [Math.floor(Math.random() * 1000), title, pros, cons, userId];
  // create query to insert into db
  const postQuery = `INSERT INTO posts (_id, title, pros, cons, users_id)
                     VALUES ($1, $2, $3, $4, $5) RETURNING *`
  db.query (postQuery, values, (err, post) => {
    if (err) {
      return next({ error: err });
    }
    console.log('Insert values: ', post.rows[0]);
    res.locals.posts = post.rows[0];
    return next();
  });
};

userControllers.getAllPosts = (req, res, next) => {
  const allPosts = 'SELECT * FROM posts';
  db.query(allPosts, (err, posts) => {
    if (err) {
      return next({ error: err });
    }
    // send back an array of objects
    res.locals.posts = posts.rows;
    return next();
  });
};

module.exports = userControllers;
