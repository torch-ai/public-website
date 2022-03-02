import Nav from '../components/navigation';
import React, { useState } from 'react';

const Layout = ({ children }) => {
	const [activeBackground, setActiveBackground] = useState(undefined);

	return (
		<div>
			<Nav activeBackground={activeBackground} />
			{React.cloneElement(children, {
				setActiveBackground,
				activeBackground,
			})}
		</div>
	);
};

export default Layout;
