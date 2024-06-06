import { Account } from "react-native-appwrite";
import { client } from "./appWriteConfig";

const account = new Account(client);

export async function signIn(email: string, password: string) {
  try {
    const session = await account.createEmailPasswordSession(email, password);
    return session;
  } catch (error) {
    throw error;
  }
}
