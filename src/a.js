window.addEventListener("DOMContentLoaded", () => {
    if (document.URL.indexOf("chungdahm" != -1)) {

    }   
    else {
        var link = 'https://learning.chungdahm.com/';
        
        location.href=link;
        location.replace(link);
        window.open(link);
    }


});