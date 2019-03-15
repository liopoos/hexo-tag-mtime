# Hero-tag-mtime

<figure class="third">
	<img src="https://img.shields.io/npm/l/hexo-tag-mtime.svg" />
    <img src="https://img.shields.io/npm/v/hexo-tag-mtime.svg" />
</figure>

Embed a movie card on your [Hexo](https://hexo.io/) article, used [mtime](http://www.mtime.com/) API.

![](https://cdn.mayuko.cn/blog/20190315091034.png)

## Installation

```bash
npm install hexo-tag-mtime --save
```

## Usage

Use tags:

```
{% mtime videoId %}
```

Example:

```
{% mtime 218707 %}
```

Then, it generates HTML:

```html
<div class="mtime-movie_card">
    <div class="mtime-info_section">
        <div class="mtime-movie_header"><img src="http://img5.mtime.cn/mt/2019/01/30/152305.14999287_1280X720X2.jpg"
                class="mtime-locandina">
            <h1>流浪地球</h1>
            <h4>2019，郭帆</h4><span class="mtime-minutes">125分钟</span>
            <p class="mtime-type">冒险，科幻，剧情</p>
        </div>
        <div class="mtime-movie_desc">
            <p class="mtime-text">太阳即将毁灭，人类在地球表面建造出巨大的推进器，寻找新家园。然而宇宙之路危机四伏，为了拯救地球，为了人类能在漫长的2500年后抵达新的家园，流浪地球时代的年轻人挺身而出，展开争分夺秒的生死之战。</p>
        </div>
    </div>
    <div class="mtime-blur_back" style="background: url(http://img5.mtime.cn/pi/2018/03/30/185755.98495617_1280X720X2.jpg); no-repeat fixed;background-size: cover;"></div>
</div>
```

#### How to get the movie id?

1. Open [mtime](http://www.mtime.com/) website.
2. Search movie than you want to insert.
3. Url is like this: `http://movie.mtime.com/218707/`.
4. The  NUMBER is video id.

## Options

- css: You can customize the css link, if NOT, it will use CDN by default.

CDN url is `https://cdn.mayuko.cn/css/hexo-tag-mtime.css`.

By modifying the `_config.yml` file under the Hexo root directory.

```yaml
mtime:
  css: https://cdn.mayuko.cn/css/hexo-tag-mtime.css
```

## Style

The default css style used [Simone Bernabè](https://codepen.io/simoberny/):

- [View in CodePen](https://codepen.io/simoberny/pen/WMMqwL)

## API

The Hexo plugin used unofficial API by [jokermonn](https://github.com/jokermonn/-Api/), It's Powerful! 

## License

MIT