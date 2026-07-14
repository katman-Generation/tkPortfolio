import Grass from "./Grass";
import Goal from "./Goal";
import Crowd from "./Crowd";

export default function Stadium() {

    return (

        <div className="absolute inset-0">

            <Crowd />

            <Goal />

            <Grass />

        </div>

    );

}