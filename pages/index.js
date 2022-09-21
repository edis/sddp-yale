import Navbar from "../components/Navbar";
import Link from "next/link";

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
                          Text about projects ....... an international grassroots student organization
                          committed to replacing the devastating War on Drugs with policies rooted in
                          compassion, health, and human rights.
                      </p>
                  </div>
              </div>
          </section>

          <section id={"join"}>
              <div className={"container"}>
                  <h1 className={"header"}>Ready to join?</h1>
                  <p className={"description"}>
                      Are you ready to make a change in the world? ..... More Text for this sub-text heading ....
                      and some even more text
                  </p>
                  <div className={"join-boxes"}>
                      <div className={"yale-box join-box"}>
                          <div className={"join-box-content"}>
                            <h3 className={"box-header"}>
                                Are you a Yale student?
                            </h3>
                            <p className={"box-subtext"}>
                                Are you ready to make a change in the world? .....
                                More Text for this sub-text heading ....
                            </p>
                            <a href={"#"} className={"box-btn yale-btn "}>
                                Join now
                            </a>
                          </div>
                      </div>
                      <div className={"haven-box join-box"}>
                          <div className={"join-box-content"}>
                          <h3 className={"box-header"}>
                              New Haven Member ?
                          </h3>
                          <p className={"box-subtext"}>
                              Are you ready to make a change in the world? .....
                              More Text for this sub-text heading ....
                          </p>
                              <a href={"#"} className={"box-btn haven-btn"}>
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
