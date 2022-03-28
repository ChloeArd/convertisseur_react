import "./Converter.css";
import {set, useForm} from "react-hook-form";
import PropTypes from "prop-types";
import {useEffect, useState} from "react";

export const Converter = function ({unity, setUnity}) {
    const { register, handleSubmit } = useForm();


    function onSubmit(data) {
        // eslint-disable-next-line no-mixed-operators
        if (data.startUnity === "m" && data.endUnity === "cm" || data.startUnity === "dm" && data.endUnity === "mm" || data.startUnity === "l" && data.endUnity === "cml" || data.startUnity === "dl" && data.endUnity === "ml") {
            document.getElementById("convertedValue").value = parseFloat(data.startValue) * 100;
        }
        // eslint-disable-next-line no-mixed-operators
        else if (data.startUnity === "m" && data.endUnity === "dm" || data.startUnity === "dm" && data.endUnity === "cm" || data.startUnity === "cm" && data.endUnity === "mm" || data.startUnity === "l" && data.endUnity === "dl" || data.startUnity === "dl" && data.endUnity === "cl" || data.startUnity === "cl" && data.endUnity === "ml") {
            document.getElementById("convertedValue").value = parseFloat(data.startValue) * 10;
        }
        // eslint-disable-next-line no-mixed-operators
        else if (data.startUnity === "m" && data.endUnity === "mm" || data.startUnity === "l" && data.endUnity === "ml") {
            document.getElementById("convertedValue").value = parseFloat(data.startValue) * 1000;
        }
        // eslint-disable-next-line no-mixed-operators
        else if (data.startUnity === "cm" && data.endUnity === "m" || data.startUnity === "mm" && data.endUnity === "dm" || data.startUnity === "cl" && data.endUnity === "l" || data.startUnity === "ml" && data.endUnity === "dl") {
            document.getElementById("convertedValue").value = parseFloat(data.startValue) / 100;
        }
        // eslint-disable-next-line no-mixed-operators
        else if (data.startUnity === "dm" && data.endUnity === "m" || data.startUnity === "cm" && data.endUnity === "dm" || data.startUnity === "mm" && data.endUnity === "cm" || data.startUnity === "dl" && data.endUnity === "l" || data.startUnity === "cl" && data.endUnity === "dl" || data.startUnity === "ml" && data.endUnity === "cl") {
            document.getElementById("convertedValue").value = parseFloat(data.startValue) / 10;
        }
        // eslint-disable-next-line no-mixed-operators
        else if (data.startUnity === "mm" && data.endUnity === "m" || data.startUnity === "ml" && data.endUnity === "l") {
            document.getElementById("convertedValue").value = parseFloat(data.startValue) / 1000;
        }
    }

    function onChangeUnity(e) {
        console.log(e.target.value);
        return e.target.value;
    }

    function onReset() {
        window.location.reload();
    }

    const [unity2, setUnity2] = useState("");
    useEffect( () => {
        return unity2;
    }, [unity2]);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flexRow">
                <div className="flexColumn">
                    <input id="startValue" {...register("startValue", {required : true})} />
                    <select id="startUnity" {...register("startUnity")} onChange={e => setUnity2(e.target.value)}>
                        {unity.map(value => <option value={value}>{value}</option>)}
                    </select>
                </div>
                <div className="flexColumn">
                    <input id="convertedValue" {...register("convertedValue")} readOnly={true}/>
                    <select id="endUnity" {...register("endUnity")} >
                        {unity
                            .filter(value => unity2.charAt(unity2.length-1) === value.charAt(value.length-1) )
                            .map(value => <option value={value}>{value}</option>)
                        }
                    </select>
                </div>
            </div>


            <input id="submit" type="submit" value="Valider" />
            <button id="reset" onClick={onReset}>Réinitialiser</button>
        </form>
    );
}

Converter.propTypes = {

}