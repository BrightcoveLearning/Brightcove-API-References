var BCLS = ( function (window, document) {
  var topbar_wrapper = document.getElementsByClassName('topbar-wrapper')[0],
  img = document.createElement('img'),
  aDocs = document.createElement('a'),
  aHome = document.createElement('a'),
  txt = document.createTextNode(' | ');
  img.setAttribute('src', 'https://learning-services-media.brightcove.com/doc-assets/general/images/bc-logo-ondark.png');
  img.setAttribute('alt', 'Brightcove');
  aDocs.setAttribute('href', 'https://support.brightcove.com');
  aDocs.textContent = 'Brightcove Docs';
  aHome.setAttribute('href', '../index.html');
  aHome.textContent = 'API References Index';
  topbar_wrapper.innerHTML = '';
  topbar_wrapper.appendChild(img);
  topbar_wrapper.appendChild(aHome);
  topbar_wrapper.appendChild(txt);
  topbar_wrapper.appendChild(aDocs);
})(window, document);
