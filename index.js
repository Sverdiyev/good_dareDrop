// 1. Please write a function that shows the usage of closures

const closureData = [1, 2, 3, 4, 5];
export function closureFn() {
	for (let item of closureData) {
		console.log(item);
		//closureData is an example of closure.
		//If you were to import the closureFn in a different file it would still log 1,2,3,4,5
		//because it would have access to encapsulated closureData array
	}
}

// 2. Please write a function that returns a sum of array items
// example input [9, 1, 22, 0, 2]
// example output 34

export const arraySum = (arr) => arr.reduce((prev, curr) => prev + curr, 0);
export const arraySum2 = (arr) => {
	let sum = 0;
	for (let el of arr) {
		sum += el;
	}
	return sum;
};

// 3. Please write a recursive function that flattens a list of items
// example input [[2, [4, [44,5,6]]], [4,5,6], [[2,4], 4], 5]]
// example output [2, 4, 44, 5, 6, 4, 5, 6, 2, 4, 4, 5]

export const flatArr = (arr) => {
	let result = [];
	for (let i = 0; i < arr.length; i++) {
		if (!Array.isArray(arr[i])) {
			result.push(arr[i]);
			continue;
		}
		if (Array.isArray(arr[i])) {
			result = result.concat(flatArr(arr[i]));
		}
	}

	return result;
};

// 4. Please write a function that finds all common elements of two arrays(only primitive types as array elements, order doesn't matter)
// example inputs ['b', 3, 4, 76, 'c'], ['a', 'b', 4, 76, 21, 'e']
// example output ['b', 4, 76]

export const commonElements = (arr1, arr2) => {
	const result = [];
	for (let i = 0; i < arr1.length; i++) {
		if (arr2.includes(arr1[i])) result.push(arr1[i]);
	}
	return result;
};
export const commonElements2 = (arr1, arr2) =>
	arr1.filter((item) => arr2.includes(item));

// 5. Please write a function that finds all different elements of two arrays(only primitive types as array elements, order doesn't matter)
// example inputs ['b', 3, 4, 76, 'c'], ['a', 'b', 4, 76, 21, 'e']
// example output ['a', 3, 21, 'c', 'e']

export const diffElements = (arr1, arr2) => {
	const result = [];
	for (let i = 0; i < arr1.length; i++) {
		if (!arr2.includes(arr1[i])) result.push(arr1[i]);
	}
	for (let i = 0; i < arr2.length; i++) {
		if (!arr1.includes(arr2[i])) result.push(arr2[i]);
	}

	return result;
};
export const diffElements2 = (arr1, arr2) => [
	...arr1.filter((item) => !arr2.includes(item)),
	...arr2.filter((item) => !arr1.includes(item)),
];

// 6. Please write a function that takes two arrays of items and returns an array of tuples made from two input arrays at the same indexes. Excessive items should be dropped.
// example input [1,2,3], [4,5,6,7]
// example output [[1,4], [2,5], [3,6]]

export const arrayTuples = (arr1, arr2) => {
	let length = arr1.length;
	if (arr1.length > arr2.length) length = arr2.length;

	const result = [];
	for (let i = 0; i < length; i++) {
		result.push([arr1[i], arr2[i]]);
	}
	return result;
};

// 7. Please write a function which takes a path(path is an array of keys) and object, then returns value at this path. If value at path doesn't exists, return undefined.
// example inputs ['a', 'b', 'c', 'd'], { a: { b: { c: { d: '23' } } } }
// example output '23'

export const pathFinder = (arr, obj) => {
	let tmp = obj;
	for (let key of arr) {
		tmp = tmp[key];
	}
	return tmp;
};

// 8. Please write compare function which compares 2 objects for equality.
// example input { a: 'b', c: 'd' }, { c: 'd', a: 'b' }  /// output true
// example input { a: 'c', c: 'a' }, { c: 'd', a: 'b', q: 's' }  /// output false

export const objectsEqual = (obj1, obj2) => {
	//it was not specified whether checks for nested objects/arrays/functions etc were implemented.
	//if it were the target, i would add type guards and recursion

	//this would not work in case of nested objects / due to immutability.
	// with the provided examples it ensures that obj 2 is not mutaded during this check
	//and improves performance
	const tempObj = { ...obj2 };

	for (let key in obj1) {
		if (!(key in tempObj && obj1[key] === tempObj[key])) {
			return false;
		} else delete tempObj[key];
	}
	if (Object.keys(tempObj).length > 0) return false;

	return true;
};

// 9. Please write a function which takes a list of keys and an object, then returns this object, just without keys from the list
// example input ['color', 'size'], { color: 'Blue', id: '22', size: 'xl' }
// example output { id: '22' }

export const keyDeleter = (keys, obj) => {
	const tempObj = { ...obj };
	for (let key of keys) {
		delete tempObj[key];
	}
	return tempObj;
};
