import User from "../../models/User.js";

class UserTableSeeder{

    static async run(){
        const userData=[
            {
                'name':'admin',
                'email':'admin@gmail.com',
                'password':'admin002',
                'gender':'male',
                'role':'admin',
                'email_verified':true
            },
             {
                'name':'ram',
                'email':'ram@gmail.com',
                'password':'ram002',
                'gender':'male',
                'email_verified':true
            }
        ]

        userData.forEach(async(data)=>{
            const userExists=await User.findOne({email:data.email});
            if(!userExists){
                await User.create(data);
                console.log(`User with email ${data.email} created.`);
            }
        });
    }
}

export default UserTableSeeder;