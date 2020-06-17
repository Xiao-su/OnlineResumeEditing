import { UploadOutlined } from '@ant-design/icons';
import { Col, Dropdown, Menu, Row, Card, Upload, message, Input, Button } from 'antd';
import React, { Component, Suspense } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { RangePickerProps } from 'antd/es/date-picker/generatePicker';
import moment from 'moment';
import reqwest from 'reqwest';
import { connect, Dispatch } from 'umi';
import styles from './style.less';

const { TextArea } = Input;

interface AnalysisProps {
  dashboardAndanalysis: any;
  dispatch: Dispatch<any>;
  loading: boolean;
}


const FILE_MAX_SIZE =  1024 * 1024 * 10;

class Analysis extends Component<any, any> {
  state: any = {
    fileList: [],
    uploading: false,
  };

  componentDidMount() {}

  componentWillUnmount() {}

  handleUpload = () => {
    const { fileList } = this.state;
    const formData = new FormData();
    fileList.forEach(file => {
      formData.append('upload_file', file);
    });

    this.setState({
      uploading: true,
    });

    // You can use any AJAX library you like
    reqwest({
      url: 'http://106.53.255.113/resume/upload/',
      // url: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
      method: 'post',
      processData: false,
      data: formData,
      success: (resdata) => {
        console.log("resdata:",resdata);
        this.setState({
          fileList: [],
          uploading: false,
        });
        message.success('upload successfully.');
      },
      error: (err) => {
        console.log("err:",err);
        this.setState({
          uploading: false,
        });
        message.error('upload failed.');
      },
    });
  };

  render() {
    const { uploading, fileList } = this.state;
    const {} = this.props;

    const colCss = {
      sm: {
        span: 16,
        offset: 4,
      },
      md: {
        span: 16,
        offset: 4,
      },
      lg: {
        span: 16,
        offset: 4,
      },
      xl: {
        span: 12,
        offset: 6,
      },
    };

    const uploadProps = {
      onRemove: (file: any) => {
        this.setState((state: any) => {
          const index = state.fileList.indexOf(file);
          const newFileList = state.fileList.slice();
          newFileList.splice(index, 1);
          return {
            fileList: newFileList,
          };
        });
      },
      beforeUpload: (file: any) => {
        if(file.size > FILE_MAX_SIZE){
          message.success('文件超过10M，上传失败');
          return;
        };

        this.setState((state: any) => ({
          fileList: [...state.fileList, file],
        }));
        return false;
      },
      fileList,
    };

    return (
      <PageHeaderWrapper>
        <Card bordered={false}>
          <Row>
            <Col {...colCss}>
              <div className={styles.pageHeaderTitle}>
                <h2>简历解析</h2>
                <p>使用说明：粘贴简历文本至文本框或者提交简历文件，并点击提交按钮。</p>
              </div>
            </Col>
          </Row>
          <Row gutter={[0, 24]}>
            <Col {...colCss}>
              <TextArea rows={11} />
            </Col>
          </Row>
          <Row gutter={[0, 24]}>
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
          <Row gutter={[0, 24]}>
            <Col span={4} offset={10}>
            <Button
              type="primary"
              onClick={this.handleUpload}
              disabled={fileList.length === 0}
              loading={uploading}
              style={{ marginTop: 16 }}
              block
            >
              {uploading ? '上传中' : '确认上传'}
            </Button>
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
