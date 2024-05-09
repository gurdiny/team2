import { getData } from "./modules/API.js";

let createFirstPost = (objectPost) => {
  let { title, author } = objectPost;

  let contenedoresDiv = document.createElement("div");
  contenedoresDiv.classList.add("contenedores");

  let aPostcontainer = document.createElement("a");
  let aPostName = document.createTextNode(title);

  let authorName = document.createElement("div");
  authorName.classList.add("text-secondary");
  let authorNameText = document.createTextNode(author);
  authorName.append(authorNameText);

  aPostcontainer.append(aPostName, authorName);

  contenedoresDiv.append(aPostcontainer);

  return contenedoresDiv;
};

const createWrapper = (array, wrapperID) => {
  let wrapper = document.getElementById(wrapperID);

  array.forEach((element, index) => {
    // Using the index from the array to know wich post is the first one
    let card = createFirstPost(element, index);

    wrapper.append(card);
  });
};

const printPosts = async (tag1, tag2) => {
  let postsArray = await getData();
  let filteredPosts1 = postsArray.filter((post) => post.tags.includes(tag1));
  let filteredPosts2 = postsArray.filter((post) => post.tags.includes(tag2));
  createWrapper(filteredPosts1, "rightSideBar1");
  createWrapper(filteredPosts2, "rightSideBar2");
};

printPosts("#frontend", "#AI");

const printTitles = async () => {
  let postsArray = await getData();

  //   postsArray.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

  let lastFivePosts = postsArray.slice(0, 5);

  let titleList = document.getElementById("titleListWrapper");

  lastFivePosts.forEach((post) => {
    let titleItem = document.createElement("li");
    titleItem.classList.add("listPostSideBar");
    let titleText = document.createTextNode(post.title);
    titleItem.appendChild(titleText);
    titleList.appendChild(titleItem);
  });
};

printTitles();
