
export default function HighlightCard({value, text}) {

    return (
        <div className="font-semibold flex flex-col justify-center items-center gap-3">
            <h3 className="text-7xl">{value}</h3>
            <p className="small-caps font-thin font-lg">{text}</p>
        </div>
    )
}