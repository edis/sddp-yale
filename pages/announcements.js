import  { usePosts } from "../hooks/cms-hook";
import Markdown from 'react-markdown'
import dateFormat from 'dateformat';

export default function Announcements() {
    const [posts, isLoading] = usePosts()


    return (
        <div>
            <div className={"container"}>
                <div className={"team"}>
                    <h1 className={"header"}>Announcements</h1>
                    <p className={"description"}>
                        Stay up to date with our the SSDP’s updates, news, and future plans ...
                    </p>
                    <br />

                    {!isLoading && posts.items.map((post) => (
                        <div key={post.fields.title} className={"post"}>
                            <h2 key={post.fields.title} className={"title"}>{post.fields.title}</h2>
                            <p key={post.fields.title} className={"date"}>
                                {dateFormat(post.fields.date, "mmmm dS, yyyy")}
                            </p>
                            <Markdown className={"content"}>
                                {post.fields.content}
                            </Markdown>
                            <hr />
                        </div>
                    ))}

                </div>
            </div>

        </div>
    )
}
