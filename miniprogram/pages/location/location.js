//index.js
const app = getApp()

Page({
  data: {
    latitude: '',
    longitude: '',
  },

  onLoad: function () {
    // 获取用户位置
    wx.getLocation({
      type: 'wgs84',
      success: (res) => {
        this.setData({
          latitude: res.latitude,
          longitude: res.longitude
        })
      }
    })
  },
})
