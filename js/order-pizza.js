function hasChanged(){
    let hash = location.hash.replace( /^#/,'');
    $('#nav-cheese').tab('show');
}
window.addEventListener("hashchange",hasChanged, false);