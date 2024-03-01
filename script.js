function insert_Row() {
    //Write your code here
  
  const table=document.getElementById('sampleTable');
	var newRow = table.insertRow(0);

	const tr=document.createElement('tr');
	const td1=document.createElement('td');
	const td2=document.createElement('td');
	td1.innerText='New Cell1';
	td2.innerText='New Cell2';

	newRow.append(td1);
	newRow.append(td2);
	//table.(tr);
	
	
}
