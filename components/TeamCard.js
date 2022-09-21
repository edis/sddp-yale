import Image from "next/image";

const TeamCard = ({ name, title, description, image, hasButton }) => {


   return (
       <div className={"team-card"}>
           <div className={"image-box"}>
               <img src={image}  alt={name} />
           </div>

           <div className={"team-card-text"}>
               <p className={"name"}>{name}</p>
               <p className={"title"}>{title}</p>
               <p className={"desc"}>{description}</p>
               {hasButton ? <a href={"/#join"} className={"box-btn team-btn"}>Ready to Join?</a>: <></>}
           </div>
       </div>
   );
}

export default TeamCard;
