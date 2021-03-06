import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { Icon, Radio } from 'antd';

const navigateConfig = [{
	value: "文档",
	icon: "edit",
	content: "文档"
}, {
	value: "作品",
	icon: "bulb",
	content: "作品"
}, {
	value: "关于",
	icon: "smile-o",
	content: "关于"
}]

class Navigate extends Component {
	constructor() {
		super();
		this.state = {
			blogList: [],
		};
	};

	handlehistory(e){
		let historyPath = {
			'文档': {pathname:'/react-blog'},
			'作品': {pathname:'/react-blog/learning'},
			'关于': '/react-blog/about'
		};
		this.props.history.push(historyPath[e.target.value]);
	}

	initChecked(item) {
		const urlName = this.props.location.pathname.split('/')[2];
		if(item.value == '作品') {
			if(urlName == 'learning') {
				return true;
			}
			return false;
		} else if(item.value == '关于') {
			if(urlName == 'about') {
				return true;
			}
			return false;
		} else {
			return true;
		}
	}

	render() {
		return (
			<Radio.Group className="navigate-wrapper">
				{navigateConfig.map((item) => (
					<Radio.Button checked={ this.initChecked(item) } key={item.value} value={item.value} onClick={this.handlehistory.bind(this)}><Icon type={item.icon}/>{item.content}</Radio.Button>
					))}
			</Radio.Group>
		)
	}
}

export default withRouter(Navigate)

