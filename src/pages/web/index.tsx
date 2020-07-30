import React, { FC } from 'react';
import { connect, HeroModelState, ConnectProps } from 'umi';
import sysDriver from '@/assets/sysDriver.png';
import sysGoods from '@/assets/sysGoods.png';
import sysManage from '@/assets/sysManage.png';
import sysOperation from '@/assets/sysOperation.png';
import transportSystem from '@/assets/transportSystem.png';
import productSystem from '@/assets/productSystem.png';

import './index.less';

interface PageProps extends ConnectProps {
  global: HeroModelState;
}

const Web: FC<PageProps> = (props, context) => {
  const {
    global: { skillList },
  } = props;

  return (
    <div className="container">
      <div className="wrapper">
        <img src={productSystem} className="productBg" />
        <div className="wrapperCon">
          <div className="introHead">
            <div className="headEn">Whale chain product system</div>
            <div className="headTitle">
              <span>鲸链</span>
              <span>产品体系</span>
            </div>
            <div className="headSplitLine">
              <div />
            </div>
            <div className="headIntro">
              鲸链网络货运平台利用大数据、云计算、卫星定位、人工智能等技术整合资源，产品符合国家对网络货运系统的八大要求，PC端和移动端在线协作，确保业务平稳有效运行。
            </div>
          </div>
          <div className="productBox">
            <div className="leftBox">
              <img src={transportSystem} />
            </div>
            <div className="rightBox">
              <div className="itemBox">
                <img className="itemImg" src={sysOperation} />
                <div className="itemTitle">运营端</div>
                <div className="itemIntro">
                  运单派送，设计管理；财务结算，车后市场
                </div>
              </div>
              <div className="itemBox" style={{ marginTop: '24px' }}>
                <img className="itemImg" src={sysManage} />
                <div className="itemTitle">管理后台</div>
                <div className="itemIntro">
                  车辆审核，设备管理；权限设置，报表统计
                </div>
              </div>
              <div className="itemBox" style={{ marginTop: '24px' }}>
                <img className="itemImg" src={sysGoods} />
                <div className="itemTitle">货主端</div>
                <div className="itemIntro">
                  货物发布，财务结算；运输状态，全程可视
                </div>
              </div>
              <div className="itemBox" style={{ marginTop: '24px' }}>
                <img className="itemImg" src={sysDriver} />
                <div className="itemTitle">司机端</div>
                <div className="itemIntro">
                  货物装卸，回单上传；评价体系，数据互传
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div>xxx</div>
        <div>xxx</div>
        <div>xxx</div>
        <div>xxx</div>
        <div>xxx</div>
        <div>xxx</div>
        <div>xxx</div>
        <div>xxx</div>
        <div>xxx</div>
        <div>xxx</div>
        <div>xxx</div>
        <div>xxx</div>
        <div>xxx</div>
        <div>xxx</div>
        <div>xxx</div>
        <div>xxx</div>
        <div>xxx</div>
        <div>xxx</div>
        <div>xxx</div>
        <div>xxx</div>
        <div>xxx</div>
        <div>xxx</div>
        <div>xxx</div>
        <div>xxx</div>
        <div>xxx</div>
        <div>xxx</div>
      </div>
    </div>
  );
};

export default connect(({ global }: { global: HeroModelState }) => ({
  global,
}))(Web);
