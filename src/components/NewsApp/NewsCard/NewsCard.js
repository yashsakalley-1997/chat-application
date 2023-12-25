import nbxIcon from "../../../assets/images/chatNbxIcon.png";

const NewsCard = ({message})=>{
    let arr = [];
    arr = message?.response?.length>10?message?.response.slice(0,10):message?.response;

    return (
        <div className="mb-10 ml-14 md:ml-24 flex flex-col gap-5 mt-10">
        <div className="flex gap-2">
            <div className="w-9 h-9 bg-violet-500 rounded-full flex items-center justify-center text-white">Y</div>

            <div className="text-white">
                <h3 className="text-white font-semibold text-2xl">You</h3>
                <span className="capitalize">{message?.question}</span>
            </div>
        </div>

        <div className="flex gap-2">
            <img className="h-10" src={nbxIcon} alt="icon"></img>

            <div className="text-white">
                <h3 className="text-white font-semibold text-2xl">ChatNbx</h3>
                {Array.isArray(message?.response) ? (
                    <div>
                        <h4 className="mb-2">{arr.length === 0?"No articles found for given input":"News Articles"}</h4>
                        {
                            arr.map((elem,index)=>(
                                <div className="text-left text-[#333333] bg-white p-4 mb-10 rounded-lg w-[80%]" key={index}>
                                    <h4 className="capitalize"><span className="font-bold">Title</span>: {elem?.title}</h4>
                                    <h4 className="capitalize"><span className="font-bold">Description</span>: {elem?.description}</h4>
                                    <h4 className="capitalize"><span className="font-bold">Author</span>: {elem?.author}</h4>
                                    <a className="underline" href={elem?.url} target="_blank">Link for the Article</a>
                                </div>
                            ))
                        }
                    </div>
                ):(
                    <span className="capitalize">{message?.response}</span>
                )
                }
            </div>
        </div>
    </div>
    )
}

export default NewsCard;
