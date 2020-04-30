// miniprogram/pages/category.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeKey: 0,
    toView: 'green',
    images: [
      {
        src: "/images/temp/cate1.jpg",
        name: "图片"
      },
      {
        src: "/images/temp/cate2.jpg",
        name: "图片"
      },
      {
        src: "/images/temp/cate3.jpg",
        name: "图片"
      },
      {
        src: "/images/temp/cate4.jpg",
        name: "图片"
      },
      {
        src: "/images/temp/cate5.jpg",
        name: "图片"
      },
      {
        src: "/images/temp/cate6.jpg",
        name: "图片"
      },
      {
        src: "/images/temp/cate7.jpg",
        name: "图片"
      },
      {
        src: "/images/temp/cate8.jpg",
        name: "图片"
      },
      {
        src: "/images/temp/cate9.jpg",
        name: "图片"
      },
      {
        src: "/images/temp/cate10.jpg",
        name: "图片"
      },
      {
        src: "/images/temp/cate11.jpg",
        name: "图片"
      },
      {
        src: "/images/temp/cate12.jpg",
        name: "图片"
      },
      {
        src: "/images/temp/cate13.jpg",
        name: "图片"
      },
      {
        src: "/images/temp/cate14.jpg",
        name: "图片"
      },
      {
        src: "/images/temp/cate15.jpg",
        name: "图片"
      },
      {
        src: "/images/temp/cate16.jpg",
        name: "图片"
      },
      {
        src: "/images/temp/cate17.jpg",
        name: "图片"
      },
      {
        src: "/images/temp/cate18.jpg",
        name: "图片"
      },
      {
        src: "/images/temp/cate19.jpg",
        name: "图片"
      },
      {
        src: "/images/temp/cate20.jpg",
        name: "图片"
      },
      {
        src: "/images/temp/cate21.jpg",
        name: "图片"
      },
      {
        src: "/images/temp/cate22.jpg",
        name: "图片"
      },
      {
        src: "/images/temp/cate23.jpg",
        name: "图片"
      },
      {
        src: "/images/temp/cate24.jpg",
        name: "图片"
      }
    ]
  },

  onChange(event) {
  },
  upper(e) {
    console.log(e)
  },

  lower(e) {
    console.log(e)
  },

  scroll(e) {
    console.log(e)
  },
  scrollToTop() {
    this.setAction({
      scrollTop: 0
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})