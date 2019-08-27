"use strict";

$(function() 
{
    $("#checkBttn").on("click", function() {

        let lastItemViewed=$("#name").val;
        lastItemViewed=localStorage

        localStorage.lastProduct=lastItemViewed;
 
    })

 });

