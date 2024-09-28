export const tableCompanyColum1 = async (Capsules)=>{

    let information__table__1 = document.querySelector("#information__table__1");
    information__table__1.innerHTML = "";
    let h3 = document.createElement("h3");
    h3.textContent = "Information Company"
    let hr = document.createElement("hr");
    information__table__1.append(h3, hr)

    let div = document.createElement("div");
    div.classList.add("table__container__1");
    // 
    let div1 = document.createElement("div");
    let span1 = document.createElement("span");
    span1.textContent = "launches"
    let strong1 = document.createElement("strong");
    strong1.textContent = `${(Company.active) ? "Active" : "Low" }`
    div1.append(span1, strong1)

   // 
   let div2 = document.createElement("div");
   let span2 = document.createElement("span");
   span2.textContent = "Last_update of type"
   let strong2 = document.createElement("strong");
   strong2.textContent = `${Company.stages}`
   div2.append(span2, strong2)
  // 
  let div3 = document.createElement("div");
  let span3 = document.createElement("span");
  span3.textContent = "Number of propellants"
  let strong3 = document.createElement("strong");
  strong3.textContent = `${Company.boosters}`
  div3.append(span3, strong3)

  // 
  let div4 = document.createElement("div");
  let span4 = document.createElement("span");
  span4.textContent = "Type"
  let strong4 = document.createElement("strong");
  strong4.textContent = `${Company.type}`
  div4.append(span4, strong4)

  // 
  let div5 = document.createElement("div");
  let span5 = document.createElement("span");
  span5.textContent = "Landing legs"
  let strong5 = document.createElement("strong");
  strong5.textContent = `${Company.LandLandings}`
  div5.append(span5, strong5)

  // 
  let div6 = document.createElement("div");
  let span6 = document.createElement("span");
  span6.textContent = "Leg material"
  let strong6 = document.createElement("strong");
  strong6.textContent = `${(Company.LandLandings) ? Capsules.LandLandings.status : ""}`
  div6.append(span6, strong6)

  div.append(div4, div1, div2, div3, div5, div6)
  information__table__1.append(div)
  // 

  // <h3>Title</h3>
  // <hr>
  // <div class="table__container__1">
  //     <div>
  //         <span>Title</span>
  //         <strong>Hola</strong>
  //     </div>
      
  // </div>
}
export const tableCompanyColum2 = async (Capsules)=>{
  let information__table__2 = document.querySelector("#information__table__2");
  information__table__2.innerHTML = "";
  let h3 = document.createElement("h3");
  h3.textContent = "Engine information"
  let hr = document.createElement("hr");
  information__table__2.append(h3, hr)

  let div = document.createElement("div");
  div.classList.add("table__container__1");
  // 
  let div1 = document.createElement("div");
  let span1 = document.createElement("span");
  span1.textContent = "Maximum power loss"
  let strong1 = document.createElement("strong");
  strong1.textContent = `${(Company.last_update.last_update) ? Company.last_update.last_update : 0}`
  div1.append(span1, strong1)

  // 
  let div2 = document.createElement("div");
  let span2 = document.createElement("span");
  span2.textContent = "Engine availability"
  let strong2 = document.createElement("strong");
  strong2.textContent = `${(Company.last_update.layout) ? Company.last_update.layout : ""}`
  div2.append(span2, strong2)

  // 
  let div3 = document.createElement("div");
  let span3 = document.createElement("span");
  span3.textContent = "Number of engines"
  let strong3 = document.createElement("strong");
  strong3.textContent = `${(Company.last_update.number) ? Company.last_update.number : 0}`
  div3.append(span3, strong3)

  // 
  let div4 = document.createElement("div");
  let span4 = document.createElement("span");
  span4.textContent = "Stage 1 fuel"
  let strong4 = document.createElement("strong");
  strong4.textContent = `${(Company.last_update.propellant_1) ? Company.last_update.propellant_1 : ""}`
  div4.append(span4, strong4)

  // 
  let div5 = document.createElement("div");
  let span5 = document.createElement("span");
  span5.textContent = "Stage 2 fuel"
  let strong5 = document.createElement("strong");
  strong5.textContent = `${(Company.last_update.propellant_2) ? Company.last_update.propellant_2 : ""}`
  div5.append(span5, strong5)

  // 
  let div6 = document.createElement("div");
  let span6 = document.createElement("span");
  span6.textContent = "Type"
  let strong6 = document.createElement("strong");
  strong6.textContent = `${(Company.last_update.type) ? Company.last_update.type : 0} ${(Capsules.last_update.version) ? Capsules.last_update.status : ""}`
  div6.append(span6, strong6)

  div.append(div6, div1, div2, div3, div4, div5)
  information__table__2.append(div)
  // 

  // <h3>Title</h3>
  // <hr>
  // <div class="table__container__1">
  //     <div>
  //         <span>Title</span>
  //         <strong>Hola</strong>
  //     </div>
      
  // </div>
}  


    