import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "o5zdfe1w", // you can find this in sanity.json
  dataset: "production", // or the name you chose in step 1
  apiVersion: '2023-02-08',
  useCdn: true, // `false` if you want to ensure fresh data
});
