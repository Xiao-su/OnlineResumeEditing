import { UploadOutlined } from '@ant-design/icons';
import { Col, Dropdown, Menu, Row, Card, Table } from 'antd';
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

class FilesList extends Component<FilesListProps, FilesListState> {
  state: FilesListState = {
    
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'fileslist/fetch',
    });
  }

  componentWillUnmount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'fileslist/clear',
    });
  }

  render() {
    const { } = this.state;
    console.log("this.props:",this.props);
    const dataSource: any = [];
    
    const columns = [
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
        fixed: 'left',
      },
      {
        title: '年龄',
        dataIndex: 'age',
        fixed: 'left',
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
        title: '出生年月',
        dataIndex: 'birthday',
      },
      {
        title: '在职状态',
        dataIndex: 'work_status',
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
    return (
      <PageHeaderWrapper
      >
        <Card>
          <Table 
          dataSource={dataSource} 
          columns={columns} 
          scroll={{ x: 1080 }}
          size="middle"
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
    resumeDatas: fileslist.fileslist,
    loading: loading.effects['fileslist/fetch'],
  }),
)(FilesList);
