const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2003 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// foreach
// companies.forEach(function (company) {
//   console.log(company)
// })
// filter
// Getting ages 18 and older with filter method
// let canDrink = ages.filter(function (age, i) {
//   if (age >= 18) {
//     return true
//   }
// });
// Same thing with arrow functions
// const canDrink = ages.filter(age => age > 18)
// console.log(canDrink)
// filter retail companies
// const retailCompanies = companies.filter(
//   (company) => (company.category.toLowerCase() == "retail")
// );
// console.log(retailCompanies)
// filter all the companies from the 80's
// const eightiesCompanies = companies.filter(company => company.start >= 1980 && company.start <= 1989)
// console.log(eightiesCompanies)
// companies that lasted at least 10 years
// const lastedTenYears = companies.filter(
//   (company) => company.end - company.start >= 10
// );
// console.log(lastedTenYears);
// map
// create array of company names
// const companyNames = companies.map((company) => company.name);
// console.log(companyNames);
// const agesSquare = ages.map((age) => Math.sin(age));
// console.log(agesSquare);
// sort
// sort companies by start year
// const sortedCompanies = companies.sort(function (c1, c2) {
//   if (c1.start > c2.start) {
//     return 1;
//   } else {
//     return -1;
//   }
// });
// const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
// console.log(sortedCompanies);
// const sortedAges = ages.sort((a, b) => (a > b ? -1 : 1));
// console.log(sortedAges)
// reduce
// const ageSum = ages.reduce((total, age) => total + age, 0);
// const ageSum = companies.reduce(
//   (total, company) => total + (company.end - company.start),
//   0
// );
// console.log(ageSum);

const combined = ages
  .map((age) => age * 2)
  .filter((age) => age >= 40)
  .sort((a, b) => a - b)
  .reduce((total, age) => total + age, 0);

console.log(combined);
