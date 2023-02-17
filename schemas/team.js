import { defineField, defineType } from "sanity";

export default defineType({
  name: "team",
  title: "Team",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
    }),
    defineField({
      name: "designation",
      title: "Designation",
      type: "string",
    }),
    defineField({
      name: "bio",
      title: "Bio",
      type: "blockContent",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "twLink",
      title: "Twitter Link",
      type: "string",
    }),
    defineField({
      name: "linkedin",
      title: "Linked In Link",
      type: "string",
    }),
    defineField({
      name: "github",
      title: "Github",
      type: "string",
    }),
    defineField({
      name: "researchGate",
      title: "Research Gate",
      type: "string",
    }),
  ],
});
