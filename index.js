const util = require('hexo-util');
const request = require('request-promise');
const cdn = 'https://cdn.mayuko.cn/css/hexo-tag-mtime.css';
const css = (hexo.config.mtime && hexo.config.mtime.css) ? hexo.config.mtime.css : cdn;

hexo.extend.tag.register('mtime', function (args) {
    var id = args[0];
    return result = getMoiveInfo(id).then(res => {
        if (!res) {
            return;
        }
        var mtimeHeader = util.htmlTag('div', {
            class: 'mtime-movie_header'
        }, util.htmlTag('img', {
            src: res.img,
            class: 'mtime-locandina'
        }) + util.htmlTag('h1', {}, res.name) + util.htmlTag('h4', {}, res.year + '，' + res.director) + util.htmlTag('div', {}, util.htmlTag('span', {
            class: 'mtime-minutes'
        }, res.mins) + util.htmlTag('p', {
            class: 'mtime-type'
        }, res.type)));
        var mtimeDesc = util.htmlTag('div', {
            class: 'mtime-movie_desc'
        }, util.htmlTag('p', {
            class: 'mtime-text'
        }, res.story));
        var mtimeSection = util.htmlTag('div', {
            class: 'mtime-info_section'
        }, mtimeHeader + mtimeDesc);
        var mtimeBack = util.htmlTag('div', {
            class: 'mtime-blur_back',
            style: 'background: url(' + res.thumbnail + '); no-repeat fixed;background-size: cover;'
        }, '');
        var mtimeCard = util.htmlTag('div', {
            class: 'mtime-movie_card'
        }, mtimeSection + mtimeBack);
        console.info('hexo-tag-mtime => Get moive SUCEESS');
        return '<link rel="stylesheet" type="text/css" href="' + css + '" />' + mtimeCard;
    });
}, {
    async: true
});

async function getMoiveInfo(id) {
    var url = "https://front-gateway.mtime.com/library/movie/detail.api?locationId=290&movieId=" + id;
    return request(url).then(function (body) {
        var res = JSON.parse(body);
        if (res.code == 0) {
            var data = {
                name: res.data.basic.name,
                nameEn: res.data.basic.nameEn,
                mins: res.data.basic.mins,
                img: res.data.basic.img.replace(/http/, 'https'),
                year: res.data.basic.releaseDate.substring(0, 4),
                overallRating: res.data.basic.overallRating,
                director: res.data.basic.director.name,
                story: res.data.basic.story,
                type: res.data.basic.type.join('，'),
                thumbnail: (typeof res.data.basic.stageImg.list[0].imgUrl == 'undefined') ? res.data.basic.img.replace(/http/, 'https') : res.data.basic.stageImg.list[0].imgUrl.replace(/http/, 'https')
            }
        }

        return data;
    });
}