const express = require('express');
const bcryptjs = require('bcryptjs');
const UserModel = require('../users/model');
const path = require("path");
const bodyParser = require("body-parser");
const authRouter = express();
authRouter.use(express.static('../../../front-end')); 
authRouter.use(bodyParser.urlencoded({ extended: false }));
authRouter.use(bodyParser.json()); 

//register
// authRouter.get('/register',(req, res) => {
//         res.status(200).sendFile(path.resolve(__dirname + '/a.html'));
//     });
authRouter.post('/register', async (req, res) => {
    try {
        const userInfo = req.body;
        //check email/password//firstName/lastName/empty
        //check email regex
        //Check mail exist
        //check password regex
        
        const hashPassword = await bcryptjs.hash(userInfo.password, 10);

        const newUser = await UserModel.create({
            ...userInfo,
            password: hashPassword,
        })
        res.status(201).json(newUser)
    } catch (err) {
        res.status(500).end(err.message)
    }
})

//login
authRouter.post('/login', async (req, res) => {
    try {
        const loginInfo = req.body;
        console.log(loginInfo)
        //check email/password empty
        const user = await UserModel.findOne({ email: loginInfo.email }).exec();

        if (!user) {
            res.status(404).json({ message: 'User not found', success: false, });
        } else {
            const comparePassword = await bcryptjs.compare(loginInfo.password, user.password)//compare là bất đồng bộ nên cần await
            if (comparePassword) {
                // success
                //save session storage
                req.session.user = {
                    _id: user._id,
                    email: user.email,
                    permissions: user.permissions,
                };
                req.session.save();

                res.status(200).json({ message: 'login success', success: true })
            } else {
                //false
                res.status(200).json({ message: 'login false', success: false })
            }
        }
    } catch (err) {
        res.status(500).end(err.message)
    }
})

//logout
authRouter.get('/test',(req,res)=>{
    console.log(req.session)
    res.status(200).end();
})

authRouter.get('/logout',(req,res)=>{
    try{
        req.session.destroy();
        res.status(200).json({
            message: 'log out success', success: true
        })
    }
    catch(err){
        res.status(500).end(err.message)
    }
})
module.exports = authRouter;

