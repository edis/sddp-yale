import Navbar from "../components/Navbar";

export default function Home() {
  return (
      <div>
          <section id={"home"}>
                <div className={"home-cover"}>
                    <div className={"container"}>
                        <h1>Welcome to SSDP YALE</h1>
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
      </div>
  )
}
