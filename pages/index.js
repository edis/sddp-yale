import Image from "next/image";

export default function Home() {
  return (
      <div>
          <section id={"home"}>
                <div className={"home-cover"}>
                    <div className={"container"}>
                        <h1 className={"home-header"}>Welcome to SSDP YALE</h1>
                    </div>
              </div>
          </section>

          <section id={"who"}>
              <div>
                  <div className={"container"}>
                      <h1 className={"header"}>Who we are?</h1>
                      <p className={"description"}>
                          SSDP aims to replace the disastrous war on drugs with policies rooted in
                          science, compassion, and human rights. We hope to make change from our campus
                          to the United Nations.
                      </p>
                      <div className={"gallery"}>
                          <img src={"/static/gallery-first.png"}  />
                          <img src={"/static/gallery-second.jpg"} />
                          <img src={"/static/gallery-third.jpg"}  />
                      </div>
                  </div>
              </div>
          </section>

          <section id={"join"}>
              <div className={"container"}>
                  <h1 className={"header"}>Ready to join?</h1>
                  <div className={"join-boxes"}>
                      <div className={"yale-box join-box"}>
                          <div className={"join-box-content"}>
                            <h3 className={"box-header"}>
                                Are you a Yale student?
                            </h3>
                            <p className={"box-subtext"}>
                                Are you ready to make a change in the world? ...
                            </p>
                            <a href={"https://forms.gle/2UxYcCcYM9r7gzJa9"} className={"box-btn yale-btn "} target={"_blank"} rel="noreferrer">
                                Join now
                            </a>
                          </div>
                      </div>
                      <div className={"haven-box join-box"}>
                          <div className={"join-box-content"}>
                          <h3 className={"box-header"}>
                              Are you a New Haven Member ?
                          </h3>
                          <p className={"box-subtext"}>
                              Are you ready to make a change in the world? ...
                          </p>
                              <a href={"https://forms.gle/AEpaXPyNrnJimGDh9 "} className={"box-btn haven-btn"} target={"_blank"} rel="noreferrer">
                              Join now
                            </a>
                          </div>
                      </div>
                  </div>
              </div>
          </section>

      </div>
  )
}
