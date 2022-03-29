import "./Converter.css";
import PropTypes from 'prop-types';
import {useEffect, useState} from "react";

export const Converter = function (props) {

    const [startValue, setStartValue] = useState('');

    const [startUnity, setStartUnity] = useState("");
    useEffect( () => {
        return startUnity;
    }, [startUnity]);

    const [endUnity, setEndUnity] = useState("");
    useEffect( () => {
        return endUnity;
    }, [endUnity]);

    function onSubmit() {
        if (isNaN(document.getElementById("startValue").value) || document.getElementById("startValue").value === "") {
            alert("Veuillez entrer un nombre");
            window.location.reload();
        }

        if (startUnity === "m" && endUnity === "cm" || startUnity === "dm" && endUnity === "mm" || startUnity === "l" && endUnity === "cml" || startUnity === "dl" && endUnity === "ml") {
            document.getElementById("convertedValue").value = parseFloat(startValue) * 100;
        }
        else if (startUnity === "m" && endUnity === "dm" || startUnity === "dm" && endUnity === "cm" || startUnity === "cm" && endUnity === "mm" || startUnity === "l" && endUnity === "dl" || startUnity === "dl" && endUnity === "cl" || startUnity === "cl" && endUnity === "ml") {
            document.getElementById("convertedValue").value = parseFloat(startValue) * 10;
        }
        else if (startUnity === "m" && endUnity === "mm" || startUnity === "l" && endUnity === "ml") {
            document.getElementById("convertedValue").value = parseFloat(startValue) * 1000;
        }
        else if (startUnity === "cm" && endUnity === "m" || startUnity === "mm" && endUnity === "dm" || startUnity === "cl" && endUnity === "l" || startUnity === "ml" && endUnity === "dl") {
            document.getElementById("convertedValue").value = parseFloat(startValue) / 100;
        }
        else if (startUnity === "dm" && endUnity === "m" || startUnity === "cm" && endUnity === "dm" || startUnity === "mm" && endUnity === "cm" || startUnity === "dl" && endUnity === "l" || startUnity === "cl" && endUnity === "dl" || startUnity === "ml" && endUnity === "cl") {
            document.getElementById("convertedValue").value = parseFloat(startValue) / 10;
        }
        else if (startUnity === "mm" && endUnity === "m" || startUnity === "ml" && endUnity === "l") {
            document.getElementById("convertedValue").value = parseFloat(startValue) / 1000;
        }
    }

    return (
        <div id="Converter">
            <div className="flexRow">
                <div className="flexColumn">
                    <input id="startValue" name="startValue" onChange={e => setStartValue(e.target.value)} />
                    <select id="startUnity" name="startUnity" onChange={e => setStartUnity(e.target.value)}>
                        <option>Sélectionner</option>
                        {props.unity.map(value => <option value={value}>{value}</option>)}
                    </select>
                </div>
                <div className="flexColumn">
                    <input id="convertedValue" name="convertedValue" readOnly={true}/>
                    <select id="endUnity" name="endUnity" onChange={e => setEndUnity(e.target.value)}>
                        {startUnity !== "" ? <option>Sélectionner</option> : ""}
                        {props.unity
                            .filter(value => startUnity.charAt(startUnity.length-1) === value.charAt(value.length-1) )
                            .map(value => <option value={value}>{value}</option>)
                        }
                    </select>
                </div>
            </div>
            <button id="submit" onClick={onSubmit}>Valider</button>
            <button id="reset" onClick={() => window.location.reload()}>Réinitialiser</button>
        </div>
    );
}

Converter.propTypes = {
    unity: PropTypes.array.isRequired
};