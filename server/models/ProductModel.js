import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Product name is required'],
            trim: true
        },
        price: {
            type: Number,
            required: [true, 'Price is required'],
            default: 0,
            min: [0, 'Price must be a positive number']
        },
        description: {
            type: String,
            required: [true, 'Description is required'],
            trim: true
        },
        image: {
            type: String,
            required: [true, 'Image URL is required'],
            trim: true
        },
        category: {
            type: String,
            required: [true, 'Category is required'],
            trim: true
        },
        countInStock: {
            type: Number,
            required: [true, 'Count in stock is required'],
            default: 0,
            min: [0, 'Count in stock must be a non-negative integer']
        },
        rating: {
            type: Number,
            default: 0,
            min: [0, 'Rating must be a positive number'],
            max: [5, 'Rating cannot exceed 5']
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: [true, 'User ID is required'],
            ref: 'User'
        }
    },
    {
        collection: 'Product',
        timestamps: true
    }
);

const Product = mongoose.model('Product', productSchema);

export default Product;
