'use strict'

module.exports = {
  types: [
    {
      value: '新功能',
      name: '新功能：添加了一个新功能'
    },
    {
      value: '修复问题',
      name: '修复问题：修复了一个问题'
    },
    {
      value: '代码重构',
      name: '代码重构：出于一个优秀程序员的自我修养，我决定做了这个代码重构，它的影响范围是'
    },
    {
      value: '文档修改',
      name: '文档：文档编写'
    },
    {
      value: '代码格式化',
      name: '代码格式化：格式化代码、统一缩进、统一换行等'
    },
    {
      value: '测试用例修改',
      name: '测试用例修改：编写测试相关的工作'
    },
    {
      value: '杂项修改',
      name: '杂项修改：其他修改，比如构建流程，依赖管理等'
    }
  ],

  scopes: [],

  allowCustomScopes: true,
  allowBreakingChanges: ['新功能', '修复问题']
}