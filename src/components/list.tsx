import { ReactNode } from 'react';

type ListProps = {
	renderItem: ReactNode;
};

export const List: React.FC<ListProps> = ({ renderItem }) => {
	return <ul>{renderItem}</ul>;
};
