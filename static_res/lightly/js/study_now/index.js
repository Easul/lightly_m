layui.use(["jquery","layer","element","laypage","form","code","layim"],function(){function styleBuild(questionData){questionData=eval("("+questionData+")"),addQuestion(questionData.select,questionData.select[0].length,"selectContent"),addQuestion(questionData.judge,questionData.judge[0].length,"judgeContent"),addQuestion(questionData.fill,questionData.fill[0].length,"fillContent"),questionData.hasOwnProperty("program")&&addQuestion(questionData.program,questionData.program[0].length,"programContent"),showLaypage("selectPage",questionData.select.length),showLaypage("judgePage",questionData.judge.length),showLaypage("fillPage",questionData.fill.length),questionData.hasOwnProperty("program")&&showLaypage("programPage",questionData.program.length),$(window).resize(function(){showLaypage("selectPage",questionData.select.length),showLaypage("judgePage",questionData.judge.length),showLaypage("fillPage",questionData.fill.length),questionData.hasOwnProperty("program")&&showLaypage("programPage",questionData.program.length)})}function showLaypage(a,l){if($(window).width()>=768)var e=!1;else e=["prev","next","count"];laypage.render({elem:a,count:l,limit:1,groups:10,prev:"上一题",next:"下一题",first:"首页",last:"尾页",layout:e,theme:"#ff5500",jump:function(a,l){var e=a.elem.split("P")[0],i=a.curr,s=e+"Content"+(i-1);switch(e){case"select":var t=layui.data("lightly").selectContent;$("#"+t).css("display","none"),$("#"+s).css("display","block");break;case"judge":t=layui.data("lightly").judgeContent;$("#"+t).css("display","none"),$("#"+s).css("display","block");break;case"fill":t=layui.data("lightly").fillContent;$("#"+t).css("display","none"),$("#"+s).css("display","block");break;case"program":t=layui.data("lightly").programContent;$("#"+t).css("display","none"),$("#"+s).css("display","block")}layui.data("lightly",{key:e+"Content",value:s})}})}function addQuestion(a,l,e){domStr=7==l?selectDom(a,e):noSelectDom(a,e),$("#"+e).append(domStr),layui.data("lightly",{key:e,value:e+"0"}),form.render()}function selectDom(a,l){for(var e="",i=[],s=0;s<a.length;s++)e+='<div class="single-question" id="'+l+s+'"><div class="layui-row"><div class="layui-col-md8 layui-col-lg8 layui-col-sm8 layui-col-xs12"><div class="layui-row"><div class="layui-col-md1 layui-col-lg1 layui-col-sm1 layui-col-xs1 question-index">'+a[s][0]+'</div><div class="layui-col-md11 layui-col-lg11 layui-col-sm11 layui-col-xs11">'+a[s][1]+'</div></div><div class="layui-row answer-box"><div class="layui-col-md11 layui-col-lg11 layui-col-md-offset1 layui-col-lg-offset1 layui-col-sm11 layui-col-xs11 layui-col-sm-offset1 layui-col-xs-offset1"><div><input class="layui-col-md1 layui-col-lg1 layui-col-sm1 layui-col-xs1" type="radio" name="select" value="A" title="A" myId="'+l+'" myNumber="'+s+'" lay-filter="judgeResult"></div><div class="layui-col-md10 layui-col-lg10 layui-col-sm10 layui-col-xs10 left-space">'+a[s][2]+'</div></div><div class="layui-col-md11 layui-col-lg11 layui-col-md-offset1 layui-col-lg-offset1 layui-col-sm11 layui-col-xs11 layui-col-sm-offset1 layui-col-xs-offset1"><div><input type="radio" name="select" value="B" title="B" myId="'+l+'" myNumber="'+s+'" lay-filter="judgeResult"></div><div class="layui-col-md10 layui-col-lg10 layui-col-sm10 layui-col-xs10  left-space">'+a[s][3]+'</div></div><div class="layui-col-md11 layui-col-lg11 layui-col-md-offset1 layui-col-lg-offset1 layui-col-sm11 layui-col-xs11 layui-col-sm-offset1 layui-col-xs-offset1"><div><input type="radio" name="select" value="C" title="C" myId="'+l+'" myNumber="'+s+'" lay-filter="judgeResult"></div><div class="layui-col-md10 layui-col-lg10 layui-col-sm10 layui-col-xs10  left-space">'+a[s][4]+'</div></div><div class="layui-col-md11 layui-col-lg11 layui-col-md-offset1 layui-col-lg-offset1 layui-col-sm11 layui-col-xs11 layui-col-sm-offset1 layui-col-xs-offset1"><div><input type="radio" name="select" value="D" title="D" myId="'+l+'" myNumber="'+s+'" lay-filter="judgeResult"></div><div class="layui-col-md10 layui-col-lg10 layui-col-sm10 layui-col-xs10  left-space">'+a[s][5]+'</div></div></div></div><div  class="layui-col-md4 layui-col-lg4 layui-col-sm4 layui-col-xs12 answer-button"><i class="layui-icon layui-col-md4 layui-col-md-offset4   layui-col-lg4 layui-col-lg-offset4   layui-col-sm4 layui-col-sm-offset4  layui-col-xs2 layui-col-xs-offset10  layui-icon-search tips-icon" myId="'+l+'" myNumber="'+s+'"></i></div></div></div>',i[s]=a[s][6];return layui.data("lightly",{key:l+"Answer",value:i}),e}function noSelectDom(a,l){switch(l){case"judgeContent":return judgeDom(a,l);case"fillContent":return fillDom(a,l);case"programContent":return programDom(a,l)}}function judgeDom(a,l){for(var e="",i=[],s=0;s<a.length;s++)e+='<div class="single-question" id="'+l+s+'"><div class="layui-row"><div class="layui-col-md8 layui-col-lg8  layui-col-sm8 layui-col-xs12"><div class="layui-row"><div class="layui-col-md1 layui-col-lg1 layui-col-sm1 layui-col-xs1 question-index">'+a[s][0]+'</div><div class="layui-col-md11 layui-col-lg11 layui-col-sm11 layui-col-xs11">'+a[s][1]+'</div></div><div class="layui-row answer-box"><div class="layui-col-md11 layui-col-lg11 layui-col-md-offset1 layui-col-lg-offset1 layui-col-sm11 layui-col-xs11 layui-col-sm-offset1 layui-col-xs-offset1"><input type="radio" name="judge" value="对" title="对" myId="'+l+'" myNumber="'+s+'" lay-filter="judgeResult"></div><div class="layui-col-md11 layui-col-lg11 layui-col-md-offset1 layui-col-lg-offset1 layui-col-sm11 layui-col-xs11 layui-col-sm-offset1 layui-col-xs-offset1"><input type="radio" name="judge" value="错" title="错" myId="'+l+'" myNumber="'+s+'" lay-filter="judgeResult"></div></div></div><div  class="layui-col-md4 layui-col-lg4 layui-col-sm4 layui-col-xs12 answer-button"><i class="layui-icon layui-col-md4 layui-col-md-offset4   layui-col-lg4 layui-col-lg-offset4 layui-col-sm4 layui-col-sm-offset4  layui-col-xs2 layui-col-xs-offset10 layui-icon-search tips-icon" myId="'+l+'" myNumber="'+s+'"></i></div></div></div>',i[s]=a[s][2];return layui.data("lightly",{key:l+"Answer",value:i}),e}function fillDom(a,l){for(var e="",i=[],s=0;s<a.length;s++)e+='<div class="single-question" id="'+l+s+'"><div class="layui-row"><div class="layui-col-md8 layui-col-lg8 layui-col-sm8 layui-col-xs12"><div class="layui-row"><div class="layui-col-md1 layui-col-lg1 layui-col-sm1 layui-col-xs1 question-index">'+a[s][0]+'</div><div class="layui-col-md11 layui-col-lg11 layui-col-sm11 layui-col-xs11">'+a[s][1]+'</div></div><div class="layui-row answer-box"><div class="layui-col-md10 layui-col-lg10 layui-col-md-offset1 layui-col-lg-offset1 layui-col-sm10 layui-col-xs10 layui-col-sm-offset1 layui-col-xs-offset1"><input type="text" name="fill" lay-verify="fill" autocomplete="off" placeholder="请输入答案" class="layui-input"></div></div></div><div  class="layui-col-md4 layui-col-lg4 layui-col-sm4 layui-col-xs12  answer-button"><i class="layui-icon layui-col-md4 layui-col-md-offset4   layui-col-lg4 layui-col-lg-offset4 layui-col-sm4 layui-col-sm-offset4  layui-col-xs2 layui-col-xs-offset10  layui-icon-search tips-icon" myId="'+l+'" myNumber="'+s+'"></i></div></div></div>',i[s]=a[s][2];return layui.data("lightly",{key:l+"Answer",value:i}),e}function programDom(a,l){for(var e="",i=[],s=0;s<a.length;s++)e+='<div class="single-question" id="'+l+s+'"><div class="layui-row"><div class="layui-col-md8 layui-col-lg8 layui-col-sm8 layui-col-xs12"><div class="layui-row"><div class="layui-col-md1 layui-col-lg1 layui-col-sm1 layui-col-xs1 question-index">'+a[s][0]+'</div><div class="layui-col-md11 layui-col-sm11 layui-col-xs11 layui-col-lg11">'+a[s][1]+'</div></div><div class="layui-row answer-box"><div class="layui-col-md10 layui-col-lg10 layui-col-md-offset1 layui-col-lg-offset1 layui-col-sm10 layui-col-xs10 layui-col-sm-offset1 layui-col-xs-offset1 layui-form-item layui-form-text program-box pane" ><label class="layui-form-label">程序框</label><div class="layui-input-block"><textarea name="program" placeholder="请输入内容" class="layui-textarea"></textarea></div></div></div></div><div  class="layui-col-md4 layui-col-lg4 layui-col-sm4 layui-col-xs12 answer-button"><i class="layui-icon layui-col-md4 layui-col-md-offset4 layui-col-lg4 layui-col-lg-offset4   layui-col-sm4 layui-col-sm-offset4  layui-col-xs2 layui-col-xs-offset10 layui-icon-search tips-icon" myId="'+l+'" myNumber="'+s+'"></i></div></div></div>',i[s]=a[s][2];return layui.data("lightly",{key:l+"Answer",value:i}),e}function packageClick(){$(".language-button").mouseenter(function(){var a=$(this);a.addClass("layui-anim-scale"),setTimeout(function(){a.removeClass("layui-anim-scale")},500)})}function goToQuestion(){$(".class-button").click(function(){var language=$(this).children("div").attr("language");$(".class-box").css("display","none"),$(".class-content").css("display","block");var loadClassData=layer.load(3),searchInfo="";switch(Number(language)){case 0:searchInfo=layui.data("lightly").language_0;break;case 1:searchInfo=layui.data("lightly").language_1;break;case 2:searchInfo=layui.data("lightly").language_2;break;case 3:searchInfo=layui.data("lightly").language_3;break;case 4:searchInfo=layui.data("lightly").language_4;break;case 5:searchInfo=layui.data("lightly").language_5;break;case 6:searchInfo=layui.data("lightly").language_6;break;case 7:searchInfo=layui.data("lightly").language_7;break;case 8:searchInfo=layui.data("lightly").language_8;break;case 9:searchInfo=layui.data("lightly").language_9;break;case 10:searchInfo=layui.data("lightly").language_10;break;case 11:searchInfo=layui.data("lightly").language_11}if(null==searchInfo)$.ajax({type:"GET",url:"/plugin/QuestionOperation/GetPackageQuestion.php",data:"type=0&language="+language,dataType:"json",success:function(data){data=eval(data),dataKey="language_"+language,layer.close(loadClassData),layui.data("lightly",{key:dataKey,value:data.data});var questionData=data.data;styleBuild(questionData)}});else{layer.close(loadClassData);var questionData=searchInfo;styleBuild(questionData)}$(".tips-icon").click(function(){var a=$(this).attr("myId"),l=$(this).attr("mynumber");switch(a){case"selectContent":var e=layui.data("lightly").selectContentAnswer[Number(l)];layer.msg("答案是"+e+"哦 !",{icon:1});break;case"judgeContent":e=layui.data("lightly").judgeContentAnswer[Number(l)];layer.msg("答案是"+e+"哦 !",{icon:1});break;case"fillContent":e=layui.data("lightly").fillContentAnswer[Number(l)];layer.msg("答案是"+e+"哦 !",{icon:1});break;case"programContent":e=layui.data("lightly").programContentAnswer[Number(l)];layer.open({type:1,title:"可在此处查看程序代码",area:["400px","260px"],shade:0,content:'<pre class="layui-code">'+e+"</pre>"})}}),form.on("radio(judgeResult)",function(a){var l=a.value,e=$(this).attr("myId"),i=$(this).attr("mynumber");if("selectContent"==e)var s=layui.data("lightly").selectContentAnswer[Number(i)];else s=layui.data("lightly").judgeContentAnswer[Number(i)];s==l?layer.msg("选对了哦,可以开始下一题了 !",{icon:1}):layer.msg("选错了,再看一下题目把 !",{icon:2})})})}function createLayim(ws,$,layim,layer,user,userStatus,showInputState){ws.onopen=function(){userInfo={infoType:1,user:""+user},ws.send(JSON.stringify(userInfo))},layim.config({title:"若轻一下",initSkin:"2.jpg",notice:!0,voice:"audio_1.mp3",init:{url:"/plugin/Chat/tools/GetUserInfo.php",type:"get",data:{user:""+user}},members:{url:"/plugin/Chat/tools/GetGroupInfo.php",data:{}},tool:[{alias:"code",title:"代码",icon:"&#xe64e;"}],msgbox:"/res/chat/tools/msgbox.html?v=2",find:"/res/chat/tools/find.html?v=1"}),layim.on("tool(code)",function(a,l,e){layer.prompt({title:"插入代码",formType:2,shade:0},function(e,i){layer.close(i),a("[pre class=layui-code]"+e+"[/pre]"),l()})}),layim.on("ready",function(options){userStatus=options.mine.status,$.ajax({type:"GET",url:"/plugin/Chat/tools/NewFriendsInfo.php",data:"type=0&user="+user,dataType:"json",success:function(res){var result=eval(res);if(1==Number(result.status)&&0!=Number(result.data)){var newMessageTips=$(".layim-tool-msgbox").find("span");newJoin=Number(result.data),newMessageTips.html(newJoin),newMessageTips.addClass("layui-anim-fadein layui-anim-loop"),newMessageTips.css("display","block")}}}),$(".layim-tool-msgbox").click(function(){$(".layim-tool-msgbox").find("span").css("display","none")})}),layim.on("online",function(a){userStatus!=a&&(userStatus=a,userStatusInfo={infoType:3,userStatus:""+a,user:""+user},ws.send(JSON.stringify(userStatusInfo)))}),layim.on("sign",function(a){$.ajax({type:"GET",url:"/plugin/Chat/tools/ChangeUserInfo.php",data:"user="+user+"&type=1&sign="+encodeURIComponent(a)})}),layim.on("chatChange",function(a){var l=a.data.type,e=a.data.id;"friend"===l&&(layim.setChatStatus('<span id="'+e+'InputStatus" style="color:#FF5722;display:none;">对方正在输入。。</span>'),$(".layim-chat-textarea textarea").bind("input propertychange",function(){$(this).val()?inputStatus=1:inputStatus=0,userInputInfo={infoType:4,inputStatus:inputStatus,to:""+e,from:""+user},ws.send(JSON.stringify(userInputInfo))}))}),layim.on("sendMessage",function(a){var l=a.mine,e=a.to;if("friend"==e.type||"group"==e.type){var i={infoType:2,to:""+e.id,from:""+l.id,message:""+l.content,username:""+l.username,avatar:""+l.avatar,type:""+e.type};ws.send(JSON.stringify(i))}}),ws.onmessage=function(res){var res=eval("("+res.data+")");switch(res.state){case 0:break;case 1:layim.on("ready",function(a){for(var l=0;l<res.data.length;l++)layim.getMessage(res.data[l])});break;case 2:layim.getMessage(res.data);break;case 3:"online"==res.data.type?type="online":type="offline",layim.setFriendStatus(res.data.id,type);break;case 4:var inputStatus=res.data.inputStatus,from=res.data.from;"1"==inputStatus?($("#"+from+"InputStatus").css("display","block"),showInputState&&(showInputState=!1,setTimeout(function(){$("#"+from+"InputStatus").css("display","none"),showInputState=!0},5e3))):$("#"+from+"InputStatus").css("display","none");break;case 5:case 6:case 7:newJoin++;var newMessageTips=$(".layim-tool-msgbox").find("span");newMessageTips.html(newJoin),newMessageTips.addClass("layui-anim-fadein layui-anim-loop"),newMessageTips.css("display","block");break;case 8:case 9:layim.addList(res.data);break;case 10:$(".layim-friend"+res.data.userTable).remove()}}}var $=layui.$,layer=layui.layer,laypage=layui.laypage,form=layui.form,user=layui.data("lightly").user;null==user&&(layer.msg("未登陆"),$(function(){setTimeout(function(){$(location).attr("href","/index.html")},300)}));var layim=layui.layim,initLayim=!0,userStatus="",showInputState=!0,isPC=!0,ajaxIndex=0;newJoin=0;var allPageLoad=layer.open({type:3,shade:[1,"#ffffff"]});"none"==$(".device-type").css("display")&&(isPC=!1),$(".head-image").attr("src",layui.data("lightly").userInfo.headImage),$(".nickname").html(layui.data("lightly").userInfo.nickname),$("#exit").click(function(){layer.open({type:1,title:"提示",offset:"auto",content:'<div style="padding: 20px 100px;">期待与你下次相遇!</div>',btn:"退出账户",btnAlign:"c",shade:0,yes:function(){layer.closeAll(),layui.data("lightly",null),$(location).attr("href","/index.html")}})}),$.ajax({type:"GET",url:"/plugin/LittleFunction/Search.php",data:"type=3&user="+user,dataType:"json",success:function(data){var result=eval(data);if(1==Number(result.status)){var nowCourse=result.data.nowCourse,learnedCourse=result.data.learnedCourse;if(0==Number(nowCourse.status)&&0==Number(learnedCourse.status)&&$(".class-box").append("暂无课程,请在卡包浏览挑选课程"),1==Number(nowCourse.status)){for(var dom="",domShow="",i=0;i<nowCourse.data.length;i++)dom+='<div class="learning-course">'+nowCourse.data[i].content+"</div>",domShow+='<div class="layui-col-md3 layui-col-lg3 layui-col-sm4 layui-col-xs6 class-button"><div class="layui-anim layui-bg-gray language-button" language="'+nowCourse.data[i].language+'">'+nowCourse.data[i].content+"</div></div>";$(".now-course").append(dom),$(".class-box").append(domShow)}else{var dom='<div class="learning-course">暂无课程</div>';$(".now-course").append(dom)}if(1==Number(learnedCourse.status)){for(var dom="",domShow="",i=0;i<learnedCourse.data.length;i++)dom+='<div class="learning-course">'+learnedCourse.data[i].content+"</div>",domShow+='<div class="layui-col-md3 layui-col-lg3 layui-col-sm4 layui-col-xs6 class-button"><div class="layui-anim layui-bg-gray language-button" language="'+learnedCourse.data[i].language+'">'+learnedCourse.data[i].content+"</div></div>";$(".learned-course").append(dom),$(".class-box").append(domShow)}else{var dom='<div class="learning-course">暂无课程</div>';$(".learned-course").append(dom)}$(".top-nav").css("display","block"),packageClick(),goToQuestion(),0==ajaxIndex?(layer.close(allPageLoad),$(".layui-container").css("display","block"),$(".phone-nav").css("display","block")):ajaxIndex++}}}),isPC&&(initLayim=!1,ws=new WebSocket("ws://lightly.52ch.top:8686"),createLayim(ws,$,layim,layer,user,userStatus,showInputState)),$(window).resize(function(){isPC="none"!=$(".device-type").css("display"),isPC&&initLayim?(initLayim=!1,ws=new WebSocket("ws://lightly.52ch.top:8686"),createLayim(ws,$,layim,layer,user,userStatus,showInputState)):isPC||initLayim||(initLayim=!0,ws.close(),$(".layui-layer").remove())})});