import Image from "next/image";

export default function Home() {
  return (
    <div className="body-wrapper cursor">
        <header>
            <div className="smalllogo">
                <a href="#welcome-section" className="logolink">
                    <img src="small-icon-2.png" alt="" />
                </a>
            </div>
            <button className="nav-toggle"> <span className="hamburger"></span></button>

    
            <nav className="nav" id="navbar"> 
                <ul className="nav__list" id="navlinkitems">
                    <li className="nav__item">
                        <a href="#home-section" className="nav__link" id="home">Home</a>
                    </li>
                    <li className="nav__item">
                        <a href="#projects" className="nav__link" id="service">Projects</a>
                    </li>
                    <li className="nav__item">
                        <a href="#about-section" className="nav__link" id="about">About</a>
                    </li>
                    <li className="nav__item">
                        <a href="#skills-section" className="nav__link" id="work">Skills</a>
                    </li>
                    <li className="nav__item">
                        <a href="#contacts-section" className="nav__link" id="contact">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
        
        <section className="home-container" id="home-section">
            <div className="home-wrapper">
                <div className="text appear-bottom">
                    <p>Ayush Chauhan</p>
                    <p>Front-end / </p>
                    <p>Full-Stack Web Developer</p>
                </div>
                <div className="image">
                    <div className="image-wrapper appear-right"></div>
                </div>
            </div>
        </section>
        
        <section className="project" id="projects">
            <div className="section-heading">
                <div className="box-for-arow">
                    <div className="arrow arrow-1"></div>
                    <div className="arrow arrow-2"></div>
                </div>
                <div className="heading-text">
                    projects.
                </div>
            </div>

            <div className="projects-container">
                <div className="projects-wrapper project-1">
                    <div className="image-part appear-left">
                        <div className="image-wrapper"></div>
                    </div>
                    <div className="desc-part">
                        <div className="desc-container appear-right">
                            <div className="title">Full-Stack E-commerce</div>
                            <div className="icons-tray">
                                <i className="fa-brands fa-react icn"></i>
                                <img src="sanity.svg" alt="" className="sanity icn" />
                                <img src="next-js.svg" alt="" className="next icn" />
                                <img src="vercel.svg" alt="" className="vercel icn" />
                                <i className="fa-brands fa-cc-stripe icn"></i>
                            </div>
                            <div className="description">A fullstack e-commerce platform made using React.Js, developed on Next.Js with Sanity(CMS) as a backend. Platform has a functional Cart option with a payment method using Stripe with a success and failed landing page. The projects is successfully hosted at Vercel.</div>
                            <div className="note"></div>
                            <div className="hosting-link">
                                <a href="https://full-stack-ecommerce-ecru.vercel.app/" target="_blank" className="link-wrapper">
                                    <p>Run</p>
                                    <img src="arrow.svg" alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-container p-1 appear-bottom">
                    <div className="bg-wrapper">
                </div>
                </div>
            </div>
        
            <div className="divider-right">
                    <div className="divider-arrow divider-arrow-1"></div>
            </div>

            <div className="projects-container">
                <div className="projects-wrapper project-2">
                    <div className="desc-part">
                        <div className="desc-container appear-left">
                            <div className="title">Authentication in Next.js</div>
                            <div className="icons-tray">
                                <img src="typescript.svg" alt="" className="vercel icn" />
                                <i className="fa-brands fa-react icn"></i>
                                <img src="next-js.svg" alt="" className="next icn" />
                                <img src="mongodb.svg" alt="" className="vercel icn" />
                                <img src="vercel.svg" alt="" className="vercel icn" />
                            </div>
                            <div className="description">Next app for authentication having a middleware, login page and signup page with MongoDB for loging in new users data. The final route of the app is profile. The projects is made by using latest next src/ directory with TypeScript.</div>
                            <div className="note"></div>
                            <div className="hosting-link">
                                <a href="https://authentication-page-ts.vercel.app/" target="_blank" className="link-wrapper">
                                    <p>Run</p>
                                    <img src="arrow.svg" alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="image-part appear-right">
                        <div className="image-wrapper"></div>
                    </div>
                </div>
                <div className="bg-container p-2 appear-bottom">
                    <div className="bg-wrapper">
                </div>
                </div>
            </div>
        
            <div className="divider-left">
                    <div className="divider-arrow divider-arrow-1"></div>
                    <div className="divider-arrow divider-arrow-2"></div>
            </div>
        
            <div className="projects-container">
                <div className="projects-wrapper project-3">
                    <div className="image-part appear-left">
                        <div className="image-wrapper"></div>
                    </div>
                    <div className="desc-part">
                        <div className="desc-container appear-right">
                            <div className="title">Weather Project</div>
                            <div className="icons-tray">
                                <i className="fa-brands fa-node icn"></i>
                                <img src="express.svg" alt="" className="vercel icn" />
                            </div>
                            <div className="description">Weather Web App using Node.Js, Express.Js having 2 apis for weather and the current date of the user query. The project is hosted at Eailway.</div>
                            <div className="note"></div>
                            <div className="hosting-link">
                                <a href="https://openweather-jswo.onrender.com/" target="_blank" className="link-wrapper">
                                    <p>Run</p>
                                    <img src="arrow.svg" alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-container p-3 appear-bottom">
                    <div className="bg-wrapper">
                </div>
                </div>
            </div>
        
            <div className="divider-right">
                    <div className="divider-arrow divider-arrow-1"></div>
            </div>
            
            <div className="projects-container">
                <div className="projects-wrapper project-4">
                    <div className="desc-part">
                        <div className="desc-container appear-left">
                            <div className="title">Personal Blogs</div>
                            <div className="icons-tray">
                                <i className="fa-brands fa-node icn"></i>
                                <img src="express.svg" alt="" className="vercel icn" />
                                <img src="mongodb.svg" alt="" className="vercel icn" />
                                <img src="ejs.svg" alt="" className="vercel icn" />
                            </div>
                            <div className="description">Personal Blog platform using Node.Js, Express.Js, EJS and MongoDB. The project has a pagination with a feature of a search query available in the app. In the Admin router it has a functionality of creating, deleting and updating a post after logging in.  Admin router also has a middleware, using token, bcrypt & cookies.</div>
                            <div className="note"></div>
                            <div className="hosting-link">
                                <a href="https://calm-ruby-beaver-sari.cyclic.app/" target="_blank" className="link-wrapper">
                                    <p>Run</p>
                                    <img src="arrow.svg" alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="image-part appear-right">
                        <div className="image-wrapper"></div>
                    </div>
                </div>
                <div className="bg-container p-4 appear-top">
                    <div className="bg-wrapper">
                </div>
                </div>
            </div>
        
            <div className="divider-left">
                    <div className="divider-arrow divider-arrow-1"></div>
                    <div className="divider-arrow divider-arrow-2"></div>
            </div>
            <div className="projects-container">
                <div className="projects-wrapper project-5">
                    <div className="image-part appear-left">
                        <div className="image-wrapper"></div>
                    </div>
                    <div className="desc-part">
                        <div className="desc-container appear-right">
                            <div className="title">To-Do App</div>
                            <div className="icons-tray">
                                <i className="fa-brands fa-react icn"></i>
                                <img src="strapi.svg" alt="" className="sanity icn" />
                                <img src="next-js.svg" alt="" className="next icn" />
                                <img src="vercel.svg" alt="" className="vercel icn" />
                            </div>
                            <div className="description">A To-Do app to create a task, update and delete, made using React.Js, developed on Next.Js with Strapi(CMS) as a backend. The projects is successfully hosted at Vercel.</div>
                            <div className="note">(Note: please launch the strapi backend before launching the Next.Js frontend.)</div>
                            <div className="hosting-link">
                                <a href="https://todo-blog.onrender.com/" target="_blank" className="link-wrapper">
                                    <p>Run Strapi</p>
                                    <img src="arrow.svg" alt="" />
                                </a>
                            </div>
                            <div className="hosting-link">
                                <a href="https://todo-blog-ui.vercel.app/" target="_blank" className="link-wrapper">
                                    <p>Run the Project</p>
                                    <img src="arrow.svg" alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-container p-5 appear-bottom">
                    <div className="bg-wrapper"></div>
                </div>
            </div>
        
            <div className="divider-right">
                    <div className="divider-arrow divider-arrow-1"></div>
            </div>

            <div className="projects-container">
                <div className="projects-wrapper project-6">
                    <div className="desc-part">
                        <div className="desc-container appear-left">
                            <div className="title">Car Hub</div>
                            <div className="icons-tray">
                                <img src="typescript.svg" alt="" className="vercel icn" />
                                <i className="fa-brands fa-react icn"></i>
                                <img src="next-js.svg" alt="" className="next icn" />
                                <img src="tailwind-css.svg" alt="" className="tailwind icn" />
                                <img src="vercel.svg" alt="" className="vercel icn" />
                            </div>
                            <div className="description">Car Hub platform to lookup any car available to the public, using TypeScript, Tailwind-CSS, React.js, HeadlessUI, Next.js, rapid-api (cars-by-api-ninjas), and cdn.imagin.studio. This project specifically focuses on SSR (Server Side Rendering), so that any state changes triggered by updating manufacturer and model result in an update of parameters in the search URL, and the updated parameter in the URL results in a change of data in the index page accordingly.</div>
                            <div className="note"></div>
                            <div className="hosting-link">
                                <a href="https://23carhub.vercel.app/" target="_blank" className="link-wrapper">
                                    <p>Run</p>
                                    <img src="arrow.svg" alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="image-part appear-right">
                        <div className="image-wrapper"></div>
                    </div>
                </div>
                <div className="bg-container p-6 appear-bottom">
                    <div className="bg-wrapper">
                </div>
                </div>
            </div>

            <div className="divider-left">
                <div className="divider-arrow divider-arrow-1"></div>
                <div className="divider-arrow divider-arrow-2"></div>
            </div>

        </section>
        
        <section className="about" id="about-section">
            <div className="section-heading">
                <div className="box-for-arow">
                    <div className="arrow arrow-1"></div>
                    <div className="arrow arrow-2"></div>
                </div>
                <div className="heading-text">
                    about me.
                </div>
            </div>

            <div className="about-container">
                <div className="about-wrapper">
                    <div className="about-desc-part">
                        <div className="about-desc-wrapper"></div>
                        <p>My name is Ayush Chauhan, currently in my final year of my B.Tech. course. And my portfolio is a representation of all that I &apos; ve learned and accomplished as a science and engineering student.
                        </p>
                        <p>In my free  time i enjoy watching sitcoms, play video games & listen to music. My interests are photography,automobile & travel.
                        </p>
                        <p>I love designing websites and am looking for more opportunities for work.
                        </p>
                    </div>
                    <div className="about-image-part">
                        <div className="about-image-wrapper"></div>
                    </div>
                </div>
                <div className="about-bg-wrapper"></div>
            </div>
        </section>

        <section className="skills" id="skills-section">
            <div className="section-heading">
                <div className="box-for-arow">
                    <div className="arrow arrow-1"></div>
                    <div className="arrow arrow-2"></div>
                </div>
                <div className="heading-text appear-right">
                    skills.
                </div>
            </div>

            <div className="skills-container">
                <div className="skills-wrapper">
                    <div className="skills-logo-container">
                        <div className="skill-logo font-icon ">
                            <i className="fa-brands fa-html5 icn"></i>
                            <div className="black-box-hover">HTML</div>
                        </div>

                        <div className="skill-logo font-icon">
                            <i className="fa-brands fa-css3-alt icn"></i>
                            <div className="white-box-hover">CSS</div>
                        </div>

                        <div className="skill-logo font-icon">
                            <i className="fa-brands fa-js icn"></i>
                            <div className="black-box-hover">JS</div>
                        </div>

                        <div className="skill-logo">
                            <img src="ejs.svg" alt="" className="ejs" />
                            <div className="white-box-hover">EJS</div>
                        </div>

                        <div className="skill-logo font-icon ">
                            <i className="fa-brands fa-node node"></i>
                            <div className="black-box-hover">Node.js</div>
                        </div>

                        <div className="skill-logo">
                            <img src="express.svg" alt="" className="express" />
                            <div className="black-box-hover">Express</div>
                        </div>

                        <div className="skill-logo">
                            <img src="typescript.svg" alt="" className="ts" />
                            <div className="white-box-hover">TypeScript</div>
                        </div>

                        <div className="skill-logo">
                            <img src="tailwind-css.svg" alt="" className="ts" />
                            <div className="white-box-hover">Tailwind-CSS</div>
                        </div>

                        <div className="skill-logo font-icon">
                            <i className="fa-brands fa-react icn"></i>
                            <div className="black-box-hover">React.js</div>
                        </div>

                        <div className="skill-logo image-icon">
                            <img src="next-js.svg" alt="" className="next" />
                            <div className="white-box-hover">Next.js</div>
                        </div>

                        <div className="skill-logo">
                            <img src="vercel.svg" alt="" className="vercel" />
                            <div className="black-box-hover">Vercel</div>
                        </div>

                        <div className="skill-logo">
                            <img src="mongodb.svg" alt="" className="mongo" />
                            <div className="white-box-hover">MongoDb</div>
                        </div>
                    </div>
                </div>
                <div className="skills-bg-wrapper appear-right"></div>
            </div>
        </section>

        <section className="contact" id="contacts-section">
            <div className="section-heading">
                <div className="box-for-arow">
                    <div className="arrow arrow-1"></div>
                    <div className="arrow arrow-2"></div>
                </div>
                <div className="heading-text appear-right">
                    contact me.
                </div>
            </div>
            <div className="link-container">
                <div className="link-wrapper">
                    <div className="contact-link">
                        <a href="https://www.linkedin.com/in/ayush005/" target="_blank" className="a-link">Linked In</a>
                    </div>
                </div>
                <div className="link-wrapper">
                    <div className="contact-link">
                        <a href="https://www.instagram.com/ayu5h_chauhan/" target="_blank" className="a-link">Instagram</a>
                    </div>
                </div>
                <div className="link-wrapper">
                    <div className="contact-link">
                        <a href="https://github.com/astrobutter" target="_blank" className="a-link">Github</a>
                    </div>
                </div>
                <div className="link-wrapper">
                    <div className="contact-link">
                        <p className="a-link">ayushsinghuk05@gmail.com</p>
                    </div>
                </div>
            </div>
        </section>

    </div>
  );
}
