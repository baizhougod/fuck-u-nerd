---
# 这是文章的标题
title: 网络配置
# 这是页面的图标
icon: file
# 这是侧边栏的顺序
order: 1
# 设置作者
author: Mr.H
# 设置写作时间
# date: 2020-01-01
# 一个页面可以有多个分类
category:
  - 使用指南
# 一个页面可以有多个标签
# tag:
#   - 页面配置
#   - 使用指南
# 此页面会在文章列表置顶
sticky: true
# 此页面会出现在文章收藏中
star: true
# 你可以自定义页脚
# footer: 这是测试显示的页脚
# 你可以自定义版权信息
# copyright: 无版权
---
## 配置网络

### 配置虚拟机静态IP地址

打开终端，执行如下命令：
```vim /etc/sysconfig/network-scripts/ifcfg-ens33```

按I键进入编辑模式

![](https://cdn.nlark.com/yuque/0/2021/png/1567904/1634469299976-8e9446d9-4a11-4fc5-b966-376ad8e5955a.png#id=TVOTj&originHeight=607&originWidth=703&originalType=binary&ratio=1&status=done&style=none)

```javascript
IPADDR=192.168.15.132
NETMASK=255.255.255.0
GATEWAY=192.168.15.2
DNS1=114.114.114.114
```

保存退出，
重启网卡，命令如下：
```systemctl restart network```

使用**ifconfig**命令，查看Ip是否修改对
![](https://cdn.nlark.com/yuque/0/2021/png/1567904/1634469300478-18071686-e0e5-4c1f-b7b2-3f018bd93ba6.png#id=fKT7x&originHeight=799&originWidth=1250&originalType=binary&ratio=1&status=done&style=none)

# 配置机器名

编辑这个文件，其命令如下：
`vim /etc/sysconfig/network`
在文件添加一行代码

![](https://cdn.nlark.com/yuque/0/2021/png/1567904/1634469300976-03c6776f-f4c3-4956-967c-a015eb58632b.png#id=TrtUm&originHeight=79&originWidth=379&originalType=binary&ratio=1&status=done&style=none)

保存退出，再在控制台执行如下命令：
hostname  jl22

执行exit 或者logout 退出

重新打开xshell或者终端。发现机器名已改成功

# 配置映射

`vi /etc/hosts`
![](https://gitee.com/daygod/picture/raw/master/20211107172316.png)

# 配置免密

步骤为先生成秘钥，再分发到需要免密的机器上，配置Hadoop时也要发到本机上面

建立存放秘钥的文件夹
2.
进入文件夹并执行
`ssh-keygen -t rsa`
然后敲（三个回车），就会生成两个文件id_rsa（私钥）、id_rsa.pub（公钥）
3.
将公钥拷贝到要免密登录的目标机器上

```
ssh-copy-id hadoop102 #此时102是本机
ssh-copy-id hadoop103  
ssh-copy-id hadoop104
```

其他两个服务器也是完全重复步骤

4.文件解析


| 文件            | 解释                                    |
| ----------------- | ----------------------------------------- |
| known_hosts     | 记录ssh访问过计算机的公钥（public key） |
| id_rsa          | 生成的私钥                              |
| id_rsa.pub      | 生成的公钥                              |
| authorized_keys | 存放授权过的无密登录服务器公钥          |

# 关闭防火墙

`systemctl stop firewalld`
