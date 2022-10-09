import TeamCard from "../components/TeamCard";

export default function Team() {
    return (
        <div className={"container"}>
        <div className={"team"}>
            <h1 className={"header"}>Meet our Team</h1>
            <div className={"members"}>
                    <div className={"top-two"}>
                        <TeamCard
                            image={"/static/amanda.png"}
                            name={"Amanda Ivatorov"}
                            title={"President & Treasurer"}
                            description={"Amanda is a Junior in Trumbull majoring in Psychology." +
                                "Outside of the classroom, Amanda enjoys weight lifting, comedy, and many cups of coffee." +
                                " Fun fact, Amanda is proficient in American Sign Language!"}
                        />

                        <TeamCard
                            image={"/static/sita.png"}
                            name={"Sita Kottilil"}
                            title={"Vice President"}
                            description={"Sita Kottilil is a member of the class of 2025 in Davenport College!" +
                                " She is a prospective Political Science major on the Pre-Med track. A fun fact " +
                                "about Sita is that she recently took up baking and can already make a " +
                                "mean coconut cream pie!"}
                        />
                    </div>

                <div className={"bottom-three"}>
                    <TeamCard
                        image={"/static/shakina.png"}
                        name={"Shakina Williams"}
                        title={"Communication Manager & Secretary"}
                        description={"Shakina Williams is a sophomore in Ben Franklin double majoring in ER&M" +
                            " and Sociology hoping to get a Masters in Public Policy. A (not so) fun fact about me" +
                            " is that I was born and raised in New York City and would like to get as far away from" +
                            " the city as possible after graduation."}
                    />

                    <TeamCard
                        image={"/static/kyle.png"}
                        name={"Kyle Shepherd"}
                        title={"Director of Program Expansion"}
                        description={"Kyle Shepherd is a sophomore in Timothy Dwight College from Westchester," +
                            " New York. At Yale, he is intending to major in Cognitive Science, with a focus" +
                            " on psychology and public policy. This year, he is excited to be the SSDP’s Director " +
                            "of Program Expansion and to foster the group’s collaborations with other " +
                            "organizations on campus!"}
                    />

                    <TeamCard
                        image={"/static/question-mark.png"}
                        name={"Your Name"}
                        title={"Good Doer"}
                        description={"This could be YOU!"}
                        hasButton={true}
                    />
                </div>
            </div>
        </div>
        </div>
    )
}
