<template>
    <div class="Pos">
      <el-row>
        <el-col :span="7" class="pos-order" id="order-list">
          <el-tabs>
            <el-tab-pane label="订单">
              <el-table :data="tableData" align="left">
                <el-table-column prop="goodsName" label="商品名称" width="150" align="center"></el-table-column>
                <el-table-column prop="nums" label="数量" width="50"></el-table-column>
                <el-table-column prop="price" label="金额(￥)" width="80" ></el-table-column>
                <el-table-column  label="操作" fixed="right" width="100">
                  <template scope="scope">
                    <el-button type="text" size="small" @click="delectGoods(scope.row)">删除</el-button><!--scope.row白行里边的数传入addorder()里头，这是element的一个坑-->
                    <el-button type="text" size="small" @click="addOrder(scope.row)">增加</el-button>
                  </template>
                </el-table-column>
              </el-table>
            </el-tab-pane>
            <el-tab-pane label="下单">下单</el-tab-pane>
            <el-tab-pane label="账单">账单</el-tab-pane>
          </el-tabs>
          <div class="count">
            <span>总数：{{totalcount}}</span>
            <span>总金额：￥{{totalmoney}}</span>
          </div>
          <div class="btn">
            <el-button type="info">挂单</el-button>
            <el-button type="warning" @click="delectAllgoods">删除</el-button>
            <el-button type="success" @click="checkout">结账</el-button>
          </div>
        </el-col>
        <el-col :span="17"><!--总共24-->
          <div class="Bestseller">
            <div class="title">畅销菜单</div>
            <div class="bestseller-list">
              <ul class="bookInfo" >
                <li v-for="goods in bestBook" @click="addOrder(goods)">
                  <div>
                    <span >{{goods.goodsName}}</span>
                    <span class="price">￥{{goods.price}}</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="booktype">
            <el-tabs>
              <el-tab-pane label="汉堡">
                <div>
                  <ul class="booktypeInfo" >
                    <li v-for="goods in booktypeData1" @click="addOrder(goods)">
                      <div>
                        <span ><img :src="goods.goodsImg" width="100px" height="120px" alt=""></span>
                      </div>
                      <div>
                        <span >商品名称：{{goods.goodsName}}</span>
                        <span >商品编号:{{goods.goodsId}}</span>
                        <span >价格:￥{{goods.price}}</span>
                        <el-button size="small">加入购物车</el-button>
                      </div>
                    </li>
                  </ul>
                </div>
              </el-tab-pane>
              <el-tab-pane label="薯条">
                <div>
                  <ul class="booktypeInfo" >
                    <li v-for="goods in booktypeData2" @click="addOrder(goods)">
                      <div>
                        <span ><img :src="goods.goodsImg" width="100px" height="120px" alt=""></span>
                      </div>
                      <div>
                        <span >商品名称：{{goods.goodsName}}</span>
                        <span >商品编号:{{goods.goodsId}}</span>
                        <span >价格:￥{{goods.price}}</span>
                        <el-button size="small">加入购物车</el-button>
                      </div>
                    </li>
                  </ul>
                </div>
              </el-tab-pane>
              <el-tab-pane label="饮料">
                <div>
                  <ul class="booktypeInfo" >
                    <li v-for="goods in booktypeData3" @click="addOrder(goods)">
                      <div>
                        <span ><img :src="goods.goodsImg" width="100px" height="120px" alt=""></span>
                      </div>
                      <div>
                        <span >商品名称：{{goods.goodsName}}</span>
                        <span >商品编号:{{goods.goodsId}}</span>
                        <span >价格:￥{{goods.price}}</span>
                        <el-button size="small">加入购物车</el-button>
                      </div>
                    </li>
                  </ul>
                </div>
              </el-tab-pane>
              <el-tab-pane label="套餐">
                <div>
                  <ul class="booktypeInfo" >
                    <li v-for="goods in booktypeData4" @click="addOrder(goods)">
                      <div>
                        <span ><img :src="goods.goodsImg" width="100px" height="120px" alt=""></span>
                      </div>
                      <div>
                        <span >商品名称：{{goods.goodsName}}</span>
                        <span >商品编号:{{goods.goodsId}}</span>
                        <span >价格:￥{{goods.price}}</span>
                        <el-button size="small">加入购物车</el-button>
                      </div>
                    </li>
                  </ul>
                </div>
              </el-tab-pane>
            </el-tabs>
          </div>
        </el-col>
      </el-row>
    </div>
</template>

<script>
  import axios from  'axios';/*引入Axios，可以从远程读取数据，在哪里使用就在哪引用*/
    export default {
        name: "Pos",
      data(){
          return{
            tableData:[],
            bestBook:[],
            booktypeData1:[0],
            booktypeData2:[1],
            booktypeData3:[2],
            booktypeData4:[3],

          }
      },/*引入数据*/
      created:function(){
        axios.get('http://jspang.com/DemoApi/oftenGoods.php')
          .then(response=>{
            console.log(response);
            this.bestBook=response.data;
          })
          .catch(error=>{
            console.log(error);
            alert('网络错误，不能访问');
          });
        axios.get('http://jspang.com/DemoApi/typeGoods.php')
            .then(reponse=>{
              console.log(reponse);
              this.booktypeData1=reponse.data[0];
              this.booktypeData2=reponse.data[1];
              this.booktypeData3=reponse.data[2];
              this.booktypeData4=reponse.data[3];
            })
            .catch(error=>{
              console.log('Error')
            })

      },
      mounted:function(){/*生命周期，所以的dom加载之后，这里设置高度，因为element直接设置100%高度不管用*/
        var orderHeight=document.body.clientHeight;
        document.getElementById("order-list").style.height=orderHeight+'px';
      },
      methods:{
        addOrder(goods){
         /*判断商品是否已经存在于订单中*/
          this.totalcount=0;
          this.totalmoney=0;
          let ishave=false;
          for(let i=0;i<this.tableData.length;i++){
            console.log(this.tableData[i].goodsId);
            if(this.tableData[i].goodsId==goods.goodsId){
              ishave=true;
            }
          }if(ishave){/*改变列表中商品的数量*/
            let arr=this.tableData.filter(o=>o.goodsId==goods.goodsId);
            arr[0].nums++;

          }else {
            let newGoods={goodsId: goods.goodsId,goodsName:goods.goodsName,price:goods.price,nums:1};
            this.tableData.push(newGoods);
          }
          this.tableData.forEach((elemnent)=>{
            this.totalcount+=elemnent.nums;
            this.totalmoney=this.totalmoney+(elemnent.price*elemnent.nums)
          });
          this.getAllmoney();
        },
        delectGoods(goods){/*filter(())过滤函数，里边是一个箭头函数*/
          console.log(goods);
          this.tableData=this.tableData.filter(o=>o.goodsId!=goods.goodsId);/*筛选出除了goodsId不等于，赋给tableData,这是ES6的*/
          this.getAllmoney();
        },
        delectAllgoods(){
          this.tableData=[];
          this.totalcount=0;
          this.totalmoney=0;
          if(this.tableData==null){
            console.log('请添加商品')
          }
        },
        checkout(){
          if(this.totalcount!=0){
            this.tableData=[];
            this.totalcount=0;
            this.totalmoney=0;
            this.$message({
              message:'结账成功！',
              type:'success'
            })
          }else {
            this.$message.error('账单为空！')
          }
        },
        getAllmoney(){
          this.totalcount=0;
          this.totalmoney=0;
          if(this.tableData){
            this.tableData.forEach((elemnent)=>{
              this.totalcount+=elemnent.nums;
              this.totalmoney=this.totalmoney+(elemnent.price*elemnent.nums)
            });
          }
          }
      }

    }
</script>

<style scoped>
  .pos-order{
    height: 100%;
    background-color: azure;
    border-right: 1px solid gray;
    overflow: auto;
  }
  .title{/*.title直接定义样式，就不会和直接定义的样式冲突，如果写*/
    height: 26px;
    font-size: 26px;
    padding: 10px;
    border-bottom: 1px solid gray;
    text-align: left;
    margin-top:10px;
    margin-left: 10px;
  }
  .bestseller-list li{
    list-style: none;
    float:left;
    padding: 2px;
    margin-right: 20px;
    margin-bottom: 10px;
    cursor: pointer;
  }
  .bookInfo li span{
    text-align: left;
    display: block;
    margin-bottom: 10px;
    margin-left: 5px;
    float: left;

  }
  .price{
    color: #90ffdc;
  }
  .booktype{
    clear: both;
    margin-left: 15px;
  }
  .booktypeInfo li{
    list-style: none;
    float:left;
    padding: 2px;
    margin-right: 20px;
    margin-bottom: 10px;
    cursor: pointer;
  }
  .booktypeInfo li div{
    float: left;
  }
  .booktypeInfo li span{
    text-align: left;
    display: block;
    margin-bottom: 10px;
    margin-left: 5px;
  }
  .count{
    background-color: lemonchiffon;
    padding: 10px;
    text-align: left;
  }
  .count span:first-child{
    margin-left: 20px;
  }
  .count span{
    margin-left: 70px;
  }
</style>
