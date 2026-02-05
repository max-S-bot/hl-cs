'use strict';

document.getElementById('seqButton').addEventListener('click', sequentialSearch);
document.getElementById('binButton').addEventListener('click', binarySearch);
document.getElementById('testButton').addEventListener('click', testAll);

let NUM = Math.floor(Math.random() * 100);

function sequentialSearch() {
	for (let i = 0; i < 100; i++)
		if (i === NUM)
			document.getElementById("output_sequential").innerHTML = `The number is ${i}`;
}

function binarySearch() {
	const guess = parseInt(document.getElementById("guess").value);
	const num_guesses = document.getElementById('num_guesses');
	num_guesses.innerHTML = 1 + parseInt(num_guesses.innerHTML);
	document.getElementById("output_binary").innerHTML += ' ' + guess;
	if (guess == NUM)
		document.getElementById('').innerHTML = 'That\'s right!';
}

const swap = (arr, idx1, idx2) => {
	const temp = arr[idx1];
	arr[idx1] = arr[idx2];
	arr[idx2] = temp;
}

//sort test array using Bubble Sort
function bubbleSort(arr) {
	document.getElementById("output_bubble").innerHTML = "before Bubble: " + arr
	for (let i = 0; i < arr.length; i++)
		for (let j = 0; j < arr.length - i; j++)
			if (arr[j] > arr[j + 1])
				swap(arr, j, j + 1)
	document.getElementById("output_bubble").innerHTML += "<br>after Bubble: " + arr
}

//sort test array using selection sort
function selectionSort(arr) {
	const output = document.getElementById('output_selection')
	output.innerHTML = '<br>before Selection: ' + arr;
	for (let i = 0; i < arr.length; i++) {
		let min = i;
		for (let j = i + 1; j < arr.length; j++)
			if (arr[j] < arr[min])
				min = j;
		if (min != i)
			swap(arr, min, i);
	}
	output.innerHTML += '<br>after Selection: ' + arr;
}


function testAll() {
	let arr = [-.1, 4, 7, 6, 1651, 234, 5, -18, 9, 2, 3];
	console.log('foo')
	console.log(document.getElementById('output_selection').innerHTML = 'foo bar')
	bubbleSort([...arr]);
	selectionSort([...arr]);
}



//HL Only: recursive binarySearch
function recursiveBinarySearch() {

}

//HL Only: recursive mergeSort()
function recursiveMergeSort(arr) {
	
}
