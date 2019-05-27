/* jshint esversion: 6 */

document.onkeydown = (e)=>{
  if(e.keyCode === 13)
    makeSubmission();
};

const makeSubmission = ()=>{
  //get data from form
  const data = document.getElementById('memeform');
  const urlLink = data.elements[0].value;
  const topText = data.elements[1].value;
  const bottomText = data.elements[2].value;

  if (urlLink === "")
    return;

  //create necessary elements
  const div = document.createElement('div');
  const img = document.createElement('img');
  const top = document.createElement('div');
  const bottom = document.createElement('div');
  const deleteText = document.createElement('button');

  //set up img
  img.classList.add("memeImage");
  img.src = urlLink;

  //set up top and bottom texts
  top.innerHTML = topText;
  top.classList.add("topText");
  bottom.innerHTML = bottomText;
  bottom.classList.add("bottomText");

  //set up deletion text
  deleteText.innerHTML = "REMOVE";
  deleteText.classList.add("deleteText");
  deleteText.onclick = function(){
  const meme = this.parentElement;
  const parent = meme.parentElement;
  parent.removeChild(meme);
  };

  //append everything to div
  div.appendChild(top);
  div.appendChild(bottom);
  div.appendChild(deleteText);
  div.appendChild(img);
  div.classList.add("memebox");

  //add to the wall
  const parent = document.getElementById('left-side');
  if (parent.children.length === 0)
  {
    parent.appendChild(div);
  }
  else if (parent.children[0].tagName === 'P')
  {
    parent.removeChild(parent.children[0]);
    parent.appendChild(div);
  }
  else
  {
    parent.insertBefore(div, parent.children[0]);
  }

  //reset form
  data.reset();
};
