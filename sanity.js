// import { createClient } from "next-sanity";

// export const config = {
//   dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
//   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
//   apiVersion: "2022-03-25",
//   useCdn: process.env.node_ENV === "false",
// };

// export const sanityClient = createClient(config);

import sanityClient from "@sanity/client";

export const client = sanityClient({
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: "2022-03-25",
  token: 'skVcgE8qXZWUhVpPDl4F5pppjYGhuatFaRqCoFWhhVq8fgOglhAthPysoXiJQNSzYSb1pyHmZqdGabwIQGmGqnLBYAfualcpBLMWw0FfOW8eFaRLCNH1ZMlWkzKzfRHH8d5lc8ggodj0iQ4WgnXeaDUaERzRgOiE1f1Vtp3i3c0zd3vY4B4L',
  useCdn: process.env.node_ENV === "false",
});

export async function createPost(postData) {
  client
    .create(postData)
    .then((response) => {
      console.log("Document created successfully:", response);
    })
    .catch((error) => {
      console.error("Error creating document:", error);
    });
}
