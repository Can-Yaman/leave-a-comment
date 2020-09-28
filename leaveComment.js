const topicData = {
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, aspernatur!",
    explantion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni nostrum beatae autem expedita perferendis, aliquid corporis nam aspernatur repellendus cumque. Ex dolorem quam expedita excepturi pariatur nemo consequuntur dolorum unde!Dicta repellat sunt dignissimos maxime dolorem ut,architecto aliquid expedita non, quos hic cum natus harum ex molestias eveniet facilis tempora minima excepturi ipsa modi exercitationem,culpa veniam reiciendis.Odio.",
    topicAuthor: "Can Yaman",
    dateTime: "2020-09-28 12:30",
};

let data = databank;

const commentsContainer = document.querySelector(".container--commnets");

function loadTopic() {
    document.querySelector(".container--topic__title").innerText =
        topicData.title;
    document.querySelector(".container--topic__explantion").innerText =
        topicData.explantion;
    document.querySelector(".container--topic__author").innerText =
        topicData.topicAuthor;
    document.querySelector(".container--topic__datetime").innerText =
        topicData.dateTime;
}

function loadComment(comment) {
    let commentElement = document.createElement("div");
    if (comment.commentType == "support") {
        commentElement.classList.add("container--commnets__support");
    } else {
        commentElement.classList.add("container--commnets__reject");
    }
    commentElement.innerHTML = `
    <p class="comment">${comment.commentText}</p>
<p class="author">${comment.author}</p>
<p class="datetime">${comment.commentDateTime}</p>
    `;
    commentsContainer.appendChild(commentElement);
}

function listenEvents() {
    document
        .querySelector(".container--topic__button")
        .addEventListener("click", openForm);
    document.querySelector("#reset").addEventListener("click", closeForm);
    document.querySelector("#submit").addEventListener("click", recordComment);
}

function openForm() {
    document.querySelector(".form-popup").style.display = "flex";
}

function closeForm() {
    document.querySelector(".form-popup").style.display = "none";
    document.querySelector("#text").value = "";
    document.querySelector("#name").value = "";
}

function recordComment() {
    data.commentIdCounter++;
    let currentDateTime = new Date();
    let currentComment = {
        id: data.commentIdCounter,
        commentType: document.querySelector("input:checked").value,
        commentText: document.querySelector("#text").value,
        author: document.querySelector("#name").value,
        commentDateTime: `${currentDateTime.getFullYear()}-${
      currentDateTime.getMonth() + 1
    }-${currentDateTime.getDate()} ${currentDateTime.getHours()}:${currentDateTime.getMinutes()}`,
    };
    closeForm();
    alert(`Thanks for your  comment. It is recorded successfully.`);
    data.commentData.push(currentComment);
    loadComment(currentComment);
    data.commentData.forEach(console.log);
    console.log(data.commentIdCounter);
}

loadTopic();
listenEvents();
data.commentData.forEach(loadComment);