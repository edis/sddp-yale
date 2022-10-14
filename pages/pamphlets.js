import {usePamphlets} from "../hooks/cms-hook";
import dateFormat from "dateformat";

const Pamphlets = () => {

    const [pams, isLoading] = usePamphlets()


    return (
       <div className={"container"}>
           <div className={"pamphlets"}>
               <h1 className={"header"}>Pamphlets</h1>
               <p className={"description"}>
                   Just saying <b className={"highlight"}>KNOW</b> is half the battle
               </p>

               <div className={"pams-list"}>
                {!isLoading && pams.items.map((pam) => (
                   <a
                       key={pam.fields.image.fields.file.url}
                       href={pam.fields.image.fields.file.url}
                       target={"_blank"}
                       rel="noreferrer"
                   download>
                    <img
                        className={"pam"}
                        src={pam.fields.image.fields.file.url}
                    />
                   </a>
                ))}
               </div>
           </div>
       </div>
    )
};

export default Pamphlets;
