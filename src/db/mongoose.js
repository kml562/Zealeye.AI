import mongoose from "mongoose";

export const  startServer=async(port,uri,app)=>{
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("connected to mongoDB");
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    } catch (error) {
        console.log(error)
       console.log("not connected") 
    }
}