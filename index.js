let requestURL = 'https://www.reddit.com/r/cats/hot.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
  const object = request.response
  const randomPost = Math.ceil(Math.random() * object.data.children.length)
  document.getElementById("cat").innerHTML = `<img src="${object.data.children[randomPost].data.url_overridden_by_dest}">`
  document.getElementById("credit").innerHTML = `Posted in r/cats by ${object.data.children[randomPost].data.author}`
}
