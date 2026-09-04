function IconBox({ children }) {
    return (
        <div className="flex justify-center items-center p-2 px-4 bg-gradient-to-r from-green-200 to-green-400 rounded-2xl shadow-md">
            {children }
        </div>
     );
}

export default IconBox;