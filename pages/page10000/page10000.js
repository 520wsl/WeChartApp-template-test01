// pages/page10000/page10000.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    page_hidden: false,
    // banner、轮播
    carousel1: {
      hidden: false,
      // 组件类型
      type: "carousel",
      style:
        "height:398.4375rpx;margin-left:0;margin-right:auto;margin-top:0;opacity:1;",
      // 内容
      content: [
        {
          customFeature: [], // 定制特征
          pic: "http://img.weiye.me/zcimgdir/album/file_59001034a7cd2.png"
        },
        {
          customFeature: [], // 定制特征
          pic: "http://img.weiye.me/zcimgdir/album/file_59001040ad59d.png"
        }
      ],
      // 定制特征
      customFeature: {
        autoplay: true, // 是否自动切换、自动播放
        interval: 2, // 播放间隔、自动切换时间间隔
        carouselgroupId: null, // 绑定轮播分组id
        indicatorColor: "",
        indicatorActiveColor: ""
      },
      animations: [], // 动画
      page_form: "",
      compId: "carousel1", // 组件id
      loading: false, // 加载中状态
      loadingFail: false, // 加载失败
      canIUseNavigatorTarget: "", // 是否有导航链接
      videoUrl: "" // 视屏链接
    },
    // 图集、图片列表
    album2: {
      // 组件类型
      type: "album",
      hidden: false,
      style:
        "background-color:rgb(255,255,255);font-size:28.125rpx;margin-top:0rpx;opacity:1;text-align:center;margin-left:auto;",
      ul_style:
        "padding-left:82.03125rpx;padding-top:23.4375rpx;margin-left:auto;",
      html_mode: "sec-mode",
      // 内容 列表
      li: [
        {
          // 定制特征
          customFeature: {
            action: "inner-link", // 作用、动作
            "page-link": "page1005", // 页面链接
            "xcx-appid": "", // 跳转小程序 appID
            "xcx-page-url": "" // 跳转小程序 页面链接
          },
          li_class: "album-pic router", // 
          action: "inner-link", // 作用、动作
          pic: "http://img.weiye.me/zcimgdir/album/file_58fdb0d80f84a.png",
          title: "优选",
          li_style: "width:84.9609375rpx;border-radius:50%;margin-left:auto;",
          img_style: "height:94.9609375rpx;border-radius:50%;margin-left:auto;",
          eventParams: '{"inner_page_link":"page10005","is_redirect":0}',
          eventHandler: "taplnnerLinkHandler"
        },
        {
          // 定制特征
          customFeature: {
            action: "inner-link", // 作用、动作
            "page-link": "page1006", // 页面链接
            "xcx-appid": "", // 跳转小程序 appID
            "xcx-page-url": "" // 跳转小程序 页面链接
          },
          li_class: "album-pic router",
          action: "inner-link", // 作用、动作
          pic: "http://img.weiye.me/zcimgdir/album/file_58fdb0ed8ecdf.png",
          title: "热销",
          li_style: "width:84.9609375rpx;border-radius:50%;margin-left:auto;",
          img_style: "height:94.9609375rpx;border-radius:50%;margin-left:auto;",
          eventParams: '{"inner_page_link":"page10006","is_redirect":0}',
          eventHandler: "tapInnerLinkHandler"
        },
        {
          // 定制特征
          customFeature: {
            action: "inner-link", // 作用、动作
            "page-link": "page10007", // 页面链接
            "xcx-appid": "", // 跳转小程序 appID
            "xcx-page-url": "" // 跳转小程序 页面链接
          },
          li_class: "album-pic router",
          action: "inner-link", // 作用、动作
          pic: "http://img.weiye.me/zcimgdir/album/file_58fdb0ef0b1bf.png",
          title: "分类",
          li_style: "width:84.9609375rpx;border-radius:50%;margin-left:auto;",
          img_style: "height:84.9609375rpx;border-radius:50%;margin-left:auto",
          eventParams: '{"inner_page_link":"page10007","is_redirect":0}',
          eventHandler: "tapInnerLinkHandler"
        },
        {
          // 定制特征
          customFeature: {
            action: "inner-link", // 作用、动作
            "page-link": "page10008", // 页面链接
            "xcx-appid": "", // 跳转小程序 appID
            "xcx-page-url": "" // 跳转小程序 页面链接
          },
          li_class: "album-pic router",
          action: "inner-link", // 作用、动作
          pic: "http://img.weiye.me/zcimgdir/album/file_58fdb0ef3040a.png",
          title: "优惠",
          li_style: "width:84.9609375rpx;border-radius:50%;margin-left:auto;",
          img_style: "height:84.9609375rpx;border-radius:50%;margin-left:auto",
          eventParams: '{"inner_page_link":"page10008","is_redirect":0}',
          eventHandler: "tapInnerLinkHandler"
        }
      ],
      // 定制特征
      customFeature: {
        col: 4,
        row: 1,
        imgHeight: "36.25px",
        mode: 1,
        "padding-left": "35",
        "padding-top": "10",
        picBorderRadius: "50%",
        isSideslip: false,
        action: "",
        textHeight: "",
        imgWidth: 76.25,
        width: ""
      },
      itemType: "album",
      itemParentType: null,
      itemIndex: "ablum2",
      content: "", // 内容
      compId: "ablum2", // 组件id
      canIUseNavigatorTarget: "" // 是否有导航链接
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {}
});
