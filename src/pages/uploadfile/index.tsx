import { UploadOutlined } from '@ant-design/icons';
import { Col, Dropdown, Menu, Row, Card, Upload, message, Input, Button } from 'antd';
import React, { Component, Suspense } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { RadioChangeEvent } from 'antd/es/radio';
import { RangePickerProps } from 'antd/es/date-picker/generatePicker';
import moment from 'moment';
import { connect, Dispatch } from 'umi';
import styles from './style.less';

const { Dragger } = Upload;
const { TextArea } = Input;

type RangePickerValue = RangePickerProps<moment.Moment>['value'];

interface AnalysisProps {
  dashboardAndanalysis: AnalysisData;
  dispatch: Dispatch<any>;
  loading: boolean;
}

interface AnalysisState {

}

class Analysis extends Component<AnalysisProps, AnalysisState> {
  state: AnalysisState = {
    
  };

  componentDidMount() {
    
  }

  componentWillUnmount() {
    
  }

  render() {
    const { } = this.state;
    const { } = this.props;

    const uploadProps = {
      name: 'file',
      action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
      headers: {
        authorization: 'authorization-text',
      },
      onChange:(info)=>{
        if (info.file.status !== 'uploading') {
          console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
          message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
          message.error(`${info.file.name} file upload failed.`);
        }
      },
    };

    const colCss={
      sm:{
        span: 16,
        offset: 4
      },
      md:{
        span: 16,
        offset: 4
      },
      lg:{
        span: 16,
        offset: 4
      },
      xl:{
        span: 12,
        offset: 6
      }
    };

   
    return (
      <PageHeaderWrapper
      >
        <Card bordered={false}>
          <Row>
            <Col {...colCss}>
              <div className={styles.pageHeaderTitle}>
                <h2>简历解析</h2>
                <p>使用说明：粘贴简历文本至文本框或者提交简历文件，并点击提交按钮。</p>
              </div>
            </Col>
          </Row>
          <Row gutter={[0,24]}>
            <Col {...colCss}>
              <TextArea rows={11} />
            </Col>
          </Row>
          <Row gutter={[0,24]}>
            <Col {...colCss}>
              <Upload {...uploadProps}>
                <Button>
                  <UploadOutlined /> 选择文件
                </Button>
                <span>未选择任何文件</span>
              </Upload>
              <span>（支持格式：pdf|doc|docx|txt|odt|RTF|HTML|JPG等30多种格式, 最大10M）</span>
            </Col>
          </Row>
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default connect(
  ({
    dashboardAndanalysis,
    loading,
  }: {
    dashboardAndanalysis: any;
    loading: {
      effects: { [key: string]: boolean };
    };
  }) => ({
    dashboardAndanalysis,
    loading: loading.effects['dashboardAndanalysis/fetch'],
  }),
)(Analysis);
