import { Direction } from 'views/Featured'

interface WrapperProps {
    className?: string;
    direction: Direction;
    children?: React.ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({
    className,
    direction,
    children
} : WrapperProps) => {
    console.log(direction)
    return (
        <div className={`${className} relative 
            ${
                direction === Direction.TopLeft ? "bg-secondary poly-top-left" :
                direction === Direction.TopRight ? "bg-secondary poly-top-right" :
                direction === Direction.BottomLeft || direction === Direction.BottomLeft2 ? "bg-[#EC26FD] poly-bottom-left" :
                direction === Direction.BottomRight || direction === Direction.BottomRight2 ? "bg-theme poly-bottom-right" :
                "bg-[#3150F2]"
            }`}
            
        >
            <div className={`mt-[3px] ml-[3px] top-[3px] left-[3px] bottom-[3px] right-[3px] w-[calc(100%-6px)] h-[calc(100%-6px)]  
                ${
                    direction === Direction.TopLeft ? "bg-[#272751] poly-top-left" :
                    direction === Direction.TopRight ? "bg-[#272751] poly-top-right" :
                    direction === Direction.BottomLeft ? "bg-gradient-to-b from-[#432292] to-[#25145B] poly-bottom-left" :
                    direction === Direction.BottomLeft2 ? "bg-[#272751] poly-bottom-left" :
                    direction === Direction.BottomRight ? "bg-gradient-to-b from-[#432292] to-[#25145B] poly-bottom-right" :
                    direction === Direction.BottomRight2 ? "bg-[#272751] poly-bottom-right" :
                    "bg-[#2B3368]"
                }`}
            >
                {children}
            </div>
        </div>
    )
}

export default Wrapper;