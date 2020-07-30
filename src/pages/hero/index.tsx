import React, { FC, useEffect, useState } from 'react';
import { connect, HeroModelState, ConnectProps } from 'umi';
import { Row, Col, Radio, Card } from 'antd';
import { getHeroList } from '@/service/index';

interface PageProps extends ConnectProps {
  global: HeroModelState;
}

const Hero: FC<PageProps> = (props, context) => {
  const initail: Array<any> = [];
  const [heroList, setHeroList] = useState(initail);
  const [tempList, setTempList] = useState(initail);
  const [heroType, setHeroType] = useState(0);

  useEffect(() => {
    function fetchHeroList() {
      let data = getHeroList();
      setHeroList(data);
      setTempList(data);
    }
    fetchHeroList();
  }, []);

  const typeList = [
    { key: 0, value: '全部' },
    { key: 1, value: '战士' },
    { key: 2, value: '法师' },
    { key: 3, value: '坦克' },
    { key: 4, value: '刺客' },
    { key: 5, value: '射手' },
    { key: 6, value: '辅助' },
  ];

  function changeType(e: any) {
    const type = e.target.value;
    setHeroType(type);
    if (type === 0) {
      setHeroList(tempList);
    } else {
      const data = tempList.filter((item) => item.hero_type === type);
      setHeroList(data);
    }
  }

  return (
    <div>
      <Row>
        <Col span={24}>
          <Radio.Group value={heroType} onChange={(e) => changeType(e)}>
            {typeList.map((item, index) => {
              return (
                <Radio value={item.key} key={index}>
                  {item.value}
                </Radio>
              );
            })}
          </Radio.Group>
        </Col>
      </Row>
      <Row>
        {heroList.map((item, index) => (
          <Col span={3} key={index}>
            <img
              src={`https://game.gtimg.cn/images/yxzj/img201606/heroimg/${item.ename}/${item.ename}.jpg`}
            />
            <div>{item.cname}</div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default connect(({ global }: { global: HeroModelState }) => ({
  global,
}))(Hero);
