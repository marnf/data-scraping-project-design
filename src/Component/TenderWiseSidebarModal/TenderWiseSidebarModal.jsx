
// import { useEffect, useState } from "react";
// import categoryImage from "../../assets/tenderwiseicons/Vector (5).png";
// import departMentImage from "../../assets/tenderwiseicons/category.png";
// import divisionImage from "../../assets/tenderwiseicons/division.png";
// import districtImage from "../../assets/tenderwiseicons/district.png";
// import sourceImage from "../../assets/tenderwiseicons/Source.png";



//     const TenderWiseSidebarModal = () => {
//         const [activeModal, setActiveModal] = useState(null);
//         const [categories, setCategories] = useState([]);
//         const [selectedCategory, setSelectedCategory] = useState(null);
//         const [sectors, setSectors] = useState([]);
//         const [showSectorDiv, setShowSectorDiv] = useState(false);
//         const [showSubSectorDiv, setShowSubSectorDiv] = useState(false);

//         // Category fetch
//         useEffect(() => {
//             if (activeModal === 1) {
//                 fetch("http://192.168.0.170:9009/api/v1/user/visitor/category")
//                     .then(res => res.json())
//                     .then(data => setCategories(data.data))
//                     .catch(err => console.error("Error fetching categories:", err));
//             }
//         }, [activeModal]);

//         // Handle category selection
//         const handleCategoryChange = (category) => {
//             setSelectedCategory(category);
//             setSectors(category.sectors || []);
//             setShowSectorDiv(category.sectors && category.sectors.length > 0);
//             setShowSubSectorDiv(false);
//         };

//         return (
//             <div className="block max-w-fit text-start border rounded border-1 relative">
//                 <div>
//                     <button className="py-2 px-3 border-blue-600 border border-b w-full text-white bg-blue-600 rounded-t-md">
//                         Search By
//                     </button>
//                 </div>

//                 {/* Button 1 - Categories */}
//                 <div className="relative">
//                     <button
//                         className={`px-3 py-2 gap-2 border border-b w-full text-black flex justify-start items-center ${activeModal === 1 ? "bg-blue-300 border-blue-300 text-white" : ""
//                             }`}
//                         onClick={() => setActiveModal(activeModal === 1 ? null : 1)}
//                     >
//                         <img src={categoryImage} alt="Categories" className="w-5 h-5" />
//                         Categories
//                     </button>

//                     {/* Categories Modal */}
//                     {activeModal === 1 && (
//                         <div className="absolute left-full ml-4 top-0 w-auto bg-blue-300 text-black p-4 rounded shadow-lg">
//                             <div className="flex gap-3 w-full">
//                                 {/* Categories List */}
//                                 {/* Categories List */}
//                                 <div className="h-72 w-full sm:w-auto min-w-[150px] max-w-[300px] overflow-y-auto flex flex-col justify-between">
//                                     <div className="overflow-y-auto">
//                                         <p className="font-bold">Categories</p>
//                                         {categories.map((category) => (
//                                             <div key={category.id} className="flex items-start mt-1 gap-2 border-b border-black py-1">
//                                                 <input
//                                                     type="radio"
//                                                     name="category"
//                                                     value={category.id}
//                                                     onChange={() => handleCategoryChange(category)}
//                                                     className="mt-1"
//                                                 />
//                                                 <label className="break-words whitespace-normal max-w-[150px] ">{category.name}</label>
//                                             </div>
//                                         ))}
//                                     </div>
//                                     <button className="px-3 py-1 bg-gray-400 rounded w-full sticky bottom-0" onClick={() => setActiveModal(null)}>
//                                         Cancel
//                                     </button>
//                                 </div>


//                                 {/* Sectors List */}
//                                 {showSectorDiv && (
//                                     <div className="h-72 w-full sm:w-auto min-w-[150px] max-w-[300px] overflow-y-auto flex flex-col justify-between">
//                                         <div className="overflow-y-auto">
//                                             <p className="font-bold">Sectors</p>
//                                             {sectors.map((sector) => (
//                                                 <div key={sector.id} className="flex items-center gap-2">
//                                                     <input type="radio" name="sector" value={sector.id} onChange={() => setShowSubSectorDiv(true)} />
//                                                     <label>{sector.name}</label>
//                                                 </div>
//                                             ))}
//                                         </div>
//                                         <button
//                                             className="px-3 py-1 bg-gray-400 rounded w-full sticky bottom-0"
//                                             onClick={() => setShowSectorDiv(false)}
//                                         >
//                                             Cancel
//                                         </button>
//                                     </div>
//                                 )}

//                                 {/* Sub-Sectors List */}
//                                 {showSubSectorDiv && (
//                                     <div className="h-72 w-1/3 overflow-y-auto flex flex-col justify-between">
//                                         <div className="overflow-y-auto">
//                                             <p className="font-bold">Sub-Sectors</p>
//                                         </div>
//                                         <button
//                                             className="px-3 py-1 bg-gray-400 rounded w-full sticky bottom-0"
//                                             onClick={() => setShowSubSectorDiv(false)}
//                                         >
//                                             Cancel
//                                         </button>
//                                     </div>
//                                 )}
//                             </div>
//                         </div>
//                     )}


//                 </div>

//                 {/* Button 2 - Department */}
//                 <div className="relative">
//                     <button
//                         className={`px-3 py-2 gap-2 border border-b w-full text-black flex justify-start items-center ${activeModal === 2 ? "bg-blue-300 text-white border-blue-300" : ""
//                             }`}
//                         onClick={() => setActiveModal(activeModal === 2 ? null : 2)}
//                     >
//                         <img src={departMentImage} alt="Department Group" className="w-5 h-5" />
//                         Department
//                     </button>

//                     {activeModal === 2 && (
//                         <div className="absolute left-full ml-4 top-0 w-64 bg-blue-300 text-black p-4 rounded shadow-lg">
//                             <p>Department Group Modal</p>
//                             <button className="mt-2 px-3 py-1 bg-gray-400 rounded" onClick={() => setActiveModal(null)}>
//                                 Close
//                             </button>
//                         </div>
//                     )}
//                 </div>

//                 {/* Button 3 - Division */}
//                 <div className="relative">
//                     <button
//                         className={`px-3 py-2 gap-2 border border-b w-full text-black flex justify-start items-center ${activeModal === 3 ? "bg-blue-300 text-white border-blue-300" : ""
//                             }`}
//                         onClick={() => setActiveModal(activeModal === 3 ? null : 3)}
//                     >
//                         <img src={divisionImage} alt="Division Group" className="w-5 h-5" />
//                         Division Group
//                     </button>

//                     {activeModal === 3 && (
//                         <div className="absolute left-full ml-4 top-0 w-64 bg-blue-300 text-black p-4 rounded shadow-lg">
//                             <p>Division Group Modal</p>
//                             <button className="mt-2 px-3 py-1 bg-gray-400 rounded" onClick={() => setActiveModal(null)}>
//                                 Close
//                             </button>
//                         </div>
//                     )}
//                 </div>

//                 {/* Button 4 - District */}
//                 <div className="relative">
//                     <button
//                         className={`px-3 py-2 gap-2 w-full text-black flex justify-start items-center ${activeModal === 4 ? "bg-blue-300 text-white border-blue-300" : ""
//                             }`}
//                         onClick={() => setActiveModal(activeModal === 4 ? null : 4)}
//                     >
//                         <img src={districtImage} alt="District" className="w-5 h-5" />
//                         District
//                     </button>

//                     {activeModal === 4 && (
//                         <div className="absolute left-full ml-4 top-0 w-64 bg-blue-300 text-black p-4 rounded shadow-lg">
//                             <p>District Modal</p>
//                             <button className="mt-2 px-3 py-1 bg-gray-400 rounded" onClick={() => setActiveModal(null)}>
//                                 Close
//                             </button>
//                         </div>
//                     )}
//                 </div>

//                 {/* Button 5 - Source */}
//                 <div className="relative">
//                     <button
//                         className={`px-3 py-2 gap-2 w-full text-black flex justify-start items-center rounded-b-lg ${activeModal === 5 ? "bg-blue-300 text-white border-blue-300" : ""
//                             }`}
//                         onClick={() => setActiveModal(activeModal === 5 ? null : 5)}
//                     >
//                         <img src={sourceImage} alt="Source" className="w-5 h-5" />
//                         Source
//                     </button>

//                     {activeModal === 5 && (
//                         <div className="absolute left-full ml-4 top-0 w-64 bg-blue-300 text-black p-4 rounded shadow-lg">
//                             <p>Source Modal</p>
//                             <button className="mt-2 px-3 py-1 bg-gray-400 rounded" onClick={() => setActiveModal(null)}>
//                                 Close
//                             </button>
//                         </div>
//                     )}
//                 </div>
//             </div>
//         );
//     };

//     export default TenderWiseSidebarModal;






import { useEffect, useState } from "react";
import categoryImage from "../../assets/tenderwiseicons/Vector (5).png";
import departMentImage from "../../assets/tenderwiseicons/category.png";
import divisionImage from "../../assets/tenderwiseicons/division.png";
import districtImage from "../../assets/tenderwiseicons/district.png";
import sourceImage from "../../assets/tenderwiseicons/Source.png";

const TenderWiseSidebarModal = () => {
    const [activeModal, setActiveModal] = useState(null);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedSector, setSelectedSector] = useState(null);
    const [sectors, setSectors] = useState([]);
    const [subSectors, setSubSectors] = useState([]);
    const [showSectorDiv, setShowSectorDiv] = useState(false);
    const [showSubSectorDiv, setShowSubSectorDiv] = useState(false);

    // Category fetch
    useEffect(() => {
        if (activeModal === 1) {
            fetch("http://192.168.0.170:9009/api/v1/user/visitor/category")
                .then(res => res.json())
                .then(data => setCategories(data.data))
                .catch(err => console.error("Error fetching categories:", err));
        }
    }, [activeModal]);

    // Handle category selection
    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setSectors(category.sectors || []);
        setShowSectorDiv(category.sectors && category.sectors.length > 0);
        setShowSubSectorDiv(false);
    };


    const handleSelectedSector = (sector) => {
        setSelectedSector(sector);

    };


    useEffect(() => {
        if (selectedSector && selectedSector.id) {
            const selectedSectorId = selectedSector.id;
            fetch(`http://192.168.0.170:9009/api/v1/user/visitor/sector`)
                .then((res) => res.json())
                .then((data) => {
                    // Filter sub-sectors under the selected sector
                    const filteredSubSectors = data.data.find(
                        (sector) => sector.id === selectedSectorId
                    )?.sub_sectors || []; // sub_sectors is expected to be an array

                    setSubSectors(filteredSubSectors);
                    setShowSubSectorDiv(filteredSubSectors.length > 0);
                })
                .catch((err) => console.error("Error fetching sub-sectors:", err));
        }
    }, [selectedSector]);


    return (
        <div className="block max-w-fit text-start border rounded border-1 relative">
            <div>
                <button className="py-2 px-3 border-blue-600 border border-b w-full text-white bg-blue-600 rounded-t-md">
                    Search By
                </button>
            </div>

            {/* Button 1 - Categories */}
            <div className="relative">
                <button
                    className={`px-4 py-3 gap-2 border w-full text-black flex justify-start items-center rounded-md shadow-sm transition duration-200 ${activeModal === 1 ? "bg-blue-500 border-blue-500 text-white" : "bg-white border-gray-300"
                        }`}
                    onClick={() => setActiveModal(activeModal === 1 ? null : 1)}
                >
                    <img src={categoryImage} alt="Categories" className="w-5 h-5" />
                    Categories
                </button>

                {/* Categories Modal */}
                {activeModal === 1 && (
                    <div className="absolute left-full ml-4 top-0  text-black p-5   max-w-[95vw]">
                        <div className="flex flex-col md:flex-row lg:flex-row gap-4 w-full">
                            {/* Categories List */}
                            <div className="h-80 z-20 w-full sm:w-60 max-w-xs overflow-y-auto flex flex-col border rounded-lg shadow-md bg-white p-3">
                                <div className="sticky top-0 bg-white z-10 p-2 shadow-sm">
                                    <p className="font-bold text-lg mb-2">Categories</p>
                                </div>
                                <div className="flex-1 overflow-y-auto">
                                    {categories.map((category) => (
                                        <div key={category.id} className="flex items-start gap-2 mb-2">
                                            <input
                                                type="radio"
                                                name="category"
                                                value={category.id}
                                                onChange={() => handleCategoryChange(category)}
                                                className="mt-1"
                                            />
                                            <label className="break-words whitespace-normal max-w-[200px]">
                                                {category.name}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                                <button
                                    className="mt-3 px-4 py-2 bg-gray-400 text-white rounded-lg w-full"
                                    onClick={() => setActiveModal(null)}
                                >
                                    Close
                                </button>
                            </div>

                            {/* Sectors List */}
                            {showSectorDiv && (
                                <div className="h-80 z-20 bg-white w-full sm:w-60 max-w-xs overflow-y-auto flex flex-col border rounded-lg shadow-md p-3">
                                    <div className="sticky top-0 bg-white z-10 p-2 shadow-sm">
                                        <p className="font-bold text-lg mb-2">Sectors</p>
                                    </div>
                                    <div className="flex-1 overflow-y-auto">
                                        {sectors.map((sector) => (
                                            <div key={sector.id} className="flex items-center gap-2 mb-2">
                                                <input
                                                    type="radio"
                                                    name="sector"
                                                    value={sector.id}
                                                    onChange={() => handleSelectedSector(sector)}
                                                />
                                                <label>{sector.name}</label>
                                            </div>
                                        ))}
                                    </div>
                                    <button
                                        className="mt-3 px-4 py-2 bg-gray-400 text-white rounded-lg w-full"
                                        onClick={() => setShowSectorDiv(false)}
                                    >
                                        Close
                                    </button>
                                </div>
                            )}

                            {/* Sub-Sectors List */}
                            {showSubSectorDiv && (
                                <div className="h-80 z-20 bg-white w-full sm:w-60 max-w-xs overflow-y-auto flex flex-col border rounded-lg shadow-md p-3">
                                    <div className="sticky top-0 bg-white z-10 p-2 shadow-sm">
                                        <p className="font-bold text-lg mb-2">Sub-Sectors</p>
                                    </div>
                                    <div className="flex-1 overflow-y-auto">
                                        {subSectors.map((subSector) => (
                                            <div key={subSector.id} className="flex items-start gap-2 mb-2">
                                                <input
                                                    type="radio"
                                                    name="subSector"
                                                    value={subSector.id}
                                                    onChange={() => handleSelectedSector(subSector)}
                                                    className="mt-1"
                                                />
                                                <label>{subSector.name}</label>
                                            </div>
                                        ))}
                                    </div>
                                    <button
                                        className="mt-3 px-4 py-2 bg-gray-400 text-white rounded-lg w-full"
                                        onClick={() => setShowSubSectorDiv(false)}
                                    >
                                        Close
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>



        </div>
    );
};

export default TenderWiseSidebarModal;
