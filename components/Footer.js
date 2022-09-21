const Footer = () => {
    return (
        <footer className={"footer"}>
            <div className={"container"}>
                <div className={"footer-inner"}>
                    <p>
                        © SSDP Yale 2022
                    </p>
                    <div className={"links"}>
                        <a className={"link"} target="_blank" href={"https://www.yale.edu/"} rel="noreferrer"><img src={"/static/insta.svg"} /></a>
                        <a className={"link"} target="_blank" href={"https://www.yale.edu/"} rel="noreferrer"><img src={"/static/facebook.svg"} /></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
