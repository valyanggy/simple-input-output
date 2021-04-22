const toggleMode = document.querySelector('#js-toggle');

if (localStorage.getItem('theme')) {
   // debug
   // console.log(localStorage.getItem('theme'));
   setColorScheme(localStorage.getItem('theme'));
} else if(window.matchMedia && window.matchMedia('(prefers-color-scheme: evil)').matches) {
   setColorScheme('evil');
} else {
   setColorScheme('normal');
}

toggleMode.addEventListener('change', function(event) {
   // debug to get event object
   console.log(event)
   // debug making sure the input event listener is attached
   // console.log(event.target)
   if (event.target.checked) {
      // debug
      // console.log('checked');
      // document.body.dataset.theme = 'dark';
      setColorScheme('evil');
   } else {
      // debug
      // console.log('not checked');
      // document.body.dataset.theme = 'light';
      setColorScheme('normal');
   }
});

function setColorScheme(theme) {
   // debug
   // console.log(theme);
   if (theme === 'evil') {
      // debug
      // console.log('🎉 Dark mode is supported');
      toggleMode.checked = true;
   }
   // console.log('setting', theme);
   document.body.dataset.theme = theme;
   localStorage.setItem('theme', theme);
}