var bluetheme = document.getElementsByClassName("blue-theme")[0];
var greentheme = document.getElementsByClassName("green-theme")[0];
var orgintheme = document.getElementsByClassName("orgin-theme")[0];
var purpletheme = document.getElementsByClassName("purple-theme")[0];
var redtheme = document.getElementsByClassName("red-theme")[0];
var bgChange = document.getElementById("nav");
var bgSmall = document.getElementsByClassName("goods")[0];
/*轮播图*/
var timer = setInterval("slide()", 2000);
var mylist = document.getElementById("mylist");
var num = document.getElementById("mylist").getElementsByTagName("li");
var numli = document.getElementById("underNum").getElementsByTagName("div");
var now = 0;
var left = 0;

titleAct (); //活动动态

function search() {
    var text = document.getElementsByClassName("search-input")[0].value; //获取输入框内容
    if (text == "衬衣" || text == "寸衣" || text == "男衣") {
        window.location.href = "list.html";
    }
}

/*下拉菜单*/
var navItem = $("#nav>ul>li:not(:first-child)");
var navDet = $(".nav-wrap .nav-det");
/*点击事件*/
navItem.on('click', function () {
		var itemIndex = $(this).index();
		var detIndex = itemIndex - 1;
		navDet.eq(detIndex).removeClass('hide').siblings('div').addClass('hide');
})
navDet.on({
		mouseleave: function () {
				$(this).addClass('hide');
		},
		mouseenter: function () {
				$(this).removeClass('hide');
		}
});

function titleAct () {
	 var lasteActi = document.getElementById("dynamic").getElementsByTagName("li");
	 for (var i = 0; i < lasteActi.length; i++) {
	     lasteActi[i].index = i;
	     lasteActi[i].onmouseover = function () {
	 			 /*给当前li下的span移除hide*/
	 			 var tet = this.getElementsByTagName("span");
	        tet[0].classList.remove("hide"); //移除样式
	 			 /*给兄弟li节点下的span添加hide样式*/
	 			 var brother = siblings(this);
	 			 for (var j = 0; j < brother.length; j++) {
	 				   var txt = brother[j].getElementsByTagName("span");
	 				   txt[0].classList.add("hide"); //移除样式
	 			 }			 
	     };
	 };	 
}

function slide() {
    if (left <= -(num.length - 1) * 550) { //计算banner图片宽度
        now = 0;
        left = -now * 550;
        mylist.style.left = left + "px";
        now = now + 1;
    } else {
        left = -now * 550;
        mylist.style.left = left + "px";
        now = now + 1;
    };
    var bannerLen = mylist.style.left; //图片位置标记
		if (bannerLen == "0px") { //banner移动时小图标跟踪移动
				addStyle(0);
				var brother = siblings(document.getElementById("underNum").getElementsByTagName("div")[0]);
		} else if (bannerLen == "-550px") {
				addStyle(1);
				var brother = siblings(document.getElementById("underNum").getElementsByTagName("div")[1]);
		} else if (bannerLen == "-1100px") {
				addStyle(2);
				var brother = siblings(document.getElementById("underNum").getElementsByTagName("div")[2]);
		} else if (bannerLen == "-1650px") {
				addStyle(3);
				var brother = siblings(document.getElementById("underNum").getElementsByTagName("div")[3]);
		} else if (bannerLen == "-2200px") {
				addStyle(4);
				var brother = siblings(document.getElementById("underNum").getElementsByTagName("div")[4]);
		}
		for (var j = 0; j < brother.length; j++) { //删除兄弟节点的小图标样式
				brother[j].classList.remove("active");
		}
}

//移动的位置
function toCover(now1) {
    now = now1;
    left = -now * 550;
    mylist.style.left = left + "px";
    clearInterval(timer); //清除	setInterval	防止叠加
}

for (var i = 0; i < numli.length; i++) {
    numli[i].index = i;
    numli[i].onmouseover = function () {
        toCover(this.index); //鼠标经过时 大图切换和小图一致
        this.classList.add("active"); //给当前添加active
        var brother = siblings(this);
        for (var j = 0; j < brother.length; j++) {
            brother[j].classList.remove("active");
        }
    };
    numli[i].onmouseout = function () {
        timer = setInterval("slide()", 2000); //鼠标移开后轮播继续执行
    };
};

/*品牌活动*/
var brandlist = document.getElementById("brandlist");
var brandnow = 0;
var brandleft = 0;

//图片移动
function brandCover(now1) {
    brandnow = now1;
    brandleft = brandnow * 790;
    brandlist.style.right = brandleft + "px";
}

var numli = document.getElementById("brandshoes").getElementsByTagName("li");
for (var i = 0; i < numli.length; i++) { //长度减一是因为下标从0开始的
		numli[i].index = Math.abs(i - 3); //取正数
		numli[i].onmouseover = function () { //鼠标经过时的动作
				brandCover(this.index); //图片移动方法
				if (this.index == 1 || this.index == 2 || this.index == 3) { //移除第一个的select-shoes
						document.getElementById("brandshoes").getElementsByTagName("li")[3].classList.remove("select-shoes");
				}
				this.classList.add("select-shoes"); //给当前添加select-shoes
				var brother = siblings(this);
				for (var j = 0; j < brother.length; j++) {
						brother[j].classList.remove("select-shoes");
				}
		};
};

/*主题切换*/
function blue() {
		bluetheme.style['background-position'] = '0 -15px'; //画勾
		greentheme.style['background-position'] = '-20px 0px'; //不画勾
		orgintheme.style['background-position'] = '-40px 0px'; //不画勾
		purpletheme.style['background-position'] = '-60px 0px'; //不画勾
		redtheme.style['background-position'] = '-80px 0px'; //不画勾
		bgChange.style['background-color'] = 'rgb(0, 60, 157)'; //设置导航栏背景
		bgSmall.style['background-color'] = 'rgb(0, 60, 157)'; //设置分类栏背景
}

function green() {
		bluetheme.style['background-position'] = '0 0'; //不画勾
		greentheme.style['background-position'] = '-20px -15px'; //画勾
		orgintheme.style['background-position'] = '-40px 0px'; //不画勾
		purpletheme.style['background-position'] = '-60px 0px'; //不画勾
		redtheme.style['background-position'] = '-80px 0px'; //不画勾
		bgChange.style['background-color'] = 'yellowgreen'; //设置导航栏背景
		bgSmall.style['background-color'] = 'yellowgreen'; //设置分类栏背景
}

function orgin() {
		bluetheme.style['background-position'] = '0 0'; //不画勾
		greentheme.style['background-position'] = '-20px 0px'; //不画勾
		orgintheme.style['background-position'] = '-40px -15px'; //画勾
		purpletheme.style['background-position'] = '-60px 0px'; //不画勾
		redtheme.style['background-position'] = '-80px 0px'; //不画勾	
		bgChange.style['background-color'] = 'orange'; //设置导航栏背景
		bgSmall.style['background-color'] = 'orange'; //设置分类栏背景
}

function purple() {
		bluetheme.style['background-position'] = '0 0'; //不画勾
		greentheme.style['background-position'] = '-20px 0px'; //不画勾
		orgintheme.style['background-position'] = '-40px 0px'; //不画勾
		purpletheme.style['background-position'] = '-60px -15px'; //画勾
		redtheme.style['background-position'] = '-80px 0px'; //不画勾	
		bgChange.style['background-color'] = 'deepskyblue'; //设置导航栏背景
		bgSmall.style['background-color'] = 'deepskyblue'; //设置分类栏背景
}

function red() {
		bluetheme.style['background-position'] = '0 0'; //不画勾
		greentheme.style['background-position'] = '-20px 0px'; //不画勾
		orgintheme.style['background-position'] = '-40px 0px'; //不画勾
		purpletheme.style['background-position'] = '-60px 0px'; //不画勾
		redtheme.style['background-position'] = '-80px -15px'; //画勾	
		bgChange.style['background-color'] = 'crimson'; //设置导航栏背景
		bgSmall.style['background-color'] = 'crimson'; //设置分类栏背景
}

 function addStyle(n) { //添加样式公共方法
		document.getElementById("underNum").getElementsByTagName("div")[n].classList.add("active");
}	   
	
function siblings(elm) { //取当前元素的兄弟元素公共方法
			var a = [];
			var p = elm.parentNode.children;
			for (var i = 0, pl = p.length; i < pl; i++) {
					if (p[i] !== elm) a.push(p[i]);
			}
			return a;
	}
