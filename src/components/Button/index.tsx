interface ButtonProps {
    className1?: string;
    className?: string;
    width?: number;
    height?: number;
    bg1?: string;
    bg2?: string;
    mb?: number;
    mxauto?: boolean;
    onClick?: () => void;
    children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
    className1 = '',
    className = '',
    width = 200,
    height = 100,
    bg1 = "#FFFFFF",
    bg2 = "#000000",
    mb = 0,
    mxauto,
    onClick,
    children
}: ButtonProps) => {
    return (
    <div className={`${className1} drop-shadow-[-6px_6px_0px_rgba(0,0,0,0.25)] active:drop-shadow-none active:-translate-x-0.5 active:translate-y-0.5`} style={{marginBottom: mb}}>
        <button className={`${mxauto ? "mx-auto" : ""} flex items-center justify-center border-0 shadow-[0_0_8px_2px_rgba(18,113,255,1)] sm:polyborder-s polyborder-tiny`} onClick={onClick}
            style={{
                width: width,
                height: height,
                background: bg1
            }}
        >
            <div
                className={`${className} sm:polyborder-s2 polyborder-tiny2 flex justify-center items-center font-molot !font-normal tracking-wider`}
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