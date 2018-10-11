chrome.storage.sync.get(['suggest', 'stories', 'sponsored', 'recommend', 'popular', 'tips', 'people', 'games', 'businesses', 'right', 'filter', 'phrases'], function(obj) {
	obj = {
		'suggest': obj.suggest === false ? false : true,
		'stories': obj.stories === false ? false : true,
		'sponsored': obj.sponsored === false ? false : true,
		'recommend': obj.recommend === false ? false : true,
		'popular': obj.popular === false ? false : true,
		'tips': obj.tips === false ? false : true,
		'people': obj.people === false ? false : true,
		'games': obj.games === false ? false : true,
		'businesses': obj.businesses === false ? false : true,
		'right': obj.right === false ? false : true,
		'filter': obj.filter === false ? false : true,
		'phrases': obj.phrases,
	}
	chrome.storage.sync.set(obj);
	worker(obj);
});
chrome.storage.onChanged.addListener(function(object, string) {
	chrome.storage.sync.get(['suggest', 'stories', 'sponsored', 'recommend', 'popular', 'tips', 'people', 'games', 'businesses', 'right', 'filter', 'phrases'], function(obj) {
		worker(obj);
	});
});
// var accent_map = {'α':'a','ά':'a','Α':'a','Ά':'a','ẚ':'a','Á':'a','á':'a','À':'a','à':'a','Ă':'a','ă':'a','Ắ':'a','ắ':'a','Ằ':'a','ằ':'a','Ẵ':'a','ẵ':'a','Ẳ':'a','ẳ':'a','Â':'a','â':'a','Ấ':'a','ấ':'a','Ầ':'a','ầ':'a','Ẫ':'a','ẫ':'a','Ẩ':'a','ẩ':'a','Ǎ':'a','ǎ':'a','Å':'a','å':'a','Ǻ':'a','ǻ':'a','Ä':'a','ä':'a','Ǟ':'a','ǟ':'a','Ã':'a','ã':'a','Ȧ':'a','ȧ':'a','Ǡ':'a','ǡ':'a','Ą':'a','ą':'a','Ā':'a','ā':'a','Ả':'a','ả':'a','Ȁ':'a','ȁ':'a','Ȃ':'a','ȃ':'a','Ạ':'a','ạ':'a','Ặ':'a','ặ':'a','Ậ':'a','ậ':'a','Ḁ':'a','ḁ':'a','Ⱥ':'a','ⱥ':'a','Ǽ':'a','ǽ':'a','Ǣ':'a','ǣ':'a','Ḃ':'b','ḃ':'b','Ḅ':'b','ḅ':'b','Ḇ':'b','ḇ':'b','Ƀ':'b','ƀ':'b','ᵬ':'b','Ɓ':'b','ɓ':'b','Ƃ':'b','ƃ':'b','ψ':'c','Ψ':'c','Ć':'c','ć':'c','Ĉ':'c','ĉ':'c','Č':'c','č':'c','Ċ':'c','ċ':'c','Ç':'c','ç':'c','Ḉ':'c','ḉ':'c','Ȼ':'c','ȼ':'c','Ƈ':'c','ƈ':'c','ɕ':'c','δ':'d','Δ':'d','Ď':'d','ď':'d','Ḋ':'d','ḋ':'d','Ḑ':'d','ḑ':'d','Ḍ':'d','ḍ':'d','Ḓ':'d','ḓ':'d','Ḏ':'d','ḏ':'d','Đ':'d','đ':'d','ᵭ':'d','Ɖ':'d','ɖ':'d','Ɗ':'d','ɗ':'d','Ƌ':'d','ƌ':'d','ȡ':'d','ð':'d','ε':'e','έ':'e','Ε':'e','Έ':'e','É':'e','Ə':'e','Ǝ':'e','ǝ':'e','é':'e','È':'e','è':'e','Ĕ':'e','ĕ':'e','Ê':'e','ê':'e','Ế':'e','ế':'e','Ề':'e','ề':'e','Ễ':'e','ễ':'e','Ể':'e','ể':'e','Ě':'e','ě':'e','Ë':'e','ë':'e','Ẽ':'e','ẽ':'e','Ė':'e','ė':'e','Ȩ':'e','ȩ':'e','Ḝ':'e','ḝ':'e','Ę':'e','ę':'e','Ē':'e','ē':'e','Ḗ':'e','ḗ':'e','Ḕ':'e','ḕ':'e','Ẻ':'e','ẻ':'e','Ȅ':'e','ȅ':'e','Ȇ':'e','ȇ':'e','Ẹ':'e','ẹ':'e','Ệ':'e','ệ':'e','Ḙ':'e','ḙ':'e','Ḛ':'e','ḛ':'e','Ɇ':'e','ɇ':'e','ɚ':'e','ɝ':'e','φ':'f','Φ':'f','Ḟ':'f','ḟ':'f','ᵮ':'f','Ƒ':'f','ƒ':'f','γ':'g','Γ':'g','Ǵ':'g','ǵ':'g','Ğ':'g','ğ':'g','Ĝ':'g','ĝ':'g','Ǧ':'g','ǧ':'g','Ġ':'g','ġ':'g','Ģ':'g','ģ':'g','Ḡ':'g','ḡ':'g','Ǥ':'g','ǥ':'g','Ɠ':'g','ɠ':'g','χ':'x','Χ':'x','Ĥ':'h','ĥ':'h','Ȟ':'h','ȟ':'h','Ḧ':'h','ḧ':'h','Ḣ':'h','ḣ':'h','Ḩ':'h','ḩ':'h','Ḥ':'h','ḥ':'h','Ḫ':'h','ḫ':'h','H':'h','̱':'h','ẖ':'h','Ħ':'h','ħ':'h','Ⱨ':'h','ⱨ':'h','ι':'i','ί':'i','ϊ':'i','ΐ':'i','Ι':'i','Ί':'i','Ϊ':'i','η':'i','ή':'i','Η':'i','Ή':'i','Í':'i','í':'i','Ì':'i','ì':'i','Ĭ':'i','ĭ':'i','Î':'i','î':'i','Ǐ':'i','ǐ':'i','Ï':'i','ï':'i','Ḯ':'i','ḯ':'i','Ĩ':'i','ĩ':'i','İ':'i','i':'i','Į':'i','į':'i','Ī':'i','ī':'i','Ỉ':'i','ỉ':'i','Ȉ':'i','ȉ':'i','Ȋ':'i','ȋ':'i','Ị':'i','ị':'i','Ḭ':'i','ḭ':'i','I':'i','ı':'i','Ɨ':'i','ɨ':'i','Ĵ':'j','ĵ':'j','J':'j','̌':'j','ǰ':'j','ȷ':'j','Ɉ':'j','ɉ':'j','ʝ':'j','ɟ':'j','ʄ':'j','κ':'k','Κ':'k','Ḱ':'k','ḱ':'k','Ǩ':'k','ǩ':'k','Ķ':'k','ķ':'k','Ḳ':'k','ḳ':'k','Ḵ':'k','ḵ':'k','Ƙ':'k','ƙ':'k','Ⱪ':'k','ⱪ':'k','λ':'l','Λ':'l','Ĺ':'l','ĺ':'l','Ľ':'l','ľ':'l','Ļ':'l','ļ':'l','Ḷ':'l','ḷ':'l','Ḹ':'l','ḹ':'l','Ḽ':'l','ḽ':'l','Ḻ':'l','ḻ':'l','Ł':'l','ł':'l','Ł':'l','̣':'l','ł':'l','̣':'l','Ŀ':'l','ŀ':'l','Ƚ':'l','ƚ':'l','Ⱡ':'l','ⱡ':'l','Ɫ':'l','ɫ':'l','ɬ':'l','ɭ':'l','ȴ':'l','μ':'m','Μ':'m','Ḿ':'m','ḿ':'m','Ṁ':'m','ṁ':'m','Ṃ':'m','ṃ':'m','ɱ':'m','ν':'n','Ν':'n','Ń':'n','ń':'n','Ǹ':'n','ǹ':'n','Ň':'n','ň':'n','Ñ':'n','ñ':'n','Ṅ':'n','ṅ':'n','Ņ':'n','ņ':'n','Ṇ':'n','ṇ':'n','Ṋ':'n','ṋ':'n','Ṉ':'n','ṉ':'n','Ɲ':'n','ɲ':'n','Ƞ':'n','ƞ':'n','ɳ':'n','ȵ':'n','N':'n','̈':'n','n':'n','̈':'n','ω':'o','ώ':'o','Ω':'o','Ώ':'o','ο':'o','ό':'o','Ο':'o','Ό':'o','Ó':'o','ó':'o','Ò':'o','ò':'o','Ŏ':'o','ŏ':'o','Ô':'o','ô':'o','Ố':'o','ố':'o','Ồ':'o','ồ':'o','Ỗ':'o','ỗ':'o','Ổ':'o','ổ':'o','Ǒ':'o','ǒ':'o','Ö':'o','ö':'o','Ȫ':'o','ȫ':'o','Ő':'o','ő':'o','Õ':'o','õ':'o','Ṍ':'o','ṍ':'o','Ṏ':'o','ṏ':'o','Ȭ':'o','ȭ':'o','Ȯ':'o','ȯ':'o','Ȱ':'o','ȱ':'o','Ø':'o','ø':'o','Ǿ':'o','ǿ':'o','Ǫ':'o','ǫ':'o','Ǭ':'o','ǭ':'o','Ō':'o','ō':'o','Ṓ':'o','ṓ':'o','Ṑ':'o','ṑ':'o','Ỏ':'o','ỏ':'o','Ȍ':'o','ȍ':'o','Ȏ':'o','ȏ':'o','Ơ':'o','ơ':'o','Ớ':'o','ớ':'o','Ờ':'o','ờ':'o','Ỡ':'o','ỡ':'o','Ở':'o','ở':'o','Ợ':'o','ợ':'o','Ọ':'o','ọ':'o','Ộ':'o','ộ':'o','Ɵ':'o','ɵ':'o','π':'p','Π':'p','Ṕ':'p','ṕ':'p','Ṗ':'p','ṗ':'p','Ᵽ':'p','Ƥ':'p','ƥ':'p','P':'p','̃':'p','p':'p','ʠ':'q','Ɋ':'q','ɋ':'q','ρ':'r','Ρ':'r','Ŕ':'r','ŕ':'r','Ř':'r','ř':'r','Ṙ':'r','ṙ':'r','Ŗ':'r','ŗ':'r','Ȑ':'r','ȑ':'r','Ȓ':'r','ȓ':'r','Ṛ':'r','ṛ':'r','Ṝ':'r','ṝ':'r','Ṟ':'r','ṟ':'r','Ɍ':'r','ɍ':'r','ᵲ':'r','ɼ':'r','Ɽ':'r','ɽ':'r','ɾ':'r','ᵳ':'r','σ':'s','Σ':'s','ς':'s','ß':'s','Ś':'s','ś':'s','Ṥ':'s','ṥ':'s','Ŝ':'s','ŝ':'s','Š':'s','š':'s','Ṧ':'s','ṧ':'s','Ṡ':'s','ṡ':'s','ẛ':'s','Ş':'s','ş':'s','Ṣ':'s','ṣ':'s','Ṩ':'s','ṩ':'s','Ș':'s','ș':'s','ʂ':'s','S':'s','̩':'s','s':'s','τ':'t','Τ':'t','Þ':'t','þ':'t','Ť':'t','ť':'t','T':'t','̈':'t','ẗ':'t','Ṫ':'t','ṫ':'t','Ţ':'t','ţ':'t','Ṭ':'t','ṭ':'t','Ț':'t','ț':'t','Ṱ':'t','ṱ':'t','Ṯ':'t','ṯ':'t','Ŧ':'t','ŧ':'t','Ⱦ':'t','ⱦ':'t','ᵵ':'t','ƫ':'t','Ƭ':'t','ƭ':'t','Ʈ':'t','ʈ':'t','ȶ':'t','θ':'u','Θ':'u','Ú':'u','ú':'u','Ù':'u','ù':'u','Ŭ':'u','ŭ':'u','Û':'u','û':'u','Ǔ':'u','ǔ':'u','Ů':'u','ů':'u','Ü':'u','ü':'u','Ǘ':'u','ǘ':'u','Ǜ':'u','ǜ':'u','Ǚ':'u','ǚ':'u','Ǖ':'u','ǖ':'u','Ű':'u','ű':'u','Ũ':'u','ũ':'u','Ṹ':'u','ṹ':'u','Ų':'u','ų':'u','Ū':'u','ū':'u','Ṻ':'u','ṻ':'u','Ủ':'u','ủ':'u','Ȕ':'u','ȕ':'u','Ȗ':'u','ȗ':'u','Ư':'u','ư':'u','Ứ':'u','ứ':'u','Ừ':'u','ừ':'u','Ữ':'u','ữ':'u','Ử':'u','ử':'u','Ự':'u','ự':'u','Ụ':'u','ụ':'u','Ṳ':'u','ṳ':'u','Ṷ':'u','ṷ':'u','Ṵ':'u','ṵ':'u','Ʉ':'u','ʉ':'u','β':'v','Β':'v','Ṽ':'v','ṽ':'v','Ṿ':'v','ṿ':'v','Ʋ':'v','ʋ':'v','Ẃ':'w','ẃ':'w','Ẁ':'w','ẁ':'w','Ŵ':'w','ŵ':'w','W':'w','̊':'w','ẘ':'w','Ẅ':'w','ẅ':'w','Ẇ':'w','ẇ':'w','Ẉ':'w','ẉ':'w','ξ':'x','Ξ':'x','Ẍ':'x','ẍ':'x','Ẋ':'x','ẋ':'x','υ':'y','ύ':'y','ϋ':'y','ΰ':'y','Υ':'y','Ύ':'y','Ϋ':'y','Ý':'y','ý':'y','Ỳ':'y','ỳ':'y','Ŷ':'y','ŷ':'y','Y':'y','̊':'y','ẙ':'y','Ÿ':'y','ÿ':'y','Ỹ':'y','ỹ':'y','Ẏ':'y','ẏ':'y','Ȳ':'y','ȳ':'y','Ỷ':'y','ỷ':'y','Ỵ':'y','ỵ':'y','ʏ':'y','Ɏ':'y','ɏ':'y','Ƴ':'y','ƴ':'y','ζ':'z','Ζ':'z','Ź':'z','ź':'z','Ẑ':'z','ẑ':'z','Ž':'z','ž':'z','Ż':'z','ż':'z','Ẓ':'z','ẓ':'z','Ẕ':'z','ẕ':'z','Ƶ':'z','ƶ':'z','Ȥ':'z','ȥ':'z','ʐ':'z','ʑ':'z','Ⱬ':'z','ⱬ':'z','Ǯ':'z','ǯ':'z','ƺ':'z','２':'2','６':'6','Ｂ':'B','Ｆ':'F','Ｊ':'J','Ｎ':'N','Ｒ':'R','Ｖ':'V','Ｚ':'Z','ｂ':'b','ｆ':'f','ｊ':'j','ｎ':'n','ｒ':'r','ｖ':'v','ｚ':'z','１':'1','５':'5','９':'9','Ａ':'A','Ｅ':'E','Ｉ':'I','Ｍ':'M','Ｑ':'Q','Ｕ':'U','Ｙ':'Y','ａ':'a','ｅ':'e','ｉ':'i','ｍ':'m','ｑ':'q','ｕ':'u','ｙ':'y','０':'0','４':'4','８':'8','Ｄ':'D','Ｈ':'H','Ｌ':'L','Ｐ':'P','Ｔ':'T','Ｘ':'X','ｄ':'d','ｈ':'h','ｌ':'l','ｐ':'p','ｔ':'t','ｘ':'x','３':'3','７':'7','Ｃ':'C','Ｇ':'G','Ｋ':'K','Ｏ':'O','Ｓ':'S','Ｗ':'W','ｃ':'c','ｇ':'g','ｋ':'k','ｏ':'o','ｓ':'s','ｗ':'w'};
// var accentMap = {'á':'a','é':'e','í':'i','ó':'o','ú':'u'};
// function accentFold (string) {
	// if (!string) {
		// return '';
	// }
    // var res = '';
    // for (var i = 0; i < string.length; i++) {
		// res += accent_map[string.charAt(i)] || string.charAt(i);
    // }
    // return res;
// }
function sizeof(sizeable) {
	var objects = [sizeable];
	var size = 0;
	for (var index = 0; index < objects.length; index++){
		switch (typeof objects[index]){
			case 'boolean': size += 4; break;
			case 'number': size += 8; break;
			case 'string': size += 2 * objects[index].length; break;
			case 'object':
				if (Object.prototype.toString.call(objects[index]) != '[object Array]'){
					for (var key in objects[index]) size += 2 * key.length;
				}
				for (var key in objects[index]){
					var processed = false;
					for (var search = 0; search < objects.length; search ++){
						if (objects[search] === objects[index][key]){
							processed = true;
							break;
						}
					}
					if (!processed) objects.push(objects[index][key]);
				}
		}
	}
	return size;
}
// function containsWord(post, word, index, first) {
	// var tempi;
	// tword = word.replace(/%/g, '');
	// tempi = post.indexOf(tword, index.index);
	// if (tempi < 0) {
		// index.index = tempi;
		// return false;
	// }
	// if (word[0] == '%' && word[word.length - 1] == '%' ) {
		// if (!first && post.indexOf('-', index.index) < tempi) {
			// index.index = tempi + 1;
			// return false;
		// }
		// index.index = post.indexOf('-', tempi) + 1;
		// return true;
	// } else if (word[0] == '%') {
		// word = word.replace(/%/g, '');
		// var progDash = tempi + word.length;
		// var nextDash = post.indexOf('-', progDash);
		// if (!first && post.indexOf('-', index.index) < tempi
		// || nextDash >= 0 && nextDash != progDash
		// || nextDash < 0 && post.length > progDash) {
			// index.index = tempi + 1;
			// return false;
		// }
		// index.index = progDash + 1;
		// return true;
	// } else if (word[word.length - 1] == '%') {
		// word = word.replace(/%/g, '');
		// if (!first && index.index != tempi || first && tempi > 0 && post[tempi - 1] != '-') {
			// index.index = tempi + 1;
			// return false;
		// }
		// index.index = post.indexOf('-', tempi) + 1;
		// return true;
	// } else {
		// var progDash = tempi + word.length;
		// var nextDash = post.indexOf('-', progDash);
		// if (!first && index.index != tempi || first && tempi > 0 && post[tempi - 1] != '-'
		// || nextDash >= 0 && nextDash != progDash
		// || nextDash < 0 && post.length > progDash) {
			// index.index = tempi + 1;
			// return false;
		// }
		// index.index = progDash + 1;
		// return true;
	// }
// }
// function filterPosts(posts, parentId, phrases, filter, children = []) {
	// for (var i = 0; i < posts.length; i++) {
		// var post = children.length ? '' : posts.eq(i).html();
		// for (j = 0; j < children.length; j++) {
			// var temp = posts.eq(i).find(children[j]).last().html();
			// post += temp ? temp : '';
		// }
		// post = post.replace(/<[ ]*\//g, ' </');
		// post = accentFold($(post).text()).trim().toLowerCase().replace(/[^0-9a-z]+/g, "-");
		// var index = {index: 0}, flag, firstIndex;
		// for (var j = 0; j < phrases.length; j++) {
			// for (var k = 0; k < phrases[j].length; k++) {
				// firstIndex = 0;
				// for (var l = 0; l < phrases[j][k].length; l++) {
					// if (l == 0) {
						// index.index = firstIndex;
					// }
					// flag = !containsWord(post, phrases[j][k][l], index, !l);
					// if (l == 0) {
						// firstIndex = index.index + 1;
					// }
					// if (flag && l == 0 && index.index < 0) {
						// break;
					// } else if (flag) {
						// l = -1;
						// continue;
					// }
				// }
				// if (flag) {
					// break;
				// }
			// }
			// if (k == phrases[j].length) {
				// break;
			// }
		// }
		// if (j < phrases.length) {
			// post = parentId ? posts.eq(i).parents(parentId) : posts.eq(i);
			// if (filter) {
				// post.hide();
			// } else {
				// post.show();
			// }
		// }
	// }
// }
function worker(object) {
	var working = false;
	var time = 0;
	// var games = true;
	$('body').unbind();
	$('body').bind('DOMSubtreeModified', remover);
	// object.phrases = accentFold(object.phrases).split(/\n/);
	// for (var i = 0; i < object.phrases.length; i++) {
		// object.phrases[i] = object.phrases[i].split(/ /);
		// for (var j = 0; j < object.phrases[i].length; j++) {
			// object.phrases[i][j] = object.phrases[i][j].split(/-/);
		// }
	// }
	function remover() {
		if (time + 250 > (new Date()).getTime() || working) {
			return;
		}
		working = true;
		var time = (new Date()).getTime();
		if (!object.suggest) {
			$('span._m8d, span.e_1of8rmqyaw').parents('._5jmm, ._5pat, ._3lb4').show();
		}
		if (!object.stories) {
			$('div.fwb._d_q').parents('._5jmm, ._5pat, ._3lb4').show();
		}
		if (!object.people) {
			$('.fwb.fcb').parents('._5jmm, ._5pat, ._3lb4').show();
		}
		if (!object.sponsored) {
			$('span.s_1of8rmutnb.p_1of8rmowj9.e_1of8rmwjbs').parents('._5jmm, ._5pat, ._3lb4').show();
		}
		// if (!object.recommend) {
			// $('span._5g-l').parents('._5jmm, ._5pat, ._3lb4').show();
		// }
		// if (!object.popular) {
			// $('div._5_xt').parents('._5jmm, ._5pat, ._3lb4').show();
		// }
		// if (!object.tips) {
			// $('._46-h._4nr2').parents('._5jmm, ._5pat, ._3lb4').show();
		// }
		// if (!object.businesses) {
			// $('._4kqp._55ob').parent().show();
		// }
		if (object.right) {
			$('#rightCol').hide();
			$('#globalContainer').attr('style', 'width:auto!important;max-width:1217px;padding-right:0;');
			$('#contentArea').attr('style', 'position:static;margin:auto!important;float:none;');
			$('#mainContainer').css('text-align', 'center');
			$('#leftCol').attr('style', 'position:absolute!important;margin-top:-12px;text-align:left;');
			$('#contentCol').attr('style', 'width:auto!important;float:none;display:inline-block;text-align:left;');
			document.querySelector('style').textContent = '@media screen and (max-width:1250px){#leftCol{margin-left:5px!important;}}';
			document.querySelector('style').textContent += '@media screen and (max-width:890px){#contentCol{margin-left:192px!important;float:left!important;}}';
			document.querySelector('style').textContent += '@media screen and (max-width:710px){#contentCol{margin-left:0px!important;float:left!important;margin-top:' + $('#leftCol > div').height() + 'px!important;}}';
		} else {
			$('#rightCol').show();
			$('#globalContainer, #contentArea, #contentCol, #mainContainer').removeAttr('style');
			$('#leftCol').attr('style', 'margin-top:-12px;');
			document.querySelector('style').textContent = '';
		}
		// if (games && $('#pagelet_canvas_nav_content').length && $('#apps_gripper').length) {
			// if (object.games) {
				// if ($('._4oes').length) {
					// $('._4oes').after($('._4oes').children()).remove();
				// }
				// $('#pagelet_canvas_nav_content, #apps_gripper, ._4kqp, .noGrip > .fbChatOrderedList > div > div:nth-child(4) > *:not(:nth-child(4))').hide();
				// $('.fbChatSidebarBody').css('height', 'auto');
			// } else {
				// $('#pagelet_canvas_nav_content, #apps_gripper, ._4kqp, .noGrip > .fbChatOrderedList > div > div:nth-child(4) > *:not(:nth-child(4))').show();
			// }
			// games = false;
		// }
		/*var phrases = object.phrases;
		if (phrases[0][0][0]) {
			var posts = $('._1dwg._1w_m._q7o');
			posts = jQuery.grep(posts, function(post) {
			  return $(post).parents('._5v3q._5v9_._5va1').length == 0;
			});
			// Normal posts with user content and his link content
			filterPosts($(posts), '._5jmm._5pat._3lb4', phrases, object.filter, ['._5x46._1yz1', '._5pbx.userContent._3576', '._3x-2']);
			// Normal comments under normal posts
			filterPosts($('.UFICommentContent'), '.UFIRow.UFIComment', phrases, object.filter);
			// Posts of birthday
			filterPosts($('._5v3q._5v9_._5va1'), '', phrases, object.filter);
		}*/
		if (object.suggest) {
			$('span._m8d, span.e_1of8rmqyaw').parents('._5jmm, ._5pat, ._3lb4').hide();
		}
		if (object.stories) {
			$('div.fwb._d_q').parents('._5jmm, ._5pat, ._3lb4').hide();
		}
		if (object.people) {
			$('.fwb.fcb').parents('._5jmm, ._5pat, ._3lb4').hide();
		}
		if (object.sponsored) {
			$('span.s_1of8rmutnb.p_1of8rmowj9.e_1of8rmwjbs').parents('._5jmm, ._5pat, ._3lb4').hide();
		}
		// if (object.recommend) {
			// $('span._5g-l').parents('._5jmm, ._5pat, ._3lb4').hide();
		// }
		// if (object.popular) {
			// $('div._5_xt').parents('._5jmm, ._5pat, ._3lb4').hide();
		// }
		// if (object.tips) {
			// $('._46-h._4nr2').parents('._5jmm, ._5pat, ._3lb4').hide();
		// }
		// if (object.businesses) {
			// $('._4kqp._55ob').parent().hide();
		// }
		working = false;
	}
	// window.onload = remover();
	$(document).ready(remover);
}