import React, { Component } from "react";
import { Row, Col } from 'antd'
import BannerImgUrl from '../assets/images/banner-life.jpg'
import BannerBox from '../components/BannerBox'
import NotesList from '../components/NotesList'
import '../styles/life.less'

const list = [
  {
    time: '2020',
    content: [
      {
        img: 'https://cdn.xuyuanxiang.me/github_actions_9d2992b2.png',
        date: '2020-06-02',
        title: '使用Github Actions自动化React Native端到端测试',
        // eslint-disable-next-line
        desc: 'JavaScript: 你是一个喝着咖啡的有品味的骑士。你花了好多时间去选择支持库，设置节点和为城堡建造一个框架。当你完成了框架的时候，你发现公主所在的要塞已经被废弃，公主也已经搬到了另外一个城堡。'
      },
      {
        img: 'https://cdn.xuyuanxiang.me/github_actions_9d2992b2.png',
        date: '2020-06-02',
        title: 'tive端到端测试',
        // eslint-disable-next-line
        desc: 'JavaScript: 你是一个喝着咖啡的有品味的骑士。你花了好多时间去选择支持库，设置节点和为城堡建造一个框架。当你完成了框架的时候，你发现公主所在的要塞已经被废弃，公主也已经搬到了另外一个城堡。'
      },
      {
        img: 'https://cdn.xuyuanxiang.me/github_actions_9d2992b2.png',
        date: '2020-06-02',
        title: '使用端测试',
        // eslint-disable-next-line
        desc: 'JavaScript: 你是一个喝着咖啡的有品味的骑士。你花了好多时间去选择支持库，设置节点和为城堡建造一个框架。当你完成了框架的时候，你发现公主所在的要塞已经被废弃，公主也已经搬到了另外一个城堡。'
      },
    ]
  },
  {
    time: '2020',
    content: [
      {
        img: 'https://cdn.xuyuanxiang.me/github_actions_9d2992b2.png',
        date: '2020-06-02',
        title: '使用Github',
        // eslint-disable-next-line
        desc: 'JavaScript: 你是一个喝着咖啡的有品味的骑士。你花了好多时间去选择支持库，设置节点和为城堡建造一个框架。当你完成了框架的时候，你发现公主所在的要塞已经被废弃，公主也已经搬到了另外一个城堡。'
      },
      {
        img: 'https://cdn.xuyuanxiang.me/github_actions_9d2992b2.png',
        date: '2020-06-02',
        title: 'React Native端到端测试',
        // eslint-disable-next-line
        desc: 'JavaScript: 你是一个喝着咖啡的有品味的骑士。你花了好多时间去选择支持库，设置节点和为城堡建造一个框架。当你完成了框架的时候，你发现公主所在的要塞已经被废弃，公主也已经搬到了另外一个城堡。'
      },
      {
        img: 'https://cdn.xuyuanxiang.me/github_actions_9d2992b2.png',
        date: '2020-06-02',
        title: '到端测试',
        // eslint-disable-next-line
        desc: 'JavaScript: 你是一个喝着咖啡的有品味的骑士。你花了好多时间去选择支持库，设置节点和为城堡建造一个框架。当你完成了框架的时候，你发现公主所在的要塞已经被废弃，公主也已经搬到了另外一个城堡。'
      },
    ]
  }
]
export default class Home extends Component {
  render() {
    return (
      <>
        <BannerBox title='Life Notes' bannerUrl={BannerImgUrl} />
          <Row justify="center" gutter={25}>
            <Col xs={24} sm={22} lg={22} xl={18} xxl={16} className="life-box">
              <div className="life-content">
                <NotesList list={list} />
              </div>
            </Col>
          </Row>
      </>
    )
  }
}