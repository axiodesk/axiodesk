import sanityClient from "@sanity/client";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION;

export default sanityClient({
  projectId, // you can find this in sanity.json
  dataset, // or the name you chose in step 1
  apiVersion,
  useCdn: true, // `false` if you want to ensure fresh data
});
