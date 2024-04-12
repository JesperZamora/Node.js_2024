import bcrypt from 'bcrypt';

const saltRounds  = 14;
const plaintextPassword = "Hunter123";
const passwordHash = "$2b$14$LOP4nEKVXJajcBddJP7RtusXbAmK7qo6Rw9O6z.60YmQde3xMmMkq"

const hashedPassword = await bcrypt.hash(plaintextPassword, saltRounds);

//console.log(hashedPassword);

const isSame = await bcrypt.compare(plaintextPassword, passwordHash);

console.log(isSame);
