import  { usePhotos } from "../hooks/cms-hook";
import Markdown from 'react-markdown'
import dateFormat from 'dateformat';

export default function Announcements() {
    const [photos, isLoading] = usePhotos()


    return (
            <div className={"container"}>
                <div className={"pamphlets"}>
                    <h1 className={"header"}>Photos</h1>
                    <p className={"description"}>
                        Stay up to date with our SSDP’s photos ...
                    </p>

                    <div className={"pams-list"}>
                        {!isLoading && photos.items.map((pam) => (
                            <a
                                key={pam.fields.photo.fields.file.url}
                                href={pam.fields.photo.fields.file.url}
                                target={"_blank"}
                                rel="noreferrer"
                                download>
                                <img
                                    className={"pam"}
                                    src={pam.fields.photo.fields.file.url}
                                />
                            </a>
                        ))}
                    </div>
                </div>
            </div>

    )
}
