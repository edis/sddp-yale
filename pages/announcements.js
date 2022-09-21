// export default function Announcements() {
    // return (
    //     <div>
    //         <div className={"container"}>
    //             <div className={"team"}>
    //                 <h1 className={"header"}>Announcements</h1>
    //                 <p className={"description"}>
    //                     Stay up to date with our the SSDP’s updates, news, and future plans ...
    //                 </p>
    //
    //             </div>
    //         </div>
    //
    //     </div>
    // )
// }

import Head from "next/head"
import { Component } from 'react'
import { attributes, react as HomeContent } from '../content/home.md';


export default class Home extends Component {
    render() {
        let { title, content } = attributes;
        return (
            <>
                <Head>
                    <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
                </Head>
                <article>
                    <h1>{title}</h1>
                    <p>{content}</p>
                </article>
            </>
        )
    }
}
