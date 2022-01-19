window.addEventListener("DOMContentLoaded", () => {
    if (document.URL == "https://learning.chungdahm.com/cdi") {

        let lv_Btn = document.getElementsByClassName("user-name")[0]
        lv_Btn.innerHTML = "CDI_" + lv_Btn.innerHTML
    }
    if (document.URL.indexOf("chungdahm" != -1)) {

    }   
    else {
        var link = 'https://learning.chungdahm.com/';
        
        location.href=link;
        location.replace(link);
        window.open(link);
    }


});