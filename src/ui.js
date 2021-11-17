class UI {
  constructor() {
    this.root = document.getElementById("root");
  }

  showRepos(repos) {
    console.log(repos);
    let output = "";

    repos.forEach((repo) => {
      output += `
      <ul id="ul">
        <li class="li-collection">
          <p> ${repo.firstName} </p>
        </li>
      </ul>
      `;
    });
    
    document.getElementById("users").innerHTML = output;
  }
}
export default UI;
