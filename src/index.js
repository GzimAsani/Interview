import Data from "./data";
import UI from './ui'

const data = new Data();
const ui = new UI();


const id = document.getElementById("root");

data.getUser().then((data) => {
  ui.showRepos(data);

});
