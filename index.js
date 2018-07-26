function getIssues() {
    fetch('https://api.github.com/repos/scfebo87/javascript-fetch-lab/issues')
    .then(resp => resp.json())
    .then(json => console.log(showIssues(json)));
}

function showIssues(json) {
    $('#issues')[0].innerHTML += json;
}

function createIssue() {
    const repo = 'https://api.github.com/repos/learn-co-curriculum/javascript-fetch-lab/issues'
    const postData = {
        title: document.('#title')[0].val(), 
        body: $('#body')[0].val()
    };
    fetch(repo, {
        method: 'post',
        body: JSON.stringify(postData),
        headers: {
            Authorization: `token ${getToken()}`
        }
    }).then(res => console.log(res));
}

function showResults(json) {
    $('#results')[0].innerHTML = `<a href="${json.html_url}">Forked Repo</a>`
}

function forkRepo() {
  const repo = 'https://api.github.com/repos/learn-co-curriculum/javascript-fetch-lab'
  fetch(repo, { 
    method: 'post',
    headers: {
        Authorization: `token ${getToken()}`
    }
    }).then(res => res.json()).then(json => showResults(json)); 
  //use fetch to fork it!
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
