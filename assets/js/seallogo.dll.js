

(function(){
    var html = '<span style="display:inline-block;position:relative;width:auto;">'+
    '<a href="https://kxlogo.knet.cn/verifyseal.dll?sn=e20081931010682203sysr000000&pa=0.2429713501105336" oncontextmenu="return false;" style="display:inline-block" target="_blank">'+
        '<img class="act" height="30px" alt="可信网站" style="display:block" src="https://kximg.knet.cn/static/images/logo/star4.png">'+
    '</a></span>',
    scriptDom = document.getElementById('kXScript');
    scriptDom ? scriptDom.insertAdjacentHTML('afterend', html) : document.write(html);
})();