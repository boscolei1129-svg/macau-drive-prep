let installPrompt=null;
window.addEventListener('beforeinstallprompt',event=>{event.preventDefault();installPrompt=event;});
window.addEventListener('appinstalled',()=>{installPrompt=null;toast('Macau Drive has been added to your apps.');});
document.addEventListener('click',async event=>{
 if(!event.target.closest('[data-install-app]'))return;
 if(installPrompt){const prompt=installPrompt;installPrompt=null;await prompt.prompt();return;}
 const standalone=window.matchMedia('(display-mode: standalone)').matches||navigator.standalone;
 if(standalone){toast('You are already using the installed web app.');return;}
 dialog(`<h2>Macau Drive, on your home screen.</h2><p><strong>iPhone or iPad:</strong> open this site in Safari, tap Share, then Add to Home Screen. Turn on Open as Web App if offered, then tap Add.</p><p><strong>Other devices:</strong> use your browser menu and choose Install app or Add to Home Screen when available.</p><p>No ChatGPT sign-in is needed. Progress is saved on this device. You can export a backup in Performance before switching browsers or installing.</p><div class="actions"><button class="btn secondary" data-action="close-modal">Close</button><a class="text-link" href="https://support.apple.com/guide/iphone/iphea86e5236/ios" target="_blank" rel="noopener">Apple installation guide ↗</a></div>`);
});
