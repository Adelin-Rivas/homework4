
let addRow=document.getElementById("addRow");
let tableName=document.getElementById("table");
let addColum=document.getElementById("addColum");
let delRow=document.getElementById("delR");
let delCol=document.getElementById("delC")


 
addRow.addEventListener("click", rowHandler);
addColum.addEventListener("click", colHandler);
delRow.addEventListener("click", delR);
delCol.addEventListener("click", delC);



function delC()
{
  let rowSize=tableName.rows.length;
  
    
  for(let i=0;i<rowSize; i++)
  {
    let rowlocation = tableName.rows[i];
    
      rowlocation.deleteCell(0)
     
  }

}
function delR()
{
   tableName.deleteRow(-1);

}



function colHandler()
{
 

    let rowSize=tableName.rows.length;
  
    
    for(let i=0;i<rowSize; i++)
    {
      let rowlocation = tableName.rows[i];
      
      let cell= rowlocation.insertCell(-1);
      cell.innerHTML=" "+i;
      cell.className = "cellBlock";
      cell.addEventListener('click', changeColor);
  }

}

function changeColor(event){
   event.target.className = "blue";

}


function rowHandler()

{
  
   
    let rowSize=tableName.rows[0].cells.length;
    let row= tableName.insertRow(-1)
    
    for(let i=0; i<rowSize; i++)
     
      {

        cell= document.createElement("td");
        cell.id=""+i+" ";
        let text= document.createTextNode(" "+i);
        cell.appendChild(text);
        row.appendChild(cell);

      }
      
      
      
     


     }
     

