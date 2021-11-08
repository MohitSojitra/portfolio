import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Particle from '../Particle'
import Resumecontent from './ResumeContent'
import pdf from '../../Assets/Mohit_SDE_Resume.pdf'
import {AiOutlineDownload} from 'react-icons/ai'

function Resume() {
  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{justifyContent: 'center', position: 'relative'}}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Full Stack developer [Shree Themes]"
              date="April 2021 - present"
              content={[
                'Learned and experiment with React Native, Aws cloud services like S3, Amplify, App Sync, RDS, GraphQl and DynamoDb.',
                'Build Full Social media and tinder type Application for LGBTQ+ people.',
              ]}
            />
            <Resumecontent
              title="Full Stack developer [Zujo]"
              date="June 2020 - April 2021"
              content={[
                'Learned and experiment with Aws cloud services like S3, EC2, DynamoDb with Typescript, Nodejs, Graphql, as a backend technology and React, RelayJs, Material UI and Next.js as a frontend technology.',
                'Build Full Online Learning Plateform which has servel feature like live streaming with real time chat, uploading courses, videos, track watch time etc.',
              ]}
            />
            <h3 className="resume-title">Extracurricular Activities</h3>
            <Resumecontent
              title="Technical Lead [Girlscript Surat]"
              date="March 2020 - present"
              content={[
                'As a Part of Community, we arrange lots of event,Like HackerRank contest,ReactJS Live session and lots of other stuff.',
              ]}
            />
            <Resumecontent
              title="Microsoft Learn Student Ambassador"
              date="Sep 2019 - March 2021"
              content={[
                'Under the Microsoft Learn Student Ambassadors programme, I started my cloud journey and learn basics of azure and i hosted several events Like hosting github session, Benifits of open source programme and and its community and much more.',
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Computer Science and Engineering [R.N.G.P.I.T] "
              date="2017 - 2021"
              content={[
                `CGPA: 9.00/10 `,
                'I was complete my bachelor degree fron R.N.G Patel Institute of Technology.',
              ]}
            />

            <h3 className="resume-title">Ranks and Achivements</h3>
            <Resumecontent
              title=""
              content={[
                `Top 40 of IngineousHunt contest winner and get 16GB pandrive.`,
                `2nd rank in college elocution competition.`,
              ]}
            />
          </Col>
        </Row>
        <Row style={{justifyContent: 'center', position: 'relative'}}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  )
}

export default Resume
