import { client } from "@/sanity/lib/client";

export async function getData() {
   const result = await client.fetch(`*[_type=="blogs"]`);
   return result;
};

export async function singleBlog(id: string) {
   const results = await client.fetch(`*[_type == "blogs" && _id == "${id}"]
`);
   return results[0];
}

export async function latestBlogFetch() {
   const result = await client.fetch(`*[_type == "blogs"] | order(_createdAt desc)[0]`);
   return result;
}

export async function trendingBlogFetch() {
   const results = await client.fetch(`
     *[_type == "blogs"] | order(_createdAt desc)[0...4]
   `);
   return results;
 }

 export async function categoryBlogFetch({category}: {category: string}) {
   const result = await client.fetch(`
     *[_type == "blogs" && category == "${category}"] | order(_createdAt desc)[0...5]
`);
   return result;
}
 