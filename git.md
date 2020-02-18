在git中操作

#### 全局配置

* git config --global user.name""
* git config --global user.email""

$ git breach

添加到暂缓区

$ git add . 	//提交全部

添加到版本库

$ git commit -m ""	//-m,message提交备注信息

查看所有版本，查看当前git状态，会有提示,如何操作

$ git status

版本回退,找回删除的文件

$ git reset -- hard HEAD~n

$ git log

$ git reflog	//可查所有版本

$ git reset --hard ID	//回退到指定ID的版本

工作区

暂缓区

add

版本库

commit

撤销修改

git checkout --



$ cd 路径

查看文件

$ ls

删除工作区

$ rm filename

可查所有版本

查看全部操作信息

$ git log	

$ git reflog	信息显示详细

> 可根据操作id

暂缓区、版本库覆盖工作区

$ git checkout -- filename

回退

> 可去到任何版本

$ git reset --hard ID

版本库中删除

$ git rm filename

分支合并冲突解决

删除冲突代码

再git add .

git comment 

***

远程库

1.创建SSH Key

$ ssh-keygen -t rsa -C "1850125484@qq.com"

SSH 密钥存储在其 ~/.ssh 目录下

登录Git
sittings

SSH and 

new ssh key

.ssh文件夹
复制id_rsa.pub

他们所要做的就是复制各自的 .pub 文件内容，并将其通过邮件发送

#### 添加远程库

Create a new repository

Initialize this repository with a READEME：初始化版本库（不要选）

把一个已有的本地仓库与之关联，然后，把本地仓库的内容推送到GitHub仓库。

$ git remote add origin git@github.com:michaelliao/learngit.git

第一次推送master分支时，加上了-u参数

$ git push -u origin master

本地作了提交

$ git push origin master

#### 删除远程库

your repositories版本库

Settings

dange危险

Delete this repository

#### 克隆

不需git init

$ git clone git@github.com:michaelliao/gitskills.git

创建dev分支，然后切换到dev分支

$ git checkout -b dev

命令查看当前分支：

$ git branch

$ git branch -a

$ git checkout dev

删除分支

不能在当前分支删除当前分支

$ git checkout -d dev

命令用于合并指定分支到当前分支

$ git checkout master

$ git merge dev

多人协作

当你从远程仓库克隆时，实际上Git自动把本地的master分支和远程的master分支对应起来了，并且，远程仓库的默认名称是origin。

要查看远程库的信息，用git remote：

$ git remote

**推送分支**

推送分支，就是把该分支上的所有本地提交推送到远程库。推送时，要指定本地分支，这样，Git就会把该分支推送到远程库对应的远程分支上：

$ git push origin master

如果要推送其他分支，比如dev，就改成：

$ git push origin dev

###### 因此，多人协作的工作模式通常是这样：

\1. 首先，可以试图用git push origin branch-name推送自己的修改；

\2. 如果推送失败，则因为远程分支比你的本地更新，需要先用git pull试图合并；

\3. 如果合并有冲突，则解决冲突，并在本地提交；

\4. 没有冲突或者解决掉冲突后，再用git push origin branch-name推送就能成功！

如果git pull提示“no tracking information”，则说明本地分支和远程分支的链接关系没有创建，用命令git branch --set-upstream branch-name origin/branch-name。

这就是多人协作的工作模式，一旦熟悉了，就非常简单。

***

git init 初始化 
git add .上传
git commit -m "项目初始化"
地址 

组员：
	git clone 地址

cd 文件名

​    安装依赖 ：yarn install
​    创建一个分支
​    git checkout -b alley(分支/自己创建一个) 



早上来了 :git checkout master切换主分支获取
		git pull拉去线上最新的数据
        git checkout 切换分支（自己的）
         git merge master合并主分支

下班：

 git add .提交
 git commit -m "名称" 

git push origin 子分支名
git checkout master切回主分支
git merge alley更新主分支
git push更新线上的代

***

上班 pull
下班  commit
第一天下班 记得 切换到 自己的 子分支上 
第二天来了 git pull 拉去线上 最新的代码

***



推送失败：

先用git pull把最新的提交从origin/dev抓下来，

设置dev和origin/dev的链接：

$ git branch --set-upstream dev origin/dev

再pull：

$ git pull



忽略

.gitignore文件

###### Checkout被拒绝

提交修改 git commit --all

放弃修改 git checkout --force dev

储存修改 git stash

恢复储存 git stash pop

###### 垃圾回收 

###### gc

###### ==合并==

merge

###### 冲突

对同一行做了不同的修改

###### 编辑冲突

Automatic merge failed;

Unmerged paths 用户手动编辑的文件

###### 冲突标记

当前分支 HEAD

另一分支 MERGE_HEAD

3路显示格式