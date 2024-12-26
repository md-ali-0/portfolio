export default function Loading() {
    return (
        <div className="flex items-center justify-center h-screen bg-[#111111]">
            <div className="flex items-center space-x-2">
                <span className="text-2xl text-white">Loading...</span>
                <div className="animate-spin rounded-full border-4 border-t-4 border-gray-200 w-8 h-8"></div>
            </div>
        </div>
    );
}
