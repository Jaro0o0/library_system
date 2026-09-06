function IconBox({ children }) {
    return (
        <div className="flex justify-center items-center  bg-gradient-to-r from-green-200 to-green-400 rounded-2xl shadow-md p-4">
            {children }
        </div>
     );
}

export default IconBox;