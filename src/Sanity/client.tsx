import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "4y0y6frg",
  dataset: "production",
});

export default client;
