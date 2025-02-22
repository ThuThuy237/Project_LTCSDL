import React from 'react';
import styles from '../Styles/About.module.scss';
import { TeamOutlined, FundProjectionScreenOutlined, GlobalOutlined, ClockCircleOutlined } from '@ant-design/icons';
import { Row, Col, Card } from 'antd';
import tt1 from '../Assets/Images/tt1.png';
import hk from '../Assets/Images/hk.png';
import tn from '../Assets/Images/tn.png';
import pt from '../Assets/Images/pt.png';
import nl from '../Assets/Images/nl.png';

export default function About() {
    return (
        <>
            <div className={styles.aboutContainer}>
                <div className={styles.sloganContainer} style={{backgroundImage:`url(/bgslogan.jpg)`}}><h1 className={styles.slogan}>In the middle of difficulty lies opportunity.</h1></div>
                <div className={styles.block} style={{ paddingTop: '30px' }}>
                    <h1 >
                        Our Features
                    </h1>
                    <div className={styles.title}>On Cursus, you have access to:</div>
                    <div className={styles.line}></div>
                    <div className={styles.content}>
                        <div className={styles.items}>
                            <TeamOutlined className={styles.icon} /><h2>Team Support</h2><p>Why TeamSupport? TeamSupport does more than effective ticket management; it provides an omnichannel experience that facilitates internal team collaboration and streamlines customer support issues, allowing teams to consistently deliverexceptional service.</p>
                        </div>
                        <div className={styles.items}>
                            <FundProjectionScreenOutlined className={styles.icon} /><h2>Finding Easily</h2><p>Support for relevant, modern search engines that make searching quick and easy. Divide multiple categories or locations so that the search becomes specific and standard with the request.I suspect that the search quickly and easily have developed a skill .</p>
                        </div>
                        <div className={styles.items}>
                            <ClockCircleOutlined className={styles.icon} /><h2>Any Time</h2><p>There are almost no technological grounds to withhold wax tablets from the hands of composers of polyphony anytime from the eleventh to the fifteenth century.</p>
                        </div>
                        <div className={styles.items}>
                            <GlobalOutlined className={styles.icon} /><h2>An Inclusive Experience</h2><p>In this context, it is important to explore alternative solutions to overcome the shortcomings of traditional fieldwork practices that can hinder the full participation of user.</p>
                        </div>
                    </div>
                </div>

                <div className={styles.block} style={{ textAlign: 'left', backgroundColor: '#fff', marginTop: '0' }}>
                    <div className={styles.content} style={{ alignItems: 'center'}}>
                        <div className={styles.paragraph}>
                            <h1>
                                Our Story
                            </h1>
                            <div className={styles.line} style={{margin: 'auto auto 30px 0'}}></div>
                            (Text about story)
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur vel dolor id ultrices.
                            Proin a magna at mi pretium pulvinar in eu enim. Nulla vel lacus lectus. Donec at venenatis augue.
                            Nam vitae purus placerat, hendrerit nisl id, finibus magna. Etiam pharetra gravida ornare.
                            Donec sagittis, ipsum in egestas egestas, dui lorem sollicitudin justo, ut ullamcorper velit neque eu velit.
                            Ut et fringilla elit. Mauris augue augue, auctor a blandit ac, convallis eget neque. Curabitur in ante ante.
                            Nullam laoreet tempus erat at ornare. In nisl nisi, dapibus eget facilisis sit amet, commodo quis nibh.
                        </div>
                        <div className={styles.storyImg} style={{width: "40%"}}><img src="/story.png" alt="our story" /></div>

                    </div>
                </div>

                <div className={styles.block}>
                    <h1>
                        Our Global Reach
                    </h1>
                    <div className={styles.title}>Cursus is the leading global marketplace for teaching and learning, connecting millions of students to the skills they need to succeed.</div>
                    <div className={styles.line}></div>
                    <div className={styles.content}>
                        <Row justify="space-around" style={{ width: '100%' }}>
                            <Col xl={2} xs={{ span: 24}}>
                                <Col className={styles.numbers} xl={12} >1k</Col>
                                <Col xl={12}>Recruiter</Col>
                            </Col>

                            <Col xl={2} xs={{ span: 24}}>
                                <Col className={styles.numbers} xl={12} >2k</Col>
                                <Col xl={12}>Candidate</Col>
                            </Col>

                            <Col xl={2} xs={{ span: 24}}>
                                <Col className={styles.numbers} xl={12} >1k</Col>
                                <Col xl={12}>Post</Col>
                            </Col>

                            <Col xl={2} xs={{ span: 24}}>
                                <Col className={styles.numbers} xl={12} >5</Col>
                                <Col xl={12}>language</Col>
                            </Col>

                            <Col xl={2} xs={{ span: 24}}>
                                <Col className={styles.numbers} xl={12} >10</Col>
                                <Col xl={12}>contries</Col>
                            </Col>

                        </Row>

                    </div>
                </div>

                <div className={styles.block} style={{ backgroundColor: '#fff' }}>
                    <h1 >
                        Our Team
                    </h1>
                    <div className={styles.line}></div>
                    <div className={styles.content}>
                        <Row justify={'space-around'} style={{width : '100%', marginTop:' 5px'}}>
                            <Col xl={{span: 4}}>
                                <Card
                                    style={{ maxWidth: 300 }}
                                    cover={<img alt="example" src={hk} />}
                                >
                                    Hoài Khang
                                </Card>
                            </Col>
                            <Col xl={{span: 4}}>
                                <Card
                                    style={{ maxWidth: 300 }}
                                    cover={<img alt="example" src={nl} />}
                                >
                                    Ngọc Lan
                                </Card>
                            </Col>
                            <Col xl={{span: 4}}>
                                <Card
                                    style={{ maxWidth: 300 }}
                                    cover={<img alt="example" src={pt} />}
                                >
                                    Phương Thảo
                                </Card>
                            </Col>
                            <Col xl={{span: 4}}>
                                <Card
                                    style={{ maxWidth: 300 }}
                                    cover={<img alt="example" src={tn} />}
                                >
                                    Thanh Ngân
                                </Card>
                            </Col>
                            <Col xl={{span: 4}}>
                                <Card
                                    style={{ maxWidth: 300 }}
                                    cover={<img alt="example" src={tt1} />}
                                >
                                    Thu Thủy
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        </>
    )
}
