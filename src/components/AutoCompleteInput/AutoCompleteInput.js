import React from 'react';
import { useSelector } from 'react-redux';
import styles from './AutoCompleteInput.module.css';

function AutoCompleteInput() {
	const usernames = useSelector((state) => state.userNames);

	return (
		<div className={styles.box}>
			<label htmlFor='input1'>HTML approach</label>
			<input
				id='input1'
				type='search'
				list='names'
				placeholder='Enter a name - HTML'
			/>
			{usernames && (
				<datalist id='names'>
					{usernames.map((item) => (
						<option value={item} key={item} />
					))}
				</datalist>
			)}
		</div>
	);
}

export default AutoCompleteInput;
