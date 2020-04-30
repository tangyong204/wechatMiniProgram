//index.js
const app = getApp()

Page({
  data: {
    userInfo: {
    },
    result: '',
  },

  onLoad: function () {
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              this.setData({
                userInfo: res.userInfo
              })
            }
          })
        }
      }
    })
  },
  go: function(e) {
    wx.navigateTo({
      url: e.currentTarget.dataset.url,
    });
  },
  scan: function () {
    // 允许从相机和相册扫码
    wx.scanCode({
      success: (res) => {
        console.log(res.result);
        this.setData({
          result: res.result,

        })
      }
    })
  }
})
