import Mock from 'mockjs'
// webpack中图片、json是默认对外暴露的
import banner from './banner.json'
import floor from './floor.json'
// 模拟请求，返回数据
Mock.mock('/mock/banner.json', { code: 200, data: banner })
Mock.mock('/mock/floor.json', { code: 200, data: floor })
