import { Client } from "react-native-appwrite";
import { appWriteConfig } from "./appWriteClient";
// Init your React Native SDK
export const client = new Client();

client
  .setEndpoint(appWriteConfig.endpoint) // Your Appwrite Endpoint
  .setProject(appWriteConfig.projectId) // Your project ID
  .setPlatform(appWriteConfig.platform); // Your application ID or bundle ID.
