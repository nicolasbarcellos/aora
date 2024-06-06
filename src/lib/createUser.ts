import { Account, Avatars, Databases, ID } from "react-native-appwrite";
import { client } from "./appWriteConfig";
import { signIn } from "./signIn";
import { appWriteConfig } from "./appWriteClient";

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

type CreateUserProps = {
  email: string;
  password: string;
  username: string;
};

export async function createUser({
  email,
  password,
  username,
}: CreateUserProps) {
  try {
    const newAccount = await account.create(
      ID.unique(),
      email,
      password,
      username
    );

    if (!newAccount) {
      throw Error;
    }

    const avatarUrl = avatars.getInitials(username);
    await signIn(email, password);
    const newUser = await databases.createDocument(
      appWriteConfig.databaseId,
      appWriteConfig.userCollectionId,
      ID.unique(),
      {
        accountId: newAccount.$id,
        email,
        username,
        avatar: avatarUrl,
      }
    );

    return newUser;
  } catch (error) {
    console.log(error);
  }
}
