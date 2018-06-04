import a from './common'

window.onload = function () {
    document.onclick = function () {
        alert(a.sum(2,3,6,8));
        console.log('a');
    }
}