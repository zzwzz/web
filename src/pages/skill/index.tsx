import React, { FC } from 'react';
import { connect, HeroModelState, ConnectProps } from 'umi';

interface PageProps extends ConnectProps {
  global: HeroModelState;
}

const Skill: FC<PageProps> = (props, context) => {
  const {
    global: { skillList },
  } = props;

  return (
    <div>
      <h1>page skill</h1>
      <h2>
        {skillList.map((item, index) => (
          <div key={index}>{item.cname}</div>
        ))}
      </h2>
    </div>
  );
};

export default connect(({ global }: { global: HeroModelState }) => ({
  global,
}))(Skill);
