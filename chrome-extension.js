
 let myLeads = []

 const inputEl = document.getElementById("input-el")
 const inputBtn = document.getElementById("input-btn")
 const ulEl = document.getElementById('ul-el')

 let leadsFromLocalStorage = JSON.parse(localStorage.getItem('myLeads'));
 


inputBtn.addEventListener('click', function() {
  myLeads.push(inputEl.value)
  inputEl.value = ""

  localStorage.setItem('myLeads', JSON.stringify(myLeads)) //save to local storage

  renderLeads ()

  console.log(localStorage.getItem("myLeads")) //fetch from local storage
  console.log(leadsFromLocalStorage)
});


function renderLeads() {
  let listItems = ""
  for (let i = 0; i < myLeads.length; i++) {
      listItems += `
      <li>
        <a href='${myLeads[i]}' target='_blank'>${myLeads[i]}</a>
      </li>
      `
  }
  console.log(listItems)
  ulEl.innerHTML = listItems
}















/*                Extra stuff(not applicable to the chrome extension)


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