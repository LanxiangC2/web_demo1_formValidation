// 匿名函数自执行
(function () {

// 需要验证的内容第一行userName 二password 三confirm 四name 
// 六idNumber 七email 八phoneNumber

// 先获取元素
	// 获取二级菜单
	var menu_title = document.querySelector('.menu-title')
	var menu_item = document.querySelector('.menu-item')
	// console.log(menu_item+'<br>'+menu_title)

	var inputs = document.getElementsByTagName('input')
	// console.log(inputs)
	var alertInfos = document.querySelectorAll('.alertMessage')
	// console.log(alertInfos)
	// 密码验证方框
	var safety_level_lis = document.querySelector('#div_safety').querySelectorAll('li')
	// console.log(safety_level_lis)
	var tr = document.querySelector('#custom')

	// 获取姓名规则的a连接
	var a = document.querySelector('#nameRule')
	// 获取dialog
	var dialog = document.querySelector('.dialog')

	// checkbox为inputs[7], button为inputs[8]
	var checkbox = inputs[7]
	var button = inputs[8]




	// 定义正则表达式
	var reg = [
			/^[a-zA-Z]\w{5,29}$/,
			/^[\w|~|`|!|?|@|#|$|%|^|&|*|(|)|_|-|+|=|{|}|\[|\]|\.|,|\/|>|<]{6,20}$/,
			/^[\w|~|`|!|?|@|#|$|%|^|&|*|(|)|_|-|+|=|{|}|\[|\]|\.|,|\/|>|<]{6,20}$/,
			/^[\u4e00-\u9fa5a-zA-Z]{3,30}$/,
			/^\d{17}[\dx]$/,
			/^[\w-]+@[\w-]+\.[\w-]+$/, //邮箱
			/^1[^12]\d{9}$/ // 手机
	]
	// 定义测试验证结果
	var result = [
			false,
			false,
			false,
			false,
			false,
			false,
			false
	]
	// 给imooc二级菜单绑定事件
	menu_title.onmousemove = function() {
		menu_item.style.display = 'block'
	}
	menu_title.onmouseout = function() {
		menu_item.style.display = 'none'
	}
	menu_item.onmouseover = function() {
		menu_item.style.display = 'block'
	}
	menu_item.onmouseout = function() {
		menu_item.style.display = 'none'
	}
	// 循环绑定input事件
	for (var i = 0, len = inputs.length; i < len; i++) {
		// 这里我们index值来传递是哪一个输入框的验证
		(function (i) {
			// 因为有两个input是按钮和单选框所以i<7就好了
			if (i < 7) {
				// 进入输入框时提示信息
				inputs[i].onfocus = function () {
					// console.log(this.name)
					alertM(i)
				}
				// 失去焦点时显示正确或者错误信息
				inputs[i].onblur = function () {
					// 先判断输入值是否为空
					if (this.value == '') {
						// 提示不能为空
						alertBlankM(i)
					} else {
						if (reg[i].test(this.value)) {
						sucM(i)
						} else {
							errorM(i)
						}
					}				
				}		
			}
		})(i)
	}
	// 给名字规则s区域标签添加事件
	a.onmousemove = function () {
		dialog.style.display = 'block'
	}
	a.onmouseout = function () {
		dialog.style.display = 'none'
	}


// 定义一些函数
function alertBlankM (i) {
	switch (i) {
		case 0:
			alertInfos[0].innerHTML = '用户名不能为空';
			alertInfos[0].style.color = 'red';
			return;
		case 1: 
			alertInfos[1].innerHTML = '密码不能为空';
			alertInfos[1].style.color = 'red';
			tr.style.display = 'table-row';
			return;
		case 2: 
			alertInfos[2].innerHTML = '确认密码不能为空';
			alertInfos[2].style.color = 'red';
			return;
		case 3: 
			alertInfos[3].innerHTML = '真实姓名不能为空';
			alertInfos[3].style.color = 'red';
			return;
		case 4: 
			alertInfos[4].innerHTML = '证件号码不能为空';
			alertInfos[4].style.color = 'red';
			return;
		case 5: 
			alertInfos[5].innerHTML = '邮箱不能为空';
			alertInfos[5].style.color = 'red';
			return;
		case 6: 
			alertInfos[6].innerHTML = '号码不能为空';
			alertInfos[6].style.color = 'red';
			return;
	}
}
function alertM (i) {
	switch (i) {
		case 0:
			alertInfos[0].innerHTML = '请输入正确格式的用户名';
			alertInfos[0].style.color = 'red';
			return;
		case 1: 
			alertInfos[1].innerHTML = '请输入正确格式的密码';
			alertInfos[1].style.color = 'red';
			tr.style.display = 'table-row';
			return;
		case 2: 
			alertInfos[2].innerHTML = '请再次输入密码';
			alertInfos[2].style.color = 'red';
			return;
		case 3: 
			alertInfos[3].innerHTML = '请输入真实姓名';
			alertInfos[3].style.color = 'red';
			return;
		case 4: 
			alertInfos[4].innerHTML = '请输入证件号码';
			alertInfos[4].style.color = 'red';
			return;
		case 5: 
			alertInfos[5].innerHTML = '请输入正确格式的邮箱';
			alertInfos[5].style.color = 'red';
			return;
		case 6: 
			alertInfos[6].innerHTML = '请输入正确格式的手机号码';
			alertInfos[6].style.color = 'red';
			return;
	}
}
function errorM (i) {
	switch (i) {
		case 0:
			alertInfos[0].innerHTML = "6-30位字母、数字或者'_', 字母开头";
			alertInfos[0].style.color = 'red';
			break;
		case 1:
			alertInfos[1].innerHTML = "6-20位字母、数字或者符号";
			alertInfos[1].style.color = 'red';
			break;
		case 2:
			alertInfos[2].innerHTML = "6-20位字母、数字或者符号";
			alertInfos[2].style.color = 'red';
			break;
		case 3:
			alertInfos[3].innerHTML = "姓名只能包含中文或者英文,且字符在3-30个之间";
			alertInfos[3].style.color = 'red';
			break;
		case 4:
			alertInfos[4].innerHTML = "请输入18位身份证号码";
			alertInfos[4].style.color = 'red';
			break;
		case 5:
			alertInfos[5].innerHTML = "请输入正确的邮箱";
			alertInfos[5].style.color = 'red';
			break;
		case 6:
			alertInfos[6].innerHTML = "您输入的手机号码不是有效的格式！";
			alertInfos[6].style.color = 'red';
			break;
	}
}
function sucM (i) {
	switch (i) {
		case 0:
			alertInfos[0].innerHTML = "用户名输入正确";
			alertInfos[0].style.color = 'green';
			result[0] = true;
			break;
		case 1:
			safety_level();
			if (inputs[2].value !== ''){
				confirmPass()
			};
			alertInfos[1].innerHTML = "密码输入正确";
			alertInfos[1].style.color = 'green';
			result[1] = true;
			break;
		case 2:
			confirmPass();
			break;
		case 3:
			alertInfos[3].innerHTML = "姓名输入正确";
			alertInfos[3].style.color = 'green';
			result[3] = true;
			break;
		case 4:
			alertInfos[4].innerHTML = "号码输入正确";
			alertInfos[4].style.color = 'green';
			result[4] = true;
			break;
		case 5:
			alertInfos[5].innerHTML = "邮箱格式正确";
			alertInfos[5].style.color = 'green';
			result[5] = true;
			break;
		case 6:
			alertInfos[6].innerHTML = "手机格式正确";
			alertInfos[6].style.color = 'green';
			result[6] = true;
			break;
	}
}

// 判断安全等级
function safety_level () {
	var reg1 = /\d+|[a-zA-Z]+|[^a-zA-Z0-9]+/
	var reg2 = /\d+[a-zA-Z]+|[a-zA-Z]+\d+|[a-zA-Z]+[^a-zA-Z0-9]+|[^a-zA-Z0-9]+[a-zA-Z]+|\d+[^a-zA-Z0-9]+|[^a-zA-Z0-9]+\d+/
	var reg3 = /[^a-zA-Z0-9]+[a-zA-Z]+\d+|[a-zA-Z]+[^a-zA-Z0-9]+\d+|[a-zA-Z]+\d+[^a-zA-Z0-9]+|[^a-zA-Z0-9]+\d+[a-zA-Z]+|\d+[^a-zA-Z0-9]+[a-zA-Z]+|\d+[a-zA-Z]+[^a-zA-Z0-9]+/
	// var reg3 = /[^a-zA-Z0-9]+[a-zA-Z]+\d+|[a-zA-Z]+[^a-zA-Z0-9]+\d+/
	if (reg1.test(inputs[1].value)) {
		safety_level_lis[0].style.background = 'red'
		safety_level_lis[1].style.background = '#e0e0e0'
		safety_level_lis[2].style.background = '#e0e0e0'

	}
	if (reg2.test(inputs[1].value)) {
		safety_level_lis[0].style.background = 'red'
		safety_level_lis[1].style.background = 'orange'
		safety_level_lis[2].style.background = '#e0e0e0'
	}
	if (reg3.test(inputs[1].value)) {
		safety_level_lis[0].style.background = 'red'
		safety_level_lis[1].style.background = 'orange'
		safety_level_lis[2].style.background = 'green'
	}
}


// 比较两次的密码
function confirmPass (argument) {
	// body... 
	if (inputs[2].value == inputs[1].value) {
		alertInfos[2].innerHTML = "两次输入一致";
		alertInfos[2].style.color = 'green';
		result[2] = true
	} else {
		alertInfos[2].innerHTML = "两次输入不一致，请重新输入";
		alertInfos[2].style.color = 'red';
		result[2] = false
	};
}

button.onclick = function() {
	console.log(result)
	if (checkbox.checked) {
		var route = true
		for (var i = 0 , len = result.length; i < len; i++){
			if (i !== 5 && result[i] == false) {
				route = false 
				alert('请完善您的数据');
				break;
			}
		}
		console.log('本次循环结束')
		if (route === true) {
			// 所有验证成功，转跳至慕课网首页
			alert('验证成功,点击进入慕课首页！')
			window.location.href = "http://www.imooc.com"
		}
	} else {
		alert('请阅读并同意	《中国铁路客户服务中心网站服务条款》')
	}
}

button.onmouseover = function () {
	this.style.background = '#EEB422'
}
button.onmouseout = function () {
	this.style.background = 'rgb(251, 116, 3)'
}




})()