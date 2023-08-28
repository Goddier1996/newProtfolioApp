import { createClient } from "@sanity/client";

const client = createClient({
  projectId: process.env.REACT_APP_SANITY || "",
  dataset: "production",
});

export default client;
