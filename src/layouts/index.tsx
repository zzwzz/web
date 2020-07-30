import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'umi';
const { Header, Content, Footer } = Layout;
import styles from './index.less';

const menu = [
  { route: '/hero', name: '英雄' },
  { route: '/tool', name: '道具' },
  { route: '/skill', name: '技能' },
  { route: '/web', name: '网页' },
];

function BasicLayout(props: any) {
  const {
    location: { pathname },
    children,
  } = props;

  return (
    <Layout style={{ minHeight: '100%' }}>
      <Header>
        <div className={styles.logo}>网址荣耀资料库</div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={[pathname]}
          style={{ lineHeight: '64px' }}
        >
          {menu.map((item) => (
            <Menu.Item key={item.route}>
              <Link to={item.route}>{item.name}</Link>
            </Menu.Item>
          ))}
        </Menu>
      </Header>
      <Content style={{ padding: '24px 24px 0px 24px', display: 'flex' }}>
        <div style={{ background: '#fff', padding: 24, flex: '1' }}>
          {children}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>createby wuyuming</Footer>
    </Layout>
  );
}

export default BasicLayout;
