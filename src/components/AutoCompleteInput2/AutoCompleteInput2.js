import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './AutoCompleteInput2.module.css';

function AutoCompleteInput2() {
	const userNames = useSelector((state) => state.userNames);
	const [suggestions, setSuggestions] = useState([]);

	const changeHandler = (e) => {
		const input = e.target.value;
		if (!input.trim()) return setSuggestions([]);

		const constrains = new RegExp(input);

		setSuggestions(userNames.filter((item) => item.match(constrains)));
	};
	return (
		<div className={styles.box}>
			<label htmlFor='input2'>JS Approach</label>
			<input
				type='text'
				onChange={changeHandler}
				autoComplete='off'
				placeholder='Enter your name - JS'
			/>
			{suggestions.length > 0 && (
				<div className={styles.results}>
					<ul>
						{suggestions.map((item) => (
							<li key={item}>{item}</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
}

export default AutoCompleteInput2;
