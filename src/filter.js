filterPeople = () => {
  let filterInput = document.getElementById("myInput");
  const filterNames = () => {
    let filterValue = document.getElementById("myInput").value.toUpperCase();

    let ul = document.getElementById("ul");

    let li = ul.querySelectorAll("li.li-collection");
    for (let i = 0; i < li.length; i++) {
      let a = li[i].getElementsByTagName("p")[0];

      if (a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  };
  filterInput.addEventListener("keyup", filterNames);
};

export default filterPeople;
