// require('dotenv').config()
// const express = require('express')
// const app = express()
// const port = 5000
// const morgan = require('morgan');
// const configureDB = require('./config/db')
// const cors = require('cors')
// const {checkSchema} = require('express-validator')
// const upload = require('../Blog-App/app/middlewares/multer')

// const userRegisterValidationSchema = require('./app/validations/user-register-validation')
// const userLoginValidationSchema = require('./app/validations/user-login-validation')
// const userEditValidationSchema = require('./app/validations/user-edit-validation')
// const {postValidationSchema, idValidationSchema} = require('./app/validations/post-validation')
// const {commentValidationSchema, commentEditValidationSchema} = require('./app/validations/comment-validation')


// const usersCltr = require('./app/controllers/user-cltr')
// const authenticateUser = require('./app/middlewares/authentication')
// const postCltr = require('./app/controllers/post-cltr')
// const commentCltr = require('./app/controllers/comment-cltr')

// app.use(express.urlencoded({extended: false}))
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')))
// app.use(express.json())
// app.use(cors())
// configureDB()




  

// // Morgan
// app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));


// app.post('/api/users/register', checkSchema(userRegisterValidationSchema), usersCltr.register )
// app.post('/api/users/login', checkSchema(userLoginValidationSchema) , usersCltr.login)
// app.get('/api/users/profile', authenticateUser, usersCltr.account)
// app.put('/api/users/profile', authenticateUser,  checkSchema(userEditValidationSchema), usersCltr.update)
// app.post('/api/users/profile', authenticateUser,  upload.single('profilepicture'), usersCltr.uploadProfilePicture)

// app.get('/api/posts/myposts', authenticateUser, postCltr.myPosts)
// app.post('/api/posts', authenticateUser, checkSchema(postValidationSchema), postCltr.create)
// app.get('/api/posts', postCltr.allPost)
// app.get('/api/posts/:id', postCltr.single)
// app.put('/api/posts/:id', authenticateUser, checkSchema(postValidationSchema), postCltr.update)
// app.delete('/api/posts/:id', authenticateUser, checkSchema(idValidationSchema), postCltr.remove)

// app.post('/api/posts/:postId/comments', authenticateUser,checkSchema(commentValidationSchema), commentCltr.create)
// app.get('/api/posts/:postId/comments', commentCltr.get)
// app.get('/api/posts/:postId/comments/:commentId', authenticateUser, commentCltr.single)
// app.put('/api/posts/:postId/comments/:commentId', authenticateUser, checkSchema(commentEditValidationSchema), commentCltr.update)
// app.delete('/api/posts/:postId/comments/:commentId', authenticateUser, commentCltr.remove)



// app.listen(port, () => {
//     console.log('server running on port', port)
// })




// require('dotenv').config();
// const express = require('express');
// const path = require('path'); // Import the path module
// const app = express();
// const port = 5000;
// const morgan = require('morgan');
// const configureDB = require('./config/db');
// const cors = require('cors');
// const { checkSchema } = require('express-validator');
// const upload = require('./app/middlewares/multer'); // Corrected multer path

// const userRegisterValidationSchema = require('./app/validations/user-register-validation');
// const userLoginValidationSchema = require('./app/validations/user-login-validation');
// const userEditValidationSchema = require('./app/validations/user-edit-validation');
// const { postValidationSchema, idValidationSchema } = require('./app/validations/post-validation');
// const { commentValidationSchema, commentEditValidationSchema } = require('./app/validations/comment-validation');

// const usersCltr = require('./app/controllers/user-cltr');
// const authenticateUser = require('./app/middlewares/authentication');
// const postCltr = require('./app/controllers/post-cltr');
// const commentCltr = require('./app/controllers/comment-cltr');

// app.use(express.urlencoded({ extended: false }));
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
// app.use(express.json());
// app.use(cors());
// configureDB();

// // Morgan
// app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

// // User routes
// app.post('/api/users/register', checkSchema(userRegisterValidationSchema), usersCltr.register);
// app.post('/api/users/login', checkSchema(userLoginValidationSchema), usersCltr.login);
// app.get('/api/users/profile', authenticateUser, usersCltr.account);
// app.put('/api/users/profile', authenticateUser, checkSchema(userEditValidationSchema), usersCltr.update);

// app.post('/api/users/upload-profile-picture', authenticateUser, upload.single('profilePicture'), usersCltr.uploadProfilePicture);

// // Post routes
// app.get('/api/posts/myposts', authenticateUser, postCltr.myPosts);
// app.post('/api/posts', authenticateUser, checkSchema(postValidationSchema), postCltr.create);
// app.get('/api/posts', postCltr.allPost);
// app.get('/api/posts/:id', postCltr.single);
// app.put('/api/posts/:id', authenticateUser, checkSchema(postValidationSchema), postCltr.update);
// app.delete('/api/posts/:id', authenticateUser, checkSchema(idValidationSchema), postCltr.remove);

// // Comment routes
// app.post('/api/posts/:postId/comments', authenticateUser, checkSchema(commentValidationSchema), commentCltr.create);
// app.get('/api/posts/:postId/comments', commentCltr.get);
// app.get('/api/posts/:postId/comments/:commentId', authenticateUser, commentCltr.single);
// app.put('/api/posts/:postId/comments/:commentId', authenticateUser, checkSchema(commentEditValidationSchema), commentCltr.update);
// app.delete('/api/posts/:postId/comments/:commentId', authenticateUser, commentCltr.remove);

// // Error handling middleware
// app.use((err, req, res, next) => {
//     console.error(err.stack);
//     res.status(500).send({ error: 'Something went wrong!' });
// });

// app.listen(port, () => {
//     console.log('server running on port', port);
// });



require('dotenv').config();
const express = require('express');
const fs = require('fs')
const path = require('path'); // Import the path module
const app = express();
const port = 5000;
const morgan = require('morgan');
const configureDB = require('./config/db');
const cors = require('cors');
const { checkSchema } = require('express-validator');
const upload = require('./app/middlewares/multer'); // Corrected multer path


const userRegisterValidationSchema = require('./app/validations/user-register-validation');
const userLoginValidationSchema = require('./app/validations/user-login-validation');
const userEditValidationSchema = require('./app/validations/user-edit-validation');
const { postValidationSchema, idValidationSchema } = require('./app/validations/post-validation');
//const { commentValidationSchema,  } = require('./app/validations/comment-validation');

const usersCltr = require('./app/controllers/user-cltr');
const authenticateUser = require('./app/middlewares/authentication');
const postCltr = require('./app/controllers/post-cltr');
const commentCltr = require('./app/controllers/comment-cltr');
const { filter } = require('lodash');

app.use(express.urlencoded({ extended: false }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(express.json());
app.use(cors());
configureDB();



// Morgan
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

// User routes
app.post('/api/users/register', checkSchema(userRegisterValidationSchema), usersCltr.register);
app.post('/api/users/login', checkSchema(userLoginValidationSchema), usersCltr.login);
app.get('/api/users/profile', authenticateUser, usersCltr.account);
app.put('/api/users/profile', authenticateUser, checkSchema(userEditValidationSchema), usersCltr.update);

app.post('/api/users/upload-profile-picture', authenticateUser, upload.single('profilePicture'), usersCltr.uploadProfilePicture)

// Post routes
app.get('/api/posts/myposts', authenticateUser, postCltr.myPosts);
app.post('/api/posts', authenticateUser, checkSchema(postValidationSchema), postCltr.create);
app.get('/api/posts', postCltr.allPost);
app.get('/api/posts/:id', postCltr.single);
app.put('/api/posts/:id', authenticateUser, postCltr.update);
app.delete('/api/posts/:id', authenticateUser, checkSchema(idValidationSchema), postCltr.remove);

// Comment routes
app.post('/api/posts/:postId/comments', authenticateUser, commentCltr.create);
app.get('/api/posts/:postId/comments', commentCltr.get);
app.get('/api/posts/:postId/comments/:commentId', authenticateUser, commentCltr.single);
app.put('/api/posts/:postId/comments/:commentId', authenticateUser, commentCltr.update);
app.delete('/api/posts/:postId/comments/:commentId', authenticateUser,  commentCltr.remove);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({ error: 'Something went wrong!' });
});

app.listen(port, () => {
    console.log('server running on port', port);
});