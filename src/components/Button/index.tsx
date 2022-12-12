interface ButtonProps {
    className?: string;
    width?: number;
    height?: number;
    bg1?: string;
    bg2?: string;
    children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
    className = '',
    width = 200,
    height = 100,
    bg1 = "#FFFFFF",
    bg2 = "#000000",
    children
}: ButtonProps) => {
    return (
    <div className="drop-shadow-[-6px_6px_0px_rgba(0,0,0,0.25)]">
        <button className={`${className} flex items-center justify-center border-0 shadow-[0_0_8px_2px_rgba(18,113,255,1)] polyborder-s`}
            style={{
                width: width,
                height: height,
                background: bg1
            }}
        >
            <div
                className={`${className} polyborder-s2 flex justify-center items-center font-molot !font-normal tracking-wider`}
                style={{
                    width: width - 6,
                    height: height - 6,
                    background: bg2
                }}
            >
                {children}
            </div>
        </button>
    </div>
    )
}

export default Button;