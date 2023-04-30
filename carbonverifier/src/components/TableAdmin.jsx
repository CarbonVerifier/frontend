import { useEffect, useState } from 'react';
import ItemTableAdmin from './ItemTableAdmin';
import GerdauLogo from '../assets/gerdau.png';
import FaberCastellLogo from '../assets/FaberCastell.png';
import KlabinLogo from '../assets/Klabin.png';
import UnileverLogo from '../assets/Unilever.png';
import ValeLogo from '../assets/Vale.png';
import axios from 'axios';

export default function TableAdmin() {
	const [events, setEvents] = useState([]);

	useEffect(() => {
		axios
			.get('http://localhost:3001/events')
			.then((response) => {
				setEvents(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	function getLogo(company) {
		if (company === 'Gerdau') {
			return GerdauLogo;
		} else if (company === 'FaberCastell') {
			return FaberCastellLogo;
		} else if (company === 'Klabin') {
			return KlabinLogo;
		} else if (company === 'Unilever') {
			return UnileverLogo;
		} else if (company === 'Vale') {
			return ValeLogo;
		}
	}

	return (
		<div className="h-screen w-full bg-background w-100">
			<div className="w-full h-96 bg-gray-table bg-opacity-50 rounded-md mt-8 ml-8 mr-8 overflow-auto relative z-50">
				<div className="h-0.5"></div>
				{events.map((event) => (
					<ItemTableAdmin key={event.contract_address} logo={getLogo(event.company)} name={event.company} address={event.contract_address} payload={event.payload} date={event.date} />
				))}
			</div>
		</div>
	);
}
