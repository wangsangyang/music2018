$(function () {
    /* 点击筛选按钮 */
    $('.filter-box .filter-handle').on('click', function () {
        var $filterbox = $(this).closest('.filter-box');
        var isopen = $filterbox.hasClass('open');
        $filterbox[isopen?'removeClass':'addClass']('open');
    });
    /* 点击背景mask隐藏 */
    $('.filter-box .mask').on('click', function () {
        var $filterbox = $(this).closest('.filter-box');
        $filterbox.removeClass('open');
    });
    /* 选择tab */
    $('.filter-box .tab-header .menu').hover(function () {
        var index = $(this).index();
        var text = $(this).text();
        $(this).addClass('active').siblings().removeClass('active');
        $('.filter-box .tab-bodyer .tab-cont').eq(index).addClass('active').siblings().removeClass('active');
    });

    /* 选择小项 */
    $('.filter-box .tab-bodyer .menu').on('click',function () {
        var text = $(this).text();
        var random = Math.random();
        var list = '<span class="list" data-random="'+random+'"><i class="close"></i><i class="text">'+text+'</i></span>';
        if( !$(this).hasClass('active') ){
            $(this).addClass('active');
            $(this).attr('data-random',random);
            $('.section-search-music .search-box .item').append(list);
        }
    });
    /* 删除选择的小项 */
    $('.section-search-music').on('click','.search-box .close',function () {
        var $list = $(this).closest('.list');
        var data_random = $list.attr('data-random');
        $('.filter-box .tab-bodyer .menu[data-random="'+data_random+'"]').removeClass('active');
        $list.remove();
    });
});

$(function () {
    /* 搜索列表展开、隐藏 */
    $('.search-result .icon-open').on('click', function () {
        var $li = $(this).closest('li');
        var isopen = $li.hasClass('open');
        $li[isopen?'removeClass':'addClass']('open');
    });
    /* 订单列表查看详情展开、隐藏 */
    $('.search-result .detail').on('click', function () {
        var $li = $(this).closest('li');
        var isopen = $li.hasClass('open');
        $li[isopen?'removeClass':'addClass']('open');
    });
});