'use strict';
document.getElementById('getting-started').addEventListener('click',e=>{if(!e.target.closest('[data-open-ai-manual]'))return;referenceMode='image';renderStartStep(2);selectReference(0);document.getElementById('start-detail').scrollIntoView({block:'start',behavior:'smooth'});});
