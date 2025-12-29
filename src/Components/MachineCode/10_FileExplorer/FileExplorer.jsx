import { AiOutlineFileAdd } from "react-icons/ai";
import { AiOutlineFolderAdd } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";


import React, { useState } from "react";
import { File, Folder, ChevronRight } from "lucide-react";
import { fileExplorerData } from "./fileExplorerdata";

function FileNode({ item, setRawdata }) {
    const [isOpen, setIsOpen] = useState(false);
    const [showForm, setShowForm] = useState(null)
    const [name, setName] = useState("")

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     setRawdata(prev =>{
    //         if (showForm === "file") {

    //         }
    //     })
    //     console.log(name)
    //     setShowForm(false)
    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("....")
        if (!name.trim()) return;
        const newNode = {
            id: Date.now().toString(),
            name: name.trim(),
            type: showForm,
            ...(showForm === "folder" ? { children: [] } : {})
        };
        const addNodeToTree = (nodes) => {
            return nodes.map((node) => {
                if (node.id === item.id && node.type === "folder") {
                    return {
                        ...node,
                        children: [...(node.children || []), newNode],
                    };
                }
                if (node.children) {
                    return {
                        ...node,
                        children: addNodeToTree(node.children),
                    };
                }
                return node;
            });
        };

        setRawdata((prev) => addNodeToTree(prev));
        setName("");
        setShowForm(null);
        setIsOpen(true);
    };

    const toggle = () => {
        if (item.type === "folder") {
            setIsOpen((prev) => !prev);
        }
    };

    return (
        <div className="pl-2 transition-all duration-300">
            <div
                className="flex items-center gap-1 cursor-pointer select-none"
                onClick={toggle}
            >
                {/* Arrow */}
                {item.type === "folder" && (
                    <ChevronRight
                        className={`h-3 w-3 transition-transform duration-300 ${isOpen ? "rotate-90" : ""
                            }`}
                    />
                )}

                {/* Icon */}
                {item.type === "folder" ? (
                    <Folder className="h-4 w-4 text-yellow-500" />
                ) : (
                    <File className="h-4 w-4 text-gray-500" />
                )}

                {/* Name */}
                <span className="text-sm">{item.name}</span>

                {/* Action */}
                <span> {item.type === "folder" && <AiOutlineFileAdd onClick={() => setShowForm("file")} className="text-xs text-gray-600 rounded bg-white shadow cursor-pointer " />}  </span>
                <span> {item.type === "folder" && <AiOutlineFolderAdd onClick={() => setShowForm("folder")} className="text-sm text-gray-600 rounded bg-white shadow  cursor-pointer " />}  </span>
            </div>

            {showForm && (
                <form
                    className="pl-6"
                    onSubmit={handleSubmit}>
                    <div className="relative">
                        <label className="absolute flex justify-center items-center h-full] top-1.5 left-1" htmlFor="">
                            {showForm === "folder" ? <Folder className="h-3 w-3 text-yellow-500" /> : <File className="h-3 w-3 text-gray-500" />}</label>
                        <button type="button" onClick={() => setShowForm(null)} className="absolute top-1 left-21"><IoMdClose className="text-xs cursor-pointer" /></button>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="border border-gray-400 w-25 ps-5 rounded p-1 outline-none text-[10px]" />
                    </div>
                </form>
            )}

            {/* Children */}
            {item.type === "folder" && isOpen && item.children && (
                <div className="pl-4 mt-1">
                    {item.children.map((child) => (
                        <FileNode setRawdata={setRawdata} key={child.id} item={child} />
                    ))}
                </div>
            )}
        </div>
    );
}


function FileExplorer() {
    const [rawdata, setRawdata] = useState(fileExplorerData)
    return (
        <div className="flex flex-col gap-1 text-sm">
            {rawdata.map((item) => (
                <FileNode key={item.id} item={item} setRawdata={setRawdata} />
            ))}
        </div>
    );
}

export default FileExplorer;
