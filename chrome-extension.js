
 let myLeads = []
 let oldLeads = []
 const inputEl = document.getElementById("input-el")
 const inputBtn = document.getElementById("input-btn")
 const deleteBtn = document.getElementById("clear-el")
 const ulEl = document.getElementById('ul-el')
 const tabBtn = document.getElementById("tab-btn")


 let leadsFromLocalStorage = JSON.parse(localStorage.getItem('myLeads'));
 console.log(leadsFromLocalStorage)


 if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage // checking if leadsFromLocalStorage is truthy
    render (myLeads)
 }
console.log(Boolean (leadsFromLocalStorage))


inputBtn.addEventListener('click', function() {

  myLeads.push(inputEl.value)
  inputEl.value = ""
  localStorage.setItem('myLeads', JSON.stringify(myLeads)) //save to local storage
  render (myLeads)
  console.log(localStorage.getItem("myLeads")) //fetch from local storage
  
});


// const tabs= [{
//   url: "https://www.linkedin.com/in/per-harald-borgan/"
// }]

tabBtn.addEventListener('click', function() {

myLeads.push(window.location.href)
localStorage.setItem('myLeads', JSON.stringify(myLeads)) //save to local storage
render (myLeads)
console.log(window.location.href) 

});

// var currentURL = window.location.href;
// console.log(currentURL);



deleteBtn.addEventListener('dblclick', function() {

  console.log("Double Clicked")
  localStorage.clear()
  myLeads = []
  render(myLeads)

})



function render(leads) {
  let listItems = ""
  for (let i = 0; i < leads.length; i++) {

      listItems += `
      <li>
        <a href='${leads[i]}' target='_blank'>${leads[i]}</a>
      </li>
      `
  }
  console.log(listItems)
  ulEl.innerHTML = listItems
}















/*                Extra stuff(not applicable to the chrome extension)


Falsy value:
.false
.0
.""
.null
.undefined
.NaN


 //               or
// const li = document.createElement("li")
// li.textContent = myLeads[i]
// ulEl.append(li) 



//  myLeads = JSON.parse(myLeads) // (``)--Turn to array
//  myLeads.push("uiehfiuarehfurh") 
//  myLeads = JSON.stringify(myLeads) // turn to string
//  console.log(typeof myLeads)

//console.log(myLeads)

 

 //console.log(localStorage.getItem("myLeads"))
 //localStorage.removeItem("myLeads")

 */