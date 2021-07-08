const github = new Github;
const ui = new UI;
const searchUser = document.querySelector('#searchUser');


searchUser.addEventListener('input', (e) => {
  const user = searchUser.value;

  if (user !== '') {
    // Get profiles
    github.getProfile(user)
      .then(data => {
        ui.showProfile(data.profile)
      })
      .catch(err => {
        console.log(err);
        ui.showAlert('User not found', 'alert alert-danger');
      })
    // Get repos
    github.getRepos(user)
      .then(data => {
        ui.showRepos(data.repos)
      })
      .catch(err => {
        console.log(err);
      })

  } else if (user === '') {
    ui.showAlert('Please enter username', 'alert alert-danger');
  }

})

