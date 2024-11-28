class Slideshow {
    constructor() {
        this.currentSlide = 1;
        this.init();
    }

    init() {
        this.bindButtons();
    }

    bindButtons() {
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                this.goToSlide(parseInt(btn.dataset.slide));
            });
        });
    }

    goToSlide(slideNumber) {
        document.querySelector('.nav-btn.active').classList.remove('active');
        document.querySelector(`.nav-btn[data-slide="${slideNumber}"]`).classList.add('active');
        this.currentSlide = slideNumber;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Theme Toggle
    const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
        if (currentTheme === 'dark') {
            toggleSwitch.checked = true;
        }
    }

    function switchTheme(e) {
        if (e.target.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
    }

    toggleSwitch.addEventListener('change', switchTheme, false);

    // Slideshow Navigation
    const slides = [
        // Slide 1: User Req
        {
            title: "User Requirements for Plantation Tracking System",
            description: "",
            features: [
                `<div class="requirements-content">
                    <div class="main-requirements">
                        <ul>
                            <li><i class="fas fa-users"></i> Track 5,000 workers</li>
                            <li><i class="fas fa-map"></i> Cover multiple plantation areas totaling 260 hectares</li>
                            <li><i class="fas fa-location-dot"></i> Show worker locations in real-time</li>
                        </ul>
                    </div>

                    <div class="feature-section">
                        <h3><i class="fas fa-star"></i> Main Features</h3>
                        <div class="feature-group">
                            <h4>Location Tracking (Must Have)</h4>
                            <ul>
                                <li>See where workers are right now</li>
                                <li>Cover all plantation areas</li>
                                <li>Work in areas with no phone signal</li>
                            </ul>
                        </div>
                        
                        <div class="feature-group">
                            <h4>Safety Features (Optional)</h4>
                            <ul>
                                <li>Emergency button for help</li>
                                <li>Send alerts if workers need assistance</li>
                                <li>Keep track of who is in which area</li>
                            </ul>
                        </div>
                    </div>

                    <div class="access-section">
                        <h3><i class="fas fa-lock"></i> System Access</h3>
                        <ul>
                            <li>Managers can see all areas</li>
                            <li>Supervisors see their own areas</li>
                            <li>Simple screens that are easy to use</li>
                            <li>Works on computers and phones</li>
                        </ul>
                    </div>
                </div>`
            ],
            image: "images/plantation-management.jpg"
        },
        
        // Slide 2: Solutions
        {
            title: "Comparing Technologies for Plantation Tracking System",
            description: "",
            features: [
                `<div class="tech-comparison-content">
                    <table class="tech-comparison">
                        <tr>
                            <th>Feature</th>
                            <th>Bluetooth</th>
                            <th>Wi-Fi</th>
                            <th>Cellular</th>
                            <th>LoRaWAN</th>
                        </tr>
                        <tr>
                            <td>Power Consumption</td>
                            <td>Very Low</td>
                            <td>High</td>
                            <td>Medium</td>
                            <td>Very Low</td>
                        </tr>
                        <tr>
                            <td>Coverage</td>
                            <td>Up to 100m</td>
                            <td>Up to 200m</td>
                            <td>Nationwide (limited in remote areas)</td>
                            <td>15km range (7km in hilly terrain)</td>
                        </tr>
                        <tr>
                            <td>Cost</td>
                            <td>Very Low</td>
                            <td>Moderate</td>
                            <td>High</td>
                            <td>Lower</td>
                        </tr>
                        <tr>
                            <td>Data Rate</td>
                            <td>Low</td>
                            <td>High</td>
                            <td>High</td>
                            <td>Low</td>
                        </tr>
                        <tr>
                            <td>Infrastructure</td>
                            <td>Requires many repeaters</td>
                            <td>New/existing network setup</td>
                            <td>Cellular network needed</td>
                            <td>Gateway setup needed</td>
                        </tr>
                        <tr>
                            <td>Scalability</td>
                            <td>Limited</td>
                            <td>Limited</td>
                            <td>High</td>
                            <td>High</td>
                        </tr>
                        <tr>
                            <td>Reliability in Remote Areas</td>
                            <td>Low</td>
                            <td>Low</td>
                            <td>Moderate</td>
                            <td>High</td>
                        </tr>
                        <tr>
                            <td>Suitability for Dense Vegetation</td>
                            <td>Poor</td>
                            <td>Poor</td>
                            <td>Moderate</td>
                            <td>Excellent</td>
                        </tr>
                    </table>

                    <div class="conclusion">
                        <h3>Conclusion</h3>
                        <p>LoRaWAN is the best option for plantation tracking:</p>
                        <ul>
                            <li>Long-range coverage</li>
                            <li>Low power consumption</li>
                            <li>Reliable in remote areas and dense vegetation</li>
                            <li>Cost-effective and scalable</li>
                        </ul>
                    </div>
                </div>`
            ]
        },
        
        // Slide 3: Proposal
        {
            title: "PG-01 & PG-02 GPS Tracking Solutions",
            description: "Comprehensive tracking solutions for both outdoor and indoor plantation environments",
            features: [
                `<div class="products-container">
                    <div class="product-section">
                        <h3><i class="fas fa-satellite"></i> PG-01 (Outdoor GPS Tracker)</h3>
                        <div class="product-content">
                            <div class="product-info">
                                <p class="overview">PG-01 is a GPS-based tracker for real-time outdoor monitoring in plantations. Using LoRaWAN technology, it offers reliable long-range connectivity, even in remote areas.</p>
                                
                                <h4>Key Features</h4>
                                <ul>
                                    <li>Outdoor Tracking: Accurate GPS positioning</li>
                                    <li>Long-Range Connectivity: Covers up to 15km per gateway</li>
                                    <li>Durable Design: Water and dust-resistant</li>
                                    <li>Efficient Battery: Operates up to 3 days per charge</li>
                                </ul>
                                
                                <h4>Ideal For</h4>
                                <ul>
                                    <li>Monitoring worker movements in large outdoor plantations</li>
                                    <li>Enhancing operational efficiency and safety in remote locations</li>
                                </ul>
                            </div>
                            <div class="product-image">
                                <img src="images/pg-01.jpg" alt="PG-01 Outdoor GPS Tracker">
                            </div>
                        </div>
                    </div>

                    <div class="product-section">
                        <h3><i class="fas fa-building"></i> PG-02 (Indoor Tracker with SOS Button)</h3>
                        <div class="product-content">
                            <div class="product-info">
                                <p class="overview">PG-02 is a Bluetooth-enabled tracker with an SOS button for safety and indoor positioning. It uses LoRaWAN for seamless connectivity and accurate location tracking.</p>
                                
                                <h4>Key Features</h4>
                                <ul>
                                    <li>Indoor Tracking: Bluetooth for precise positioning (requires beacons)</li>
                                    <li>Emergency SOS Button: Alerts supervisors with location details</li>
                                    <li>Motion Detection: Tracks activity with an accelerometer</li>
                                    <li>Efficient Battery: Lasts up to 3 days of continuous use</li>
                                </ul>
                                
                                <h4>Ideal For</h4>
                                <ul>
                                    <li>Tracking workers indoors in warehouses or covered areas</li>
                                    <li>Ensuring safety with emergency response features</li>
                                </ul>
                            </div>
                            <div class="product-image">
                                <img src="images/pg-02.jpg" alt="PG-02 Indoor Tracker">
                            </div>
                        </div>
                    </div>
                </div>`
            ]
        },
        
        // Slide 4: Specs PG-01
        {
            title: "Specs PG-01",
            description: "Technical Specifications",
            features: [
                `<div class="specs-content">
                    <div class="main-description">
                        PG-01 Outdoor GPS Tracker is a standard protocol based on LoRaWAN. It is ideal for asset trackingas it is built-in 
                        with 9-Axis motion and GPS tracking sensors. The device is perfect for optimizing intra-logistic processes in areas of 
                        asset management, scenarios of warehouse and inventory, theft protection, and outdoor tracking.
                    </div>
                    
                    <div class="specs-details">
                        <div style="text-align: center; margin: 20px 0;">
                            <img src="images/pg-01-dimensions.png" alt="PG-01 Dimensions" style="max-width: 300px; margin: 0 auto;">
                        </div>

                        <div class="specs-section">
                            <h3>Physical Properties</h3>
                            <table class="specs-table">
                                <tr><td>Size</td><td>122mm×72.4mm×32.7mm</td></tr>
                                <tr><td>Net Weight</td><td>50 grams</td></tr>
                                <tr><td>LED</td><td>RGB</td></tr>
                                <tr><td>Shell Material</td><td>ABS</td></tr>
                                <tr><td>Color</td><td>White</td></tr>
                                <tr><td>Button</td><td>Mechanical</td></tr>
                            </table>
                        </div>

                        <div class="specs-section">
                            <h3>Wireless Parameter</h3>
                            <table class="specs-table">
                                <tr><td>Protocol</td><td>LoRaWAN®</td></tr>
                                <tr><td>Maximum Transmitted power</td><td>19dBm</td></tr>
                                <tr><td>Data Rate</td><td>250kps~5.4kbps</td></tr>
                                <tr><td>Sensitivity</td><td>-142.5dBm@SF12 300bps</td></tr>
                            </table>
                        </div>

                        <div class="specs-section">
                            <h3>Hardware Specification</h3>
                            <table class="specs-table">
                                <tr><td>Supply of Power</td><td>non-rechargeable 4000mAh battery</td></tr>
                                <tr><td>The current of Sleeping Mode</td><td><20uA</td></tr>
                                <tr><td>Positioning Mode</td><td>GPS: 2.5m accuracy</td></tr>
                                <tr><td>Communication distance</td><td>>1500m in the urban area</td></tr>
                                <tr><td>Operating Current</td><td>Max 150mA@20dBm</td></tr>
                            </table>
                        </div>

                        <div class="specs-section">
                            <h3>Working Environment</h3>
                            <table class="specs-table">
                                <tr><td>Working Temperature</td><td>-40~+70°C</td></tr>
                                <tr><td>Working Humidity</td><td>10%~95%</td></tr>
                                <tr><td>IP Grade</td><td>IP65</td></tr>
                            </table>
                        </div>
                    </div>
                </div>`
            ]
        },
        
        // Slide 5: Specs PG-02
        {
            title: "Specs PG-02",
            description: "Technical Specifications",
            features: [
                `<div class="specs-content">
                    <div class="main-description">
                        PG-02 is an advanced LoRaWAN®-based IoT tracking device with integrated emergency alert functionality. 
                        Designed for versatile use in both indoor and outdoor environments, it combines compact design with 
                        powerful features. The device's panic button capability enables immediate position reporting to servers 
                        during emergencies, making it an essential tool for personal safety and emergency response systems.
                    </div>
                    
                    <div class="specs-details">
                        <div style="text-align: center; margin: 20px 0;">
                            <img src="images/pg-02-dimensions.png" alt="PG-02 Dimensions" style="max-width: 300px; margin: 0 auto;">
                        </div>

                        <div class="specs-section">
                            <h3>Physical Properties</h3>
                            <table class="specs-table">
                                <tr><td>Size</td><td>73mm×40mm×17mm</td></tr>
                                <tr><td>Net Weight</td><td>48g</td></tr>
                                <tr><td>LED</td><td>RGB</td></tr>
                                <tr><td>Shell Material</td><td>ABS/PC + TPU</td></tr>
                                <tr><td>Color</td><td>White</td></tr>
                                <tr><td>Button</td><td>Mechanical</td></tr>
                            </table>
                        </div>

                        <div class="specs-section">
                            <h3>LoRa Performance</h3>
                            <table class="specs-table">
                                <tr><td>Sensitivity</td><td>-140dBm@SF12 300bps</td></tr>
                                <tr><td>LoRaWAN® Protocol</td><td>V1.0.3</td></tr>
                                <tr><td>Bluetooth</td><td>Bluetooth 4.2, Nordic nRF52 series main chip</td></tr>
                                <tr><td>Tx Power</td><td>Max 20 dBm</td></tr>
                                <tr><td>LoRa® Range</td><td>approximately 5 km (in the open region)</td></tr>
                                <tr><td>Bluetooth Range</td><td>approximately 50 m (in the open region)</td></tr>
                                <tr><td>LoRa® Frequency</td><td>US915/AU915/AS923/EU868/IN865</td></tr>
                            </table>
                        </div>

                        <div class="specs-section">
                            <h3>Power and Battery</h3>
                            <table class="specs-table">
                                <tr><td>Type</td><td>Rechargeable Li-battery</td></tr>
                                <tr><td>Working Current</td><td>< 220mA</td></tr>
                                <tr><td>Capacity</td><td>450mAH</td></tr>
                                <tr><td>Charging time</td><td>2.5 Hours@5V/1A</td></tr>
                                <tr><td>Charging Port</td><td>Type C</td></tr>
                            </table>
                        </div>

                        <div class="specs-section">
                            <h3>Sensor and RFID</h3>
                            <table class="specs-table">
                                <tr><td>RFID</td><td>Modified/MIFARE Classic EV1</td></tr>
                                <tr><td>Accelerometer</td><td>LIS3DHTR</td></tr>
                            </table>
                        </div>

                        <div class="specs-section">
                            <h3>Application Description</h3>
                            <table class="specs-table">
                                <tr><td>Effective Temperature</td><td>-10℃~60℃</td></tr>
                                <tr><td>IP Ranking</td><td>IP66</td></tr>
                                <tr><td>Charging Temperature</td><td>0℃~45 ℃</td></tr>
                            </table>
                        </div>

                        <div class="specs-section">
                            <h3>Certifications</h3>
                            <table class="specs-table">
                                <tr><td>USA(FCC)</td><td>Approved</td></tr>
                                <tr><td>EU(CE)</td><td>Approved</td></tr>
                                <tr><td>Additional certifications</td><td>can be customized</td></tr>
                            </table>
                        </div>
                    </div>
                </div>`
            ]
        },
        
        // Slide 6: Cost Analysis
        {
            title: "Cost Analysis",
            description: "Comprehensive breakdown of system implementation costs",
            features: [
                `<div class="overview-content">
                    <h3>Cost Considerations</h3>
                    <ul class="feature-list">
                        <li><i class="fas fa-user-tag"></i> GPS devices for all workers</li>
                        <li><i class="fas fa-broadcast-tower"></i> Gateway infrastructure installation</li>
                        <li><i class="fas fa-desktop"></i> Control center software deployment</li>
                        <li><i class="fas fa-tools"></i> Ongoing maintenance and support</li>
                    </ul>
                </div>`
            ]
        },
        
        // Slide 7: System Component
        {
            title: "System Component",
            description: "Complete overview of the GPS tracking system infrastructure",
            features: [
                `<div class="overview-content">
                    <h3>System Components</h3>
                    <ul class="feature-list">
                        <li>
                            <i class="fas fa-mobile-alt"></i>
                            <div>
                                <strong>GPS Trackers for Workers</strong>
                                <ul>
                                    <li>Updates location every few minutes</li>
                                    <li>Battery life of 3 days</li>
                                    <li>Water and dust-resistant</li>
                                </ul>
                            </div>
                        </li>
                        <li><i class="fas fa-broadcast-tower"></i> <strong>Signal Towers (Gateways)</strong></li>
                        <li><i class="fas fa-desktop"></i> <strong>Control Center Software</strong></li>
                        <li><i class="fas fa-tablet-alt"></i> <strong>Mobile App for Supervisors</strong></li>
                    </ul>

                    <h3>How It Works</h3>
                    <ul class="feature-list">
                        <li><i class="fas fa-user"></i> Workers wear compact GPS devices</li>
                        <li><i class="fas fa-signal"></i> Devices transmit location data to gateways</li>
                        <li><i class="fas fa-sync"></i> Data is processed and displayed in real-time via control center software and mobile apps</li>
                    </ul>
                </div>`
            ]
        },
        
        // Slide 8: Deployment
        {
            title: "Deployment",
            description: "Systematic implementation plan for the GPS tracking system",
            features: [
                `<div class="overview-content">
                    <h3>Step-by-Step Setup Guide</h3>
                    <ul class="feature-list">
                        <li><i class="fas fa-broadcast-tower"></i> Install signal towers strategically</li>
                        <li><i class="fas fa-desktop"></i> Configure control center software</li>
                        <li><i class="fas fa-user-tag"></i> Distribute GPS devices to workers</li>
                        <li><i class="fas fa-chalkboard-teacher"></i> Train workers and supervisors for system use</li>
                    </ul>
                </div>`
            ]
        },
        
        // Slide 9: Why This System?
        {
            title: "Why This System?",
            description: "This GPS tracking system simplifies plantation management, enhances worker safety, and reduces costs. With durable devices and extended battery life, it's tailored for the challenges of plantation environments.",
            features: [
                `<div class="overview-content">
                    <h3>Key Benefits</h3>
                    <ul class="feature-list">
                        <li><i class="fas fa-check-circle"></i> <strong>Simplified Management:</strong> Real-time tracking and monitoring</li>
                        <li><i class="fas fa-shield-alt"></i> <strong>Enhanced Safety:</strong> Quick response to emergencies</li>
                        <li><i class="fas fa-battery-full"></i> <strong>Long Battery Life:</strong> Reduced maintenance needs</li>
                        <li><i class="fas fa-hard-hat"></i> <strong>Durable Design:</strong> Built for plantation environments</li>
                    </ul>

                    <h3>Next Steps for Deployment</h3>
                    <ul class="feature-list">
                        <li><i class="fas fa-map"></i> Assess plantation coverage requirements</li>
                        <li><i class="fas fa-calculator"></i> Determine the number of devices needed</li>
                        <li><i class="fas fa-broadcast-tower"></i> Plan optimal placement for signal towers</li>
                    </ul>
                </div>`
            ]
        },
        
        // Slide 10: Conclusion
        {
            title: "A Cost-Effective and Reliable Solution for Remote Plantations",
            description: "",
            features: [
                `<div class="overview-content">
                    <h3>Cost Benefits</h3>
                    <ul class="feature-list">
                        <li><i class="fas fa-dollar-sign"></i> Eliminates monthly SIM card fees for up to 5,000 devices</li>
                        <li><i class="fas fa-tags"></i> Lower hardware costs per device</li>
                        <li><i class="fas fa-tools"></i> Minimal infrastructure maintenance expenses</li>
                    </ul>

                    <h3>Technical Advantages</h3>
                    <ul class="feature-list">
                        <li><i class="fas fa-broadcast-tower"></i> One gateway covers up to a 7km radius, even in hilly terrain</li>
                        <li><i class="fas fa-battery-full"></i> Extended battery life ranging from months to years</li>
                        <li><i class="fas fa-network-wired"></i> Supports thousands of devices on a single network</li>
                    </ul>

                    <h3>Specific Benefits for Plantations</h3>
                    <ul class="feature-list">
                        <li><i class="fas fa-signal"></i> Operates efficiently in areas without cellular coverage</li>
                        <li><i class="fas fa-tree"></i> Handles dense vegetation and rugged terrain</li>
                        <li><i class="fas fa-map-marker-alt"></i> Accurate tracking for plantation needs</li>
                        <li><i class="fas fa-check-circle"></i> Simple setup: only 2 gateways needed for 300 hectares</li>
                    </ul>
                </div>`
            ]
        }
    ];

    function createSlideHTML(slide) {
        return `
            <div class="content-card full-width">
                <h2>${slide.title}</h2>
                <p class="description">${slide.description}</p>
                ${Array.isArray(slide.features) ? 
                    `<ul class="features">
                        ${slide.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>` : 
                    slide.features}
            </div>
        `;
    }

    const slideshow = document.querySelector('.slideshow');
    const navBtns = document.querySelectorAll('.nav-btn');

    function showSlide(index) {
        const slide = slides[index] || slides[0];
        const slideElement = document.createElement('div');
        slideElement.className = 'slide active';
        slideElement.innerHTML = createSlideHTML(slide);
        
        const currentSlide = slideshow.querySelector('.slide');
        if (currentSlide) {
            slideshow.removeChild(currentSlide);
        }
        slideshow.appendChild(slideElement);

        // Update active nav button
        navBtns.forEach(btn => btn.classList.remove('active'));
        navBtns[index]?.classList.add('active');
    }

    // Initialize first slide
    showSlide(0);

    // Add click handlers to nav buttons
    navBtns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            showSlide(index);
        });
    });

    // Add smooth scroll to CTA buttons
    document.addEventListener('click', function(e) {
        if (e.target.closest('.cta-btn')) {
            e.preventDefault();
            const header = document.querySelector('header');
            header.scrollIntoView({ behavior: 'smooth' });
        }
    });
});