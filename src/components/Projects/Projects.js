import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import ProjectCard from './ProjectCards'
import Particle from '../Particle'

import eCom from '../../Assets/Projects/E-com.png'
import jsomBlog from '../../Assets/Projects/jsomBlog.png'
import taskify from '../../Assets/Projects/Taskify.png'
import aF from '../../Assets/Projects/artisteeF.png'
import aA from '../../Assets/Projects/artisteeA.png'
import easyCode from '../../Assets/Projects/easy-code.png'

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{color: 'white'}}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{justifyContent: 'center', paddingBottom: '10px'}}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={taskify}
              isBlog={false}
              title="Taskify"
              description="Used for increase the productivity and tracks your progress towards the your project or goal. It has a workspace features that means multiple people collobrate in one project. It has a features like create boards , add container in board and add task in container. Board member also add comment in perticular task and assign flag over that. "
              link="https://github.com/MohitSojitra/taskify"
              liveLink="https://trallo-clone-mocha.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={easyCode}
              isBlog={false}
              title="easy-code"
              description="Easy code is my personal blog website which is build with nextjs. It has great support of the Markdown content. Easy-code is fully responsive blog website which has light and dark mode support."
              link="https://github.com/MohitSojitra/easy-code"
              liveLink="https://blog.mohitsojitra.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eCom}
              isBlog={false}
              title="Jsom Store"
              description="It is a basic e-commerce site which build in MERN tech stack. It has a features like login, signup as a part of authentication. Apart from that user add product in cart, modify quantity and also remove poduct in cart. It is a basic e-comerce site which build in pure html, css, reactjs and redux. You can watch live app in below button."
              link="https://github.com/MohitSojitra/e-commerce-store"
              liveLink="https://e-commerce-fronend.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jsomBlog}
              isBlog={false}
              title="Jsom Blog"
              description="It is a basic blog website which cover all the concept of REACTJS. Main Motivation of this project is understand basic features of the Reactjs like  api fetching, multiple filtering in profile , post and comments. It includes lots' of features which is necessary in any blog site. You can visit Live site by clicking below button."
              link="https://github.com/MohitSojitra/react-blog-website"
              liveLink="https://react-blog-website.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aF}
              isBlog={false}
              title="Artistee Web"
              description="Aristee is a basic Full Stack websites which contains all the module such as a Admin Panel , Fronend Website and Backend. It inspired by united talent websites which is a use for book Artist for performing live shows
                            In here i used mainly aws services for handling backend things such as Amazon RDS for database, Amazon SES sercvice for mail perpose and S3 for storing images."
              link="https://github.com/MohitSojitra/Artistee"
              liveLink="https://artistee-fronend.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aA}
              isBlog={false}
              title="Artistee Admin Pannel"
              description="Aristee is a basic Full Stack websites which contains all the module such as a Admin Panel , Fronend Website and Backend. It inspired by united talent websites which is a use for book Artist for performing live shows
                            In here i used mainly aws services for handling backend things such as Amazon RDS for database, Amazon SES sercvice for mail perpose and S3 for storing images."
              link="https://github.com/MohitSojitra/Artistee"
              liveLink="https://artistee-admin.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects
