function FormModel ({closeModel}){

    return <div className="bg-[rgba(0,0,0,0.8)] w-full h-[800px] fixed -top-24">

    <div className=" bg-white fixed top-10 bottom-3 left-[490px] w-[400px] rounded p-10" >

        <h1>Send us your complaints please</h1>

        <form>
            <input className="h-[50px] border-orange-300 border-4 rounded w-[300px] " type="text" placeholder="Enter title" />
            <textarea className="mt-4 mb-4  border-orange-300 border-4 rounded" rows={10} cols={38} />
        </form>

        <div className="flex gap-10"> 
        <button onClick={closeModel} className="bg-red-300 text-2xl py-1 rounded px-4">Close</button>
        <button className="bg-orange-500 text-2xl py-1 rounded px-4">Close</button>
        </div>

    </div>
    </div>
}

export default FormModel