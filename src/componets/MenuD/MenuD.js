import React from 'react'; 
import { Link } from "react-router-dom";
import { Layout, Menu } from 'antd';

const {Sider} = Layout

const MenuD = () =>{
    return (
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={broken => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
        theme="success"
        style={{marginTop: '50px'}}
      >
        <Menu theme="success" mode="inline" style={{height: '150px'}}>
          <Menu.Item key="1"  style={{height: '30px'}} >
            <Link to="/home">
              <i class="fa fa-home fa-1x"></i> Home
            </Link>
          </Menu.Item>
          <Menu.Item key="2"  style={{height: '30px'}}>
            <Link to="/soft">
              <i class="fa fa-sun fa-1x"></i> Soft Skill
            </Link>
          </Menu.Item>
          <Menu.Item key="3"   style={{height: '30px'}}>
            <Link to="/tech">
              <i class="fas fa-chalkboard-teacher"></i> Tech Skill
            </Link>
          </Menu.Item>
          <Menu.Item key="4"  style={{height: '30px'}} >
            <Link to="/project">
            <i class="fas fa-project-diagram"></i> Proyect
            </Link>
          </Menu.Item>
        </Menu>
    </Sider>
       
    )
}
export default MenuD; 
