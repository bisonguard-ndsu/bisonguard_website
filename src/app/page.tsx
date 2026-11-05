/* eslint-disable @next/next/no-img-element */
import { MainButton, Muted, Section, vars } from "@/components/kit";
import { adamsNotify, assetWindow, roadloggerChecks, turnflowStat } from "@/components/home/fragments";
import { metrics, testimonial } from "@/content/evidence";

/*
  type: software
  deal: hero triptych, nav nav-mega, close close-type, footer footer-statement, rhythm dark-band,
        buttons solid, mark the client's logo, type host, palette brand, ground sky,
        grounds none, effect none, moments none (the client asked for no glows or gradients)
*/

const pos = (l: number, t: number, w: number, h?: number) => vars({ left: `${l}%`, top: `${t}%`, width: `${w}%`, ...(h ? { height: `${h}%` } : {}) });

function Hero() {
  return (
    <section className="hero hero--triptych" aria-labelledby="hero-h">
      <div className="wrap">
        <div className="hero-text grid hero__grid">
          <div className="span-3">
            <h1 id="hero-h">Video analytics for road agencies</h1>
            <p className="hero__lead">
              Drive your roads once with a phone and get every sign, marking and defect on a map. 4 products, in service in the United States and West Africa.
            </p>
          </div>

          <div
            className="ly-collage span-6 start-4"
            role="img"
            aria-label="A highway sign detected in AdAMS, an intersection count in Turnflow and a pothole case in RoadLogger"
          >
            {/* AdAMS: the road frame, the sign it found, the phone that filmed it */}
            <div className="ly-collage__set is-on">
              <div className="ly-piece" style={pos(4, 6, 66, 50)}>
                <img src="/media/site/highway-sign.webp" alt="" />
                <span className="det" style={pos(34.6, 32.8, 32.5, 24)}>
                  <span>Guide sign 0.98</span>
                </span>
                <span className="det det--r" style={pos(47.6, 60.8, 13.4, 8)}>
                  <span>Lane signals 0.93</span>
                </span>
              </div>
              <div className="ly-piece pc-card" style={pos(56, 20, 40)}>
                <span className="lbl">AdAMS · Sign record</span>
                <b>Guide sign D1-2</b>
                <div className="ln">
                  <span>Condition</span>
                  <em className="ok">Good</em>
                </div>
                <div className="ln">
                  <span>Retroreflectivity</span>
                  <em>Pass</em>
                </div>
                <div className="ln">
                  <span>Seen in</span>
                  <em>9 frames</em>
                </div>
              </div>
              <div className="ly-piece" style={pos(46, 62, 50, 34)}>
                <img src="/media/site/phone-dashboard.webp" alt="" style={{ objectPosition: "50% 60%" }} />
              </div>
            </div>

            {/* Turnflow: the intersection and its counts */}
            <div className="ly-collage__set" aria-hidden="true">
              <div className="ly-piece" style={pos(4, 6, 56, 58)}>
                <img src="/media/hero/turnflow.webp" alt="" style={{ objectPosition: "50% 40%" }} />
              </div>
              <div className="ly-piece pc-card pc-counts" style={pos(44, 40, 52)}>
                <span className="lbl">Turnflow · Main St and 13th Ave, 7:00 to 9:00</span>
                <table>
                  <thead>
                    <tr>
                      <th>Approach</th>
                      <th>Left</th>
                      <th>Thru</th>
                      <th>Right</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>Northbound</td><td>142</td><td>611</td><td>88</td></tr>
                    <tr><td>Southbound</td><td>97</td><td>574</td><td>121</td></tr>
                    <tr><td>Eastbound</td><td>66</td><td>203</td><td>49</td></tr>
                    <tr><td>Westbound</td><td>58</td><td>131</td><td>44</td></tr>
                  </tbody>
                </table>
              </div>
              <div className="ly-piece pc-card" style={pos(4, 70, 34)}>
                <span className="lbl">Report</span>
                <b>Turning movement count</b>
                <span className="chip">Ready to submit</span>
              </div>
            </div>

            {/* RoadLogger: the defect, the case, the repair */}
            <div className="ly-collage__set" aria-hidden="true">
              <div className="ly-piece" style={pos(36, 6, 60, 46)}>
                <img src="/media/hero/roadlogger.webp" alt="" />
              </div>
              <div className="ly-piece pc-card" style={pos(4, 22, 44)}>
                <span className="lbl">RoadLogger · Case 2318</span>
                <b>Pothole, 0.6 m wide</b>
                <div className="ln">
                  <span>Reported</span>
                  <em>Mar 4, 7:42</em>
                </div>
                <div className="ln">
                  <span>Crew</span>
                  <em>District 3</em>
                </div>
                <div className="ln">
                  <span>Status</span>
                  <em className="ok">Repaired</em>
                </div>
              </div>
              <div className="ly-piece" style={pos(36, 58, 60, 38)}>
                <img src="/media/site/roller.webp" alt="" style={{ objectPosition: "50% 55%" }} />
              </div>
            </div>
          </div>

          <div className="span-3 start-10 hero__cta">
            <MainButton />
          </div>
        </div>
      </div>
    </section>
  );
}

function Register() {
  return (
    <Section id="register">
      <div className="grid">
        <h2 className="span-5" id="register-h">
          Every road asset in one register
        </h2>
        <p className="span-6 start-7 muted t-lead">
          AdAMS finds each sign, marking and light in your drive video, grades it and puts it on the map. Open any asset to see the frame it came from.{" "}
          <a className="link" href="/products/adams">
            See AdAMS
          </a>
        </p>
      </div>
      <div className="ui app fill" role="img" aria-label="The AdAMS sign register beside an open stop sign record with its video frame" data-ui-pause-host="">
        <div className="app__pane app__pane--list" data-ui-loop="" dangerouslySetInnerHTML={{ __html: assetWindow }} />
        <div className="app__pane app__pane--open">
          <div className="asset">
            <div className="asset__bar">
              <b>Guide sign D1-2</b>
              <span className="mono">I-190 N · track 23 · frame 1,482</span>
              <span className="chip">Good</span>
            </div>
            <div className="asset__body">
              <div className="asset__shot">
                <img src="/media/site/highway-sign.webp" alt="" />
                <span className="det" style={pos(34.6, 32.8, 32.5, 24)}>
                  <span>Guide sign 0.98</span>
                </span>
              </div>
              <dl className="asset__attrs">
                <div>
                  <dt>Type</dt>
                  <dd>Guide, overhead</dd>
                </div>
                <div>
                  <dt>Condition</dt>
                  <dd>Good</dd>
                </div>
                <div>
                  <dt>Retroreflectivity</dt>
                  <dd>Pass</dd>
                </div>
                <div>
                  <dt>Seen in</dt>
                  <dd>9 frames</dd>
                </div>
                <div>
                  <dt>Recording</dt>
                  <dd>74, at 0:53</dd>
                </div>
                <div>
                  <dt>Last inspected</dt>
                  <dd>Mar 4</dd>
                </div>
                <div>
                  <dt>Work order</dt>
                  <dd>None open</dd>
                </div>
              </dl>
            </div>
            <table className="asset__log">
              <thead>
                <tr>
                  <th>Inspection</th>
                  <th>Source</th>
                  <th>Condition</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Mar 4", "Recording 74", "Good"],
                  ["Nov 18", "Recording 61", "Good"],
                  ["Jul 9", "Recording 48", "Fair, faded legend"],
                  ["Apr 2", "Recording 33", "Fair"],
                  ["Oct 27", "Recording 20", "Good"],
                  ["Jun 14", "Recording 9", "Good"],
                ].map(([d, r, c]) => (
                  <tr key={d}>
                    <td>{d}</td>
                    <td>{r}</td>
                    <td>{c}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Products() {
  return (
    <Section id="products" h={2}>
      <div className="group">
        <div className="section-head">
          <h2 id="products-h">
            Four products, one road network. <Muted>From the survey to the repair.</Muted>
          </h2>
        </div>
        <div className="grid">
          <a className="card card--row span-6" href="/products/adams">
            <h3>Maps signs and pavement defects</h3>
            <p>A phone on the dashboard films the drive. AdAMS places every sign and defect on the map with its frame.</p>
            <div className="panel">
              <div className="stage stage--fade-b">
                <div
                  className="at-rise fit"
                  style={vars({ "--fit-max": "400px", "--ax": "32px", "--ay": "40px", "--ay-sm": "32px" })}
                  data-ui-loop=""
                  dangerouslySetInnerHTML={{ __html: adamsNotify }}
                />
              </div>
            </div>
          </a>
          <a className="card card--row span-6" href="/products/traffic-management">
            <h3>Watches every traffic camera live</h3>
            <p>TMC puts your intersection and corridor cameras on one wall and records them on a schedule.</p>
            <div className="panel">
              <div className="stage stage--fade-b">
                <div className="at-rise fit to-edge" style={vars({ "--fit-max": "460px", "--ax": "32px", "--ay": "40px", "--ay-sm": "32px" })}>
                  <div className="ui cams">
                    <div className="cam">
                      <img src="/media/site/signal-traffic.webp" alt="" />
                      <span className="cam__name">
                        <i />
                        Main St and 13th Ave
                      </span>
                    </div>
                    <div className="cam">
                      <img src="/media/site/night-intersection.webp" alt="" />
                      <span className="cam__name">
                        <i />
                        University Dr
                      </span>
                    </div>
                    <div className="cam">
                      <img src="/media/site/interchange.webp" alt="" />
                      <span className="cam__name">
                        <i />
                        I-94 interchange
                      </span>
                    </div>
                    <div className="cam">
                      <img src="/media/hero/turnflow.webp" alt="" />
                      <span className="cam__name">
                        <i />
                        25th St S
                      </span>
                    </div>
                    <div className="cam">
                      <img src="/media/hero/company.webp" alt="" />
                      <span className="cam__name">
                        <i />
                        Broadway N
                      </span>
                    </div>
                    <div className="cam">
                      <img src="/media/site/markings.webp" alt="" />
                      <span className="cam__name">
                        <i />
                        45th St S
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className="grid">
        <a className="card card--row span-6" href="/products/turnflow">
          <h3>Counts every turning movement</h3>
          <p>Turnflow counts vehicles by approach and movement from intersection video, with the clip behind each count.</p>
          <div className="panel">
            <div className="stage stage--fade-b">
              <div className="at-rise fit to-edge" style={vars({ "--fit-max": "440px", "--ax": "32px", "--ay": "40px", "--ay-sm": "32px" })} dangerouslySetInnerHTML={{ __html: turnflowStat }} />
            </div>
          </div>
        </a>
        <a className="card card--row span-6" href="/products/roadlogger">
          <h3>Tracks each repair to the end</h3>
          <p>RoadLogger runs inspections on the phones crews carry, even offline, and follows each case to a verified fix.</p>
          <div className="panel">
            <div className="stage stage--fade-b">
              <div className="at-rise fit" style={vars({ "--fit-max": "340px", "--ax": "32px", "--ay": "40px", "--ay-sm": "32px" })} dangerouslySetInnerHTML={{ __html: roadloggerChecks }} />
            </div>
          </div>
        </a>
      </div>
    </Section>
  );
}

function Fargo() {
  return (
    <Section id="fargo" className="ground-inverse">
      <div className="grid fill">
        <div className="span-5 stack-5">
          <h2 id="fargo-h">Fargo and West Fargo, surveyed from one car</h2>
          <p className="t-lead">
            A phone on the dashboard filmed both cities. AdAMS rated every road segment for roughness and placed each traffic sign with the frame it was seen in.
          </p>
          <p>
            {metrics.fargoSigns.value} traffic signs geolocated
            <br />
            {metrics.fargoSegments.value} road segments rated for roughness
            <br />
            {metrics.rec74Frames.value} frames read in one 1 min 42 s recording
          </p>
          <p>
            <a className="link" href="/work/fargo-west-fargo-survey">
              Read the Fargo case study
            </a>
          </p>
        </div>
        <div className="frame frame--split frame--fill span-6 start-7">
          <div className="stage stage--fade-br">
            <div className="at-corner to-edge" style={vars({ "--ax": "56px", "--ay": "56px", "--w": "880px" })}>
              <img className="shot" src="/media/site/adams-iri.webp" alt="AdAMS map of Fargo and West Fargo with each road segment coloured by roughness" />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

const solutionTiles = [
  { href: "/solutions/road-asset-inventory", img: "/media/site/guardrail.webp", alt: "A divided highway with a guardrail and overhead sign", title: "Road asset inventory", fact: "Signs, markings, guardrails" },
  { href: "/solutions/pavement-condition", img: "/media/site/road-crew.webp", alt: "A paver laying fresh asphalt on a road", title: "Pavement condition", fact: "Roughness and distress" },
  { href: "/solutions/traffic-studies", img: "/media/site/interchange.webp", alt: "An interchange from above with traffic on every ramp", title: "Traffic studies", fact: "Counts and headways" },
];

function Solutions() {
  return (
    <Section id="solutions">
      <div className="section-head section-head--row">
        <div>
          <h2 id="solutions-h">
            Work we take on. <Muted>Each starts from a problem agencies already have.</Muted>
          </h2>
        </div>
        <a className="link" href="/solutions">
          See all six solutions
        </a>
      </div>
      <div className="grid tiles3">
        {solutionTiles.map((t) => (
          <a className="tile span-4" href={t.href} key={t.href}>
            <div className="tile__media">
              <img src={t.img} alt={t.alt} loading="lazy" />
            </div>
            <div className="tile__head">
              <h3>{t.title}</h3>
              <span className="tile__price">{t.fact}</span>
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
}

function Clients() {
  return (
    <Section id="clients" className="ground-surface">
      <div className="section-head">
        <h2 id="clients-h">Clients and partners</h2>
      </div>
      <div className="grid fill">
        <figure className="quote span-8">
          <blockquote>“{testimonial.quote}”</blockquote>
          <div className="person">
            <img src="/media/site/elijah.webp" alt={testimonial.name} width={40} height={40} />
            <span>
              <span className="person__name">{testimonial.name}</span>
              <span className="person__role">{testimonial.org}</span>
            </span>
          </div>
        </figure>
        <div className="stat-aside span-3 start-10">
          <p className="t-stat">4</p>
          <p className="t-small muted">products in service with agencies and engineering firms</p>
        </div>
      </div>
      <div className="partners">
        <p className="t-small muted">Projects with</p>
        <div className="logos">
          <img src="/nddot.jpg" alt="North Dakota Department of Transportation" />
          <img src="/ndsu.png" alt="North Dakota State University" />
          <img src="/usnsf.jpg" alt="U.S. National Science Foundation" />
          <img src="/sustein.png" alt="Sustein" />
        </div>
      </div>
    </Section>
  );
}

const faqs = [
  {
    q: "What do we need to get started?",
    a: "For AdAMS and RoadLogger, a phone on the dashboard or in a crew's pocket. For TMC and Turnflow, access to the cameras or video you already have.",
  },
  {
    q: "Do our crews need training?",
    a: "Recording is one tap in the AdAMS app. RoadLogger works like any phone form, and inspections queue offline until the phone reconnects.",
  },
  {
    q: "How do we see the results?",
    a: "Everything lands on one map in your browser at app.infinicitylabs.org, with the frame or photo behind each record.",
  },
  {
    q: "Can we check the counts ourselves?",
    a: "Yes. Every Turnflow count links to the clip of the vehicle it counted, so an engineer can review any number before the report goes out.",
  },
  {
    q: "Where do you work?",
    a: "With agencies, cities and engineering firms in the United States and West Africa.",
  },
  {
    q: "Can we try it on our own roads?",
    a: "Yes. Send us a stretch of your network and we will run it through AdAMS and walk you through the results.",
  },
];

function Faq() {
  return (
    <Section id="faq">
      <div className="section-head">
        <h2 id="faq-h">Questions agencies ask</h2>
      </div>
      <div className="grid grid--top">
        {[faqs.slice(0, 3), faqs.slice(3)].map((col, i) => (
          <div className="faq span-6" key={i}>
            {col.map((f) => (
              <details open key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        ))}
      </div>
    </Section>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Register />
      <Products />
      <Fargo />
      <Solutions />
      <Clients />
      <Faq />
    </>
  );
}
