window.init_redactor = function(){
  var csrf_token = $('meta[name=csrf-token]').attr('content');
  var csrf_param = $('meta[name=csrf-param]').attr('content');
  var params;
  if (csrf_param !== undefined && csrf_token !== undefined) {
    params = csrf_param + "=" + encodeURIComponent(csrf_token);
  }
  $('.redactor').redactor(
      {
        toolbarFixed: true,
        cleanup: false,
        tidyHtml: false,
        convertDivs: false,
        convertLinks: false,
        paragraphy: false,
        deniedTags: ['html', 'head', 'link', 'body', 'meta', 'script', 'applet'],
        "imageUpload":"/redactor_rails/pictures?" + params,
        "imageGetJson":"/redactor_rails/pictures",
        "fileUpload":"/redactor_rails/documents?" + params,
        "fileGetJson":"/redactor_rails/documents",
        "path":"/assets/redactor-rails",
        "css":"style.css"}
      );
}

$(document).ready( window.init_redactor );
$(window).bind('page:change', window.init_redactor);
