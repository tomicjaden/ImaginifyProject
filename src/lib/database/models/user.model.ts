import { Schema } from 'mongoose';
import { transformationTypes } from '../../../../constants';
import { model, models } from 'mongoose';

const UserSchema = new Schema({
    firstName: {type: String},
    lastName: {type: String},
    email: {type: String,},
    photo: {type: String, required: true},
    clerkId: {type: String, required: true, unique: true},
    creditBalance: {type: Number, default: 10},
    planId: {type: Number, default: 1},

})

const User = models?.User || model('User', UserSchema);
export default User;