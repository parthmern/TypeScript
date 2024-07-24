// const A = z.string();
// type A = z.infer<typeof A>; // string

// const u: A = 12; // TypeError
// const u: A = "asdf"; // compiles

// =================================================

import z from 'zod' ;

const stringZodSchema = z.string();
type stringZodType = z.infer<typeof stringZodSchema> ; // string


// it is like inherting ZOD types in TYPE instance