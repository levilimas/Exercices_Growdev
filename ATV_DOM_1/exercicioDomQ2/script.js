function addContentList() {
    const words = ['word1', 'word2', 'word3', 'word4', 'word5'];
    const wordListDiv = document.getElementById('word-list');
  
    for (let word of words) {
      const listItem = document.createElement('li');
      listItem.textContent = word;
      wordListDiv.appendChild(listItem);
    }
  }
  
  addContentList();