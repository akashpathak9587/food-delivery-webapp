import mongoose from 'mongoose';

export const connectDb = async () => {
    await mongoose.connect('mongodb+srv://Akash:DJwISpuEXheW3YHI@cluster0.itpnf.mongodb.net/food-delivery').then(
        () => {
            console.log('DB Connected');
        }
    )
}