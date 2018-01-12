
function getRandom(a , b){
    return Math.random()*(b-a)+a;
}

function getFloor  (low, high) {
return Math.floor(low + Math.random() * (high - low));
}

this.stage = new createjs.Stage("game-canvas");
this.stage.enableMouseOver();
createjs.Touch.enable(this.stage);
this.width = this.stage.canvas.width;
this.height = this.stage.canvas.height;

        
//训练资源第一次，唯一一次赋值
gameResource = new createjs.LoadQueue();
gameResource.installPlugin(createjs.Sound);//声音注册

//添加加载事件
gameResource.addEventListener("complete", (ev)=>{
	//资源加载完毕
});
//创建文件
//
let loadingText = new createjs.Text("0%", "24px Arial", "black");
loadingText.set({x: this.width/2, y: this.height/2, textAlign: "center"});

//添加加载中
gameResource.addEventListener("progress", (ev)=>{
    loadingText.text = (ev.progress * 100).toFixed() + "%";
    this.stage.update();
})

let sound = createjs.Sound.play("mBG", createjs.Sound.INTERRUPT_NONE,0,0,-1,0.5,0);
            createjs.Sound.stop();

// 边框
buildBorder(){
    let border = new createjs.Shape();
    border.graphics.ss(2).s("black").dr(0,0,w,h);
    return border;
}


            this.view = new createjs.Container();
 let selectBgImg =  gameResource.getResult("selectBg");

                twinkleBitMap.addEventListener("mousedown",()=>{
                    this.twinkle = i;
                    this.view.removeAllChildren();
                    this.view.removeAllEventListeners();
                    this.buildBg();

                })


        browserRedirect() {
            let sUserAgent = navigator.userAgent.toLowerCase();
            let bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
            let bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
            let bIsMidp = sUserAgent.match(/midp/i) == "midp";
            let bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
            let bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
            let bIsAndroid = sUserAgent.match(/android/i) == "android";
            let bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
            let bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
            if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {               
              	this.dotNum = 45;
            } else {
　　　　　　　　 this.dotNum = 180;
            }

        }

                this.chickContaint.compositeOperation = "darken";//source-over


     class Road extends createjs.Container{
        constructor(world) {
            super();
            this.world = world;
            this.game = world.game;
            this.distance = 0;

            let roadUp = new createjs.Bitmap(gameResource.getResult("bg"));
            roadUp.set({
                scaleX: this.game.width/roadUp.image.width,
                scaleY: this.game.height/roadUp.image.height
            });

            let roadDown = roadUp.clone();
            roadDown.x = this.game.width;
            this.addChild(roadUp, roadDown);
            this.x = 0;

            this.roadMap = [[340,575], [575, 835], [835, 1095], [1094, 1340]];
        }

        update() {
            let sp = this.world.speed;
            if(this.x - sp < -this.game.width) {
                this.x = 0;
            }
            this.x -= sp;
            this.distance += sp;
        }
    }

            let text = new createjs.Text("点击选择你想操纵的球", "20px Arial", "black");
            text.set({
                textAlign: "center",
                textBaseline: "middle",
                x: this.width/2,
                y: this.height/4
            })



                        this.trainInfor = this.game.trainInfor;


        buildMouseRect(){
            let shape = new createjs.Shape();
            shape.graphics.beginFill("#ff00ff").drawRect(this.x, 0, this.width, this.height);
            this.view.hitArea = shape;
        }

        twinkleShape(){
            if(this.twinkleS === this.twinkleE){
                this.twinkleS = 0;
                this.twinkleS++;
                this.view.alpha === 1 ? this.view.alpha = 0 : this.view.alpha = 1;
            }else if(this.twinkles > this.twinkleE ){
                this.twinkleS = 0;
                return ;
            }else{
                this.twinkleS ++;
            }
        }

        buildBitMap(idStr){
            let img = gameResource.getResult(idStr);
            let bitMap = new createjs.Bitmap(img);
            bitMap.img = img;
            // bitMap.set({regX:img.width*0.5,regY:img.height*0.5});
            return bitMap;
        }
        buildShape(color,width,height){
            let shape = new createjs.Shape();
            shape.graphics.beginStroke("#ff00ff").ss(6).beginFill(color).drawRect(0, 0, width, height);

            return shape;
        }
        buildBitShape(idStr){
            let bitContain = new createjs.Container();

            let img = gameResource.getResult(idStr);
            let bitMap = new createjs.Bitmap(img);
            this.scale =( (img.width-6*2) / (img.width));
            bitMap.set({scaleX: this.scale, scaleY: this.scale});

            let shape = new createjs.Shape();
            shape.graphics.beginFill("ff00ff").drawRect(0, 0, img.width, img.height);

            bitContain.addChild(shape);

            bitContain.addChild(bitMap)

            return bitContain;
        }

                color: this.game.trainInfor.targetInfor.color,



            let levelBitmap = new createjs.Bitmap(levelImage);
            this.addChild(levelBitmap);
            levelBitmap.set({x:this.center.x,y:this.center.y,regX:levelImage.width*0.5,regY:levelImage.height*0.5,scaleX:0.01,scaleY:0.01});
            createjs.Tween.get(levelBitmap)
            .to({x:this.center.x,y:this.center.y,regX:levelImage.width*0.5,regY:levelImage.height*0.5,scaleX:1,scaleY:1},1000)
            .to({x:this.center.x,y:this.center.y,regX:levelImage.width*0.5,regY:levelImage.height*0.5,scaleX:0.01,scaleY:0.01},1000)


        //算法
    class Arithmetic{
        constructor(){

        }
        /**
         * 获得一个数组最大值下表
         */
        getMaxArray(array){
            let max = Math.max.apply(Math,array);
            return max;
        }
        getMinArray(array){
            let min = Math.min.apply(Math,array);
            return min;
        }
         /**
         * 获得一个数组最大值下表
         */
        getMaxIndexArray(array){
            let max = Math.max.apply(Math,array);
            let index = array.findIndex((value, index, arr)=>{
                value ===max;
            })
            return index;
        }
        /**
         * 获得一个数组最小值下表
         */
        getMinIndexArray(array){
            let min = Math.min.apply(Math,array);
             let index = array.findIndex((value, index, arr)=>{
                value === min;
            })
            return index;
        }
        /**
         * 在[0,arrayLeng]随机排布
         */
        getRandomArray(arrayLength){      
            let temp_array = new Array();
            for (let index =0;index<arrayLength;index++) {
                temp_array.push(index);
            }
            let return_array = new Array();
            for(let i=0;i<arrayLength;i++){            
                if(temp_array.length>0){
                    let idNum = Math.floor(Math.random() * temp_array.length);
                    return_array[i] = temp_array[idNum];
                    temp_array.splice(idNum,1);
                }else{
                    break;
                }         
            }
            return return_array;
        }
        /***
         * 在两个数值之间随机获得一个数值
         */
        getRandomNumForMinToMax(Min,Max){
            let Range = Max - Min;   
            let Rand = Math.random();   
            return(Min + Math.round(Rand * Range));
        }
        /***
         *获取一个比num小的数值
         */
        getRandomNumForNum(num){
            let index = Math.floor(Math.random()*num);
            return index;
        }
        /**
         * 一个点和一个数组的所有点比较，如果大于disNum，返回这个点
         */
        getPointDistanceOfArray(imgWidth,imgHigth,point,pointArray,disNum){
            let diagonalImg = this.calculateDistance(0,imgWidth*0.5,0,imgHigth*0.5)
            let pointArrayLength = pointArray.length;
            let pointMidArray =[];
            for(let j =0;j<pointArrayLength;j++){
                let pointDis = this.calculateDistance(point.x,point.y,pointArray[j].x,pointArray[j].y);
                let pointDisNum =Math.abs(diagonalImg - pointDis)-disNum;
                if(pointDisNum<0){
                    break;
                }else{
                    pointMidArray.push(pointDisNum);
                }
            }
            if(pointMidArray.length===pointArrayLength){
                return point;
            }else{
                return ;
            } 
        }
          /**
         * imgNum张图片随机分布
         * minx,maxx,miny,maxy：图片分布位置;sminx,smaxx,sminy,smaxy:图片不能存在的位置
         * imgWidth,imgHigth：图片宽·高
         * disNum：图片之间最小距离
         */
        getRandomImgArrayForRand(imgNum,minx,maxx,miny,maxy,sminx,smaxx,sminy,smaxy,imgWidth,imgHigth,disNum){

            let pointArray =[];
            let point = {};
            let diagonalImg = this.calculateDistance(0,imgWidth*0.5,0,imgHigth*0.5)
            let num=0;
            while(pointArray.length<imgNum){
                point = {
                    x:this.getRandomNumForMinToMax(minx,maxx),
                    y:this.getRandomNumForMinToMax(miny,maxy)
                }
                
                if(point.x>sminx && point.x<smaxx && point.y>sminy && point.y<smaxy){
                    continue;
                }
                if(pointArray.length){
                    let pointMid = this. getPointDistanceOfArray(imgWidth,imgHigth,point,pointArray,disNum)
                    if(pointMid){
                         pointArray.push(pointMid);
                    }
                }else{
                    pointArray.push(point);
                }
            }
            return pointArray;
        }
        /**
         * imgNum张图片随机分布
         * minx,maxx,miny,maxy：图片分布位置
         * imgWidth,imgHigth：图片宽·高
         * disNum：图片之间最小距离
         */
        getRandomImgArray(imgNum,minx,maxx,miny,maxy,imgWidth,imgHigth,disNum){

            let pointArray =[];
            let point = {};
            let diagonalImg = this.calculateDistance(0,imgWidth*0.5,0,imgHigth*0.5)
            let num=0;
            while(pointArray.length<imgNum){
                point = {
                    x:this.getRandomNumForMinToMax(minx,maxx),
                    y:this.getRandomNumForMinToMax(miny,maxy)
                }

                if(pointArray.length){
                    let pointMid = this. getPointDistanceOfArray(imgWidth,imgHigth,point,pointArray,disNum)
                    if(pointMid){
                         pointArray.push(pointMid);
                    }
                }else{
                    pointArray.push(point);
                }
            }
            return pointArray;
        }
        /**
         * 两点之间的距离
         */

        calculateDistance( p1x, p1y, p2x, p2y ) {
            let xDistance = p1x - p2x,
                yDistance = p1y - p2y;
            let mathSqrt =  Math.sqrt( Math.pow( xDistance, 2 ) + Math.pow( yDistance, 2 ) );
            return Math.abs(mathSqrt)
        }
        /**
         * 数组从大到小排列
         */
        getArrayFromBigToBTSmallSort(arr){
            let array = arr.sort( (a, b)=>{return a - b})
            return array;
        }
        getArrayFromSmallToBigSort(arr){
            let array = arr.sort((a, b)=>{return b - a})
            return array;
        }
        /**
         * 字符串随机生成一个数组；
         */
        getRandonLetters(englishWorld){
            let englishLettersArray = englishWorld.split("");
            let lettersArrayLength = englishLettersArray.length;
            let indexArray = this.getRandomArray(0,lettersArrayLength);
            let englishLettersArr = [];
            for(let i = 0;i<lettersArrayLength;i++){
                let letter = englishLettersArray[indexArray[i]];
                englishLettersArr.push(letter)
            }
            return englishLettersArr;
         }

    } 


        bitAnimation(){
            let bitData = {
                "images":[this.bitAnitionImg],
                "frames":{"width":100, "height":73, "count":6,regX:50,regY:36.5},  
                "animations":{
                    "stand":[0,5,null,0.1]
                    
                }
            }
            let bitSpriteSheet = new createjs.SpriteSheet(bitData);
            let bitSprite = new createjs.Sprite(bitSpriteSheet,"stand");
            return bitSprite;
        }


                    document.body.style.cursor = "default";

            this.graphics.f('hsla('+hue+',100%,50%,0.6)').dc(0,0,radius);


            //加载资源路径
            let currencyImgArry = ["side","purpleMonster","yelloStar","redStar"];
            let currencyImgs = currencyImgArry.map((currencyImg)=>{
                return {
                    id:currencyImg,
                    src:"src/img/" + currencyImg + ".png"
                }
            })
            gameResource.loadManifest(currencyImgs);


        buildEvent(){
            this.stage.addEventListener("stagemousedown",(ev)=>{
                this.mousePoint = {};
                this.mousePoint = {
                    x:ev.stageX,
                    y:ev.stageY
                }
            })
        }


        twinkle(shape){
            if(this.twinkleIndex === this.twinkleNum){
                this.twinkleIndex = 0;
                this.twinkleIndex ++;
                shape.alpha === 1 ? shape.alpha = 0 : shape.alpha = 1;  
                shape.set({alpha:shape.alpha})
                
            }else{
                this.twinkleIndex ++;
            }
        }



































