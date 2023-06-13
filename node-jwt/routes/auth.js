const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

//VALIDATION OF USER INPUTS
const Joi = require("@hapi/joi");

const registerSchema = Joi.object({
    firstName: Joi.string().min(3).required(),
    lastName: Joi.string().min(3).required(),
    email: Joi.string().min(3).required().email(),
    password: Joi.string().min(3).required(),
});

//SIGNUP USER
router.post("/register", async(req, res) => {
    //CHECKING IF USER EMAIL ALREADY EXISTS
    const emailExist = await User.findOne({ email: req.body.email});
    //IF EMAIL EXIST THEN RETURN
    if (emailExist) {
        res.status(400).send("Email already exists!!!");
        return;
    }

    //HASHING THE PASSWORD

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    //PROCESS OF ADDING NEW USER

    const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: hashedPassword,
    });

    try{
        //VALIDATION OF USER INPUTS

        const { error } = await registerSchema.validateAsync(req.body);

        if(error) {
            res.status(400).send(error.details[0].message);
            return;
        } else {
            const saveUser = await user.save();
            res.status(200).send("User created successfully!!!")
        }
    }
    catch (error) {
        res.status(500).send(error);
    }

});

    //LOGIN SCHEMA
    const loginSchema = Joi.object({
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required(),
    }); 

    //LOGIN USER

    router.post("/login", async (req, res) => {
        //CHECKING IF USER EMAIL EXISTS

        const user = await User.findOne( {email: req.body.email});
        if (!user) return res.status(400).send("Incorrect E-mail ID!!!");

        //CHECKING IF USER PASSWORD MATCHES

        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (!validPassword) return res.status(400).send("Incorrect password!!!");

        try {
            //VALIDATION OF USER INPUTS

            const { error } = await loginSchema.validateAsync(req.body);
            if(error) {
                res.status(400).send(error.details[0].message);
                return;
            } else {
                //SENDING BACK THE TOKEN
                const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET);
                res.header("auth-token", token).send(token);
            }
        }

        catch (error) {
            res.status(500).send(error);
        }
    });

module.exports = router;