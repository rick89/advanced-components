import { useRef } from 'react';
import { Input } from './components/input';
import { Form } from './components/form';
import { Button } from './components/button';
import type { FormHandle } from './components/form';

function App() {
	const form = useRef<FormHandle>(null);
	const handleSave = (data: unknown) => {
		// because we are sure we use the 'as' Type Cast
		// else you would want to use Type Guards like so:
		// if 'name' in data
		// if 'age' in data
		// this way we know to continue only if the properties
		// we want exist in the data object
		const extractedData = data as { name: string; age: string };
		console.log(extractedData);
		form.current?.clear();
	};

	return (
		<main>
			<Form ref={form} onSave={(data) => handleSave(data)}>
				<Input id='name' label='name' type='text' />
				<Input id='age' label='age' type='number' />
				<Button>Save</Button>
			</Form>
		</main>
	);
}

export default App;
