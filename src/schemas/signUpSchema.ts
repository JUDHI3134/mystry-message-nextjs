import {z} from "zod";

export const usernameValidation = z
.string()
.min(2,"Username must be atleast 2 character")
.max(20,"Username mustnot exceed more than 20 character")
.regex(/^[a-zA-Z0-9_]+$/,"username must not contain special character")


export const signupSchema = z.object({
    username:usernameValidation,
    email:z.string().email({message:"Invalid email Address"}),
    password:z.string().min(6,{message:"password must be atleast 6 character"})
})