// autoHeightTextarea();
chrome.storage.sync.get(['suggest', 'stories', 'sponsored', 'recommend', 'popular', 'tips', 'people', 'games', 'businesses', 'right', 'filter', 'phrases'], function(obj) {
	obj = {
		'suggest': obj.suggest === false ? false : true,
		'stories': obj.stories === false ? false : true,
		'sponsored': obj.sponsored === false ? false : true,
		'recommend': false, // obj.recommend === false ? false : true,
		'popular': false, // obj.popular === false ? false : true,
		'tips': false, // obj.tips === false ? false : true,
		'people': obj.people === false ? false : true,
		'games': false, // obj.games === false ? false : true,
		'businesses': false, // obj.businesses === false ? false : true,
		'right': obj.right === false ? false : true,
		'filter': false, // obj.filter === false ? false : true,
		'phrases': false, // obj.phrases,
	}
	document.getElementById('suggest').checked = obj.suggest;
	document.getElementById('stories').checked = obj.stories;
	document.getElementById('sponsored').checked = obj.sponsored;
	// document.getElementById('recommend').checked = obj.recommend;
	// document.getElementById('popular').checked = obj.popular;
	// document.getElementById('tips').checked = obj.tips;
	document.getElementById('people').checked = obj.people;
	// document.getElementById('games').checked = obj.games;
	// document.getElementById('businesses').checked = obj.businesses;
	document.getElementById('right').checked = obj.right;
	// document.getElementById('filter').checked = obj.filter;
	// var filters = obj.phrases.split(/\r?\n/);
	// for (var i = 0; i < filters.length; i++) {
		// $('#filters').append($('<div class="filter"><span title="Edit filter">' + filters[i] + '</span><div class="delete-filter" title="Delete filter"></div></div>'));
	// }
});
$('input').change(function() {
	var suggest = document.getElementById('suggest').checked;
	var stories = document.getElementById('stories').checked;
	var sponsored = document.getElementById('sponsored').checked;
	var recommend = false; // document.getElementById('recommend').checked;
	var popular = false; //  document.getElementById('popular').checked;
	var tips = false; // document.getElementById('tips').checked;
	var people = document.getElementById('people').checked;
	var games = false; // document.getElementById('games').checked;
	var businesses = false; // document.getElementById('businesses').checked;
	var right = document.getElementById('right').checked;
	var filter = false; // document.getElementById('filter').checked;
	chrome.storage.sync.set({
		'suggest': suggest,
		'stories': stories,
		'sponsored': sponsored,
		'recommend': recommend,
		'popular': popular,
		'tips': tips,
		'people': people,
		'games': games,
		'businesses': businesses,
		'right': right,
		'filter': filter,
	});
});

// function autoHeightTextarea() {
	// var textfield = document.getElementById('edit-filter');
	// textfield.style.height = "5px";
	// textfield.style.height = textfield.scrollHeight + 5 + "px";
	// $('#add-filter').css('bottom', parseInt(textfield.style.height) / 2 - 8 + "px");
// }

// Add/update filter
// $('#add-filter').click(function() {
	// chrome.storage.sync.set({'filter':false});
	// var phrase = $('#edit-filter').val();
	// while (phrase.match(/[ -]%?$/)) {
		// phrase = phrase.slice(0, phrase.length - 1);
	// }
	// if (phrase == '') {
		// if ($(this).hasClass('update-filter')) {
			// $('.editing').parent().remove();
		// } else {
			// return;
		// }
	// } else {
		// if ($(this).hasClass('update-filter')) {
			// $('.editing').parent().find('span').text(phrase);
			// $('.editing').remove();
			// $(this).removeClass('update-filter');
		// } else {
			// $('#filters').append($('<div class="filter"><span title="Edit filter">' + phrase + '</span><div class="delete-filter" title="Delete filter"></div></div>'));
		// }
	// }
	// var phrases = [];
	// $('.filter').each(function() {
		// phrases.push($(this).text());
	// });
	// phrases = phrases.join('\n');
	// $('#edit-filter').val('');
	// setTimeout(function() {
		// chrome.storage.sync.set({
			// 'phrases': phrases,
			// 'filter': document.getElementById('filter').checked,
		// });
	// }, 100);
// });

// On filter input
// $('#edit-filter').on('input', function(e) {
	// var phrase = $(this).val().replace(/[^-%0-9a-zA-Z\u0080-\u00FF\u0100-\u017F\u0180-\u024F\u0370-\u03FF\u0400-\u04FF\u0500-\u052F\u0530-\u058F\u0590-\u05FF\u0600-\u06FF\u0700-\u074F\u0750-\u077F\u1F00-\u1FFF\u2C60-\u2C7F\u3040-\u309F\u30A0-\u30FF]/g, " ").toLowerCase();
	// var cursor = this.selectionEnd;
	// for (var i = 0; i < phrase.length; i++) {
		// var flag = false;
		// if (i > 0 && [' ', '-'].indexOf(phrase[i - 1]) >= 0 && [' ', '-'].indexOf(phrase[i]) >= 0 || phrase[i - 1] == '%' && phrase[i] == '%') {
			// flag = true;
			// phrase = phrase.slice(0, i - 1) + phrase.slice(i);
		// } else if (i > 1 && phrase[i - 1] == '%' && ([' ', '-'].indexOf(phrase[i]) >= 0 && [' ', '-'].indexOf(phrase[i - 2]) >= 0 || [' ', '-'].indexOf(phrase[i - 2]) < 0 && [' ', '-'].indexOf(phrase[i]) < 0)) {
			// flag = true;
			// phrase = phrase.slice(0, i) + phrase.slice(i + 1);
		// } else if (i == 0 && [' ', '-'].indexOf(phrase[i]) >= 0) {
			// flag = true;
			// phrase = phrase.slice(1);
		// } else if (i == 1 && phrase[0] == '%' && [' ', '-'].indexOf(phrase[1]) >= 0) {
			// flag = true;
			// phrase = phrase.slice(0, 1) + phrase.slice(5);
		// }
		// if (flag) {
			// if (cursor > i) {
				// cursor--;
			// }
			// i--;
			// continue;
		// }
	// }
	// $(this).val(phrase);
	// this.selectionStart = this.selectionEnd = cursor;
	// autoHeightTextarea();
// }).keydown(function(e) {
	// if (e.which == 13 || e.which == 10) {
		// $('#add-filter').click();
	// }
// });

// Edit filter
// $(document).on('click', '.filter > span', function() {
	// $('.editing').remove();
	// var editing = $('<div class="editing">Cancel</div>');
	// $(this).after(editing);
	// editing.css({'opacity': 1, 'line-height': editing.height() + 'px'});
	// $('#edit-filter').val($(this).text());
	// $('#add-filter').addClass('update-filter');
	// autoHeightTextarea();
// });

// Cancel edit
// $(document).on('click', '.editing', function() {
	// $(this).remove();
	// $('#edit-filter').val('');
	// $('#add-filter').removeClass('update-filter');
	// autoHeightTextarea();
// });

// Delete filter
// $(document).on('click', '.delete-filter', function() {
	// $(this).parent().remove();
	// chrome.storage.sync.set({'filter':false});
	// var phrases = [];
	// $('.filter').each(function() {
		// phrases.push($(this).text());
	// });
	// phrases = phrases.length > 0 ? phrases.join('\n') : null;
	// setTimeout(function() {
		// chrome.storage.sync.set({
			// 'phrases': phrases,
			// 'filter': document.getElementById('filter').checked,
		// });
	// }, 100);
// });