class Github {
  constructor() {
    this.client_id = '6962606ff84a58f82a33';
    this.client_secret = '2186450faab39b4b6c3d2d73ade0b5add312b714';
    this.repos_count = 5;
    this.repos_sort = 'created:asc';
    this.repos_page = 2;
  }

  // Fetch profile
  async getProfile(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    if (profileResponse.ok === true) {
      const profile = await profileResponse.json();
      return { profile }
    } else {
      console.log(`URL: ${profileResponse.url} have this status response ${profileResponse.status}`);
    }
  }
  // Fetch Repos
  async getRepos(user) {
    const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?client_id=${this.client_id}&client_secret=${this.client_secret}&sort=${this.repos_sort}&per_page=${this.repos_count}&page=${this.repos_page}`);
    if (reposResponse.ok === true) {
      const repos = await reposResponse.json();
      return { repos }
    } else {
      console.log(`URL: ${reposResponse.url} have this status response ${reposResponse.status}`);
    }
  }

}






