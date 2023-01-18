import { useRef } from "react";
import { io } from "socket.io-client";
import useAudioStreamer from "../hooks/useAudioStreamer";
import { Headphones } from "react-feather";

const URL = "http://localhost:3000";
// const URL = "http://localhost:5173";

function Listen() {
    const socketRef = useRef(io(URL));
    useAudioStreamer(socketRef.current);

    return (
        <div className="flex flex-col items-center h-full">
            <h1 className="text-5xl font-bold">Listening...</h1>
            <div className="rounded-full bg-gray-700 p-6 mt-5">
                <Headphones size={50} />
            </div>
            <div className="rounded-full bg-gray-700 p-6 mt-5">
                <img height={200} src="./giphy.webp" />
            </div>
            
            <audio src={`${URL}/stream`} autoPlay />
        </div>
    );
}

export default Listen;
