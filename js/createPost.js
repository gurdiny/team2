let savePostBtn = document.getElementById("save-post-btn");

savePostBtn.addEventListener("click", async () => {
    let fields = document.querySelectorAll("#create-post-form input");

    let postObject = {};

    fields.forEach(field => {
        let property = field.name;
        let value = field.value;
        postObject[property] = value;
    
    });

    let checkbox = document.getElementById("myCheckbox");
    let checkboxValue = checkbox.checked;
    postObject["relevant"] = checkboxValue; 


    
    console.log(postObject);
    let savedPost = await createPost(postObject);
    console.log(savedPost);


    let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

    localStorage.setItem("token", token);
    window.open("../index.html", "_self");

});


const createPost = async (postObject) => {
    let response = await fetch(`https://devtoretojs-default-rtdb.firebaseio.com/posts/.json`, 
    {
        method: "POST",
        body:JSON.stringify(postObject)
    });
    let data = await response.json();
    return data;
};
