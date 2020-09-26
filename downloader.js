function get_page(page, callback) {
	return $.get('https://ac.nowcoder.com/acm/problem/list?', {
		keyword: '',
		tagId: 0,
		platformTagId: 0,
		sourceTagId: 0,
		difficulty: 0,
		status: 'all',
		order: 'id',
		asc: true,
		pageSize: 50,
		page: page,
	}, callback);
}

function get_problem(id, callback) {
	return $.get('https://ac.nowcoder.com/acm/problem/' + id, {}, callback);
}

function get_blog(id, callback) {
	return $.get('https://ac.nowcoder.com/acm/problem/blogs/' + id, {}, callback);
}

function get_submit_list(id, callback) {
	return $.get('https://ac.nowcoder.com/acm/problem/' + id + '/submit-list?languageFilter=-1&orderType=DESC&orderBy=submitTime&pageSize=200&page=1', {}, callback);
}

function get_blog_content(uuid, callback) {
	return $.get('https://ac.nowcoder.com/nccommon/blog/content?token=&uuid=' + uuid, {}, callback, 'text');
}

function get_submission(id, callback) {
	return $.get('https://ac.nowcoder.com/acm/contest/view-submission?submissionId=' + id, {}, callback);
}

function gen_filename(url) {
	url = url.replace(/https?:\/\//, '');
	if ('/' === url[url.length - 1])
		url = url.substring(0, url.length - 1);
	let name = url.match(/\/[^\/]+$/);
	if (!name)
		name = url;
	else
		name = name[0];
	if (name.length > 256)
		url = url.substring(0, url.length - name.length) + name.substring(0, 256);
	return url;
}

// let start = 1,
// 	end = 643;

// let pages = [];

// let index = start;

// function _loop() {
// 	if (index > end) {
// 		return console.log('All finished!');
// 	}
// 	get_page(index, function(data) {
// 		if (-1 === data.indexOf('data-problemId')) {
// 			return console.log('Error when index: ', index);
// 		}
// 		pages.push(data);
// 		++index;
// 		setTimeout(_loop, 1000);
// 	});
// }

// let problems = [];

// pages = JSON.parse(fs.readFileSync('/a/project/nowcoder_downloader/pages.json'));

// pages.forEach(function(e, i) {
// 	let ps = e.match(/<tr data-problemId((?!<\/tr>)[^])*<\/tr>/g);
// 	console.log(ps.length);
// 	ps.forEach(function(p, i) {
// 		let id = p.match(/<tr data-problemId="(\d+)">/);
// 		id = +id[1];
// 		let id_name = p.match(/target="_blank">(.+)<\/a>/);
// 		id_name = id_name[1];
// 		let title = p.match(/class="title">(((?!<\/a>)[^])+)<\/a>/);
// 		if (!title)
// 			console.log(p);
// 		title = title[1];
// 		let _tags = p.match(/class="tag-label js-tag" target="_blank" data-id="\d+"/g);
// 		let tags = [];
// 		if (_tags)
// 			_tags.forEach(function(t, i) {
// 				tags.push(+t.match(/data-id="(\d+)"/)[1]);
// 			});
// 		let difficulty = p.match(/<td>\n(\d+)星\n<\/td>/);
// 		difficulty = +difficulty[1];
// 		problems.push({
// 			id: id,
// 			id_name: id_name,
// 			title: title,
// 			tags: tags,
// 			difficulty: difficulty,
// 		});
// 	});
// });

// fs.writeFileSync('/a/project/nowcoder_downloader/problems.json', JSON.stringify(problems));

// problems = JSON.parse(fs.readFileSync('/a/project/nowcoder_downloader/problems.json'));


// start = 0,
// 	end = problems.length;

// problems_detail = [];

// index = start;

// function _loop() {
// 	if (index >= end) {
// 		return console.log('All finished!');
// 	}
// 	get_problem(problems[index].id, function(data) {
// 		if (-1 === data.indexOf('时间限制')) {
// 			return console.log('Error when index: ', index);
// 		}
// 		problems_detail.push(data);
// 		++index;
// 		setTimeout(_loop, 10);
// 	});
// }



// // fs.writeFileSync('/a/project/nowcoder_downloader/problems_detail.json', JSON.stringify(problems_detail));

// problems_detail = JSON.parse(fs.readFileSync('/a/project/nowcoder_downloader/problems_detail.json'));

// resource = new Set();

// problems_detail.forEach(function(e, i) {
// 	if (!e)
// 		return;
// 	let res = e.match(/src ?= ?["'][^'"]+["']/g);
// 	res.forEach(function(p, i) {
// 		let src = p.match(/src ?= ?["']([^'"]+)["']/)[1];
// 		resource.add(src);
// 	});
// 	res = e.match(/href ?= ?["'][^'"]+["']/g);
// 	res.forEach(function(p, i) {
// 		let src = p.match(/href ?= ?["']([^'"]+)["']/)[1];
// 		resource.add(src);
// 	});
// });

// // problems_detail=null;

// resource0 = [];

// resource.forEach(function(r, i) {
// 	if (r.match(/^\/acm\/contest\/profile\/\d+\/practice-coding\?search=\d+$/))
// 		return;
// 	if (r.match(/^\/acm\/problem\/\d+\/submit-list$/))
// 		return;
// 	if (r.match(/^\/acm\/problem\/blogs\/\d+$/))
// 		return;
// 	if (r.match(/^\/discuss\/tag\/\d+\?type=\d+$/))
// 		return;
// 	if (r.match(/^\/acm\/problem\/\d+\/submit-lis$/))
// 		return;
// 	resource0.push(r);
// });

// // resource=null;

// resource_uploadfiles = [];
// resource_equation = [];
// resource_file = [];
// resource_data = [];
// resource_https = [];
// resource_http = [];
// resource_remain = [];

// while (r = resource0.pop()) {
// 	if (0 === r.indexOf('https://uploadfiles.nowcoder.com')) {
// 		resource_uploadfiles.push(r);
// 	} else if (0 === r.indexOf('https://www.nowcoder.com/equation')) {
// 		resource_equation.push(r);
// 	} else if (0 === r.indexOf('file://')) {
// 		resource_file.push(r);
// 	} else if (0 === r.indexOf('data:')) {
// 		resource_data.push(r);
// 	} else if (0 === r.indexOf('https://')) {
// 		resource_https.push(r);
// 	} else if (0 === r.indexOf('http://')) {
// 		resource_http.push(r);
// 	} else {
// 		resource_remain.push(r);
// 	}
// }


// resource0 = resource_uploadfiles.concat(resource_equation).concat(resource_https).concat(resource_http);
// resource_uploadfiles = resource_equation = resource_file = resource_data = resource_https = resource_http = resource_remain = null;

// // fs.writeFileSync('/a/project/nowcoder_downloader/resource0.json', JSON.stringify(resource0));
// resource0_txt = '';
// resource0.forEach(function(r, i) {
// 	resource0_txt += r + '\n\tout=' + gen_filename(r) + '\n';
// });
// fs.writeFileSync('/a/project/nowcoder_downloader/resource0.txt', resource0_txt);



// problems = JSON.parse(fs.readFileSync('/a/project/nowcoder_downloader/problems.json'));

// start = 0,
// 	end = problems.length;

// blogs = [];

// index = start;

// function _loop() {
// 	if (index >= end) {
// 		return console.log('All finished!');
// 	}
// 	get_blog(problems[index].id, function(data) {
// 		if (-1 === data.indexOf('条解析')) {
// 			return console.log('Error when index: ', index);
// 		}
// 		blogs.push(data);
// 		++index;
// 		setTimeout(_loop, 10);
// 	});
// }

// // fs.writeFileSync('/a/project/nowcoder_downloader/blogs.json', JSON.stringify(blogs));

// blogs = JSON.parse(fs.readFileSync('/a/project/nowcoder_downloader/blogs.json'));

// // max = 0;
// // id = 0;
// // blogs.forEach(function(e, i) {
// // 	let n = +e.match(/(\d+)条解析/)[1];
// // 	if (n > max) {
// // 		max = n;
// // 		id = e;
// // 	}
// // });

// uuids = [];

// blogs.forEach(function(e, i) {
// 	let n = +e.match(/(\d+)条解析/)[1];
// 	if (!n)
// 		return;
// 	let uuid = e.match(/data-uuid=".{32}"/g);
// 	if (!uuid || n > 10 && 10 != uuid.length)
// 		console.log('Error: ', n, uuid);
// 	uuid.forEach(function(e, i) {
// 		let id = e.match(/data-uuid="(.{32})"/);
// 		uuids.push(id[1]);
// 	});
// });

// blogs = null;

// fs.writeFileSync('/a/project/nowcoder_downloader/uuids.json', JSON.stringify(uuids));

// uuids = JSON.parse(fs.readFileSync('/a/project/nowcoder_downloader/uuids.json'));

// start = 0,
// 	end = uuids.length;

// blog_content = [];

// index = start;

// function _loop() {
// 	if (index >= end) {
// 		return console.log('All finished!');
// 	}
// 	get_blog_content(uuids[index], function(data) {
// 		if ('OK' !== JSON.parse(data).msg) {
// 			return console.log('Error: ', uuids[index], data);
// 		}
// 		blog_content.push(data);
// 		++index;
// 		setTimeout(_loop, 10);
// 	});
// }

// // fs.writeFileSync('/a/project/nowcoder_downloader/blog_content.json', JSON.stringify(blog_content));

// blog_content = JSON.parse(fs.readFileSync('/a/project/nowcoder_downloader/blog_content.json'));

// resource = new Set();

// blog_content.forEach(function(e, i) {
// 	let data = JSON.parse(e);
// 	data = data.data.blogContent;
// 	e = data;
// 	let res = e.match(/src ?= ?["'][^'"]+["']/g);
// 	if (res)
// 		res.forEach(function(p, i) {
// 			let src = p.match(/src ?= ?["']([^'"]+)["']/)[1];
// 			resource.add(src);
// 		});
// 	res = e.match(/href ?= ?["'][^'"]+["']/g);
// 	if (res)
// 		res.forEach(function(p, i) {
// 			let src = p.match(/href ?= ?["']([^'"]+)["']/)[1];
// 			resource.add(src);
// 		});
// });

// resource0 = [];

// resource.forEach(function(r, i) {
// 	if (r.match(/^\/acm\/contest\/profile\/\d+\/practice-coding\?search=\d+$/))
// 		return;
// 	if (r.match(/^\/acm\/problem\/\d+\/submit-list$/))
// 		return;
// 	if (r.match(/^\/acm\/problem\/blogs\/\d+$/))
// 		return;
// 	if (r.match(/^\/discuss\/tag\/\d+\?type=\d+$/))
// 		return;
// 	if (r.match(/^\/acm\/problem\/\d+\/submit-lis$/))
// 		return;
// 	resource0.push(r);
// });

// fs.writeFileSync('/a/project/nowcoder_downloader/resource1_blog_content.json', JSON.stringify(resource0));


// resource1_blog_content = JSON.parse(fs.readFileSync('/a/project/nowcoder_downloader/resource1_blog_content.json'));
// resource0_txt = '';
// resource0.forEach(function(r, i) {
// 	resource0_txt += r + '\n\tout=' + gen_filename(r) + '\n';
// });
// fs.writeFileSync('/a/project/nowcoder_downloader/resource1_blog_content.txt', resource0_txt);



// problems = JSON.parse(fs.readFileSync('/a/project/nowcoder_downloader/problems.json'));

// start = 0,
// 	end = problems.length;

// submit_list = [];

// index = start;

// function _loop() {
// 	if (index >= end) {
// 		return console.log('All finished!');
// 	}
// 	get_submit_list(problems[index].id, function(data) {
// 		if (-1 === data.indexOf('次AC提交')) {
// 			return console.log('Error when index: ', index);
// 		}
// 		submit_list.push(data);
// 		++index;
// 		setTimeout(_loop, 10);
// 	});
// }

// // fs.writeFileSync('/a/project/nowcoder_downloader/submit_list.json', JSON.stringify(submit_list));

// submit_list = JSON.parse(fs.readFileSync('/a/project/nowcoder_downloader/submit_list.json'));

// submissionIds = [];
// error_submission = [];

// submit_list.forEach(function(e, i) {
// 	let submission = e.match(/href="\/acm\/contest\/view-submission\?submissionId=\d+"/g);
// 	if (submission)
// 		submission.forEach(function(e, i) {
// 			let id = e.match(/submissionId=(\d+)/);
// 			submissionIds.push(+id[1]);
// 		});
// 	else {
// 		let n = e.match(/(\d+)次AC提交/);
// 		if (!n)
// 			return error_submission.push(e);
// 		if (0 !== +n[1])
// 			error_submission.push(e);
// 	}
// });

// // fs.writeFileSync('/a/project/nowcoder_downloader/submissionIds.json', JSON.stringify(submissionIds));

submissionIds = JSON.parse(fs.readFileSync('/a/project/nowcoder_downloader/submissionIds.json'));

start = 0,
	end = submissionIds.length;

submissions = [];
_submissions = null;

index = start;

function _loop() {
	if (index >= end) {
		return console.log('All finished!');
	}
	get_submission(submissionIds[index], function(data) {
		if (-1 === data.indexOf('运行状态：')) {
			return console.log('Error when index: ', index);
		}
		if (-1 === data.indexOf('答案正确')) {
			return console.log('Error when index: ', index);
		}
		submissions.push(data);
		++index;
		if (0 === index % 1e4 || index >= end) {
			fs.writeFileSync('/a/project/nowcoder_downloader/submissions/submissions_' + start + '_' + index + '.json', JSON.stringify(submissions));
			_submissions = submissions;
			submissions = [];
			start = index;
		}
		setTimeout(_loop, 0);
	});
}

// temp=JSON.parse(fs.readFileSync('/a/project/nowcoder_downloader/submissions/submissions_10000_20000.json'));

$(document.body).prepend('<div id="progress"></div>');

setInterval(function() {
	progress.innerText = index;
}, 200);



