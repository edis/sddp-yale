import {usePamphlets} from "../hooks/cms-hook";
import dateFormat from "dateformat";

const Pamphlets = () => {

    const [pams, isLoading] = usePamphlets()

    console.log(pams);

    return (
       <div className={"container"}>
           <div className={"pamphlets"}>
               <h1 className={"header"}>Pamphlets</h1>
               <p className={"description"}>
                 Stay up to date with our the SSDP’s updates, news, and future plans (pamphlets)...
               </p>

               <div className={"pams-list"}>
                {!isLoading && pams.items.map((pam) => (
                   <img key={pam.fields.image.fields.file.url} className={"pam"} src={pam.fields.image.fields.file.url} />
                ))}
               </div>
           </div>
       </div>
    )
};

export default Pamphlets;
