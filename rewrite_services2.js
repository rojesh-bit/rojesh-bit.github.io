const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const newGridHTML = `        <div class="container">
          <div class="text-center reveal">
            <span class="section-tag">What We Do</span>
            <h2 class="section-title">Five Core Advisory Solutions</h2>
            <p class="section-desc">Each service is engineered to deliver measurable improvements to your trade's compliance, and operational performance.</p>
          </div>
          <div class="services-grid stagger">
            
            <div class="svc-card">
              <div class="svc-card-bg">
                <img src="./public/images/services-bg.png" alt="Professional trade facilitation and execution services Australia01" />
              </div>
              <div class="svc-card-overlay"></div>
              <div class="svc-card-body">
                <div>
                  <span class="svc-card-num">01 Core Service</span>
                  <div class="svc-card-title">trade facilitation &amp; Execution</div>
                  <div class="svc-card-desc">
                    We manage and deliver professional trade operations across residential and commercial spaces. Our approach combines rigorous standards with efficient execution, ensuring your environments are not just visually clean, but structurally hygienic.
                    <ul>
                      <li>Daily maintenance and deep-clean scheduling</li>
                      <li>Commercial-grade equipment and eco-friendly products</li>
                      <li>Site-specific trade protocols and compliance</li>
                      <li>Supervisor-verified quality control on every visit</li>
                    </ul>
                  </div>
                </div>
                <a href="./servicedetails.html?service=trade-trade-execution" class="svc-card-link">View Full Details<svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
              </div>
            </div>

            <div class="svc-card">
              <div class="svc-card-bg">
                <img src="./public/images/consulting.png" alt="deal structuring planning advisory commercial markets02" />
              </div>
              <div class="svc-card-overlay"></div>
              <div class="svc-card-body">
                <div>
                  <span class="svc-card-num">02 Advisory</span>
                  <div class="svc-card-title">deal structuring &amp; Planning</div>
                  <div class="svc-card-desc">
                    We design bespoke trade systems, schedules, and governance frameworks tailored to your business operations. Our strategic planning ensures every corner of your trade meets performance standards and compliance requirements efficiently.
                    <ul>
                      <li>Custom trade program design and documentation</li>
                      <li>KPI frameworks and performance dashboards</li>
                      <li>Cost optimisation and contractor benchmarking</li>
                      <li>Ongoing strategic advisory and audit support</li>
                    </ul>
                  </div>
                </div>
                <a href="./servicedetails.html?service=trade-strategy-planning" class="svc-card-link">View Full Details<svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
              </div>
            </div>

            <div class="svc-card">
              <div class="svc-card-bg">
                <img src="./public/images/team-advisory.png" alt="Market entry trade operations business setup Australia03" />
              </div>
              <div class="svc-card-overlay"></div>
              <div class="svc-card-body">
                <div>
                  <span class="svc-card-num">03 Growth</span>
                  <div class="svc-card-title">Market Entry for trade operations</div>
                  <div class="svc-card-desc">
                    Helping individuals and businesses establish trade operations from the ground up. From licensing and workforce structuring to operations systems and client acquisition strategies the full playbook for a compliant, scalable launch.
                    <ul>
                      <li>Business structure, licensing and regulatory setup</li>
                      <li>Workforce recruitment, training, and compliance</li>
                      <li>Systems, tech stack, and operational toolkits</li>
                      <li>Client acquisition strategy and pitch materials</li>
                    </ul>
                  </div>
                </div>
                <a href="./servicedetails.html?service=market-entry-trade-operations" class="svc-card-link">View Full Details<svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
              </div>
            </div>

            <div class="svc-card">
              <div class="svc-card-bg">
                <img src="./public/images/service-detail-bg.png" alt="Risk compliance compliance standards WHS advisory Australia04" />
              </div>
              <div class="svc-card-overlay"></div>
              <div class="svc-card-body">
                <div>
                  <span class="svc-card-num">04 Compliance</span>
                  <div class="svc-card-title">Risk, Compliance &amp; compliance Standards</div>
                  <div class="svc-card-desc">
                    We ensure your trade meets and exceeds all Australian compliance, safety, and regulatory standards. Our compliance advisory covers WHS audits, infection control protocols, HACCP, and sector-specific requirements for healthcare, education, and hospitality.
                    <ul>
                      <li>WHS and infection control compliance audits</li>
                      <li>Regulatory gap analysis and remediation planning</li>
                      <li>HACCP and food-safe compliance advisory</li>
                      <li>Staff training, documentation, and certification</li>
                    </ul>
                  </div>
                </div>
                <a href="./servicedetails.html?service=Risk%20compliance-compliance-standards" class="svc-card-link">View Full Details<svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
              </div>
            </div>

            <div class="svc-card">
              <div class="svc-card-bg">
                <img src="./public/images/about-bg.png" alt="Custom trade engagement solutions unique environments05" />
              </div>
              <div class="svc-card-overlay"></div>
              <div class="svc-card-body">
                <div>
                  <span class="svc-card-num">05 Custom</span>
                  <div class="svc-card-title">Custom Engagements</div>
                  <div class="svc-card-desc">
                    Every trade challenge is unique. Our custom engagement service caters to complex, one-of-a-kind situations including crisis response, post-construction clean-ups, multi-site operational rollouts, and bespoke consulting for high value environments.
                    <ul>
                      <li>Post-construction and handover trade</li>
                      <li>Crisis and emergency response programs</li>
                      <li>Multi-site trade standardisation and rollout</li>
                      <li>high value environment consulting</li>
                    </ul>
                  </div>
                </div>
                <a href="./servicedetails.html?service=custom-engagements" class="svc-card-link">View Full Details<svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
              </div>
            </div>

          </div>
        </div>`;

const startTag = '<div class="container">';
const targetText = 'What We Do';

let searchIdx = html.indexOf(targetText);
let cIdx = html.lastIndexOf(startTag, searchIdx);
let endIdx = html.indexOf('</section>', cIdx);

if (cIdx !== -1 && endIdx !== -1) {
    let replaced = html.substring(0, cIdx) + newGridHTML + "\n        " + html.substring(endIdx);
    fs.writeFileSync('index.html', replaced);
    console.log("Success");
} else {
    console.log("Failed to find bounds");
}
