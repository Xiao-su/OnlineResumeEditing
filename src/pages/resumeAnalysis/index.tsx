import { UploadOutlined } from '@ant-design/icons';
import {
  Col,
  Dropdown,
  Menu,
  Row,
  Card,
  Upload,
  message,
  Input,
  Button,
  Tabs,
  Divider,
  Descriptions,
} from 'antd';
import React, { Component, Suspense, Fragment } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { RadioChangeEvent } from 'antd/es/radio';
import { RangePickerProps } from 'antd/es/date-picker/generatePicker';
import moment from 'moment';
import { connect, Dispatch } from 'umi';
import styles from './style.less';

const { TabPane } = Tabs;

type RangePickerValue = RangePickerProps<moment.Moment>['value'];

class ResumeAnalysis extends Component<any, any> {
  state: any = {};

  componentDidMount() {}

  componentWillUnmount() {}

  tabChangeHandle(key: any) {}

  renderAnalysis() {
    return (
      <div>
        <Descriptions title="简历信息" style={{ marginBottom: 32 }}>
          <Descriptions.Item label="简历类型">1000000000</Descriptions.Item>
          <Descriptions.Item label="简历来源">已取货</Descriptions.Item>
          <Descriptions.Item label="简历id">1234123421</Descriptions.Item>
          <Descriptions.Item label="简历文件名">3214321432</Descriptions.Item>
          <Descriptions.Item label="简历解析时间">3214321432</Descriptions.Item>
          <Descriptions.Item label="简历更新时间">3214321432</Descriptions.Item>
          <Descriptions.Item label="简历完整度">3214321432</Descriptions.Item>
        </Descriptions>
        <Divider style={{ marginBottom: 32 }} />
        <Descriptions title="基础信息" style={{ marginBottom: 32 }}>
          <Descriptions.Item label="姓名">付小小</Descriptions.Item>
          <Descriptions.Item label="姓氏">18100000000</Descriptions.Item>
          <Descriptions.Item label="性别">菜鸟仓储</Descriptions.Item>
          <Descriptions.Item label="年龄">浙江省杭州市西湖区万塘路18号</Descriptions.Item>
          <Descriptions.Item label="身高">无</Descriptions.Item>
          <Descriptions.Item label="体重">无</Descriptions.Item>
          <Descriptions.Item label="姓名">无</Descriptions.Item>
          <Descriptions.Item label="婚姻状态">无</Descriptions.Item>
          <Descriptions.Item label="出生日期">无</Descriptions.Item>
          <Descriptions.Item label="户口地址">无</Descriptions.Item>
          <Descriptions.Item label="户口地址（规范化）">无</Descriptions.Item>
          <Descriptions.Item label="籍贯地址">无</Descriptions.Item>
          <Descriptions.Item label="籍贯地址（规范化）">无</Descriptions.Item>
          <Descriptions.Item label="身份证号">无</Descriptions.Item>
          <Descriptions.Item label="民族">无</Descriptions.Item>
          <Descriptions.Item label="国籍">无</Descriptions.Item>
          <Descriptions.Item label="政治面貌">无</Descriptions.Item>
          <Descriptions.Item label="身份证号">无</Descriptions.Item>
          <Descriptions.Item label="语言能力">无</Descriptions.Item>
          <Descriptions.Item label="英语水平">无</Descriptions.Item>
          <Descriptions.Item label="计算机水平">无</Descriptions.Item>
          <Descriptions.Item label="博客/主页地址">无</Descriptions.Item>
          <Descriptions.Item label="工作年限">无</Descriptions.Item>
          <Descriptions.Item label="工作年限（规范化）">无</Descriptions.Item>
          <Descriptions.Item label="参加工作时间">无</Descriptions.Item>
          <Descriptions.Item label="当前职位">无</Descriptions.Item>
          <Descriptions.Item label="当前单位">无</Descriptions.Item>
          <Descriptions.Item label="所处行业">无</Descriptions.Item>
          <Descriptions.Item label="在职状态">无</Descriptions.Item>
          <Descriptions.Item label="当前薪资">无</Descriptions.Item>
          <Descriptions.Item label="所处行业">无</Descriptions.Item>
        </Descriptions>
      </div>
    );
  }

  render() {
    const {} = this.state;
    const {} = this.props;

    return (
      <PageHeaderWrapper>
        <Card bordered={false}>
          <Tabs onChange={this.tabChangeHandle} type="card">
            <TabPane tab="解析结果" key="1">
              {this.renderAnalysis()}
            </TabPane>
            <TabPane tab="原始文本" key="2">
              Content of Tab Pane 2
            </TabPane>
            <TabPane tab="智能评估" key="3">
              Content of Tab Pane 3
            </TabPane>
            <TabPane tab="人岗匹配" key="4">
              Content of Tab Pane 3
            </TabPane>
          </Tabs>
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default connect(
  ({
    fileAnalysis,
    loading,
  }: {
    fileAnalysis: any;
    loading: {
      effects: { [key: string]: boolean };
    };
  }) => ({
    fileAnalysis,
    loading: loading.effects['fileAnalysis/fetch'],
  }),
)(ResumeAnalysis);
