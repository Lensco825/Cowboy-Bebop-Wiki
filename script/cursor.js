const cursor = document.querySelector('.cursor');

function cursorControl(e) {
    //tracks the cursors coordinates
      let x = e.clientX;
      let y = e.clientY;
    //places the custom cursor onto the cursor coordinates
      cursor.style.top = `${y}px`;
      cursor.style.left = `${x}px`;
    }
    
    document.getElementsByTagName('main').addEventListener("mousemove", cursorControl);