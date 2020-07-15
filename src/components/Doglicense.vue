<template>
  <div style="margin: 8%;background: #fff;">
    <!-- 上部分 -->
    <div class="top-block">
      <div class="title">
        养犬许可证
      </div>
      <div class="line-wrap">
        <div class="line"></div>
        <div class="line2"></div>
      </div>
      <div class="content-wrap">
        <div class="content">
          <div class="content-title">
            证　　号：
          </div>
          <div class="content-content">
            观:2018111701215
          </div>
        </div>
        <div class="content">
          <div class="content-title">
            犬主姓名：
          </div>
          <div class="content-content">
            韦芳
          </div>
        </div>
        <div class="content">
          <div class="content-title">
            地　　址：
          </div>
          <div class="content-content">
            拱墅区祥符街道庆隆社区庆隆苑16幢1单元601
          </div>
        </div>
        <div class="content">
          <div class="content-title">
            登记日期：
          </div>
          <div class="content-content">
            2018/11/17 21:13:57
          </div>
        </div>
      </div>
    </div>
    <!-- 分割线 -->
    <div class="splite-line-wrap">
      <div class="left-circle circle"></div>
      <div class="right-circle circle"></div>
      <img src="@/assets/pic1.png" alt="分割线" class="splite-line">
    </div>
    <!-- 中间部分 -->
    <div class="center">
      <img src="@/assets/pic.jpg" alt="tupian" class="center-img">
      <div class="center-info">
        <div class="center-content">
          <div class="center-content-item">
            犬　种：
          </div>
          <div class="center-content-item">
            泰迪犬
          </div>
        </div>
        <div class="center-content">
          <div class="center-content-item">
            犬名:
          </div>
          <div class="center-content-item">
            旺仔
          </div>
        </div>
        <div class="center-content">
          <div class="center-content-item">
            犬龄:
          </div>
          <div class="center-content-item" >
            {{info.age}}
          </div>
        </div>
        <div class="center-content">
          <div class="center-content-item">
            毛色:
          </div>
          <div class="center-content-item">
            棕色
          </div>
        </div>
        <div class="center-content">
          <div class="center-content-item">
            性别:
          </div>
          <div class="center-content-item">
            雄
          </div>
        </div>
        <div class="center-content">
          <div class="center-content-item">
            用途:
          </div>
          <div class="center-content-item">
            观赏犬
          </div>
        </div>
        <div class="center-content">
          <div class="center-content-item">
            免疫证:
          </div>
          <div class="center-content-item">
            0126397
          </div>
        </div>
      </div>
    </div>
    <!-- 分割线 -->
    <div class="splite-line-wrap">
      <div class="left-circle circle"></div>
      <div class="right-circle circle"></div>
      <img src="@/assets/pic1.png" alt="分割线" class="splite-line">
    </div>
    <!-- 下半部分 -->
    <div class="bottom">
      <div class="bottom-title">
        年 审 记 录
      </div>
      <div class="bottom-content">
        <div>
          注册日期
        </div>
        <div style="margin: 0 3%">
          每年注册情况
        </div>
        <div>
          备注
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'doglicense',
  data () {
    return {
      info: {
        age: 0,
        birthDate: new Date('2018-5-20')
      }
    }
  },
  methods: {
    getAge() {
      const nowDate = new Date();
      const birthDate = this.info.birthDate;
      const old = Math.ceil((nowDate-birthDate)/31536000000);
      this.info.age = old;
    }
  },
  created() {
    this.getAge()
  }
}
</script>

<style lang="less" scoped>
.top-block {
  padding: 20px 15px 0;
}

.title {
  color: #5D65A9;
  font-size: 18px;
  margin-left: 5px;
}

.line-wrap {
  display: flex;
  margin-top: 5px;
}

.line {
  display: inline-block;
  width: 70px;
  height: 2px;
  background: #9CA0C1;
}

.line2 {
  width: 35px;
  height: 2px;
  background: #CDD8E8;
}

.content-wrap {
  margin: 10px 0;
}

.content {
  display: flex;
  font-size: 14px;
}

.content-title {
  width: 40%;
}

.content-content {
  width: 60%;
}

.splite-line-wrap {
  width: 100%;
  position: relative;
}

.circle{
  background: #568CF6;
  height: 30px;
  width: 30px;
  border-radius: 15px;
}

.left-circle{
  position: absolute;
  top: 50%;
  left: -15px;
  transform: translate(0, -50%);
}

.right-circle{
  position: absolute;
  top: 50%;
  right: -15px;
  transform: translate(0, -50%);
}

.splite-line {
  width: 100%;
  height: 100%;
  display: block;
}

.center {
  padding: 20px 15px;
  background: #fff;
  display: flex;
}

.center-img {
  margin: 0 5px;
  max-height: 131px;
  width: 39%;
}

.center-info {
  display: inline-block;
  width: 50%;
  margin-left: 5px;
}

.center-content {
  width: 100%;
  display: flex;
  line-height: 14px;
  margin-bottom: 3px;
}

.center-content-item {
  width: 50%;
  font-size: 14px;
}

.bottom {
  padding: 10px 0 20px;
}

.bottom-title{
  font-size: 18px;
  margin-bottom: 8px;
  text-align: center;
}

.bottom-content{
  display: flex;
  justify-content: center;
  font-size: 14px;
}
</style>