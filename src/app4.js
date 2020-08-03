import $ from 'jquery';
import './app4.css';

const $circle = $('#app4 .circle');
$circle.on('mouseenter',()=>{
    $circle.toggleClass('active')
})
$circle.on('mouseleave',()=>{
    $circle.removeClass('active')
})