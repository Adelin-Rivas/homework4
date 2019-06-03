let tableName=document.getElementById("table");
let addRow=document.getElementById("addRow");

console.log(tableName);
addRow.addEventListener("click", rowHandler);

function rowHandler()

{
      
    
    let rowSize=tableName.rows.length;
     console.log(rowSize);
     
     for(let i=0;i<rowSize; i++)
     {
       let rowlocation = tableName.rows[i];
       console.log("--->" + rowlocation);
       let cell= rowlocation.insertCell(0);
       cell.innerHTML="i";
     }
     

}