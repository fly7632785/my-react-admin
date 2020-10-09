import React, {Component} from "react";

import {Avatar, Card, Col, Divider, List, Row, Timeline} from "antd";
import {FormattedMessage, connect, Link} from "umi";
import {TagCloud} from "../dashboard/monitor/components/Charts";
import {
  ClusterOutlined,
  ContactsOutlined,
  HomeOutlined,
  DollarOutlined,
  PhoneOutlined,
  ContainerOutlined,
  AccountBookOutlined
} from "@ant-design/icons";
import {
  SmileTwoTone,
  TrophyTwoTone,
  FrownTwoTone,
  RocketTwoTone,
  LikeTwoTone,
  DislikeTwoTone,
} from "@ant-design/icons";
import Radar from "../dashboard/workplace/components/Radar";
import Meta from "antd/lib/card/Meta";
import styles from './index.less'
import logo from '../../../public/logo.jpg';


class Index extends Component {

  componentDidMount() {
    const {dispatch} = this.props;
    dispatch({
      type: 'index/fetchCurrent',
    });
    dispatch({
      type: 'index/fetchCompany',
    });
    dispatch({
      type: 'index/fetchProject',
    });
    dispatch({
      type: 'index/fetchSkill',
    });
  }

  renderUserInfo = (currentUser) => (
    <div className={styles.detail}>
      <p>
        <ContactsOutlined
          style={{
            marginRight: 8,
          }}
        />
        {currentUser.job}
      </p>
      <p>
        <DollarOutlined
          style={{
            marginRight: 8,
          }}
        />
        {currentUser.money}
      </p>
      <p>
        <HomeOutlined
          style={{
            marginRight: 8,
          }}
        />
        {
          (
            currentUser.geographic || {
              province: {
                label: '',
              },
            }
          ).province.label
        }
        {
          (
            currentUser.geographic || {
              city: {
                label: '',
              },
            }
          ).city.label
        }
      </p>
      <p>
        <PhoneOutlined
          style={{
            marginRight: 8,
          }}
        />
        {currentUser.phone}
      </p>
      <p>
        <ContainerOutlined
          style={{
            marginRight: 8,
          }}
        />
        {currentUser.email}
      </p>
      <p>
        <AccountBookOutlined
          style={{
            marginRight: 8,
          }}
        />
        {currentUser.university}
      </p>
    </div>
  );

  getCompany = (list) => {
    if (!list || list.length < 1) {
      return null;
    }
    return list.map((item) => (
      <Timeline.Item key={item.name} label={item.time}>
        <Card hoverable>
          <Row align="middle">
            <Col>
              <Avatar className={styles.avatar} alt='' src={item.icon} size='large'/>
            </Col>
            <Col style={{marginLeft: '10px'}}>
              <Row>
                <span style={{fontSize: '20px'}}>{item.name}</span>
              </Row>
              <Row>
                <span>{item.time}</span>
              </Row>
            </Col>
          </Row>
        </Card>
      </Timeline.Item>
    ));
  };

  getProject = (list) => {
    if (!list || list.length < 1) {
      return null;
    }
    return list.map((item) => (
      <Timeline.Item key={item.name} label={item.time}>
        <Card hoverable>
          <Row align="middle">
            <Col>
              项目：
            </Col>
            <Col style={{marginLeft: '10px'}}>
              <span><b>{item.name}</b></span>
            </Col>
          </Row>
          {item.company && item.icon && (
            <Row align="middle">
              <Col>
                公司：<Avatar style={{marginLeft: '10px'}} alt='' src={item.icon} size='small'/>
              </Col>
              <Col style={{marginLeft: '3px'}}>
                {item.company}
              </Col>
            </Row>
          )}
          <Row align="middle">
            <Col>
              时间：
            </Col>
            <Col style={{marginLeft: '10px'}}>
              {item.time}
            </Col>
          </Row>
          <Row justify="start">
            <Col>
              描述：
            </Col>
            <Col span={20} style={{marginLeft: '10px', textAlign: 'start'}}>
              <span style={{whiteSpace: 'pre-line'}}>{item.desc}</span>
            </Col>
          </Row>
          {item.responsibility && (
            <Row justify="start">
              <Col>
                职责：
              </Col>
              <Col span={20} style={{marginLeft: '10px', textAlign: 'start'}}>
                <span style={{whiteSpace: 'pre-line'}}>{item.responsibility}</span>
              </Col>
            </Row>
          )}
          <Row justify="start">
            <Col>
              技术：
            </Col>
            <Col span={20} style={{marginLeft: '10px', textAlign: 'start'}}>
              <span style={{whiteSpace: 'pre-line'}}>{item.tech}</span>
            </Col>
          </Row>
          {item.link && (
            <Row align="middle">
              <Col>
                链接：
              </Col>
              <Col span={20} style={{marginLeft: '10px', textAlign: 'start'}}>
                <div className={styles.link}>
                  <a target='_Blank' href={item.link}>{item.link}</a>
                </div>
              </Col>
            </Row>
          )
          }
        </Card>
      </Timeline.Item>
    ));
  };

  render() {
    const {currentUser = {}, company = [], project = [], skill = [], currentSkillLoading, currentCompanyLoading, currentProjectLoading, currentUserLoading} = this.props;
    const {selfDesc} = currentUser;
    const {certificate} = currentUser;
    const {social} = currentUser;
    const dataLoading = currentUserLoading || currentSkillLoading || !(currentUser && Object.keys(currentUser).length);
    const selfDescIcons = [
      SmileTwoTone,
      TrophyTwoTone,
      FrownTwoTone,
      RocketTwoTone,
      LikeTwoTone,
      DislikeTwoTone,];
    return (
      <div>
        <Card
          bordered={false}
          loading={dataLoading}
        >
          <div>
            <div className={styles.avatarHolder}>
              <Avatar className={styles.avatar} alt='' src={currentUser.avatar || logo} size='large'/>
              <div className={styles.name}>{currentUser.name}</div>
              <div>{currentUser.motto}</div>
            </div>
            <div className={styles.userInfo}>
              {this.renderUserInfo(currentUser)}
            </div>
            <Divider dashed/>
            <TagCloud data={currentUser.tags || []} height={250}/>
            <Divider
              style={{
                marginTop: 16,
              }}
              dashed
            />
            <div>
              <Radar hasLegend height={343} data={skill}/>
            </div>
          </div>
        </Card>
        {
          selfDesc && (
            <Card
              title="自我描述"
              bordered={false}
              className={styles.projectList}
              loading={dataLoading}
              style={{marginTop: '20px'}}
              bodyStyle={{
                padding: 0,
              }}
            >
              {selfDesc.map((item,index) => (
                <Card.Grid className={styles.projectGrid} key={item.id}>
                  <Card
                    bodyStyle={{
                      padding: 0,
                    }}
                    bordered={false}
                  >
                    <Card.Meta
                      title={
                        <div className={styles.cardTitle}>
                          {item.logo&&(<Avatar style={{marginLeft:0}} size="small" src={item.logo}/>)
                          }
                          {/* {!item.logo&&(selfDescIcons[index]) */}
                          {/* } */}
                          <span>{item.title}</span>
                        </div>
                      }
                      description={item.description}
                    />
                    <div className={styles.projectItemContent}>
                      <span>{item.member || ''}</span>
                    </div>
                  </Card>
                </Card.Grid>
              ))}
            </Card>
          )
        }

        <Card
          title="工作经历"
          bordered={false}
          loading={currentCompanyLoading}
          style={{marginTop: '20px'}}
        >
          <Timeline style={{maxWidth: '900px', margin: '0 auto'}} mode="alternate">
            {this.getCompany(company)}
          </Timeline>
        </Card>
        <Card
          title="项目经历"
          bordered={false}
          loading={currentProjectLoading}
          style={{marginTop: '20px'}}
        >
          <Timeline style={{maxWidth: '1400px', margin: '0 auto'}} mode="alternate">
            {this.getProject(project)}
          </Timeline>
        </Card>
        <Card
          title="证书技能"
          bordered={false}
          loading={dataLoading}
          style={{marginTop: '20px'}}
        >
          <Row gutter={16}>
            {certificate && certificate.map((item)=>{
                return(
                  <Col span={8}>
                    <Card title={item.name} hoverable  bordered>
                      时间：{item.time}
                    </Card>
                  </Col>
                )
              })
            }
          </Row>
        </Card>
      </div>
    )
  }
}

export default connect(({loading, index: {currentUser, company, project, skill}}) => ({
  currentUser,
  company,
  project,
  skill,
  currentUserLoading: loading.effects['index/fetchCurrent'],
  currentCompanyLoading: loading.effects['index/fetchCompany'],
  currentProjectLoading: loading.effects['index/fetchProject'],
  currentSkillLoading: loading.effects['index/fetchSkill'],
}))(Index)
