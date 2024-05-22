import { Schema } from 'mongoose';
import { transformationTypes } from '../../../../constants';
import { model, models } from 'mongoose';

export interface Image extends Document{
    title: string;
    transformationType: string;
    publicId: string;
    secureUrl: string;
    width: number;
    height: number;
    config?: Record<string, any>;
    author?: {_id: string, firstName: string, lastName: string, } // Assuming 'author' is a string representing the user's ObjectId
    createdAt?: Date;
    updatedAt?: Date;
}

const ImageSchema = new Schema({
    title: {type: String, required: true},
    transformationType: {type: String, required: true},
    publicId: {type: String, required: true},
    secureUrl: {type: String, required: true},
    width: {type: Number, required: true},
    height: {type: Number, required: true},
    config: {type: Object},
    author: {type: Schema.Types.ObjectId, ref: 'User'},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
});

const Image = models?.Image || model('Image', ImageSchema);

export default Image;

//mongoose.model('Image', ImageSchema);