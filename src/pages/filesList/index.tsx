import { UploadOutlined } from '@ant-design/icons';
import { Col, Dropdown, Menu, Row, Card,  } from 'antd';
import React, { Component } from 'react';
import { GridContent } from '@ant-design/pro-layout';
import { RangePickerProps } from 'antd/es/date-picker/generatePicker';
import moment from 'moment';
import { connect, Dispatch } from 'umi';
import styles from './style.less';


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

    return (
      <GridContent>
        <React.Fragment>
          
        </React.Fragment>
      </GridContent>
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
