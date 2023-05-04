async function getBlogPosts(id) {
    return (await fetch(`http://localhost:4000/posts/${id}`, { next: { revalidate: 0 } })).json(); // fetches the posts from the server and returns them as json data, the backticks allow us to use the id variable in the url. 
}


export default async function BlogPost({ params }) {
    const post = await getBlogPosts(params.id); // gets the post with the id of the params.id
    console.log(post); // logs the post to the console
    return (
        <article className="flex flex-wrap flex-col gap-4">
            <h1 className="text-2xl">{post.title}</h1>
            <img src="https://placehold.co/600x250" alt="placeholder image" />
            <p>{post.text}</p>
        </article>
    )
}
