const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);
let table=document.getElementById("table")
const getSum = () => {
//Add your code here
  let arr=Array.from(document.getElementByClassName("price"));
	alert(arr.innertext);
	let arr=Array.from(document.querySelectorAll(".price"));
	let sum=0;
	arr.forEach(item)=>
	{
		sum+=parseInt(item.innertext);
	});
let row=document.createElement("tr");
let cell1=document.createElement("td");
	cell1.innertext="Total is: ";
	let cell2=document.createElement("td");
	cell2.innertext=sum;
	row.appendChild(cell1)
	row.appendChild(cell2)
	table.appendChild(row)
};
getSumBtn.addEventListener("click", getSum);

