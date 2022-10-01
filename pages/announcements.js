import { attributes } from 'content/announcements/*';
import {useEffect} from "react";

export default function Announcements() {
    useEffect(() => {
        print(attributes);
    }, [])


    return (
        <div>
            <div className={"container"}>
                <div className={"team"}>
                    <h1 className={"header"}>Announcements</h1>
                    <p className={"description"}>
                        Stay up to date with our the SSDP’s updates, news, and future plans ...
                    </p>

                    <article style={{ textAlign: "left"}}>
                        <br />
                        <h1>{title}</h1>
                        <p>{date}</p>
                        <p>{content}</p>
                    </article>
                </div>
            </div>

        </div>
    )
}

// We meet Monday at 6:30 pm, link to instagram, link to groupme
// groupme logo, and instagram logo
