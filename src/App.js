import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import AutoCompleteInput from './components/AutoCompleteInput/AutoCompleteInput.js';
import AutoCompleteInput2 from './components/AutoCompleteInput2/AutoCompleteInput2.js';
import { ACTIONS } from './store/index.js';

const App = () => {
	const userNames = useSelector((state) => state.userNames);

	const dispatch = useDispatch();
	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((res) => res.json())
			.then((d) => {
				const names = [];
				for (let item of d) {
					names.push(item.name);
				}
				dispatch({
					type: ACTIONS.SET_USER_NAMES,
					payload: { userNames: names },
				});
			});
	}, []);

	return (
		<div>
			<AutoCompleteInput />
			<AutoCompleteInput2 />
		</div>
	);
};

export default App;
