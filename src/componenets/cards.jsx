import '../App.css'

function Cards({ loc, currency, setCurrency, amount, setAmount, object, isReadOnly }) {
    return (
        <>
            <link href="/src/styles.css" rel="stylesheet"></link>
            <div className='bg-white opacity-70 text-gray-800 flex-col rounded-md p-5 border-lg shadow-md'>
                <div className='text-black text-2xl'>{loc}: {currency}</div>
                <select
                    onChange={(e) => { setCurrency(e.target.value) }}>
                    {object.map((currCode) => (
                        <option key={currCode} value={currCode}>
                            {currCode}
                        </option>
                    ))}
                </select>
                <input
                    readOnly={isReadOnly}
                    type='number'
                    className='h-[30px] w-[200px] rounded-md border-2 m-3 shadow-2xl  text-center' placeholder={`Convert ${loc}`}
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)} />
            </div>
        </>
    )
}

export default Cards;