### 1. 安装配置 JDK

**1. 创建 JDK 安装目录**

```
sudo mkdir /usr/lib/jvm
```

**2. 解压安装包**

```
sudo tar -zxvf jdk-8u221-linux-x64.tar.gz -C /usr/lib/jvm
```

**3. 修改环境变量**

```
sudo gedit ~/.bashrc
```

添加以下内容到文件的尾部，**JAVA_HOME** 路径可能不一样

```
export JAVA_HOME=/usr/lib/jvm/jdk1.8.0_221
export JRE_HOME=${JAVA_HOME}/jre
export CLASSPATH=.:${JAVA_HOME}/lib:${JRE_HOME}/lib
export PATH=${JAVA_HOME}/bin:$PATH
```

**4. 本终端立即生效**

```
source ~/.bashrc
```

### 2. 安装配置 Android SDK

**1. 创建 Android SDK 安装目录**

```
sudo mkdir /usr/lib/android
```

**2. 解压安装包**

```
sudo tar -zxvf android-sdk_r24.4.1-linux.tgz -C /usr/lib/android
```

**3. 修改环境变量**

```
sudo gedit ~/.bashrc
```

添加以下内容到文件的尾部，**ANDROID_HOME** 路径可能不一样

```
export ANDROID_HOME=/usr/lib/android/android-sdk-linux
export PATH=$PATH:$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools
```

### 3. 安装 Android Studio

**1. 解压安装包**

```
sudo tar -zxvf android-studio-ide-183.5522156-linux.tar.gz -C /usr/lib/android
```

**2. 进入解压到的 android-studio 目录下的 bin 文件夹中**

```
cd /usr/lib/android/android-studio/bin/
```

**3. 执行 ./studio.sh**

```
./studio.sh
```

**4. 取消设置代理**
在询问是否要设置 proxy 时，点击 cancel 即可。

等待一切下载完毕以后，创建一个项目，等待其初始化项目完毕以后（Build Output 全部变成绿色对号），点击 run(shift + f10) 根据引导创建一个虚拟设备。

### 4. 快速启动 Android Studio

每次都从安装路径输入命令打开 AS 是让人恼火的，通过以下方式可以将 AS 添加到 Favorites。

第 3 步启动 Android Studio 后，点击菜单栏中的 Tools-> Create Desktop Entry...

之后就可以在 开始菜单栏中 搜索到 AS 了，右键添加到 Favorites 即可。

### 5. Android Studio 权限问题

加入遇到了因为用户权限不够而导致的问题，可以执行以下命令（路径修需要改成自己的）：

```
sudo chown -R $USER:$USER /usr/lib/android/android-studio/
```
