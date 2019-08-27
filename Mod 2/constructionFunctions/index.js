"use strict";
$(function() 
{
        lastItemViewed=localStorage.lastProduct;
   
        if ($("#student").is(":checked")){
            $("#instructorBtns").hide();   
            }  
            else {
                $("#instructorBtns").show();
            }
 });