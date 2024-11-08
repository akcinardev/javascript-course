const btn = document.querySelector(".btn");

const fetchData = async () => {
  const res = await fetch("https://restcountries.com/v3.1/name/deutschland");
  const data = await res.json();

  const { name, population, borders } = data[0];
  console.log(name?.common);
  console.log(population);
  console.log(borders);
  return name;
};

btn.addEventListener("click", fetchData);
