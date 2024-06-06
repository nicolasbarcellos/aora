import { Account, Databases, Query } from "react-native-appwrite";
import { client } from "./appWriteConfig";
import { appWriteConfig } from "./appWriteClient";

const account = new Account(client);
const databases = new Databases(client);

export async function getCurrentUser() {
  try {
    const currentAccount = await account.get();

    if (!currentAccount) throw Error;

    const currentuser = await databases.listDocuments(
      appWriteConfig.databaseId,
      appWriteConfig.userCollectionId,
      [Query.equal("accountId", currentAccount.$id)]
    );

    if (!currentuser) throw Error;

    return currentuser.documents[0];
  } catch (error) {}
}
