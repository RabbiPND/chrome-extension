
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


tabBtn.addEventListener('click', function() {

myLeads.push(window.location.href) //how to get the current tab
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














