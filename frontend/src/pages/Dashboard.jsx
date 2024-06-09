function Dashboard(){

    return <div>

        <div className="flex flex-col sm:flex-row justify-center gap-5 mt-5">

            <div className="w-[300px] h-[200px] bg-[#F6F2DD] border-b-8 border-blue-500 rounded text-center">5 Courses</div>
            <div className="w-[300px] h-[200px] border-b-8 border-orange-500 bg-[#F6F2DD] rounded text-center">200 Students</div>
            <div className="w-[300px] h-[200px] border-b-8 border-green-500 bg-[#F6F2DD] rounded text-center">$1040 Pending</div>

        </div>
    </div>
}

export default Dashboard