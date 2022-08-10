import { SquareValue } from "../types/types";
import "./Square.css"

type SqureProps = {
    value: SquareValue
    clickSquareHandler:()=>void
}
const Square: React.FC<SqureProps> = (props) => {
    return (
        // call to parent(board)-clickSquareHandler
        <div className="square" onClick={props.clickSquareHandler}>
            {props.value}
        </div>
    );
};

export default Square;