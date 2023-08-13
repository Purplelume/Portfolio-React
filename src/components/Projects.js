import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/images/project-img1.png";
import projImg2 from "../assets/images/project-img2.png";
import projImg3 from "../assets/images/project-img3.png";
import projImg4 from "../assets/images/project-img4.png";
import projImg5 from "../assets/images/project-img5.png";
import projImg6 from "../assets/images/project-img6.png";
import colorSharp2 from "../assets/images/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
    const projects = [
        {
            title: "Sports Team Manager",
            description: "Full-stack Project",
            imgUrl: projImg1,
            githubLink: "https://github.com/Elibrer/sports-team-manager",
            appLink: "https://sports-team-manager.herokuapp.com/",
        },
        {
            title: "E-commerce Backend",
            description: "",
            imgUrl: projImg2,
            githubLink: "https://github.com/Purplelume/Ecommerce-backend",
            appLink: "https://drive.google.com/file/d/10N2GaVBNotdnVc-Apkv8kahUiahgf3T2/view",
        },
        {
            title: "Note Taker",
            description: "Express.js",
            imgUrl: projImg3,
            githubLink: "https://github.com/Purplelume/Note-taker",
            appLink: "https://notetaker-express-simone.herokuapp.com/",
        },
        {
            title: "Progressive Web Application",
            description: "Text Editor",
            imgUrl: projImg4,
            githubLink: "https://github.com/Purplelume/Text-editor",
            appLink: "https://text-editor-simonemonari-ef42356c5c54.herokuapp.com/",
        },
        {
            title: "Weather Dashboard",
            description: "Server API's",
            imgUrl: projImg5,
            githubLink: "https://github.com/Purplelume/WeatherDashboard",
            appLink: "https://purplelume.github.io/WeatherDashboard/",
        },
        {
            title: "Week Day Schedule",
            description: "Third Party API's",
            imgUrl: projImg6,
            githubLink: "https://github.com/Purplelume/WeekDay-schedule",
            appLink: "https://purplelume.github.io/WeekDay-schedule/",
        },
    ];

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) => (
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Projects</h2>
                                    <p>
                                        These are some of my projects! With my extensive experience in the MERN stack, I am well-equipped to handle complex projects and find innovative solutions to technical challenges. I thrive in collaborative environments and enjoy working closely with clients to understand their unique needs and translate them into successful web applications.

                                        Whether it's building an e-commerce platform, developing a social networking site, or creating a custom web application, I am dedicated to delivering exceptional results that drive business growth and exceed client expectations.
                                    </p>
                                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                        <Nav
                                            variant="pills"
                                            className="nav-pills mb-5 justify-content-center align-items-center"
                                            id="pills-tab"
                                        >
                                            <Nav.Item>
                                                <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="third">Tab 3</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content
                                            id="slideInUp"
                                            className={isVisible ? "animate__animated animate__slideInUp" : ""}
                                        >
                                            <Tab.Pane eventKey="first">
                                                <Row>
                                                    {projects.map((project, index) => {
                                                        return <ProjectCard key={index} {...project} />;
                                                    })}
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="second">
                                                <p>
                                                    More is arriving!
                                                </p>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="third">
                                                <p>
                                                    Please wait... I'm elaborating new projects...
                                                </p>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>
                            )}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt="" />
        </section>
    );
};
