var MOBILE_WIDTH = 360; //What screen width do we treat as a mobile phone

$(window).resize(windowResize); //Pay attention to window resizing.

$(document).ready(function() {
});

function windowResize(e) {
    if(removeElements()) {
        return;
    }

    if($("#overflowMenu").children().length==0) {
        $("#moreMenu").hide();
        return;
    }

    addElements(); 
    removeElements();

    if($("#overflowMenu").children().length==0) {
        $("#moreMenu").hide();
    }
}

var oldChildrenCount = -1;
var oldLength = 0;
function getNavbarWidth() {
    var childWidth = 0;
    var children = $("#navbar").children().children();
    console.log(children);
    if(children.length==0) return 0;
    if(children.length!=oldChildrenCount) {
        oldChildrenCount = children.length;
        for(var i = 0; i < children.length; i++) {
            childWidth+= $(children[i]).outerWidth(true);
        }
        childWidth+=40;
        oldLength = childWidth;
        return childWidth;
    }
    return oldLength;
}

function removeElements() {
    var overflowMenu = $("#overflowMenu");
    var width = $("#container").outerWidth(true);
    var childWidth = getNavbarWidth();
    if(childWidth > width) {
        $("#moreMenu").show();
        while(getNavbarWidth() > width) {
            var children = $("#navbar").children().children();
            if(children.length==0) return;
            var child = $(children[children.length-2]);
            child.detach();
            child.prependTo("#overflowMenu");
        }
        return true;
    }
    return false;
}

function addElements() {
    var overflowMenu = $("#overflowMenu");
    var width = $("#container").outerWidth(true);
    var childWidth = getNavbarWidth();
    if(childWidth < width) {
        while(getNavbarWidth() < width) {
            var children = overflowMenu.children();
            if(children.length == 0) return;
            var child = $(children[0]);
            child.detach();
            child.insertBefore("#moreMenu");
        }
    }
}
