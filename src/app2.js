import './app2.css';
import $ from 'jquery';

const $tabBar = $("#app2 .tab-bar");
const $tabContent =$('#app2 .tab-content')

$tabBar.on('click','li',e=>{
    const $li = $(e.currentTarget);
    $li
        .addClass('selected')
        .siblings()
        .removeClass('selected')
    const index = $li.index()
    console.log(index)
    //找到$tabContent的对应儿子，然后增改class
    $tabContent.children()
        .eq(index).addClass('active')
        .siblings().removeClass('active')
});
$tabBar.children().eq(0).trigger('click')