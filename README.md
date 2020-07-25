## 项目分工

钟家祺：WebApp（功能实现：登录注册，退出登录，路由守卫，封装fetch，商品列表和商品详情数据的渲染）

​                               （静态页面：首页，购物车，商品详情）

​               后台管理系统：（功能实现：商品管理模块，退出登录，登录）

​               搭建数据库，爬取数据，接口的制作



黄桥明：WebApp（功能实现：购物车（全选反选，编辑删除，数量修改），添加商品到购物车）

​                               （静态页面：登录注册，个人中心，商品分类，商品列表）

​              后台管理系统：所有静态页面的编写，框架的搭建

​             github仓库的管理，合并分支



覃瑗康：后台管理系统：（功能实现：用户管理，订单管理）



## 目录结构

├─chacheng-mms    ----后台管理系统总目录
│  ├─build    			 -----后台管理系统打包目录
│  │  └─static   		 ------后台管理系统打包子目录，存放CSS,JS等打包后的压缩文件
│  │      ├─css
│  │      ├─js
│  │      └─media
│  ├─public           	-------后台管理系统开发环境静态资源
│  │  └─img     		
│  └─src					--------后台管理系统开发环境代码存放
│      ├─components  -------后台管理系统开发环境的各个组件
│      │  ├─MenuTab  
│      │  └─pages		-------后台管理系统开发环境的各个页面
│      │      ├─GoodsManage  ------后台管理系统开发环境商品管理模块
│      │      ├─Home				------后台管理系统开发环境首页模块
│      │      ├─Login				 ------后台管理系统开发环境登录模块
│      │      ├─OrderManage  ------后台管理系统开发环境商品管理模块
│      │      ├─Reg				  -------后台管理系统开发环境注册模块
│      │      └─UserManage	------后台管理系统开发环境用户管理模块
│      └─utils       					------后台管理系统开发环境公共代码
├─data								  ------本项目爬取的所有JSON数据
├─dataApi							 -------本项目的所有接口的文件夹
│  ├─database					  -------本项目的数据库文件
│  ├─mysql							-------本项目的mysql配置文件
│  └─routers						  -------本项目的接口及接口配置
│      └─modules					-------本项目的所有接口
└─webapp							--------webapp总目录
    ├─build							  -------webapp的打包目录
    │  ├─css
    │  ├─data
    │  ├─iconfont
    │  ├─img
    │  └─static
    │      ├─css
    │      └─js
    ├─public							--------webapp开发环境的静态资源
    │  ├─css
    │  ├─data
    │  ├─iconfont
    │  └─img
    └─src								--------webapp开发环境的代码存放
        ├─component				-------webapp开发环境的组件目录
        │  ├─Modal
        │  ├─page						------webapp开发环境的各个页面
        │  │  ├─Address			  -------webapp开发环境的地址管理页面
        │  │  ├─Cart					 -------webapp开发环境的购物车页面
        │  │  ├─GoodsList			 -------webapp开发环境的商品列表页面
        │  │  ├─Home					 -------webapp开发环境的首页页面
        │  │  ├─Login					-------webapp开发环境的登录页面
        │  │  ├─Mine					 -------webapp开发环境的个人中心（我的）页面
        │  │  ├─NotFound			-------webapp开发环境的404页面
        │  │  ├─ShopDetailed      -------webapp开发环境的商品详情页面
        │  │  └─Sort					 -------webapp开发环境的分类页面
        │  ├─Swiper					
        │  └─TouchSlide
        ├─store							 -------webapp开发环境的redux目录
        │  ├─actions
        │  └─reducers
        └─utils     						-------webapp开发环境的公共代码



## 项目BUG

钟家祺：1、后台管理系统商品模块添加和编辑共用一个表单，而编辑的表单的每一项是有内容的，添加的表单的每一项是空的，因此，当先点击编辑再点击添加时，添加的表单的每一项会显示之前编辑表单的内容，而不显示空。

-----解决：点击添加前，先将表单的内容清空

​				2、本项目的数据库的表是分离的，通过各表各数据的ID及主键外键连接在一起，因此，当后台显示商品详情的数据时，所属茶叶的类型以ID显示出来，不是以名称显示。

-----解决：通过多表查询，查询ID的对应的名称，将查询到名称替换ID显示上去

​				3、数据库的图片以网页地址的形式存放，后台显示出来时没有经过html的处理，仍然显示以http://xxxx.jpg之类的格式，加之使用了框架的组件的原因，无法把其中的一列转成自己想要的格式。

------解决：尚未解决



覃瑗康：1、渲染时请求数据出了问题，无法渲染，发现请求路径没有写全。

------解决：补全请求路径

​			2、订单管理模块遇到删除失败bug，用postman测试过接口，接口没问题，然后就转向前端逻辑，先打印一下传入的参数是否有值，最后发现是传参出了问题，商品id传参变量少了个字母导致传参失败，所以不能删除成功。

------解决：传入正确的参数



黄桥明：1、在苹果手机和小米手机测试，底部标签栏购物车上的小红点在商品列表页面刷新位置会便宜，在其他页面刷新又复原。

-------解决：尚未解决

​			2、全选复选框刷新后不能同步子复选框的是否全部选中状态。

-------解决：直接用filter（）过滤掉未选中状态的子复选框，然后判断该数组长度是否等于     原数组长度如果相等就返回1否则返回0，利用1或0控制全选复选框的状态。

​			3、全选后剔除部分商品后再点击删除，结果删除失败。

------解决：首先能实现复选框的状态能同步到数据库，用0或1代表未选中和已选择状态，然后每次点击删除键时只需要再reducer公共数据cartlist筛选剔除状态为true已选中的自复选框，同时利用接口数据库查询删除，删除购物车商品表中该用户的所有选中状态为1所有商品。



## 项目地址

后台项目地址：http://120.79.19.106:3000

***(PS:后台管理系统无法通过注册登录，只能通过内部账号登录，账号:admin，密码：123456)***

webapp项目地址：http://120.79.19.106:3001

接口地址：http://120.79.19.106:10086

原官网：https://m.zuipin.cn/



## 项目截图

### 后台管理系统：

![](E:\React Project Tea\Project Picture\ht1.jpg)

![](E:\React Project Tea\Project Picture\ht2.jpg)

![](E:\React Project Tea\Project Picture\ht3.jpg)

### webapp：

<img src="E:\React Project Tea\Project Picture\webapp1.jpg" style="zoom:33%;" />

<img src="E:\React Project Tea\Project Picture\webapp2.jpg" style="zoom:33%;" />

<img src="E:\React Project Tea\Project Picture\webapp3.jpg" style="zoom:33%;" />

<img src="E:\React Project Tea\Project Picture\webapp4.jpg" style="zoom:33%;" />

<img src="E:\React Project Tea\Project Picture\webapp5.jpg" style="zoom:33%;" />

<img src="E:\React Project Tea\Project Picture\webapp6.jpg" style="zoom:33%;" />