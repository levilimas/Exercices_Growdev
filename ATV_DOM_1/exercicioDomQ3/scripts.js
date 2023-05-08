function addContentList() {
    const words = {
      1: 'word1',
      2: 'word2',
      3: 'word3',
      4: 'word4',
      5: 'word5',
      6: 'wordn...'
    };
    const wordListDiv = document.getElementById('word-list');
  
    for (let id in words) {
      const listItem = document.createElement('li');
      listItem.textContent = words[id];
      wordListDiv.appendChild(listItem);
    }
  }
  
  addContentList();