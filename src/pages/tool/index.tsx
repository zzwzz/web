import React, { FC, useState } from 'react';
import { connect, HeroModelState, ConnectProps, request } from 'umi';
import { heroList } from '@/api';
import { getHeroList } from '@/service';

const heroData = getHeroList();

interface PageProps extends ConnectProps {
  global: HeroModelState;
}

const Tool: FC<PageProps> = (props, context) => {
  const [heroList, setHeroList] = useState({});
  const {
    global: { toolList },
  } = props;
  console.log('heroList', heroList);

  const data = heroData;
  console.log('data', data);

  return (
    <div>
      <h1>page tool</h1>
      <h2>
        {toolList.map((item, index) => (
          <div key={index}>{item.item_name}</div>
        ))}
      </h2>
    </div>
  );
};

export default connect(({ global }: { global: HeroModelState }) => ({
  global,
}))(Tool);
