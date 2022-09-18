import TeamCard from "../components/TeamCard";

export default function Team() {
    return (
        <div className={"team"}>
            <h1 className={"header"}>Meet our Team</h1>
            <p className={"description"}>
                Our team and members are at the heart of everything we do.
                They are the makers, changers, influencers, and doers of SSDP Yale.
            </p>
            <div className={"members"}>
                <TeamCard
                    image={"/static/amanda.png"}
                    name={"Amanda Ivatorov"}
                    title={"President & Treasurer"}
                    description={"Amanda is a Junior in Trumbull majoring in Psychology." +
                        "Outside of the classroom, Amanda enjoys weight lifting, comedy, and many cups of coffee." +
                        " Fun fact, Amanda is proficient in American Sign Language!"}
                />


            </div>
        </div>
    )
}
