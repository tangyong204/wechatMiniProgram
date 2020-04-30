//index.js
const app = getApp()

Page({
  data: {
    username: '',
    password: '',
    code: ''
  },

  onLoad: function () {
  },

  login: function () {
    wx.switchTab({
      url: '/pages/user/user',
    });
  }
})
