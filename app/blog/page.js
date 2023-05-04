import Link from 'next/link'; // imports the link component from next.js

async function getBlogPosts() {
  return (await fetch('http://localhost:4000/posts', { next: { revalidate: 0 } })).json(); // fetches the posts from the server and returns them as json data 
}

export default async function page() {
  const posts = await getBlogPosts(); // gets the posts from the server
  console.log(posts); // logs the posts to the console
  return (
    <main>
      <div className="flex flex-wrap justify-between w-100 px-[28rem] gap-5">
        {posts?.map(blog => // maps through the posts and returns the following jsx for each post 
          <div key={blog.id} className="flex flex-col"> {/*  sets the key to the id of the blog post  */}
            <Link href={`/blog/${blog.id}`}> {/*  links to the blog post with the id of the blog post  */}
              <img src="https://placehold.co/200x200" alt="placeholder image" /> {/*  placeholder image  */}
            </Link>
            <Link href={`/blog/${blog.id}`} className="text-center w-[10rem]">{blog.title}</Link> {/*  links to the blog post with the id of the blog post  */}
          </div>
        )}
      </div>
    </main>
  )
}
