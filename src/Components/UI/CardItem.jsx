const Card = ({ item }) => {
    const { image, brand,title, type, likes, views } = item;
    return (
        <>
            <div className="max-w-sm mx-auto ">
                <div className="relative group bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                    <img src={image} alt={title} className="w-full h-80 object-cover cursor-pointer" />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-700 to-transparent text-white p-4 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <h2 className="text-md truncate max-w-[70%]">{title}</h2>
                        <div className="flex">
                            <i className="far fa-bookmark fa-xs mr-2 cursor-pointer text-black bg-white rounded-full p-3 hover:text-slate-500" ></i>
                            <i className="far fa-heart fa-xs cursor-pointer text-black bg-white rounded-full p-3 hover:text-slate-500"></i>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between items-center p-4 bg-transparent mt-0">
                    <div className="flex items-center">
                        <div className="w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center">
                            <i className="fas fa-user text-white"></i>
                        </div>
                        <span className="text-black ml-2">{brand}</span>
                        <span className="bg-slate-300 text-white text-xs py-1 px-1 rounded ml-2 hover:bg-black"><a href="/teams">{type}</a></span>
                    </div>
                    <div className="flex items-center">
                        <a href="/likes"><i className="fa fa-heart text-gray-400 mr-1 hover:text-pink-400"></i></a>
                        <span className="text-black">{likes}</span>
                        <i className="fas fa-eye text-gray-400 ml-4 mr-1"></i>
                        <span className="text-black">{views}</span>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Card;