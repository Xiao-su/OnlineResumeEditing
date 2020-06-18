import { UploadOutlined } from '@ant-design/icons';
import { Col, Dropdown, Menu, Row, Card, Table, Form, Input, Button } from 'antd';
import React, { Component } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { RangePickerProps } from 'antd/es/date-picker/generatePicker';
import moment from 'moment';
import { connect, Dispatch } from 'umi';
import styles from './style.less';


type RangePickerValue = RangePickerProps<moment.Moment>['value'];

interface FilesListProps {
  dashboardAndanalysis: any;
  dispatch: Dispatch<any>;
  loading: boolean;
}

interface FilesListState {

}

class FilesList extends Component<FilesListProps, any> {
  state: any = {
    currentPage: 1,
    pageSize: 10
  };

  componentDidMount() {
    const {currentPage, pageSize} = this.state;
    const { dispatch } = this.props;
    dispatch({
      type: 'fileslist/fetch',
      payload: {
        currentPage,
        pageSize,
      }
    });
  }

  componentWillUnmount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'fileslist/clear',
    });
  }

  onShowSizeChange(currentPage: any, pageSize: any) {
    const { dispatch } = this.props;
    dispatch({
      type: 'fileslist/fetch',
      payload: {
        currentPage,
        pageSize,
      }
    });
  }

  render() {
    const { pageSize } = this.state;
    const { resumeDatas } = this.props;
    const columns = [
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '年龄',
        dataIndex: 'age',
      },
      {
        title: '出生年月',
        dataIndex: 'birthday',
      },
      {
        title: '籍贯',
        dataIndex: 'race',
      },
      {
        title: '在职状态',
        dataIndex: 'work_status',
        render: (workObj, record)=>{
          return workObj.msg;
        },
      },
      {
        title: '面试职位',
        dataIndex: 'job_interview',
      },
      {
        title: '语言',
        dataIndex: 'language',
      },
      {
        title: '方言',
        dataIndex: 'dialect',
      },
      {
        title: '工作年限',
        dataIndex: 'work_year',
      },
      {
        title: '技术方向',
        dataIndex: 'technology_direction',
      },
      {
        title: '考评备注',
        dataIndex: 'evaluation_remarks',
      },
    ];

    const paginationConfig = {
      showSizeChanger: false,
      pageSize: pageSize,
      onChange: this.onShowSizeChange.bind(this),
      defaultCurrent: 1,
      total: resumeDatas.count,
    };

    
    return (
      <PageHeaderWrapper
      >
        <Card>
         <Form>
           <Row gutter={16}>
             <Col span={8}>
             <Form.Item
                label="姓名"
                name="name"
              >
              <Input />
            </Form.Item>
             </Col>
             <Col span={8}>
              <Form.Item
                label="年龄"
                name="age"
              >
                <Input/>
              </Form.Item>
             </Col>
             <Col span={8}>
              <Form.Item
                label="籍贯"
                name="race"
              >
                <Input/>
              </Form.Item>
             </Col>
           </Row>
           <Row gutter={16}>
             <Col span={8}>
             <Form.Item
                label="在职状态"
                name="work_status"
              >
              <Input />
            </Form.Item>
             </Col>
             <Col span={8}>
              <Form.Item
                label="面试职位"
                name="job_interview"
              >
                <Input/>
              </Form.Item>
             </Col>
             <Col span={8}>
              <Form.Item
                label="语言"
                name="language"
              >
                <Input/>
              </Form.Item>
             </Col>
           </Row>
           <Row>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                查询
              </Button>
            </Form.Item>
            <Form.Item>
              <Button htmlType="button">
                重置
              </Button>
            </Form.Item>
          </Row>
         </Form>
        </Card>
        <Card>
          <Table 
          dataSource={resumeDatas.datas} 
          columns={columns} 
          scroll={{ x: 1080 }}
          size="middle"
          pagination={paginationConfig}
          rowKey={(record)=> record.id}
          />
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default connect(
  ({
    fileslist,
    loading,
  }: {
    fileslist: any;
    loading: {
      effects: { [key: string]: boolean };
    };
  }) => ({
    resumeDatas: fileslist.resumeDatas,
    loading: loading.effects['fileslist/fetch'],
  }),
)(FilesList);
