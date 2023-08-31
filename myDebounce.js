const [inputs, setInputs] = useState([
    { label: "Name", name: "name", value: "" },
    { label: "Brand", name: "brand", value: "" },
    { label: "Barcode", name: "barcode", value: "" },
]);
const [timerId, setTimerId] = useState(undefined);
const [loading, setLoading] = useState(true);
const dispatch = useAppDispatch();
const handleInputChange =

    (index, value) => {
        const updatedInputs = inputs.map((input, i) => ({
            ...input,
            value: i === index ? value : input.value,
        }));
        setInputs(updatedInputs);
        timerId && clearTimeout(timerId);
        const id = +setTimeout(() => {
            if (value === "") {
                setLoading(true);
            }
            dispatch(onChangePhrase(updatedInputs));
            setTimerId(undefined);
        }, 1500);
        setTimerId(id);
    };