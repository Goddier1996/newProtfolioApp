import { createClient } from "@sanity/client";

const client = createClient({
  projectId: process.env.REACT_APP_SANITY || "",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-08-28",
});



export default client;
