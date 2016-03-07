
function documentReady() {
    console.log("Light loaded");
}



$(document).ready(documentReady);
$(document).on('page:load', documentReady);