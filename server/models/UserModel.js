import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import envConfig from '../config/dotenv.js';

envConfig();

const bcryptSalt = parseInt(process.env.BCRYPT_SALT);

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Name is required'],
            trim: true
        },
        email: {
            type: String,
            required: [true, 'Email is required'],
            unique: true,
            lowercase: true,
            validate: [emailValidator, 'Invalid email address']
        },
        password: {
            type: String,
            required: [true, 'Password is required'],
            minlength: [6, 'Password must be at least 6 characters long']
        },
        isAdmin: {
            type: Boolean,
            default: false
        },
        orders: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Order'
            }
        ],
    },
    {
        collection: "User",
        timestamps: true
    }
);

function emailValidator(email) {
    const givenEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return givenEmail.test(email);
}

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    }
    const salt = await bcrypt.genSalt(bcryptSalt);
    this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model('User', userSchema);

export default User;
