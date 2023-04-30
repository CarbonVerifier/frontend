export default function ItemTableAdmin(props) {
	const changeState = (props) => {
		if (props.payload.includes('exceeded')) {
			return 'bg-green-600 mx-8 py-4 rounded-full font-montserrat font-bold px-1 text-white';
		} else {
			return 'bg-red-600 mx-8 py-4 rounded-full font-montserrat font-bold px-1 text-white';
		}
	};

	return (
		<div className="w-100 h-16 bg-gray-table-topic rounded-md my-4 mx-4 container flex flex-row items-center justify-between">
			<img src={props.logo} className="h-10 pl-5" alt="logo" />
			<h1 className="font-montserrat font-bold px-16 text-white">{props.name}</h1>
			<h1 className="font-montserrat font-bold px-16 text-white">{props.date}</h1>
			<h1 className="font-montserrat font-bold px-16 text-white">{props.address}</h1>
			<h1 className="font-montserrat font-bold px-16 text-white">{props.payload}</h1>
			<div className={changeState(props)}>{props.payload.includes('exceeded') ? 'Regular' : 'Irregular'}</div>
		</div>
	);
}
