import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

class Connection{

    static run(){
        try{
            mongoose.connect(process.env.DB_URL).then((res)=>{
                console.log("Database connected successfully");
            }).catch((error)=>{
                console.log("Error while connecting to the database", error);
            });
        }catch(error){
            console.log("Error while connecting to the database", error);
        }
    }

}

export default Connection;