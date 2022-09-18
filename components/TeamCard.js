import Image from "next/image";

const TeamCard = ({ name, title, description, image }) => {
   return (
       <div className={"team-card"}>
           <div className={"image-box"}>
               <img src={image}  alt={name} />
           </div>

           <div className={"team-card-text"}>
               <p className={"name"}>{name}</p>
               <p className={"title"}>{title}</p>
               <p className={"desc"}>{description}</p>
           </div>
       </div>
   );
}

export default TeamCard;
