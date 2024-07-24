import { z } from "zod";
import express from "express";

const app = express();

// Define the schema for profile update
const userProfileSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  age: z
    .number()
    .min(18, { message: "You must be at least 18 years old" })
    .optional(),
});

// INFER concept from zod to ts
type finalUserSchema = z.infer<typeof userProfileSchema> 

app.put("/user", (req, res) => {
  // adding zod validation if successful then 
  const { success } = userProfileSchema.safeParse(req.body);
  const updateBody = req.body; // how to assign a type to updateBody? -- i donot need to assign type bcz it comes already after zod validation

  // const updateBody : finalUserSchema = req.body ;

  if (!success) {
    res.status(411).json({});
    return;
  }

  // update database here
  res.json({
    message: "User updated",
  });

});

app.listen(3000);
