import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: [true, 'User ID is required'],
            ref: 'User'
        },
        orderItems: [
            {
                name: {
                    type: String,
                    required: [true, 'Product name is required'],
                    trim: true
                },
                qty: {
                    type: Number,
                    required: [true, 'Quantity is required'],
                    min: [1, 'Quantity must be at least 1']
                },
                price: {
                    type: Number,
                    required: [true, 'Price is required'],
                    min: [0, 'Price must be a positive number']
                },
                product: {
                    type: mongoose.Schema.Types.ObjectId,
                    required: [true, 'Product ID is required'],
                    ref: 'Product'
                }
            }
        ],
        isPaid: {
            type: Boolean,
            required: [true, 'Payment status is required'],
            default: false
        },
        isDelivered: {
            type: Boolean,
            required: [true, 'Delivery status is required'],
            default: false
        }
    },
    {
        collection: 'Order',
        timestamps: true
    }
);

const Order = mongoose.model('Order', orderSchema);

export default Order;
