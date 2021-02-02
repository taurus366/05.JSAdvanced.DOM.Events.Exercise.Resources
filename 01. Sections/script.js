function create(words) {

      const content = document.getElementById('content');



   Array.from(words)
       .forEach(word => {
          const div = document.createElement('div');
          const paragraph = document.createElement('p');
          paragraph.textContent = word;
          paragraph.style.display = 'none'
          div.appendChild(paragraph);
          content.appendChild(div);

       })

   content.addEventListener('click',clicked);

   function clicked(ev) {
      if (ev.target.tagName === 'DIV'){
         ev.target.querySelector('p').style.display = '';
      }

   }
}