/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50726
Source Host           : localhost:3306
Source Database       : react_project_tea

Target Server Type    : MYSQL
Target Server Version : 50726
File Encoding         : 65001

Date: 2020-07-17 19:20:07
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for cart
-- ----------------------------
DROP TABLE IF EXISTS `cart`;
CREATE TABLE `cart` (
  `cartId` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) NOT NULL,
  `username` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `goodsId` int(11) NOT NULL,
  `count` int(11) NOT NULL,
  `goodstitle` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `price` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`cartId`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of cart
-- ----------------------------
INSERT INTO `cart` VALUES ('1', '1', 'AliceCcc', '1113', '50', '【2020春茶】大与茶號 白茶 御苑玉芽 2020年 白毫银针 特级 50g（20121）', '218');

-- ----------------------------
-- Table structure for teadetailed
-- ----------------------------
DROP TABLE IF EXISTS `teadetailed`;
CREATE TABLE `teadetailed` (
  `goodsId` int(11) NOT NULL AUTO_INCREMENT,
  `teatitlecontentId` int(11) NOT NULL,
  `goodstitle` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `goodsImg` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `goodsDesc` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `goodsPrice` int(11) NOT NULL DEFAULT '0',
  `goodsPerson` int(11) DEFAULT NULL,
  `goodsLogo` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `goodsBeiyong2` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`goodsId`)
) ENGINE=MyISAM AUTO_INCREMENT=1392 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of teadetailed
-- ----------------------------
INSERT INTO `teadetailed` VALUES ('1111', '2345001', '白玉龙 古树白茶 2020年白毫银针 50g精选商务礼盒装', 'http://img0.zuipin.cn/online_img/proimg/20200325104828_142977734149.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '商务精品礼盒装 送礼择优', '399', '28', 'https://img4.zuipin.cn/online_img/tagimg/20200224163810_240743524922.png', null);
INSERT INTO `teadetailed` VALUES ('1112', '2345001', '【2020春茶】大与茶號 白茶 御苑玉芽 2020年 白毫银针 特级 500g（20121）', 'http://img3.zuipin.cn/online_img/proimg/20200415174226_12825902394.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250\"', '2020春茶 优选头采全芽茶', '1980', '1', 'https://img4.zuipin.cn/online_img/tagimg/20200224163810_240743524922.png', null);
INSERT INTO `teadetailed` VALUES ('1113', '2345001', '【2020春茶】大与茶號 白茶 御苑玉芽 2020年 白毫银针 特级 50g（20121）', 'http://img0.zuipin.cn/online_img/proimg/20200416141032_146235369240.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '2020春茶 优选头采全芽茶', '218', '2', 'https://img4.zuipin.cn/online_img/tagimg/20200224163810_240743524922.png', null);
INSERT INTO `teadetailed` VALUES ('1114', '2345001', '大与茶號 政和白茶 2019年白毫银针 御苑玉芽 特级50g复古铁罐', 'http://img0.zuipin.cn/online_img/proimg/20190604092704_563416231576.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '2019年头采 毫香扑鼻', '258', '200', '', null);
INSERT INTO `teadetailed` VALUES ('1115', '2345001', '大与茶號 政和白茶 2019年白毫银针 御苑玉芽 特级500g桐木箱', 'http://img3.zuipin.cn/online_img/proimg/20190622153637_1087973304.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '送礼佳选', '2380', '100', '', null);
INSERT INTO `teadetailed` VALUES ('1116', '2345001', '【自饮精选！】太姥山·晓白 福鼎白茶 白毫银针 2019年 一级 50g', 'http://img2.zuipin.cn/online_img/proimg/20191203095435_99463843604.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '厂家已断货', '240', '24', '', null);
INSERT INTO `teadetailed` VALUES ('1117', '2345001', '白玉龙 古树白茶 2019年白毫银针 50g精选商务礼盒装', 'http://img0.zuipin.cn/online_img/proimg/20200214154811_141299489495.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '精致商务礼 诚意满满', '488', '33', '', null);
INSERT INTO `teadetailed` VALUES ('1118', '2345001', '太姥山 福鼎白茶 2019年白毫银针 正山雅藏手提箱 一级400g', 'http://img1.zuipin.cn/online_img/proimg/20200218154740_376771962323.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '产量稀少 弥足珍贵', '2250', '22', '', null);
INSERT INTO `teadetailed` VALUES ('1119', '2345001', '醉品叶界x蔡良绥 福鼎白茶 2018年白毫银针 特级90g龙啸九天 外宾礼茶', 'http://img4.zuipin.cn/online_img/proimg/20190710091520_433943528953.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '非遗传承人 蔡良绥大师作品', '1888', '57', 'https://m.zuipin.cn/web/images/zp_label_quehuo_pc.png', null);
INSERT INTO `teadetailed` VALUES ('1120', '2345001', '【整箱装28盒】白玉龙 古树白茶 2019年白毫银针 50g精选商务礼盒', 'http://img4.zuipin.cn/online_img/proimg/20200221090305_390390869869.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '', '13664', '10', 'https://m.zuipin.cn/web/images/zp_lpc_xx.png', null);
INSERT INTO `teadetailed` VALUES ('1121', '2345002', '【2020春茶】大与茶號 白茶 上品拣芽 2020年 白牡丹 特级 50g（20221）', 'http://img1.zuipin.cn/online_img/proimg/20200420110430_168747016540.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '特级芽茶 上品白牡丹', '168', '3', 'https://img4.zuipin.cn/online_img/tagimg/20200224163810_240743524922.png', null);
INSERT INTO `teadetailed` VALUES ('1122', '2345002', '【2020春茶】白玉龙 古树白茶 2020年白牡丹 随行礼 特级50g 单罐', 'http://img0.zuipin.cn/online_img/proimg/20200403102754_171932164232.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '清甜不上火 清爽好心情', '199', '22', 'https://img4.zuipin.cn/online_img/tagimg/20200224163810_240743524922.png', null);
INSERT INTO `teadetailed` VALUES ('1123', '2345002', '【收藏礼精选！】白玉龙 古树白茶 白牡丹饼 2019年 收藏礼 二级 357g', 'http://img2.zuipin.cn/online_img/proimg/20191121105615_12674769454.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '高性价比藏品', '418', '59', '', null);
INSERT INTO `teadetailed` VALUES ('1124', '2345002', '【2020春茶】大与茶號 白茶 上品拣芽 2020年 白牡丹 特级 500g (20221)', 'http://img3.zuipin.cn/online_img/proimg/20200416093043_186296158923.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '毫心选料 特级收藏品', '1680', '0', 'https://img4.zuipin.cn/online_img/tagimg/20200224163810_240743524922.png', null);
INSERT INTO `teadetailed` VALUES ('1125', '2345002', '醉品朴茶 福鼎白茶 2019年白牡丹 9周年纪念饼珍藏版357g/饼', 'http://img3.zuipin.cn/online_img/proimg/20191203171955_262896066120.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '9周年纪念饼珍藏版', '288', '35', '', null);
INSERT INTO `teadetailed` VALUES ('1126', '2345002', '【自饮精选！】太姥山·晓白 福鼎白茶 白牡丹 2019年 一级 80g 单盒', 'http://img1.zuipin.cn/online_img/proimg/20200515143526_26411946543.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '伴手佳选 可搭配礼盒', '108', '48', '', null);
INSERT INTO `teadetailed` VALUES ('1127', '2345002', '大与茶號 政和白茶 2019年白牡丹 上品拣芽 特级50g 复古铁罐', 'http://img3.zuipin.cn/online_img/proimg/20191022091548_185160992551.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '饱满青翠 淡雅花果香', '188', '200', '', null);
INSERT INTO `teadetailed` VALUES ('1128', '2345002', '大与茶號 政和白茶 2019年白牡丹 瑞云翔龙 一级200g/饼', 'http://img0.zuipin.cn/online_img/proimg/20191011151236_64470561488.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '口感鲜爽鲜甜 适口度较高', '238', '43', '', null);
INSERT INTO `teadetailed` VALUES ('1129', '2345002', '白玉龙 古树白茶 2019年白牡丹 一级 150g分享礼 精选招待茶 青/白色包装随机发货', 'http://img0.zuipin.cn/online_img/proimg/20191121105443_676414401480.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '古树白茶 纯正花果香', '348', '37', '', null);
INSERT INTO `teadetailed` VALUES ('1130', '2345002', '【线上专供】大沁白茶 2012年春 白牡丹 陈年茶 一级 100g', 'http://img3.zuipin.cn/zpfx/proimg/2017-12-15-15-19-42-5a33778e44e3698426.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '有机茶园 毫香蜜韵', '298', '1000', '', null);
INSERT INTO `teadetailed` VALUES ('1131', '2345002', '醉品叶界 福鼎白茶 蔡良绥 2014年 一级 白牡丹 160g', 'http://img3.zuipin.cn/online_img/proimg/20191225142556_25603087601.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '几十年资深老制茶师傅制作而成', '568', '300', '', null);
INSERT INTO `teadetailed` VALUES ('1132', '2345002', '【送礼精选！】白玉龙 古树白茶 白牡丹 2019年 随行礼 特级 罐装 50g', 'http://img2.zuipin.cn/online_img/proimg/20191121105041_188293516229.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '清甜不上火 花香馥郁', '228', '35', '', null);
INSERT INTO `teadetailed` VALUES ('1133', '2345002', '【整箱装5饼】大与茶號 政和白茶 2019年白牡丹 瑞云翔龙 一级200g/饼', 'http://img2.zuipin.cn/online_img/proimg/20191011093954_215439757538.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '适口度高 口粮之选', '1138', '19', '', null);
INSERT INTO `teadetailed` VALUES ('1134', '2345002', '【整箱装7饼】大与茶號 政和白茶 2015年白牡丹 与华无极 一级 357g 收藏款', 'http://img1.zuipin.cn/online_img/proimg/20190622152251_1048325663763.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '香气纯正 初显陈香', '2680', '100', '', null);
INSERT INTO `teadetailed` VALUES ('1135', '2345002', '一匠一品X倪昌才 政和白茶 2018年白牡丹 特级90g 列传礼盒', 'http://img0.zuipin.cn/online_img/proimg/20191204162109_906192072950.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '清爽花香 清凉降火', '488', '11', '', null);
INSERT INTO `teadetailed` VALUES ('1136', '2345002', '大与茶號 白茶 上品拣芽 2019年 白牡丹 特级 500g', 'http://img1.zuipin.cn/online_img/proimg/20191025171501_274253405820.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '已断货，部分门店在售', '1980', '100', '', null);
INSERT INTO `teadetailed` VALUES ('1137', '2345002', '【 整箱装24罐】 白玉龙 古树白茶 2019年白牡丹 一级 150g分享礼 青/白色包装随机发货', 'http://img2.zuipin.cn/online_img/proimg/20200221085532_894669735768.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '古树白茶 纯正花果香', '8352', '18', '', null);
INSERT INTO `teadetailed` VALUES ('1138', '2345002', '【整箱装48盒】太姥山·晓白 福鼎白茶 白牡丹 2019年 一级 80g 单盒', 'http://img2.zuipin.cn/online_img/proimg/20200108100727_77695144337.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '', '5184', '0', '', null);
INSERT INTO `teadetailed` VALUES ('1139', '2345002', '【2020春茶】白玉龙 古树白茶 白牡丹 分享礼 罐装 一级 150g', 'https://img3.zuipin.cn/online_img/proimg/20200325104812_360597420.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160', '青色，白色2款包装随机发货', '299', '29', 'https://m.zuipin.cn/web/images/zp_label_quehuo_pc.png', null);
INSERT INTO `teadetailed` VALUES ('1140', '2345002', '白玉龙 古树白茶 2019年白牡丹 二级60g 精选伴手礼 青/白色包装随机发货', 'https://img4.zuipin.cn/online_img/proimg/20191121092318_172511739720.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160', '便携小巧 冲泡携带方便', '116', '69', 'https://m.zuipin.cn/web/images/zp_label_quehuo_pc.png', null);
INSERT INTO `teadetailed` VALUES ('1141', '2345002', '【有机茶】凰冠 2018年 云南白茶 四国认证有机茶 印·信有机白茶 一级 100g 礼盒', 'https://img0.zuipin.cn/online_img/proimg/2018-08-24%2014:47:38_953233113648.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160', '简洁时尚尽显内敛和稳重', '288', '200', 'https://m.zuipin.cn/web/images/zp_lpc_xx.png', null);
INSERT INTO `teadetailed` VALUES ('1142', '2345002', '【有机茶】凰冠 2018年 云南白茶 四国认证有机茶 尊·信系列有机白茶 一级 240g 礼盒', 'https://img4.zuipin.cn/online_img/proimg/2018-08-24%2015:03:52_389052866005.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160', '大气送礼精装', '1200', '200', 'https://m.zuipin.cn/web/images/zp_lpc_xx.png', null);
INSERT INTO `teadetailed` VALUES ('1143', '2345002', '【有机茶】凰冠 云南白茶 2018年白牡丹 君·信礼盒 特级120g', 'https://img4.zuipin.cn/online_img/proimg/2018-08-24%2015:01:17_15991501977.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160', '四国认证有机茶 自饮孝亲好伴侣', '600', '200', 'https://m.zuipin.cn/web/images/zp_lpc_xx.png', null);
INSERT INTO `teadetailed` VALUES ('1144', '2345002', '【 整箱装40罐】白玉龙 古树白茶 白牡丹 随行礼 2019年特级 单罐 50g', 'https://img2.zuipin.cn/online_img/proimg/20200220170129_565854712489.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160', '清甜不上火 花香馥郁', '9120', '0', 'https://m.zuipin.cn/web/images/zp_lpc_xx.png', null);
INSERT INTO `teadetailed` VALUES ('1145', '2345002', '【整箱装24盒】白玉龙 古树白茶 牡丹饼 收藏礼 2019年二级 357g', 'https://img4.zuipin.cn/online_img/proimg/20200221141751_1139040696079.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160', '高性价比藏品', '10032', '100', 'https://m.zuipin.cn/web/images/zp_lpc_xx.png', null);
INSERT INTO `teadetailed` VALUES ('1146', '2345002', '【整箱装75盒】白玉龙 古树白茶 2019年白牡丹 二级60g伴手礼 青/白色包装随机发货', 'https://img2.zuipin.cn/online_img/proimg/20200220165839_441503755047.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160', '便携小巧 冲泡携带方便', '8700', '0', 'https://m.zuipin.cn/web/images/zp_lpc_xx.png', null);
INSERT INTO `teadetailed` VALUES ('1147', '2345003', '【送礼精选！】太姥山·旺势 福鼎白茶 2013年 紧压白茶 寿眉 300g 一级', 'http://img1.zuipin.cn/online_img/proimg/20191204145230_543430883197.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '限量款 年节好礼有旺势', '580', '21', '', null);
INSERT INTO `teadetailed` VALUES ('1148', '2345003', '太姥山 福鼎白茶 2014年寿眉 龙吟饼 一级300g/饼 注：不含礼盒', 'http://img0.zuipin.cn/online_img/proimg/20200302171149_232807617064.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '限量款 “龙”图腾 寓福 寓吉祥 宜送礼', '480', '24', '', null);
INSERT INTO `teadetailed` VALUES ('1149', '2345003', '【自饮精选！】太姥山·红太阳 福鼎白茶 2013年 松压茶 寿眉 一级 300g', 'http://img3.zuipin.cn/online_img/proimg/20200227082811_580499893265.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '限量款 冬日送暖 提携方便', '600', '19', '', null);
INSERT INTO `teadetailed` VALUES ('1150', '2345003', '【自饮精选！】太姥山 福鼎白茶 2019年寿眉 晓白单盒 一级80g', 'http://img4.zuipin.cn/online_img/proimg/20200226102713_1464689311938.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '白茶本味 实惠自饮装', '48', '70', '', null);
INSERT INTO `teadetailed` VALUES ('1151', '2345003', '太姥山 福鼎白茶 2013年寿眉 茉茗饼 一级357g/饼', 'http://img3.zuipin.cn/online_img/proimg/20200218155030_7023664998.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '白茶醇厚 茉莉香柔 白茶与茉莉的碰撞~', '198', '44', '', null);
INSERT INTO `teadetailed` VALUES ('1152', '2345003', '【实惠口粮茶！】醉品茶集 品质散茶 福鼎白茶 寿眉 2018年 一级 500g', 'http://img1.zuipin.cn/online_img/proimg/20191129092505_481638395824.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '大分量实惠装', '200', '47', '', null);
INSERT INTO `teadetailed` VALUES ('1153', '2345003', '大与茶號 白茶 大与贡岁 2010年 老枞 寿眉 一级 250g', 'http://img1.zuipin.cn/online_img/proimg/20200623164258_508317094987.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '陈年老枞 清如甘泉 掏心窝的好茶', '2380', '0', '', null);
INSERT INTO `teadetailed` VALUES ('1154', '2345003', '大与茶號 白茶 大与贡岁 2010年 老枞 寿眉 一级 50g', 'http://img3.zuipin.cn/online_img/proimg/20200623161828_108557689614.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '陈年老枞 清如甘泉 掏心窝的好茶', '468', '21', '', null);
INSERT INTO `teadetailed` VALUES ('1155', '2345003', '太姥山 2010年寿眉 68周年纪念茶 一级 357g/饼', 'http://img4.zuipin.cn/online_img/proimg/20200218151457_81267732007.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '9年存放 自然转化', '1280', '13', '', null);
INSERT INTO `teadetailed` VALUES ('1156', '2345003', '【整箱装48盒】太姥山 福鼎白茶 2019年寿眉 晓白单盒 一级80g', 'http://img3.zuipin.cn/online_img/proimg/20200108101109_47880405282.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '白茶本味 实惠自饮装', '2304', '0', '', null);
INSERT INTO `teadetailed` VALUES ('1157', '2345003', '太姥山 福鼎白茶 2019年寿眉 正山雅藏 一级800g手提箱', 'http://img1.zuipin.cn/online_img/proimg/20200218161125_170755760871.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '【厂家已断货】品饮 收藏之上品', '420', '21', 'https://m.zuipin.cn/web/images/zp_lpc_xx.png', null);
INSERT INTO `teadetailed` VALUES ('1158', '2345003', '【整箱装12罐】太姥山 福鼎白茶 2013年寿眉 红太阳铁罐 一级300g', 'http://img2.zuipin.cn/online_img/proimg/20200108101304_731937522057.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '', '7200', '0', 'https://m.zuipin.cn/web/images/zp_lpc_xx.png', null);
INSERT INTO `teadetailed` VALUES ('1159', '2345003', '【整箱装10套】太姥山 2010年寿眉 68周年纪念茶 一级 357g/饼', 'http://img0.zuipin.cn/online_img/proimg/20200107153557_1208538857783.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '9年老茶 限量收藏', '12800', '0', 'https://m.zuipin.cn/web/images/zp_lpc_xx.png', null);
INSERT INTO `teadetailed` VALUES ('1160', '2345003', '【整箱装36饼】太姥山· 福鼎白茶 2014年寿眉 龙吟饼 一级300g/饼', 'http://img0.zuipin.cn/online_img/proimg/20200220082100_175169589453.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '限量款 “龙”图腾 寓福 寓吉祥 宜送礼', '17280', '0', 'https://m.zuipin.cn/web/images/zp_lpc_xx.png', null);
INSERT INTO `teadetailed` VALUES ('1161', '2345003', '【整箱装36饼】太姥山 福鼎白茶 2013年寿眉 旺势饼 一级 300g/饼', 'http://img0.zuipin.cn/online_img/proimg/20200108101716_150925016575.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '限量款 好礼有旺势', '20880', '0', 'https://m.zuipin.cn/web/images/zp_lpc_xx.png', null);
INSERT INTO `teadetailed` VALUES ('1162', '2345003', '【整箱装36饼】太姥山 福鼎白茶 2013年寿眉 茉茗饼 一级357g/饼', 'http://img3.zuipin.cn/online_img/proimg/20200108092920_255920934748.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '白茶醇厚 茉莉香柔 白茶与茉莉的碰撞~', '7128', '0', 'https://m.zuipin.cn/web/images/zp_lpc_xx.png', null);
INSERT INTO `teadetailed` VALUES ('1163', '2346001', '土林凤凰 普洱茶 凤凰砖 2019年熟茶100g*6砖/盒', 'http://img4.zuipin.cn/online_img/proimg/20200414141904_174929650655.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '经典凤凰砖 大气送礼装', '252', '42', '', null);
INSERT INTO `teadetailed` VALUES ('1164', '2346001', '土林凤凰 普洱茶 甲级沱茶 2019年生茶 100g*5沱/条', 'http://img1.zuipin.cn/online_img/proimg/20200414135157_962571518034.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '无量山古树茶 茶香醇浓', '125', '57', '', null);
INSERT INTO `teadetailed` VALUES ('1165', '2346001', '土林凤凰 普洱茶 凤凰砖 2019年生茶100g*6砖/盒', 'http://img3.zuipin.cn/online_img/proimg/20200414141258_116098134784.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '整整6砖，超量600克', '228', '30', '', null);
INSERT INTO `teadetailed` VALUES ('1166', '2346001', '土林凤凰 普洱茶 8504七子饼茶2019年 熟茶饼 357g/饼', 'http://img3.zuipin.cn/online_img/proimg/20200413154350_247361365353.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '凤凰沱茶独一家 百年云南沱茶嫡传继承者之一', '96', '31', '', null);
INSERT INTO `teadetailed` VALUES ('1167', '2346001', '【收藏礼精选！】醉品朴茶 普洱茶 生茶 2019年 9周年纪念饼珍藏版 单饼 357g', 'http://img2.zuipin.cn/online_img/proimg/20191203092331_453479798668.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '9周年纪念饼珍藏版', '288', '16', '', null);
INSERT INTO `teadetailed` VALUES ('1168', '2346001', '八角亭 普洱茶 2018年霸王砖熟茶 600g 伴手礼', 'http://img4.zuipin.cn/online_img/proimg/20190906213315_269563924667.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '班章霸王熟茶 收藏送礼佳选', '980', '41', '', null);
INSERT INTO `teadetailed` VALUES ('1169', '2346001', '醉品朴茶 普洱茶 生茶 2019年 9周年纪念饼珍藏版 整箱装 5饼/箱', 'http://img4.zuipin.cn/online_img/proimg/20191205174221_146733892279.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '9周年纪念饼珍藏版 整箱收藏增值', '1439', '1', '', null);
INSERT INTO `teadetailed` VALUES ('1170', '2346001', '八角亭 普洱茶 2018年霸王砖生茶 3年陈料 600g 伴手礼', 'http://img3.zuipin.cn/online_img/proimg/20190906212715_23225777818.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '班章霸王生茶 收藏名宠', '980', '36', '', null);
INSERT INTO `teadetailed` VALUES ('1171', '2346001', '老同志 普洱茶 2012年熟茶 高山乔木茶饼 357g/饼', 'http://img1.zuipin.cn/online_img/proimg/20200525090800_118597366309.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '普洱老茶 更温和暖胃', '408', '300', '', null);
INSERT INTO `teadetailed` VALUES ('1172', '2346001', '老同志 普洱茶 2011年熟茶 海湾熟饼 357g/饼', 'http://img1.zuipin.cn/zpfx/proimg/2018-01-22-10-05-30-5a6546ea2487683809.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '普洱老茶 越喝越醇香', '335', '400', '', null);
INSERT INTO `teadetailed` VALUES ('1173', '2346001', '老同志 普洱茶 2016年熟茶 迷你小沱茶单罐 200g', 'http://img0.zuipin.cn/zpfx/proimg/2018-01-22-09-38-10-5a6540820aa7d58252.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '一颗一泡 不用撬茶轻松泡', '210', '400', '', null);
INSERT INTO `teadetailed` VALUES ('1174', '2346001', '行吉 普洱茶 2014年 厚福蓝印（熟茶）357g/饼', 'http://img1.zuipin.cn/online_img/proimg/2018-08-24%2010:34:27_483257687994.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '杨行吉独有发酵工艺，茶饼饱满', '268', '300', '', null);
INSERT INTO `teadetailed` VALUES ('1175', '2346001', '醉品朴茶 9周年纪念珍藏版 普洱茶 2019年 一级 生茶饼357g', 'http://img4.zuipin.cn/online_img/proimg/20190706140421_29549533113.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '', '168', '3', '', null);
INSERT INTO `teadetailed` VALUES ('1176', '2346001', '傣园普香 普洱茶 2017年 生茶 班章 250g/砖 黑茶', 'http://img3.zuipin.cn/zpfx/proimg/2018-01-12-16-31-37-5a587269798b312705.png?x-oss-process=image/resize,m_lfit,h_250,w_250', '霸气强烈 山野气韵十足', '420', '700', '', null);
INSERT INTO `teadetailed` VALUES ('1177', '2346001', '普秀 普洱茶 2017 生茶 景迈万乔流香 357g/饼 黑茶', 'http://img0.zuipin.cn/zpfx/proimg/2018-02-05-09-24-08-5a77b2387727d46062.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '名山乔木大树 原料压制', '238', '600', '', null);
INSERT INTO `teadetailed` VALUES ('1178', '2346001', '行吉 普洱茶 2014年 鼎藏（熟茶）357g/饼', 'http://img2.zuipin.cn/online_img/proimg/20200525093303_362082971110.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '杨行吉独有发酵工艺，色泽红褐、松紧适度', '398', '300', '', null);
INSERT INTO `teadetailed` VALUES ('1179', '2346001', '老同志 普洱茶 2017年 为天下人做好茶普洱茶砖 生茶 250g/砖', 'http://img2.zuipin.cn/online_img/proimg/2018-04-24%2014:15:04_1137859219906.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '茶友追捧的口粮茶，市场长青款', '205', '300', '', null);
INSERT INTO `teadetailed` VALUES ('1180', '2346001', '土林凤凰 普洱茶 厚积薄发 2019年生茶 357g/饼', 'http://img1.zuipin.cn/online_img/proimg/20200421100845_210836233009.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '', '280', '2', '', null);
INSERT INTO `teadetailed` VALUES ('1181', '2346001', '景迈人家普洱茶 2013年 熟茶 煑月 250g/砖', 'http://static.zuipin.cn/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95//1/_/1_543.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '景迈千年古树茶 老茶客推荐', '502', '200', '', null);
INSERT INTO `teadetailed` VALUES ('1182', '2346001', '八角亭 普洱茶 2018年刮风寨生茶饼 357g 【下单后约7天发货，不支持无理由退换货】', 'http://img1.zuipin.cn/online_img/proimg/20190909095957_200219169327.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '国际金奖茶 收藏名品', '4600', '36', '', null);
INSERT INTO `teadetailed` VALUES ('1183', '2346001', '【整箱装42饼】土林凤凰 普洱茶 8504七子饼茶 熟茶饼 357g*42饼/箱', 'https://img1.zuipin.cn/online_img/proimg/20200421105352_374506768919.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160', '', '4032', '0', '', null);
INSERT INTO `teadetailed` VALUES ('1184', '2346001', '老同志 普洱茶 2018年生茶 大吉大利礼盒 1000g', 'https://img0.zuipin.cn/online_img/proimg/2019-01-0209:58:16_1226910382685.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160', '秉承60年普洱茶制茶大师—邹炳良先生配方及传统制茶精髓', '1680', '300', '', null);
INSERT INTO `teadetailed` VALUES ('1185', '2346001', '普秀 普洱茶 里程碑 云南七子饼茶 2016年 熟茶 357g/饼', 'https://img3.zuipin.cn/online_img/proimg/2018-08-28%2010:14:12_131572924093.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160', '热销品质款，自饮常备', '380', '400', '', null);
INSERT INTO `teadetailed` VALUES ('1186', '2346001', '老同志普洱茶 好运来礼盒 2018年 生普500g+熟普500g', 'https://img1.zuipin.cn/zpfx/proimg/2018-01-22-16-25-32-5a659ffc4085755189.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160', '双饼大分量，心意加倍', '1280', '300', '', null);
INSERT INTO `teadetailed` VALUES ('1187', '2346001', '【整箱装15砖】八角亭 普洱茶 2018年霸王砖生茶 3年陈料 600g', 'https://img3.zuipin.cn/online_img/proimg/20191230154453_23234779325.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160', '班章霸王生茶 收藏名宠', '14700', '0', '', null);
INSERT INTO `teadetailed` VALUES ('1188', '2346001', '老同志 普洱茶 2016年生茶 乔木茶王饼 400g（不支持无理由退换货）', 'https://img0.zuipin.cn/online_img/proimg/2018-07-27%2017:24:46_299938312483.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160', '邹炳良殿堂级作品', '6860', '100', '', null);
INSERT INTO `teadetailed` VALUES ('1189', '2346001', '【整箱装20饼】八角亭 普洱茶 2018年刮风寨生茶饼 357g 【下单后约7天发货，不支持无理由退换货】', 'https://img1.zuipin.cn/online_img/proimg/20191230155352_81837564490.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160', '国际金奖茶 收藏名品', '92000', '0', '', null);
INSERT INTO `teadetailed` VALUES ('1190', '2346001', '【整箱装28饼】土林凤凰 普洱茶 厚积薄发 2019年生茶 357g*28饼/箱', 'https://img2.zuipin.cn/online_img/proimg/20200421105152_337054211776.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160', '', '7840', '0', '', null);
INSERT INTO `teadetailed` VALUES ('1191', '2346001', '【整箱装15砖】八角亭 普洱茶 2018年霸王砖熟茶 600g', 'https://img3.zuipin.cn/online_img/proimg/20191230155030_178727135986.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160', '班章霸王熟茶 收藏送礼佳选', '14700', '0', '', null);
INSERT INTO `teadetailed` VALUES ('1192', '2346001', '土林凤凰 普洱熟茶 803沱茶 2019年熟茶 100g*5沱/条', 'https://img4.zuipin.cn/online_img/proimg/20200414140816_488061168938.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160', '老树陈料 沱茶典范', '125', '53', 'https://m.zuipin.cn/web/images/zp_label_quehuo_pc.png', null);
INSERT INTO `teadetailed` VALUES ('1193', '2346001', '土林凤凰 普洱茶 一代清华 生茶 380g/饼', 'https://img2.zuipin.cn/online_img/proimg/20200414142256_414883180895.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160', '厂家已断货 部分门店在售 限量珍藏版', '480', '15', 'https://m.zuipin.cn/web/images/zp_lpc_xx.png', null);
INSERT INTO `teadetailed` VALUES ('1194', '2346001', '一匠一品x杨行吉 普洱茶 2016年熟茶 特级126g 列传礼盒', 'https://img2.zuipin.cn/online_img/proimg/20190722154035_222767667516.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160', '制茶名匠 杨行吉大师作品', '488', '22', 'https://m.zuipin.cn/web/images/zp_lpc_xx.png', null);
INSERT INTO `teadetailed` VALUES ('1195', '2346001', '【整箱装5盒】老同志 普洱茶 2018年生茶 大吉大利礼盒 1000g', 'https://img1.zuipin.cn/online_img/proimg/20200107152430_110272784853.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160', '', '8400', '0', 'https://m.zuipin.cn/web/images/zp_lpc_xx.png', null);
INSERT INTO `teadetailed` VALUES ('1196', '2346001', '【整箱装28饼】老同志 普洱茶 2012年熟茶 高山乔木茶饼 357g/饼', 'https://img4.zuipin.cn/online_img/proimg/20191231154640_211219067361.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160', '普洱老茶 更温和暖胃', '11424', '0', 'https://m.zuipin.cn/web/images/zp_lpc_xx.png', null);
INSERT INTO `teadetailed` VALUES ('1197', '2346001', '【整箱装14饼】土林凤凰 普洱茶 一代清华 生茶 380g*14饼/箱', 'https://img2.zuipin.cn/online_img/proimg/20200421111643_305785758770.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160', '厂家已断货 部分门店在售 限量珍藏版', '6720', '0', 'https://m.zuipin.cn/web/images/zp_lpc_xx.png', null);
INSERT INTO `teadetailed` VALUES ('1198', '2346001', '【 整箱装50罐】老同志 普洱茶 2016年熟茶 迷你小沱茶单罐 200g', 'https://img2.zuipin.cn/online_img/proimg/20191231160400_294885481377.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160', '迷你小沱茶 不用撬茶轻松泡', '10500', '0', 'https://m.zuipin.cn/web/images/zp_lpc_xx.png', null);
INSERT INTO `teadetailed` VALUES ('1199', '2346001', '【整箱装4盒】老同志 普洱茶 2018年 生普500g+熟普500g 好运来礼盒', 'https://img2.zuipin.cn/online_img/proimg/20200107152911_64702077592.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160', '', '5120', '0', 'https://m.zuipin.cn/web/images/zp_lpc_xx.png', null);
INSERT INTO `teadetailed` VALUES ('1200', '2346001', '【整箱装42饼】老同志 普洱茶 2011年熟茶 海湾熟饼 357g/饼', 'https://img1.zuipin.cn/online_img/proimg/20191231155301_834972167591.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160', '普洱老茶 越喝越醇香', '14070', '0', 'https://m.zuipin.cn/web/images/zp_lpc_xx.png', null);
INSERT INTO `teadetailed` VALUES ('1201', '2346002', '资润&醉品茶城联合出品 安化黑茶 2016年 快乐安化 天尖茶 一级 240g', 'http://img2.zuipin.cn/online_img/proimg/2019-04-0909:17:13_1038113039376.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '富含益生菌的健康关心茶', '238', '300', '', null);
INSERT INTO `teadetailed` VALUES ('1202', '2346002', '褒家冲&醉品茶城联合出品 安化黑茶 2018年红茯天下金花茯砖茶 800g', 'http://img1.zuipin.cn/online_img/proimg/2018-10-2410:00:30_622401445460.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '安化黑茶文化节纪念茶限量版', '248', '600', '', null);
INSERT INTO `teadetailed` VALUES ('1203', '2346002', '一匠一品x安化黑茶 夏玉祥 2018年 安化黑针 一级 30g 流芳单盒', 'http://img0.zuipin.cn/online_img/proimg/20190706143016_29460388917.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '办公常饮助消化', '150', '100', '', null);
INSERT INTO `teadetailed` VALUES ('1204', '2346002', '千秋界&醉品茶城联合出品 安化黑茶 2017年中欧有机双认证千两饼 700g', 'http://img1.zuipin.cn/online_img/proimg/2018-10-3015:28:35_650081989708.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '有机认证，新压制切割工艺', '498', '600', '', null);
INSERT INTO `teadetailed` VALUES ('1205', '2346002', '【送礼精选！】陶源茗湖南黑茶 山东八景&好客山东 2019年一级 400g 文创礼品茶', 'http://img3.zuipin.cn/online_img/proimg/20191114101918_1337406407783.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '山东城市茗片 轻商务茶礼', '488', '21', '', null);
INSERT INTO `teadetailed` VALUES ('1206', '2346002', '陶源茗湖南黑茶 陕西八景&关中八景 2019年一级 400g 文创礼品茶', 'http://img4.zuipin.cn/online_img/proimg/20191118151401_98195837447.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '陕西城市茗片 轻商务茶礼', '488', '22', '', null);
INSERT INTO `teadetailed` VALUES ('1207', '2346002', '【送礼精选！】陶源茗湖南黑茶 山西八景&晋善晋美 2019年一级 400g 文创礼品茶', 'http://img4.zuipin.cn/online_img/proimg/20191115134917_44105736314.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '山西城市茗片 轻商务茶礼', '488', '21', '', null);
INSERT INTO `teadetailed` VALUES ('1208', '2346002', '白沙溪 安化黑茶 安化茗片 2018年 小罐装 大师经典茗媛之选礼盒 240g', 'http://img0.zuipin.cn/online_img/proimg/2018-09-11%2014:30:33_167868961221.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '经典小罐装，一片一泡', '598', '92', '', null);
INSERT INTO `teadetailed` VALUES ('1209', '2346002', '白沙溪 安化黑茶 2018年 福天下 紫印老树 春尖茯茶 1000g', 'http://img4.zuipin.cn/online_img/proimg/2018-09-07%2017:44:30_854942790202.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '梅山荒山60年老树春尖茯茶', '800', '100', '', null);
INSERT INTO `teadetailed` VALUES ('1210', '2346002', '白沙溪 安化黑茶 馆藏千两小金砖 2018年 特级 530g', 'http://img1.zuipin.cn/online_img/proimg/2018-09-07%2017:29:19_209516185268.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '', '668', '64', '', null);
INSERT INTO `teadetailed` VALUES ('1211', '2346002', '白沙溪 安化黑茶 安化茗片 黑茶 小罐装 大师经典茗士之选 2018年240g', 'http://img0.zuipin.cn/online_img/proimg/2018-09-11%2014:27:56_63014926313.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '方便携带，略带松烟香', '598', '98', '', null);
INSERT INTO `teadetailed` VALUES ('1212', '2346002', '天墨&醉品茶城 安化黑茶 2017年高山野生手筑茯砖茶 400g', 'http://img1.zuipin.cn/online_img/proimg/2018-10-2410:13:46_424932548518.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '安化黑茶文化节纪念茶限量版', '198', '500', 'https://m.zuipin.cn/web/images/zp_lpc_xx.png', null);
INSERT INTO `teadetailed` VALUES ('1213', '2346002', '一匠一品x安化黑茶 夏玉祥 2018年 安化黑针 60g 流芳双盒', 'http://img3.zuipin.cn/online_img/proimg/20190706151845_214372713601.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '天尖品级 严选黑茶', '299', '100', 'https://m.zuipin.cn/web/images/zp_lpc_xx.png', null);
INSERT INTO `teadetailed` VALUES ('1214', '2346003', '益泡柑 代用茶 柑普茶 荣华新会小青柑 150g 黄罐', 'http://img4.zuipin.cn/online_img/proimg/20200603162702_305486667117.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '办公常饮，呵护肠胃', '180', '300', '', null);
INSERT INTO `teadetailed` VALUES ('1215', '2346003', '益泡柑 代用茶 柑普茶 益泡·雅 二红柑 一级 方罐100g', 'http://img3.zuipin.cn/zpfx/proimg/2017-11-24-16-46-43-5a17dc735bac596873.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '【库存较低，即将售罄】久坐肠胃不畅通 常喝普洱茶 办公常备', '100', '600', '', null);
INSERT INTO `teadetailed` VALUES ('1216', '2346003', '益泡柑 代用茶 柑普茶 益泡·雅 大红柑 一级 方罐100g', 'http://img4.zuipin.cn/zpfx/proimg/2017-11-24-16-39-01-5a17daa50ab5d81189.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '健身达人伴侣 维持好身材', '100', '500', '', null);
INSERT INTO `teadetailed` VALUES ('1217', '2346003', '益泡柑 代用茶 柑普茶 益泡·颂 小青柑 特级 圆罐250g', 'http://img1.zuipin.cn/zpfx/proimg/2017-12-27-09-59-35-5a42fe87670ca55114.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '饭后常饮 消化无负担', '580', '500', '', null);
INSERT INTO `teadetailed` VALUES ('1218', '2346003', '益泡柑 代用茶 柑普茶 益泡·品 二红柑 一级 圆罐500g', 'http://img3.zuipin.cn/zpfx/proimg/2017-12-27-08-53-09-5a42eef55f13757288.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '库存告急，卖完售罄', '600', '400', '', null);
INSERT INTO `teadetailed` VALUES ('1219', '2346003', '益泡柑 代用茶 柑普茶 益泡·品 大红柑 一级 圆罐380g', 'http://img3.zuipin.cn/zpfx/proimg/2017-12-27-08-56-26-5a42efba9c50a90921.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '库存告急，卖完售罄', '640', '400', '', null);
INSERT INTO `teadetailed` VALUES ('1220', '2347001', '醉品朴茶 金骏眉 深山老林野茶 2019年 特级 礼盒装 250g', 'http://img2.zuipin.cn/online_img/proimg/20200512173652_234510162837.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '山野韵味 一尝难忘 唇齿留香', '399', '200', '', null);
INSERT INTO `teadetailed` VALUES ('1221', '2347001', '醉品叶界x张笔清 金骏眉 2019年春茶 特级90g 龙啸九天礼盒', 'http://img4.zuipin.cn/online_img/proimg/20190709184422_1077868191366.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '国家非物质文化遗产技艺传承人 张笔清大师作品', '1888', '41', '', null);
INSERT INTO `teadetailed` VALUES ('1222', '2347001', '醉品朴茶 金骏眉一茶一城&厦门 薯香 50g 红茶', 'http://img0.zuipin.cn/online_img/proimg/2019-04-2809:25:41_396771235012.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '办公族喜欢的高甜红茶', '68', '13000', '', null);
INSERT INTO `teadetailed` VALUES ('1223', '2347001', '【2020春茶 】醉品朴茶 金骏眉 口碑好茶 特级 皇冠100g', 'http://img4.zuipin.cn/online_img/proimg/20190609194731_214435143579.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '温暖下午茶 甜蜜治愈', '138', '1200', 'https://img4.zuipin.cn/online_img/tagimg/20200224163810_240743524922.png', null);
INSERT INTO `teadetailed` VALUES ('1224', '2347001', '【线上专供】醉品朴茶 红茶 金骏眉 一茶一城&厦门 薯香 50g*5盒 ', 'http://img2.zuipin.cn/online_img/proimg/20190828154238_140159718588.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '办公族喜爱的高甜红茶', '99', '500', 'https://m.zuipin.cn/web/images/zp_label_tejia_pc.png', null);
INSERT INTO `teadetailed` VALUES ('1225', '2347001', '醉品朴茶 金骏眉一茶一城&厦门 薯香 50g 红茶', 'http://img3.zuipin.cn/online_img/proimg/2019-04-2809:27:24_12059924876.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '办公族喜欢的高甜红茶', '68', '400', '', null);
INSERT INTO `teadetailed` VALUES ('1226', '2347001', '醉品朴茶 良品严选系列 2019年 金骏眉 一级 JM1450-100g', 'http://img1.zuipin.cn/online_img/proimg/2018-10-1809:57:47_167838161717.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '常邀亲友喝茶 增进感情', '115', '600', '', null);
INSERT INTO `teadetailed` VALUES ('1227', '2347001', '【商务送礼精选！】麻粟正山红 红茶 桐木金骏眉 2019年 新派工艺红茶 一级 72g', 'http://img3.zuipin.cn/online_img/proimg/20191206170856_508484976335.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '以武夷山自然保护区明前茶芽为原料，纯单芽制作', '768', '400', '', null);
INSERT INTO `teadetailed` VALUES ('1228', '2347001', '醉品朴茶 金骏眉 深山老林野茶 2019年 特级 礼盒装 250g （黑）', 'http://img3.zuipin.cn/online_img/proimg/20190718155844_763829752797.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '山野韵味 一尝难忘 唇齿留香', '399', '1', '', null);
INSERT INTO `teadetailed` VALUES ('1229', '2347001', '醉品朴茶 金骏眉一茶一城&厦门 薯香 50g 红茶', 'http://img3.zuipin.cn/online_img/proimg/20190924100834_500510578472.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '', '68', '20', '', null);
INSERT INTO `teadetailed` VALUES ('1230', '2347002', '醉品朴茶 正山小种 高山荒地野茶 老茶厂直供 2019年 特级 礼盒装 250g', 'http://img4.zuipin.cn/online_img/proimg/20200514173643_385887426898.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '高山荒地野茶 山野韵味 一尝难忘', '299', '400', '', null);
INSERT INTO `teadetailed` VALUES ('1231', '2347002', '【实惠口粮茶！】麻粟正山红 红茶 2019年 武夷奇红 一级 500g', 'http://img3.zuipin.cn/online_img/proimg/20191205184410_72745291721.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '高性价比口粮茶', '268', '26', '', null);
INSERT INTO `teadetailed` VALUES ('1232', '2347002', '一匠一品X沈明双 野茶小种 2019年春茶 特级90g 列传礼盒', 'http://img2.zuipin.cn/online_img/proimg/20190722153705_267879224962.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '高山野茶 清爽沁心甜', '488', '69', '', null);
INSERT INTO `teadetailed` VALUES ('1233', '2347002', '醉品朴茶·醇朴 2019年 正山小种 特级 XZ1200-125g', 'http://img4.zuipin.cn/online_img/proimg/20190609194553_42427944683.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '新茶抢鲜 野生制茶 高性价比', '129', '3100', '', null);
INSERT INTO `teadetailed` VALUES ('1234', '2347002', '醉品朴茶 2019 年 正山小种 口碑好茶 特级 皇冠100g', 'http://img2.zuipin.cn/online_img/proimg/20200326103459_452627896462.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '鲜爽度高，蜜香浓', '85', '700', '', null);
INSERT INTO `teadetailed` VALUES ('1235', '2347002', '麻粟正山红 红茶 2018年 麻粟守护者合集 一级 90g', 'http://img4.zuipin.cn/online_img/proimg/20191205184055_1196192022655.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '一次把麻粟老丛红茶喝个遍', '1188', '0', '', null);
INSERT INTO `teadetailed` VALUES ('1236', '2347002', '醉品叶界 中国茶礼 热销爆款 正山小种 特级 200g 红茶礼盒', 'http://img3.zuipin.cn/online_img/proimg/20191225142930_85069765168.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '独特松木熏焙，桂圆汤香显', '488', '1900', '', null);
INSERT INTO `teadetailed` VALUES ('1237', '2347002', '【线上专供】醉品朴茶 诗酒茶系列&浮生 2019年 正山小种 一级 体验装 10g', 'http://img3.zuipin.cn/online_img/proimg/2019-05-0809:21:23_109295362952.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '8700564同款体验装', '10', '700', '', null);
INSERT INTO `teadetailed` VALUES ('1238', '2347002', '醉品叶界 中国茶礼 龙腾四海 2019年桐木关正山小种 特级 125g & 星空建盏礼盒', 'http://img0.zuipin.cn/online_img/proimg/2018-07-31%2016:36:01_384750767713.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '再现元首礼风采，国礼集成代表作', '618', '600', '', null);
INSERT INTO `teadetailed` VALUES ('1239', '2347002', '【线上专供】醉品朴茶 正山小种 2019年 二级 50g', 'http://img4.zuipin.cn/online_img/proimg/20200409113734_520175376025.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '', '39', '16', '', null);
INSERT INTO `teadetailed` VALUES ('1240', '2347002', '正山堂·元正 正山小种 2019年 骏眉·胤 特级 54g 商务礼盒', 'http://img4.zuipin.cn/zpfx/proimg/2018-01-16-09-51-32-5a5d5aa40d4911492.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '厂家已断货 春节前最后一批 百年传承工艺', '1080', '100', '', null);
INSERT INTO `teadetailed` VALUES ('1241', '2347002', '麻粟正山红 红茶 桐木 正山小种 2019年 一级 210g', 'http://img1.zuipin.cn/online_img/proimg/20191217094358_314388551131.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '经典桂圆香 自饮送礼皆宜', '498', '500', '', null);
INSERT INTO `teadetailed` VALUES ('1242', '2347002', '【线上专供】醉品朴茶 2019 年 正山小种 口碑好茶 特级 皇冠100g*2罐+彩金建盏', 'http://img2.zuipin.cn/online_img/proimg/20200326085447_90658336229.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '', '265', '0', '', null);
INSERT INTO `teadetailed` VALUES ('1243', '2347002', '【线上专供】醉品朴茶 2019 年 正山小种 口碑好茶 特级 皇冠100g*4罐+彩金建盏', 'http://img2.zuipin.cn/online_img/proimg/20200326085510_819285282834.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '', '435', '0', '', null);
INSERT INTO `teadetailed` VALUES ('1244', '2347002', '【非遗传承人张笔清亲制】麻粟正山红 2018年正山小种 武夷红茶 一级 丛叟 72g', 'http://img4.zuipin.cn/online_img/proimg/2018-08-06%2015:54:36_134936182490.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '百年老树茶 老茶友挚爱', '1180', '300', '', null);
INSERT INTO `teadetailed` VALUES ('1245', '2347002', '醉品朴茶 正山小种 高山荒地野茶 老茶厂直供 2019年 特级 礼盒装 250g（黑）', 'http://img2.zuipin.cn/online_img/proimg/20190718160526_236554587329.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '高山荒地野茶 山野韵味 一尝难忘', '299', '0', '', null);
INSERT INTO `teadetailed` VALUES ('1246', '2347002', '【非遗传承人张笔清】麻粟正山红 2018年 正山小种 一级 大师茶·老丛红茶 60g', 'http://img0.zuipin.cn/online_img/proimg/20191217094744_318725515088.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '包装升级 小罐精装', '680', '200', 'https://m.zuipin.cn/web/images/zp_label_quehuo_pc.png', null);
INSERT INTO `teadetailed` VALUES ('1247', '2347002', '麻粟正山红 红茶 桐木赤甘 2019年 一级 210g', 'http://img3.zuipin.cn/online_img/proimg/2018-08-06%2016:01:15_837934574932.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '居家自饮 甘甜顺滑', '498', '500', 'https://m.zuipin.cn/web/images/zp_label_quehuo_pc.png', null);
INSERT INTO `teadetailed` VALUES ('1248', '2347003', '【送礼精选！】云戎茶业 云南滇红 2019年特级 200g 庄园礼盒', 'http://img4.zuipin.cn/online_img/proimg/20191129190011_219343544049.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '伴手礼佳选', '398', '23', '', null);
INSERT INTO `teadetailed` VALUES ('1249', '2347003', '【自饮精选！】云戎茶业 云南滇红 2019年一级 300g 经典58牛皮袋装', 'http://img0.zuipin.cn/online_img/proimg/20191129190107_149610034123.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '居家办公自饮 大分量装', '128', '52', '', null);
INSERT INTO `teadetailed` VALUES ('1250', '2347003', '云戎茶业 云南滇红 2019年特级 100g 老树晒红 随行装', 'http://img3.zuipin.cn/online_img/proimg/20200525091450_580224705330.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '老树晒红 入口甜润鲜爽', '150', '54', '', null);
INSERT INTO `teadetailed` VALUES ('1251', '2347003', '【自饮精选！】云戎茶业 云南滇红 2019年特级300g 传承1939单盒', 'http://img3.zuipin.cn/online_img/proimg/20191129190153_735257045739.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '传承工艺 高山原料 滋味醇厚', '168', '83', '', null);
INSERT INTO `teadetailed` VALUES ('1252', '2347003', '醉品朴茶 云南滇红 2019年 一级 简雅自饮装 100g/袋', 'http://img0.zuipin.cn/online_img/proimg/20190716165748_392135983068.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '办公口粮 养颜元气茶', '69', '300', '', null);
INSERT INTO `teadetailed` VALUES ('1253', '2347003', '云戎茶业 云南滇红 2019年特级金针 150g 香妃竹礼盒', 'http://img4.zuipin.cn/online_img/proimg/20191129162121_354113823629.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '品质代表 金奖茶礼', '2080', '15', '', null);
INSERT INTO `teadetailed` VALUES ('1254', '2347003', '【送礼精选！】凰冠 2018年滇红 四国认证有机茶 君·信系列有机红茶 礼盒 120g', 'http://img0.zuipin.cn/online_img/proimg/2018-08-24%2014:58:20_89388915167.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '传统与时尚只是一念之间', '600', '200', 'https://m.zuipin.cn/web/images/zp_lpc_xx.png', null);
INSERT INTO `teadetailed` VALUES ('1255', '2347004', '祥源茶 祁门红茶 金色庄园 丹华 2018年春茶 240g 特级 礼盒', 'http://img2.zuipin.cn/online_img/proimg/2018-07-26%2017:29:58_59661851430.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '17道精制 经典祁门香', '1080', '500', '', null);
INSERT INTO `teadetailed` VALUES ('1256', '2347005', '一匠一品 匡保华 2019年 安化红针 30g', 'http://img1.zuipin.cn/online_img/proimg/20190917135754_87373234011.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '甘甜不腻 耐看耐喝', '195', '100', '', null);
INSERT INTO `teadetailed` VALUES ('1257', '2347005', '一匠一品 匡保华 2019年 安化红针 体验装 6g', 'http://img2.zuipin.cn/online_img/proimg/20190917135545_222882131597.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '便携分享装', '39', '100', '', null);
INSERT INTO `teadetailed` VALUES ('1258', '2348001', '【2020春茶 助农好茶】一匠一品x仇晓华 西湖龙井 2020年 一级70g 列传礼盒', 'http://img4.zuipin.cn/online_img/proimg/20200525091621_485024942403.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '正宗西湖龙井炒茶王新鲜炒制', '488', '45', 'https://img4.zuipin.cn/online_img/tagimg/20200224163810_240743524922.png', null);
INSERT INTO `teadetailed` VALUES ('1259', '2348001', '【2020春茶 助农好茶】醉品茶集 西湖龙井 2020年春茶 明前1号特级 极简牛皮纸方包 250g/包', 'http://img2.zuipin.cn/online_img/proimg/20200408155344_462633330463.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '正宗西湖原产地直供 量稀少', '1000', '28', 'https://img4.zuipin.cn/online_img/tagimg/20200224163810_240743524922.png', null);
INSERT INTO `teadetailed` VALUES ('1260', '2348001', '【2020春茶 助农好茶】醉品朴茶 绿茶 头采明前龙井 自饮装 特级 100g', 'http://img1.zuipin.cn/online_img/proimg/20200525091858_239335597833.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '头批采摘龙井茶，量少而珍贵', '256', '200', 'https://img4.zuipin.cn/online_img/tagimg/20200224163810_240743524922.png', null);
INSERT INTO `teadetailed` VALUES ('1261', '2348001', '【2020春茶】醉品朴茶 绿茶 原产地直供 头采明前龙井 分享装 特级 6g', 'http://img4.zuipin.cn/online_img/proimg/20200323153538_144593995155.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '头批茶 抢先尝', '30', '100', 'https://img4.zuipin.cn/online_img/tagimg/20200224163810_240743524922.png', null);
INSERT INTO `teadetailed` VALUES ('1262', '2348001', '【第2件75折/第3件5折】【线上专供】醉品朴茶 龙井绿茶 2020年 雨前 一级 100g/罐', 'http://img1.zuipin.cn/online_img/proimg/20200527144444_722877877204.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '香气纯正 鲜爽回甘', '98', '100', 'https://img4.zuipin.cn/online_img/tagimg/20200224163810_240743524922.png', null);
INSERT INTO `teadetailed` VALUES ('1263', '2348001', '【2020春茶】【线上专供】醉品朴茶 龙井绿茶 2020年 雨前 一级 80g/罐', 'http://img2.zuipin.cn/online_img/proimg/20200527144306_546352809355.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '茶水鲜爽 回甘持久', '80', '73', 'https://img4.zuipin.cn/online_img/tagimg/20200224163810_240743524922.png', null);
INSERT INTO `teadetailed` VALUES ('1264', '2348001', '【2020助农】 醉品茶集 龙井绿茶礼盒 2020年 雨前 一级 250g', 'http://img1.zuipin.cn/online_img/proimg/20200427100302_180984391718.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '端午节伴手佳选 清新雅致 礼遇春天', '399', '29', 'https://img4.zuipin.cn/online_img/tagimg/20200224163810_240743524922.png', null);
INSERT INTO `teadetailed` VALUES ('1265', '2348001', '【2020春茶】醉品茶集 好茶好器礼盒 西湖龙井 明前 特级150g+绿茶茶器', 'http://img1.zuipin.cn/online_img/proimg/20200429112904_1065318391282.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '商务茶礼 精致大气', '888', '27', 'https://img4.zuipin.cn/online_img/tagimg/20200224163810_240743524922.png', null);
INSERT INTO `teadetailed` VALUES ('1266', '2348001', '【2020春茶】醉品叶界 典禅系列 西湖龙井 明前头采茶 精品 礼盒装 100g【10盒起售，付款后7天发货】', 'http://img0.zuipin.cn/online_img/proimg/20200506112916_206329885022.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '精奢茶礼 精品明前龙井', '2280', '21', 'https://img4.zuipin.cn/online_img/tagimg/20200224163810_240743524922.png', null);
INSERT INTO `teadetailed` VALUES ('1267', '2348001', '【2020春茶 助农好茶】醉品茶集 西湖龙井 2020年春茶 雨前1号 一级 极简牛皮纸方包 250g/包', 'http://img4.zuipin.cn/online_img/proimg/20200408155218_260727475299.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '厂家已断货 正宗西湖原产 高性价比', '600', '57', 'https://m.zuipin.cn/web/images/zp_lpc_xx.png', null);
INSERT INTO `teadetailed` VALUES ('1268', '2348002', '【2020春茶】醉品朴茶 安吉白茶 2020年 一级 80g 铁盒', 'http://img3.zuipin.cn/online_img/proimg/20200331195543_806612549957.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '2020年全新上市 够鲜·够嫩·够香', '268', '36', 'https://img4.zuipin.cn/online_img/tagimg/20200224163810_240743524922.png', null);
INSERT INTO `teadetailed` VALUES ('1269', '2348002', '【2020春茶】【线上专供】醉品朴茶 安吉白茶 2020年 雨前 一级 30g/罐', 'http://img1.zuipin.cn/online_img/proimg/20200421162525_932282122741.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '香气清鲜持久 鲜爽浓郁', '80', '79', 'https://img4.zuipin.cn/online_img/tagimg/20200224163810_240743524922.png', null);
INSERT INTO `teadetailed` VALUES ('1270', '2348002', '一匠一品x严铁尔代表 2019年 安吉白茶 特级 30g 流芳单盒', 'http://img2.zuipin.cn/online_img/proimg/20190717150923_1413240459930.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '十佳匠人 严铁尔大师作品', '195', '100', '', null);
INSERT INTO `teadetailed` VALUES ('1271', '2348002', '醉品朴茶 独饮系列 安吉白茶 盒装 一级 80g', 'http://img0.zuipin.cn/online_img/proimg/20200305170127_6698046670.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '高氨基酸绿茶 鲜爽甘甜', '160', '50', '', null);
INSERT INTO `teadetailed` VALUES ('1272', '2348002', '一匠一品 严铁尔代表 2019年 安吉白茶 分享装 特级 6g', 'http://img0.zuipin.cn/online_img/proimg/20190806134704_163411791356.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '便携口袋装 随时分享', '39', '82', '', null);
INSERT INTO `teadetailed` VALUES ('1273', '2348003', '一匠一品 夏付明&团队手工制作 2019年 安化松针 30g', 'http://img2.zuipin.cn/online_img/proimg/20190911144959_705643970895.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '60多年传承 针形绿茶 经典代表', '195', '100', '', null);
INSERT INTO `teadetailed` VALUES ('1274', '2349001', '【实惠口粮茶！】醉品朴茶 百香 大红袍 2019年 大圆罐装 一级 256g', 'http://img0.zuipin.cn/online_img/proimg/20200616160141_10158391209.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '产地直供 茶叶高香耐泡', '288', '79', '', null);
INSERT INTO `teadetailed` VALUES ('1275', '2349001', '【实惠口粮茶！】醉品茶集 品质散茶 武夷岩茶 2019年 一级 500g', 'http://img4.zuipin.cn/online_img/proimg/20200525092354_449132213072.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '年节招待 实惠畅饮', '399', '53', '', null);
INSERT INTO `teadetailed` VALUES ('1276', '2349001', '醉品叶界x黄勇 武夷水仙 特级 126g 龙啸九天礼盒', 'http://img0.zuipin.cn/online_img/proimg/20190709185444_105104329510.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '制茶状元 黄勇大师作品', '1888', '79', '', null);
INSERT INTO `teadetailed` VALUES ('1277', '2349001', '【限量款】醉品叶界 典禅系列 武夷岩茶 慧苑坑·肉桂 特级 80g（下单后7天内发货）', 'http://img3.zuipin.cn/online_img/proimg/20191223114023_964624276824.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '限量典藏 岩茶“C位” 回甜感绵延不绝', '2280', '18', '', null);
INSERT INTO `teadetailed` VALUES ('1278', '2349001', '【送礼精选！】醉品朴茶 百香 大红袍 2019年 礼盒装 一级 256g', 'http://img3.zuipin.cn/online_img/proimg/20191129194155_613879887408.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '年货送礼 传达情意', '299', '61', '', null);
INSERT INTO `teadetailed` VALUES ('1279', '2349001', '非遗大师王顺明代表作 琪明 大红袍 中火 特级 48g', 'http://img0.zuipin.cn/online_img/proimg/20200608144415_717763353215.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '耐冲泡 回甘生津', '199', '800', '', null);
INSERT INTO `teadetailed` VALUES ('1280', '2349001', '【制茶状元黄勇亲制】清风两袖 武夷岩茶 2016春茶 乌龙茶 20种正岩名丛 中火 特级 160g 清风廿集', 'http://img3.zuipin.cn/zpfx/proimg/2017-11-21-15-08-58-5a13d10a64b9381916.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '【库存较低，即将售罄】发烧友品鉴版 凝聚20种名丛精粹 认知岩茶的半壁江山', '4288', '100', '', null);
INSERT INTO `teadetailed` VALUES ('1281', '2349001', '醉品朴茶 一山一品系列 武夷岩茶 九曲半岩肉桂 中火 一级 RG2260-80g', 'http://img4.zuipin.cn/online_img/proimg/2018-07-02%2015:46:57_395595258733.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '知名小产区 玩家茶客学习品种、山场范本', '130', '500', '', null);
INSERT INTO `teadetailed` VALUES ('1282', '2349001', '醉品朴茶 一山一品 武夷岩茶 正岩水仙 中火 特级 SX4300-80g', 'http://img1.zuipin.cn/online_img/proimg/2018-07-03%2016:21:22_96802828760.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '私房限量品藏，招待贵宾茶', '230', '700', '', null);
INSERT INTO `teadetailed` VALUES ('1283', '2349001', '醉品朴茶 大红袍 2018年 一级 简雅自饮装50g*2袋', 'http://img4.zuipin.cn/online_img/proimg/20190727141104_425790039935.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '办公提神 精神饱满', '69', '300', '', null);
INSERT INTO `teadetailed` VALUES ('1284', '2349001', '醉品朴茶 简雅 大红袍 2019年 PVC盒装 一级 250g', 'http://img3.zuipin.cn/online_img/proimg/20200529164606_35557730460.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '经典口味 顺滑香浓', '150', '24', '', null);
INSERT INTO `teadetailed` VALUES ('1285', '2349001', '【线上专供】醉品朴茶 百香 大红袍礼盒+彩金建盏 2019年 一级 256g', 'http://img3.zuipin.cn/online_img/proimg/20200113090104_314464746939.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '', '390', '11', '', null);
INSERT INTO `teadetailed` VALUES ('1286', '2349001', '醉品茶集 品质散茶 武夷岩茶 2019年 聚香大红袍 一级 500g', 'http://img2.zuipin.cn/online_img/proimg/20191231152848_614039156452.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '招待送礼 大气实惠', '300', '16', '', null);
INSERT INTO `teadetailed` VALUES ('1287', '2349001', '两袖清风 武夷岩茶 正岩水仙 2018年 中高火 特级 48g', 'http://img0.zuipin.cn/online_img/proimg/2018-12-2617:49:11_540246438893.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '恪守匠人之道在于坚持', '125', '400', '', null);
INSERT INTO `teadetailed` VALUES ('1288', '2349001', '青狮岩 武夷岩茶 果香肉桂 2019年 特级 256g', 'http://img0.zuipin.cn/online_img/proimg/20200527112141_239666095606.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '百年老品牌 核心量产', '600', '29', '', null);
INSERT INTO `teadetailed` VALUES ('1289', '2349001', '青狮岩 武夷岩茶 广宁岩肉桂 2019年 特级 256g', 'http://img0.zuipin.cn/online_img/proimg/20200527111700_327847388406.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '古法工艺 精装商务茶礼', '1320', '0', '', null);
INSERT INTO `teadetailed` VALUES ('1290', '2349001', '醉品朴茶 武夷岩茶 百香礼盒 2019年 武夷名丛白瑞香 一级 256g', 'http://img3.zuipin.cn/online_img/proimg/20200410175450_1362718213426.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '32泡大分量，喝足一个月', '399', '0', '', null);
INSERT INTO `teadetailed` VALUES ('1291', '2349001', '【制茶状元黄勇亲制】两袖 武夷岩茶 特级水仙 中火 160g', 'http://img1.zuipin.cn/zpfx/proimg/2017-11-21-15-12-40-5a13d1e86f95957207.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '', '1500', '400', '', null);
INSERT INTO `teadetailed` VALUES ('1292', '2349001', '醉品叶界x刘安兴 武夷肉桂 2018年 特级肉桂 礼盒 特级 126g龙啸九天礼盒', 'http://img2.zuipin.cn/online_img/proimg/20190709184807_60238769008.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '非物质文化遗产传承人 刘安兴大师作品', '1888', '35', 'https://m.zuipin.cn/web/images/zp_label_quehuo_pc.png', null);
INSERT INTO `teadetailed` VALUES ('1293', '2349001', '【线上专供】醉品朴茶 诗酒茶系列&星河 武夷大红袍 花香型中火 一级 体验装 16g', 'http://img3.zuipin.cn/online_img/proimg/2019-04-3017:30:14_24840985238.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '8703811同款体验装', '13', '700', 'https://m.zuipin.cn/web/images/zp_lpc_xx.png', null);
INSERT INTO `teadetailed` VALUES ('1294', '2349002', '醉品朴茶 2019年安溪铁观音 口碑好茶 特级 皇冠100g', 'http://img2.zuipin.cn/online_img/proimg/20200319180538_719366448549.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '碳焙炒米香，耐冲泡.', '89', '800', '', null);
INSERT INTO `teadetailed` VALUES ('1295', '2349002', '醉品朴茶 简雅 铁观音 碳焙 PVC 盒装 一级 250g', 'http://img2.zuipin.cn/online_img/proimg/20200622153532_442253377502.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '安溪直供 新鲜好喝', '99', '18', '', null);
INSERT INTO `teadetailed` VALUES ('1296', '2349002', '【线上专供】醉品朴茶 诗酒茶系列&茶香 2019年 安溪铁观音 碳焙型 一级  体验装 16.7g', 'http://img1.zuipin.cn/online_img/proimg/2019-05-1613:48:16_18610814823.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '新茶抢鲜品尝', '15', '400', '', null);
INSERT INTO `teadetailed` VALUES ('1297', '2349002', '【2020年春茶】一匠一品X颜敬虔 铁观音 分享装 浓香 特级 16.7g', 'http://img2.zuipin.cn/online_img/proimg/20200619134641_226559516871.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '碳焙铁观音 便携分享装', '30', '0', '', null);
INSERT INTO `teadetailed` VALUES ('1298', '2349002', '【线上专供】醉品朴茶 2019年安溪铁观音 口碑好茶 特级 皇冠100g*2罐+彩金建盏', 'http://img1.zuipin.cn/online_img/proimg/20200324162430_139928249573.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '', '279', '3', '', null);
INSERT INTO `teadetailed` VALUES ('1299', '2349002', '【线上专供】醉品朴茶 2019年安溪铁观音 口碑好茶 特级 皇冠100g*4罐+彩金建盏', 'http://img1.zuipin.cn/online_img/proimg/20200324162525_533189135592.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '', '450', '1', '', null);
INSERT INTO `teadetailed` VALUES ('1300', '2349002', '【2020春茶】一匠一品·颜敬虔 列传礼盒 铁观音 浓香 特级 292g', 'http://img0.zuipin.cn/online_img/proimg/20200709163545_444911811121.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '碳焙铁观音 大气礼盒装', '499', '0', 'https://img4.zuipin.cn/online_img/tagimg/20200224163810_240743524922.png', null);
INSERT INTO `teadetailed` VALUES ('1301', '2349004', '醉品朴茶 办公自饮系列 漳平水仙 一级 100g', 'http://img4.zuipin.cn/online_img/proimg/20191106090210_244612239149.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '福建特色的历史名茶', '90', '1200', '', null);
INSERT INTO `teadetailed` VALUES ('1302', '2350001', '益泡柑 柑白茶 白茶小青柑 寿眉250g 大罐装', 'http://img0.zuipin.cn/online_img/proimg/2018-09-17%2018:14:34_159524693663.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '5年树柑＋5年陈寿眉', '360', '300', '', null);
INSERT INTO `teadetailed` VALUES ('1303', '2350001', '益泡柑 三宝茶 2019年 陈皮&禾秆草&白茶 礼盒装 195g', 'http://img1.zuipin.cn/online_img/proimg/20200603164710_441322462780.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '新式养生 网红茶礼', '380', '38', '', null);
INSERT INTO `teadetailed` VALUES ('1304', '2350001', '【新品抢鲜尝！】益泡柑 柑白茶 小青柑&寿眉 2019年 柑皮白茶 罐装 150g', 'http://img0.zuipin.cn/online_img/proimg/20191101091727_981796847447.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '喝柑白茶 清爽不上火', '218', '23', '', null);
INSERT INTO `teadetailed` VALUES ('1305', '2350001', '醉品朴茶&益泡柑 一茶一城 城市限量版·广州陈皮普洱 2019年 熟茶 一级 40g', 'http://img2.zuipin.cn/online_img/proimg/20190621092343_136897364515.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '温和甘醇 果香浓郁 中老年人 上班族都喜爱', '69', '3900', '', null);
INSERT INTO `teadetailed` VALUES ('1306', '2350001', '醉品朴茶 红茶礼盒·皇冠 正山小种100g+2019年 金骏眉100g', 'http://img3.zuipin.cn/online_img/proimg/2018-08-06%2011:24:44_158380721132.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '早春尝鲜 名茶组合装', '232', '400', '', null);
INSERT INTO `teadetailed` VALUES ('1307', '2350001', '菩美 三行情书 四种口味 袋泡茶 红茶组合装 礼盒 60g', 'http://img0.zuipin.cn/online_img/proimg/20190522101608_230203140281.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '你也该有封情书了', '68', '600', '', null);
INSERT INTO `teadetailed` VALUES ('1308', '2350001', '【下单赢免单机会】益泡柑 三宝茶 2019年 陈皮&禾秆草&白茶 单罐装 65g', 'http://img4.zuipin.cn/online_img/proimg/20191106154247_340159936450.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '办公养生茶', '96', '84', '', null);
INSERT INTO `teadetailed` VALUES ('1309', '2350001', '【新品抢鲜尝！】益泡柑 柑普茶 普洱熟茶 2019年 陈皮普洱 罐装 150g', 'http://img0.zuipin.cn/online_img/proimg/20191101092118_43289392913.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '餐后茶饮 解油腻', '218', '22', '', null);
INSERT INTO `teadetailed` VALUES ('1310', '2350001', '中茶柠檬红茶 金柠红 2017年春茶 特级 100g 单罐', 'http://static.zuipin.cn/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95//7/_/7_369_2.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '创新时尚调味茶', '139', '500', '', null);
INSERT INTO `teadetailed` VALUES ('1311', '2350001', '【四大名茶一盒尽享！】醉品茶集 时令茶 畅销款体验装 四大茗茶组合装 50g', 'http://img2.zuipin.cn/online_img/proimg/2018-06-15%2017:07:26_467894821663.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '严选四大品类畅销款', '110', '300', '', null);
INSERT INTO `teadetailed` VALUES ('1312', '2350001', '【新品抢鲜尝！】益泡柑 柑普茶 普洱熟茶 大红柑 2018年 益泡宫廷 罐装 150g', 'http://img3.zuipin.cn/online_img/proimg/20191101091405_335563205364.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '精选宫廷熟普 入口醇柔', '218', '15', '', null);
INSERT INTO `teadetailed` VALUES ('1313', '2350001', '益泡柑 柑普茶 益泡*雅 2018年 大红柑+普洱熟茶 大罐装 500g', 'http://img3.zuipin.cn/online_img/proimg/20191101092856_932161312158.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '古树用料 好喝耐泡', '500', '29', '', null);
INSERT INTO `teadetailed` VALUES ('1314', '2350001', '醉品朴茶&益泡柑 一茶一城 城市限量版·广州陈皮普洱 熟茶 一级 40g', 'http://img1.zuipin.cn/online_img/proimg/20190924100549_1042559211135.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '', '69', '11', '', null);
INSERT INTO `teadetailed` VALUES ('1315', '2350001', '【线上专供】醉品朴茶 一茶一城系列 金骏眉&茉莉花茶&陈皮普洱 组合装 一级 114g', 'http://img0.zuipin.cn/online_img/proimg/20190717113152_557809109233.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '办公养生组合', '260', '300', 'https://m.zuipin.cn/web/images/zp_label_quehuo_pc.png', null);
INSERT INTO `teadetailed` VALUES ('1316', '2350001', '醉品朴茶 简雅系列 大红袍&茉莉花茶 组合装 一级 50g+50g', 'http://img3.zuipin.cn/online_img/proimg/20190713093310_672865206268.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '办公提神常备', '69', '100', 'https://m.zuipin.cn/web/images/zp_label_quehuo_pc.png', null);
INSERT INTO `teadetailed` VALUES ('1317', '2350001', '益泡柑 柑普茶 益泡·雅 小青柑+6年普洱熟茶 一级 圆罐250g', 'http://img4.zuipin.cn/zpfx/proimg/2017-12-27-09-03-26-5a42f15e2911e39650.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '怕油腻 喝小青柑', '360', '500', 'https://m.zuipin.cn/web/images/zp_label_quehuo_pc.png', null);
INSERT INTO `teadetailed` VALUES ('1318', '2350001', '益泡柑 代用茶 柑普茶 益泡·品 小青柑 特级 圆罐250g', 'http://img0.zuipin.cn/zpfx/proimg/2017-12-27-09-55-18-5a42fd86b556a6271.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '维持好身材 健身达人伴侣', '480', '500', 'https://m.zuipin.cn/web/images/zp_label_quehuo_pc.png', null);
INSERT INTO `teadetailed` VALUES ('1319', '2350002', '【2020新茶】醉品朴茶 金骏眉+正山小种+陶瓷过滤杯 野茶组合装礼盒 一级 130g', 'http://img1.zuipin.cn/online_img/proimg/20200107153853_421348018460.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '山野韵味 一尝难忘 唇齿留香', '199', '500', '', null);
INSERT INTO `teadetailed` VALUES ('1320', '2350002', '醉品朴茶 普洱茶 生茶 2019年 9周年纪念饼珍藏版 藏香礼盒 357g', 'http://img4.zuipin.cn/online_img/proimg/20191203092646_221412503358.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '9周年纪念饼珍藏版 升值茶礼', '328', '2', '', null);
INSERT INTO `teadetailed` VALUES ('1321', '2350002', '醉品朴茶 福鼎白茶 2019年白牡丹 9周年纪念饼珍藏版357g 藏香礼盒', 'http://img4.zuipin.cn/online_img/proimg/20191203170647_964912784675.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '9周年纪念饼珍藏版 升值茶礼', '328', '22', '', null);
INSERT INTO `teadetailed` VALUES ('1322', '2350002', '【开袋有惊喜！】醉品茶城 388 福袋', 'http://img2.zuipin.cn/online_img/proimg/20200420113819_122890937354.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '邻居买了都说好的惊喜福袋', '388', '7', '', null);
INSERT INTO `teadetailed` VALUES ('1323', '2350002', '【开袋有惊喜！】醉品茶城 1688 福袋', 'http://img3.zuipin.cn/online_img/proimg/20200420113844_312180643962.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '长辈都觉得买对了的福袋', '1688', '1', '', null);
INSERT INTO `teadetailed` VALUES ('1324', '2350002', '醉品朴茶 金骏眉+正山小种+陶瓷过滤杯 2019年 组合装 一级 130g（黑）', 'http://img1.zuipin.cn/online_img/proimg/20200408173907_158063742434.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '', '199', '0', 'https://m.zuipin.cn/web/images/zp_label_quehuo_pc.png', null);
INSERT INTO `teadetailed` VALUES ('1325', '2350003', '醉品朴茶 创新组合 百福临门组合茶礼 4类茶176g+红酒1瓶', 'http://img3.zuipin.cn/online_img/proimg/2018-12-2517:51:57_513531777383.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '一茶一酒，快意人生相辅相成', '588', '200', '', null);
INSERT INTO `teadetailed` VALUES ('1326', '2350003', '白玉龙 古树白茶 白牡丹 冷泡茶 整箱装 1.6g*10瓶', 'http://img1.zuipin.cn/online_img/proimg/20200608144449_352364554889.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '白牡丹冷泡茶 高颜值茶饮', '129', '25', '', null);
INSERT INTO `teadetailed` VALUES ('1327', '2350003', '千秋界 棒棒茶 2019年 金花黑茶 20g', 'http://img3.zuipin.cn/online_img/proimg/20200410151336_118323112738.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '办公伴侣 好茶轻松泡', '50', '26', '', null);
INSERT INTO `teadetailed` VALUES ('1328', '2350003', '轻轻茶 黑茶 2019年 原味 固体饮料 礼盒装 100g', 'http://img4.zuipin.cn/online_img/proimg/20200304135607_650268471904.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '轻糖轻脂 为身体减负~', '698', '2', '', null);
INSERT INTO `teadetailed` VALUES ('1329', '2350003', '柑柑好 代用茶 柑普茶 新柑仔·暖邻 大红柑 一级 圆罐400g', 'http://img3.zuipin.cn/zpfx/proimg/2017-12-04-16-45-51-5a250b3fa052f24265.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '送邻里亲友 健康常伴', '688', '800', '', null);
INSERT INTO `teadetailed` VALUES ('1330', '2350003', '轻轻茶 黑茶 2019年 原味 固体饮料 礼盒装 30g', 'http://img3.zuipin.cn/online_img/proimg/20200303165510_3032359387.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '金花黑茶 即溶性饮品', '228', '20', '', null);
INSERT INTO `teadetailed` VALUES ('1331', '2350003', '【非卖品】轻轻茶 黑茶 健康关爱装 2019年 原味 固体饮料 100g', 'http://img1.zuipin.cn/online_img/proimg/20200514110328_1266136698918.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '非卖品 单拍不发货', '698', '0', '', null);
INSERT INTO `teadetailed` VALUES ('1332', '2350003', '轻轻茶 黑茶 2019年 原味 固体饮料 圆罐 礼盒装 300g', 'http://img3.zuipin.cn/online_img/proimg/20200304135912_701635736208.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '健康茶饮 大气礼盒装', '1980', '13', '', null);
INSERT INTO `teadetailed` VALUES ('1333', '2351001', '醉品茶城 专属定制 陶瓷茶具 青春永驻办公杯 快速泡茶杯', 'http://img0.zuipin.cn/zpfx/proimg/2018-07-12-17-19-35-5b471d272e6c524053.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '办公饮茶便利 可免费定制', '98', '100', '', null);
INSERT INTO `teadetailed` VALUES ('1334', '2351001', '陶瓷茶具 旅行盖碗小套组 影青', 'http://img3.zuipin.cn/online_img/proimg/2019-01-1717:06:18_214938308161.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '', '128', '100', '', null);
INSERT INTO `teadetailed` VALUES ('1335', '2351001', '陶瓷茶具 汝窑 四海一家套组 礼盒', 'http://img4.zuipin.cn/zpfx/proimg/2018-02-01-16-23-05-5a72ce69b82c581700.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '玛瑙入釉 莹润光亮饱满', '252', '100', '', null);
INSERT INTO `teadetailed` VALUES ('1336', '2351001', '广州恒福 陶瓷茶具 越窑龙泉青瓷 佛心莲自在杯 个人杯 茶杯', 'http://static.zuipin.cn/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95//p/0/p02_284_49.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '瓷中之宝 别致实用', '130', '100', '', null);
INSERT INTO `teadetailed` VALUES ('1337', '2351001', '陶瓷茶具 点瓷成金玉乳壶套组 甜白 10入', 'http://img4.zuipin.cn/online_img/proimg/2018-06-01%2020:12:55_463679221802.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '莹润如脂，白如象牙', '368', '100', '', null);
INSERT INTO `teadetailed` VALUES ('1338', '2351001', '醉品茶集 陶瓷茶具功夫套组 原创设计定制款', 'http://img1.zuipin.cn/online_img/proimg/20200415175602_583826838064.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '礼盒套组，精美大气', '399', '100', '', null);
INSERT INTO `teadetailed` VALUES ('1339', '2351001', '广州恒福 陶瓷茶具 东道汝窑 茶宠福虎 天青', 'http://static.zuipin.cn/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95//i/m/img_0013__1_2.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '福虎茶宠 赠送亲友的祝福之礼', '520', '76', '', null);
INSERT INTO `teadetailed` VALUES ('1340', '2351003', '石物 乌金石茶盘 山水相依 长120cm*宽30cm*高5cm（下单后5天内发货）', 'http://img2.zuipin.cn/online_img/proimg/20200313153010_1227648379424.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '', '2980', '7', '', null);
INSERT INTO `teadetailed` VALUES ('1341', '2351003', '石物 乌金石茶盘 石物印象 长77cm*宽24cm*高3cm|（下单后5天内发货）', 'http://img2.zuipin.cn/online_img/proimg/20200313152543_44427851930.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '', '1580', '7', '', null);
INSERT INTO `teadetailed` VALUES ('1342', '2351003', '石物 乌金石茶盘 名门正派 长60cm*宽16cm*高3cm（下单后5天内发货）', 'http://img0.zuipin.cn/online_img/proimg/20200313152730_2506124602.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '', '1980', '8', '', null);
INSERT INTO `teadetailed` VALUES ('1343', '2351003', '石物 乌金石茶盘 窗外 长30cm*宽30cm*高3cm（下单后5天内发货）', 'http://img0.zuipin.cn/online_img/proimg/20200313152810_418021918676.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '', '1080', '5', '', null);
INSERT INTO `teadetailed` VALUES ('1344', '2351003', '醉品茶集 黑金石茶盘 原创设计定制款', 'http://img1.zuipin.cn/online_img/proimg/20190705144901_462479030752.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '专属定制 经久耐用', '1280', '65', '', null);
INSERT INTO `teadetailed` VALUES ('1345', '2351003', '石物 乌金石茶盘 独占鳌头 长65cm*宽30cm*高3cm（下单后5天内发货）', 'http://img4.zuipin.cn/online_img/proimg/20200313152916_63738765244.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '', '1580', '5', '', null);
INSERT INTO `teadetailed` VALUES ('1346', '2351003', '石物 乌金石茶盘 印度黑 月圆 长80cm*宽30cm*高3cm（下单后5天内发货）', 'http://img2.zuipin.cn/online_img/proimg/20200313152616_68076519568.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '', '2280', '3', '', null);
INSERT INTO `teadetailed` VALUES ('1347', '2352001', '圣澜堡 SvetLane 澳大利亚干红葡萄酒 红标2018年 750ML红酒', 'http://img3.zuipin.cn/online_img/proimg/20200426180433_394037734296.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '获澳洲精品葡萄酒大赛-“银奖', '198', '13', '', null);
INSERT INTO `teadetailed` VALUES ('1348', '2352001', '【整箱装6瓶】 黛伦堡 D`arenberg 澳大利亚干红葡萄酒 巨藤2016年 750ML红酒', 'http://img4.zuipin.cn/online_img/proimg/20200426181352_318501070847.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '', '2148', '0', '', null);
INSERT INTO `teadetailed` VALUES ('1349', '2352001', '黛伦堡 D`arenberg 澳大利亚干红葡萄酒 闪电2016年 750ML红酒', 'http://img2.zuipin.cn/online_img/proimg/20200526160217_1156948356100.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '葡萄酒挑战大赛铂金奖 口感经典复古', '228', '12', '', null);
INSERT INTO `teadetailed` VALUES ('1350', '2352001', '圣澜堡 SvetLane 澳大利亚干红葡萄酒 蓝标2017年 750ML红酒', 'http://img0.zuipin.cn/online_img/proimg/20200426180130_225229334767.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '金奖品质 橡木桶陈酿18个月', '298', '18', '', null);
INSERT INTO `teadetailed` VALUES ('1351', '2352001', '【整箱装6瓶】黛伦堡 D`arenberg 澳大利亚干红葡萄酒 闪电2016年 750ML红酒', 'http://img2.zuipin.cn/online_img/proimg/20200426180203_408176521745.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '', '1368', '0', '', null);
INSERT INTO `teadetailed` VALUES ('1352', '2352001', '【线上专供】黛伦堡 D`arenberg 澳大利亚干红葡萄酒 枯藤2016年 750ML红酒', 'http://img2.zuipin.cn/online_img/proimg/20191212162534_439878622396.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '荣获4项国际葡萄酒大赛金奖 旗舰收藏款', '998', '0', '', null);
INSERT INTO `teadetailed` VALUES ('1353', '2352001', '【线上专供】法国原装进口 弗拉德干红葡萄酒 750ml红酒', 'http://img0.zuipin.cn/online_img/proimg/2018-12-2719:28:34_48203898571.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '', '98', '0', '', null);
INSERT INTO `teadetailed` VALUES ('1354', '2352001', '【整箱装6瓶】圣澜堡 SvetLane 澳大利亚干红葡萄酒 红标2018年 750ML红酒', 'http://img2.zuipin.cn/online_img/proimg/20200426180243_82880941407.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '获澳洲精品葡萄酒大赛-“银奖', '1188', '0', '', null);
INSERT INTO `teadetailed` VALUES ('1355', '2352001', '【整箱装6瓶】黛伦堡 D`arenberg 澳大利亚干红葡萄酒 枯藤2016年 750ML红酒', 'http://img3.zuipin.cn/online_img/proimg/20200426180318_353038654068.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '', '5988', '0', '', null);
INSERT INTO `teadetailed` VALUES ('1356', '2352001', '【线上专供】 黛伦堡 D`arenberg 澳大利亚干红葡萄酒 巨藤2016年 750ML红酒', 'http://img2.zuipin.cn/online_img/proimg/20200426171710_18451142839.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '赤霞珠经典代表 窖藏潜力 口感层次丰富', '358', '0', '', null);
INSERT INTO `teadetailed` VALUES ('1357', '2352001', '【线上专供】澳翊 Auyee 珍藏 澳大利亚 干红葡萄酒 2017年 750ML红酒', 'http://img0.zuipin.cn/online_img/proimg/20200426170246_240752034882.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '厂家已断货 柔顺易入口 适合日常配餐饮用', '88', '3', 'https://m.zuipin.cn/web/images/zp_lpc_xx.png', null);
INSERT INTO `teadetailed` VALUES ('1358', '2352001', '【整箱装6瓶】黛伦堡 D`arenberg 澳大利亚干红葡萄酒 犁跃2016年 750ML红酒', 'http://img4.zuipin.cn/online_img/proimg/20191220143544_269327267765.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '', '948', '1', 'https://m.zuipin.cn/web/images/zp_lpc_xx.png', null);
INSERT INTO `teadetailed` VALUES ('1359', '2352001', '【整箱装6瓶】 澳翊 Auyee 澳大利亚干红葡萄酒 珍藏 2017年 750ML红酒', 'http://img0.zuipin.cn/online_img/proimg/20191219142755_151421397586.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '厂家已断货', '528', '0', 'https://m.zuipin.cn/web/images/zp_lpc_xx.png', null);
INSERT INTO `teadetailed` VALUES ('1360', '2353001', '醉品朴茶 一茶一城&城市限量版·北京 茉莉花茶 2019年新花 一级 24g', 'http://img1.zuipin.cn/online_img/proimg/20190617120656_61411346339.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '浓浓花香 清新提神', '69', '16000', '', null);
INSERT INTO `teadetailed` VALUES ('1361', '2353001', '醉品朴茶 茉莉花茶 2019年新花 一级 简雅自饮装 50g*2袋', 'http://img4.zuipin.cn/online_img/proimg/20190727141011_400635662555.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '馥郁花香 清爽舒神', '69', '200', 'https://m.zuipin.cn/web/images/zp_label_quehuo_pc.png', null);
INSERT INTO `teadetailed` VALUES ('1362', '2353001', '醉品朴茶 一茶一城&北京 茉莉花茶 2019年新花 一级 24g', 'http://img3.zuipin.cn/online_img/proimg/20190924095754_459745395176.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '', '69', '3', 'https://m.zuipin.cn/web/images/zp_label_quehuo_pc.png', null);
INSERT INTO `teadetailed` VALUES ('1363', '2353001', '【超值一斤装】醉品茶集 品质散茶 茉莉花茶 2019年 一级 500g', 'http://img0.zuipin.cn/online_img/proimg/20191128161404_466964923865.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '清爽不上火 养出好气色', '300', '51', 'https://m.zuipin.cn/web/images/zp_label_quehuo_pc.png', null);
INSERT INTO `teadetailed` VALUES ('1364', '2354001', '【新品抢鲜尝！】益泡柑 陈皮系列 5年新会陈皮 罐装 100g', 'http://img4.zuipin.cn/online_img/proimg/20191101092507_471641807934.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '缓解咽喉不适 烟酒人士佳选', '218', '15', '', null);
INSERT INTO `teadetailed` VALUES ('1365', '2354001', '益泡柑 陈皮系列 陈皮花生 罐装250g', 'http://img2.zuipin.cn/online_img/proimg/20200506164236_584655783476.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '【全网独家茶食】休闲小时光 美味零嘴', '25', '100', '', null);
INSERT INTO `teadetailed` VALUES ('1366', '2354001', '益泡柑 陈皮系列 陈皮瓜子 罐装 250g', 'http://img3.zuipin.cn/online_img/proimg/20190618173755_159339778906.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '陈皮瓜子 入味不上火', '25', '100', '', null);
INSERT INTO `teadetailed` VALUES ('1367', '2354001', '益泡柑 陈皮系列 甘香陈皮丝 罐装 185g', 'http://img2.zuipin.cn/online_img/proimg/20191101090131_687367956315.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '家家常备 开胃小食', '20', '24', '', null);
INSERT INTO `teadetailed` VALUES ('1368', '2354001', '益泡柑 陈皮系列 甘香陈皮 罐装 155g', 'http://img1.zuipin.cn/online_img/proimg/20191101090906_599671542413.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '果香浓郁 冲泡煮饮皆可', '68', '17', '', null);
INSERT INTO `teadetailed` VALUES ('1369', '2354001', '益泡柑 陈皮系列 陈皮丹 罐装 85g', 'http://img2.zuipin.cn/online_img/proimg/20191101090433_22950347055.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '爽口含片 生津润喉', '28', '24', '', null);
INSERT INTO `teadetailed` VALUES ('1370', '2354001', '益泡柑  陈皮系列 陈皮花生 250g*6罐 整箱装', 'http://img0.zuipin.cn/online_img/proimg/20191217150651_439639028446.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '休闲小时光 美味零嘴 礼盒装', '155', '1', '', null);
INSERT INTO `teadetailed` VALUES ('1371', '2355001', '【VIP大客户专享】醉品茶城 积分换购 100元手机话费充值卡', 'http://img1.zuipin.cn/online_img/proimg/20200410105716_36845230298.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '【仅VIP大客户专享】下单正确的备注需要充值的手机号', '5000', '12', '', null);
INSERT INTO `teadetailed` VALUES ('1372', '2355001', '【VIP大客户专属】醉品茶城 积分换购 小米10 双模5G 骁龙865 1亿像素8K电影相机', 'http://img3.zuipin.cn/online_img/proimg/20200401163536_92319246448.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '该商品仅限VIP大客户兑换。想升级为VIP大客户可咨询在线客服', '200000', '0', '', null);
INSERT INTO `teadetailed` VALUES ('1373', '2355001', '【VIP大客户专享】醉品茶城 积分换购 米家 扫拖机器人1C 智能吸尘器 VSLAM 导航系统 2500Pa超大吸力', 'http://img1.zuipin.cn/online_img/proimg/20200401175154_117648050292.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '该商品仅限VIP大客户兑换。想升级为VIP大客户可咨询在线客服', '64950', '0', '', null);
INSERT INTO `teadetailed` VALUES ('1374', '2355001', '【VIP大客户专属】醉品茶城 积分换购 小米电视4X 43英寸 全高清 蓝牙语音遥控 1GB+8G', 'http://img4.zuipin.cn/online_img/proimg/20200408171751_105205508944.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '该商品仅限VIP大客户兑换。想升级为VIP大客户可咨询在线客服', '249950', '0', '', null);
INSERT INTO `teadetailed` VALUES ('1375', '2355001', '【VIP大客户专享】醉品茶城 积分换购 格力（GREE）1.5匹 变频 壁挂式卧室空调挂机', 'http://img2.zuipin.cn/online_img/proimg/20200402092355_98098996590.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '该商品仅限VIP大客户兑换。想升级为VIP大客户可咨询在线客服', '160000', '0', '', null);
INSERT INTO `teadetailed` VALUES ('1376', '2355001', '醉品茶城 积分换购 纳米洁立擦', 'http://img3.zuipin.cn/online_img/proimg/20191220143145_284795177028.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '', '550', '200', '', null);
INSERT INTO `teadetailed` VALUES ('1377', '2355001', '醉品茶城 积分换购 优选防护用品 ANNO安诺纳米日常防护口罩', 'http://img2.zuipin.cn/online_img/proimg/20200212103812_432994203039.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '耐久防护，过滤效果达N95', '950', '32', '', null);
INSERT INTO `teadetailed` VALUES ('1378', '2355001', '醉品茶城 积分换购 周年纪念礼品 加厚棉麻布包 主人杯收纳袋', 'http://img1.zuipin.cn/online_img/proimg/2019-01-1109:19:14_282744638114.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '便携防磕碰', '500', '100', '', null);
INSERT INTO `teadetailed` VALUES ('1379', '2355001', '醉品茶城 积分换购 创意礼品 红包袋*5个', 'http://img3.zuipin.cn/online_img/proimg/20191218093508_233091526714.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '', '260', '86', '', null);
INSERT INTO `teadetailed` VALUES ('1380', '2355001', '醉品茶城 积分换购 茶道配件 手工紫竹大屏风 篱笆 茶席摆件', 'http://img0.zuipin.cn/zpfx/proimg/2017-08-29-17-50-45-59a538f5d8c6882018.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '分隔茶事区域 提升装置美感', '3250', '200', '', null);
INSERT INTO `teadetailed` VALUES ('1381', '2355002', '醉品茶城 积分换购 密封罐玻璃瓶子 家用厨房食品杂粮储物罐 透明小茶叶罐子 中号', 'http://img4.zuipin.cn/online_img/proimg/2019-01-1718:08:51_5043411188.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '【收到破损免费补发】密封性好，防潮保鲜', '1450', '200', '', null);
INSERT INTO `teadetailed` VALUES ('1382', '2355002', '醉品集团 积分换购 吸水茶巾 茶道配件', 'http://img0.zuipin.cn/online_img/proimg/20200304133706_490606680125.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '每一次揩抹 都像是习惯性的对茶具的抚摩', '600', '900', '', null);
INSERT INTO `teadetailed` VALUES ('1383', '2355002', '醉品茶城 积分换购 玻璃茶具 气泡茶罐III 密封罐', 'http://img0.zuipin.cn/zpfx/proimg/2017-11-09-19-58-03-5a0442cb9316e49300.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '收纳、存茶 防潮防虫', '2100', '300', '', null);
INSERT INTO `teadetailed` VALUES ('1384', '2355002', '醉品茶城 积分换购 陶瓷茶具 个人杯 小号盖帽杯 白色', 'http://img3.zuipin.cn/online_img/proimg/2019-01-1717:17:26_82981199837.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '时尚个人杯', '1950', '100', '', null);
INSERT INTO `teadetailed` VALUES ('1385', '2355002', '醉品茶城 积分换购 密封罐玻璃瓶子 家用厨房食品杂粮储物罐 透明小茶叶罐子 小号', 'http://img2.zuipin.cn/online_img/proimg/2019-01-1718:10:43_666995340900.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '【收到破损免费补发】密封性好，防潮保鲜', '1250', '200', '', null);
INSERT INTO `teadetailed` VALUES ('1386', '2355002', '醉品茶城 积分换购 茶道配件 普洱架 中号 黑色棕色随机发货', 'http://img0.zuipin.cn/zpfx/proimg/2017-09-13-12-02-53-59b8aded097b157093.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '茶饼展架', '1200', '100', '', null);
INSERT INTO `teadetailed` VALUES ('1387', '2355002', '【建盏非遗传承人陈艗亲制】醉品茶城 积分换购 建盏 金口银毫 金油滴 单杯', 'http://img3.zuipin.cn/zpfx/proimg/2017-11-16-16-03-19-5a0d4647a25a754454.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '非遗国礼 赠送贵客', '33000', '100', '', null);
INSERT INTO `teadetailed` VALUES ('1388', '2355002', '醉品茶集 积分换购 玻璃茶具 玻璃杯 单杯', 'http://img2.zuipin.cn/online_img/proimg/2018-04-03%2021:51:46_111479573253.jpg?x-oss-process=image/resize,m_lfit,h_250,w_250', '轻盈剔透，绿茶玻璃杯', '800', '300', 'https://m.zuipin.cn/web/images/zp_label_quehuo_pc.png', null);

-- ----------------------------
-- Table structure for teatitle
-- ----------------------------
DROP TABLE IF EXISTS `teatitle`;
CREATE TABLE `teatitle` (
  `titleId` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`titleId`)
) ENGINE=MyISAM AUTO_INCREMENT=2356 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of teatitle
-- ----------------------------
INSERT INTO `teatitle` VALUES ('2345', '白茶');
INSERT INTO `teatitle` VALUES ('2346', '黑茶');
INSERT INTO `teatitle` VALUES ('2347', '红茶');
INSERT INTO `teatitle` VALUES ('2348', '绿茶');
INSERT INTO `teatitle` VALUES ('2349', '乌龙茶');
INSERT INTO `teatitle` VALUES ('2350', '创新品');
INSERT INTO `teatitle` VALUES ('2351', '茶器');
INSERT INTO `teatitle` VALUES ('2352', '酒类');
INSERT INTO `teatitle` VALUES ('2353', '功效茶');
INSERT INTO `teatitle` VALUES ('2354', '茶点心');
INSERT INTO `teatitle` VALUES ('2355', '积分换购');

-- ----------------------------
-- Table structure for teatitlecontent
-- ----------------------------
DROP TABLE IF EXISTS `teatitlecontent`;
CREATE TABLE `teatitlecontent` (
  `titlecontentId` int(11) NOT NULL DEFAULT '0',
  `titleId` int(11) NOT NULL,
  `titlecontent` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`titlecontentId`),
  KEY `titleId` (`titleId`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of teatitlecontent
-- ----------------------------
INSERT INTO `teatitlecontent` VALUES ('2345001', '2345', '白毫银针');
INSERT INTO `teatitlecontent` VALUES ('2345002', '2345', '白牡丹');
INSERT INTO `teatitlecontent` VALUES ('2345003', '2345', '寿眉');
INSERT INTO `teatitlecontent` VALUES ('2345004', '2345', '其他白茶');
INSERT INTO `teatitlecontent` VALUES ('2346001', '2346', '普洱茶');
INSERT INTO `teatitlecontent` VALUES ('2346002', '2346', '安化黑茶');
INSERT INTO `teatitlecontent` VALUES ('2346003', '2346', '柑普茶');
INSERT INTO `teatitlecontent` VALUES ('2347001', '2347', '金骏眉');
INSERT INTO `teatitlecontent` VALUES ('2347002', '2347', '正山小种');
INSERT INTO `teatitlecontent` VALUES ('2347003', '2347', '云南滇红');
INSERT INTO `teatitlecontent` VALUES ('2347004', '2347', '祁门红茶');
INSERT INTO `teatitlecontent` VALUES ('2347005', '2347', '其他红茶');
INSERT INTO `teatitlecontent` VALUES ('2348001', '2348', '龙井');
INSERT INTO `teatitlecontent` VALUES ('2348002', '2348', '安吉白茶');
INSERT INTO `teatitlecontent` VALUES ('2348003', '2348', '其他绿茶');
INSERT INTO `teatitlecontent` VALUES ('2349001', '2349', '武夷岩茶');
INSERT INTO `teatitlecontent` VALUES ('2349002', '2349', '安溪铁观音');
INSERT INTO `teatitlecontent` VALUES ('2349003', '2349', '广东单从');
INSERT INTO `teatitlecontent` VALUES ('2349004', '2349', '漳平水仙');
INSERT INTO `teatitlecontent` VALUES ('2349005', '2349', '台湾高山茶');
INSERT INTO `teatitlecontent` VALUES ('2350001', '2350', '多品类茶');
INSERT INTO `teatitlecontent` VALUES ('2350002', '2350', '茶器组合');
INSERT INTO `teatitlecontent` VALUES ('2350003', '2350', '其他创新品');
INSERT INTO `teatitlecontent` VALUES ('2351001', '2351', '陶瓷茶具');
INSERT INTO `teatitlecontent` VALUES ('2351002', '2351', '玻璃茶具');
INSERT INTO `teatitlecontent` VALUES ('2351003', '2351', '茶盘');
INSERT INTO `teatitlecontent` VALUES ('2351004', '2351', '其他茶器');
INSERT INTO `teatitlecontent` VALUES ('2352001', '2352', '葡萄酒');
INSERT INTO `teatitlecontent` VALUES ('2352002', '2352', '白酒');
INSERT INTO `teatitlecontent` VALUES ('2352003', '2352', '洋酒');
INSERT INTO `teatitlecontent` VALUES ('2352004', '2352', '啤酒');
INSERT INTO `teatitlecontent` VALUES ('2353001', '2353', '茉莉花茶');
INSERT INTO `teatitlecontent` VALUES ('2354001', '2354', '陈皮系列');
INSERT INTO `teatitlecontent` VALUES ('2355001', '2355', '创意礼品');
INSERT INTO `teatitlecontent` VALUES ('2355002', '2355', '茶器');

-- ----------------------------
-- Table structure for userinfo
-- ----------------------------
DROP TABLE IF EXISTS `userinfo`;
CREATE TABLE `userinfo` (
  `userId` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `userpass` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `token` text CHARACTER SET utf8,
  `phoneNum` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `address` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `sex` int(1) DEFAULT NULL,
  `age` int(3) DEFAULT NULL,
  PRIMARY KEY (`userId`)
) ENGINE=MyISAM AUTO_INCREMENT=1002 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of userinfo
-- ----------------------------
INSERT INTO `userinfo` VALUES ('1', 'AliceCcc', '123456', 'asfgafggdgzgfdsfdsfadSAFAFDFDAAFAFFAFAFFDFSDF', '13199888888', '江门市', '1', '21');
INSERT INTO `userinfo` VALUES ('1001', 'alice', '123', null, '13991112220', '广东省', '1', '25');
