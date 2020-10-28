function lgadata () {
   let lgadata = document.getElementById('select_lga')
   let selectedValue = lgadata.options[lgadata.selectedIndex].value
//    alert(selectedValue)
   let lgaResult = document.getElementById("lgaResult")
   let data = [{one: "one", two: "two", three: "3", four: "4" }, 
   {one: "5", two: "two", three: "3", four: "4" },
   {one: "th", two: "two", three: "3", four: "4" },
   {one: "8900", two: "two", three: "3", four: "4" }, 
]
let dataRes = ""
let element = document.createElement("li");
let text = document.createTextNode("")
data.forEach((data, index) => {
dataRes += `<li>
<div class="item-data">
<span class="id-column">${data.one}</span>
  <span class="id-column">${data.two}</span>
  <span class="id-column">${data.three}</span>
  <span class="id-column">${data.four}</span>
</div>
</li>`;
lgaResult.append(dataRes)
})
// lgaResult.append(dataRes)
}

