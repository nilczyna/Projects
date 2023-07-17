const apiUrl = 'http://localhost:3000/posts'; 


function showLoader() {
    document.getElementById('loader').style.display = 'block';
}

function hideLoader() {
    document.getElementById('loader').style.display = 'none';
}

function getPosts() {
    showLoader();
    fetch(apiUrl)
        .then(response => response.json())
        .then(posts => {
            hideLoader();
            displayPosts(posts);
        })
        .catch(error => {
            hideLoader();
            console.error('Error:', error);
        });
}

function displayPosts(posts) {
    const mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = '';

    posts.forEach(post => {
        const postContainer = document.createElement('div');
        postContainer.classList.add('post');

        const titleElement = document.createElement('h2');
        titleElement.textContent = post.title;
        postContainer.appendChild(titleElement);

        const contentElement = document.createElement('p');
        contentElement.textContent = post.content;
        postContainer.appendChild(contentElement);

        const authorElement = document.createElement('p');
        authorElement.textContent = `Author: ${post.author}`;
        postContainer.appendChild(authorElement);

        const dateElement = document.createElement('p');
        dateElement.textContent = `Date: ${post.date}`;
        postContainer.appendChild(dateElement);

        const editButton= document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', () => openEditForm(post.id));
        postContainer.appendChild(editButton);

        mainContent.appendChild(postContainer);
    });
}

function openAddForm() {
    document.getElementById('postForm').reset();
    document.getElementById('postFormContainer').classList.remove('hidden');
}

function openEditForm(postId) {
    const post = getPostById(postId);
    if (post) {
        document.getElementById('title').value = post.title;
        document.getElementById('content').value = post.content;
        document.getElementById('author').value = post.author;
        document.getElementById('postFormContainer').classList.remove('hidden');
        document.getElementById('postForm').addEventListener('submit', event => {
            event.preventDefault();
            editPost(postId);
        });
    }
}

function getPostById(postId) {
    const posts = Array.from(document.querySelectorAll('.post'));
    const foundPost = posts.find(post => post.querySelector('button').dataset.postId === postId);
    if (foundPost) {
        const title = foundPost.querySelector('h2').textContent;
        const content = foundPost.querySelector('p').textContent;
        const author = foundPost.querySelector('p:nth-child(3)').textContent.replace('Author: ', '');
        const date = foundPost.querySelector('p:nth-child(4)').textContent.replace('Date: ', '');
        return { id: postId, title, content, author, date };
    }
    return null;
}

function closeForm() {
    document.getElementById('postFormContainer').classList.add('hidden');
    document.getElementById('postForm').reset();
    document.getElementById('postForm').removeEventListener('submit', editPost);
}

function addPost() {
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    const author = document.getElementById('author').value;

    if (title && content && author) {
        fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title,
                content,
                author,
                date: new Date().toLocaleString()
            })
        })
            .then(response => response.json())
            .then(() => {
                closeForm();
                getPosts();
            })
            .catch(error => console.error('Error:', error));
    } else {
        alert('All fields are required.');
    }
}

function editPost(postId) {
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    const author = document.getElementById('author').value;

    if (title && content && author) {
        fetch(`${apiUrl}/${postId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title,
                content,
                author
            })
        })
            .then(response => response.json())
            .then(() => {
                closeForm();
                getPosts();
            })
            .catch(error => console.error('Error:', error));
    } else {
        alert('All fields are required.');
    }
}

function initializeBlogPanel() {
    const addPostButton = document.getElementById('addPostButton');
    const postForm = document.getElementById('postForm');
    const postFormContainer = document.getElementById('postFormContainer');

    addPostButton.addEventListener('click', openAddForm);
    postForm.addEventListener('submit', event => {
        event.preventDefault();
        addPost();
    });
    postFormContainer.addEventListener('click', event => {
        if (event.target === postFormContainer) {
            closeForm();
        }
    });

    getPosts();
}
window.addEventListener('DOMContentLoaded', initializeBlogPanel);
